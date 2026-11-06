import { useCallback, useEffect, useRef, useState } from "react";
import projectsData from "../assets/projects.json";
import { INDUSTRIES, industryOf } from "./industries";

// A small, playful neural network that picks one of the projects on this
// page. A signal travels a random path through the hidden layers and lands on
// the output node for the project's industry, coloured like the hero's
// industry pills, and the card below shows the project. It runs on its own while on
// screen and a tap reruns it. Pure inline SVG and CSS, no library.

// Only projects with a live site in one of the industries, so the card
// always ends in a link and the signal always has an output node to land on.
const GROUPS = INDUSTRIES;
const PROJECTS = projectsData
  .map((p) => ({ ...p, group: industryOf(p.sector) }))
  .filter((p) => p.live && p.group !== -1);

const LAYERS = [3, 5, 5, GROUPS.length];
const WIDTH = 520;
const HEIGHT = 270;
const PAD_X = 40;
const PAD_Y = 22;
const STEP_MS = 260;
const HOLD_MS = 3200;

// The first render is fixed so the prerendered HTML matches hydration.
const INITIAL = {
  path: [1, 2, 1, PROJECTS[0].group],
  step: LAYERS.length,
  pick: 0,
  run: 0,
};

const nodes = LAYERS.map((count, layer) => {
  const x = PAD_X + (layer * (WIDTH - PAD_X * 2)) / (LAYERS.length - 1);
  const gap = (HEIGHT - PAD_Y * 2) / (Math.max(...LAYERS) - 1);
  const top = HEIGHT / 2 - ((count - 1) * gap) / 2;
  return Array.from({ length: count }, (_, i) => ({ x, y: top + i * gap }));
});

// Every wire between neighbouring layers, drawn as one path to keep the
// prerendered HTML small.
let WIRES = "";
for (let layer = 0; layer < LAYERS.length - 1; layer++) {
  nodes[layer].forEach((a) => {
    nodes[layer + 1].forEach((b) => {
      WIRES += `M${a.x} ${a.y}L${b.x} ${b.y}`;
    });
  });
}

function randomInt(n) {
  return Math.floor(Math.random() * n);
}

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="transition-transform duration-200 ease group-hover:translate-x-1"
  >
    <path
      d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663"
      stroke="#7D89B0"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TinyNet() {
  const [state, setState] = useState(INITIAL);
  const timer = useRef(null);
  const visible = useRef(false);
  const reduced = useRef(false);

  const fire = useCallback((auto) => {
    clearTimeout(timer.current);
    if (auto && !visible.current) return;
    setState((prev) => {
      let pick = randomInt(PROJECTS.length);
      if (pick === prev.pick) pick = (pick + 1) % PROJECTS.length;
      const path = LAYERS.slice(0, -1).map((n) => randomInt(n));
      path.push(PROJECTS[pick].group);
      return {
        path,
        step: reduced.current ? LAYERS.length : 0,
        pick,
        run: prev.run + 1,
      };
    });
  }, []);

  // Advance the signal one layer at a time, then hold and fire again.
  useEffect(() => {
    if (state.run === 0) return undefined;
    if (state.step < LAYERS.length) {
      timer.current = setTimeout(
        () => setState((s) => ({ ...s, step: s.step + 1 })),
        STEP_MS
      );
    } else if (!reduced.current) {
      timer.current = setTimeout(() => fire(true), HOLD_MS);
    }
    return () => clearTimeout(timer.current);
  }, [state, fire]);

  const root = useRef(null);
  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced.current || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = visible.current;
        visible.current = entry.isIntersecting;
        if (entry.isIntersecting && !wasVisible) fire(true);
        if (!entry.isIntersecting) clearTimeout(timer.current);
      },
      { threshold: 0.4 }
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, [fire]);

  const { path, step, pick, run } = state;
  const done = step >= LAYERS.length;
  const project = PROJECTS[pick];
  const group = GROUPS[project.group];

  return (
    <div
      ref={root}
      className="tiny-net w-full border-standard border-[1px] rounded-[20px] overflow-hidden bg-glass-strong"
      style={{ "--net-hot": group.color }}
    >
      <button
        type="button"
        onClick={() => fire(false)}
        aria-label="Pick another project"
        className="group block w-full text-left transition-transform duration-200 ease-out active:scale-[0.99]"
      >
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          width={WIDTH}
          height={HEIGHT}
          className="block w-full h-auto"
          aria-hidden="true"
        >
          <path d={WIRES} className="tiny-net-edge" fill="none" />
          {LAYERS.slice(0, -1).map((_, layer) => {
            if (step <= layer) return null;
            const a = nodes[layer][path[layer]];
            const b = nodes[layer + 1][path[layer + 1]];
            return (
              <line
                key={`hot-${run}-${layer}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                pathLength="1"
                className="tiny-net-signal"
              />
            );
          })}
          {nodes.map((layerNodes, layer) =>
            layerNodes.map((n, i) => {
              const isOutput = layer === LAYERS.length - 1;
              const lit = step >= layer && path[layer] === i;
              return (
                <circle
                  key={`${layer}-${i}`}
                  cx={n.x}
                  cy={n.y}
                  r={lit ? 10 : 7}
                  className={`tiny-net-node${lit ? " is-lit" : ""}${
                    isOutput ? " is-output" : ""
                  }`}
                  style={isOutput ? { "--node-color": GROUPS[i].color } : undefined}
                />
              );
            })
          )}
        </svg>
      </button>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-3 pb-3 text-xs font-medium text-faint">
        {GROUPS.map((g) => (
          <span key={g.label} className="flex items-center gap-[6px]">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: g.color }}
            />
            {g.label}
          </span>
        ))}
      </div>
      <div className="bg-solid px-4 py-4 border-t-[1px] border-standard flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-faint">
              A tiny neural net picks one of my projects
            </p>
            <p
              className={`font-shadows text-[1.75rem] leading-9 text-primary transition-opacity duration-300 ${
                done ? "opacity-100" : "opacity-30"
              }`}
              aria-live="polite"
            >
              {done ? project.name : "thinking…"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => fire(false)}
            className="shrink-0 text-xs text-faint hover:text-primary transition-colors duration-200 mt-1"
          >
            Tap to rerun
          </button>
        </div>
        <div className="flex flex-wrap gap-[6px] items-center">
          {[project.sector, project.type, project.year].map((t) => (
            <span
              key={t}
              className="py-[2px] px-2 rounded-[1rem] text-white text-xs font-medium leading-[18px]"
              style={{ background: group.color }}
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group border-muted border-[1px] px-4 py-[10px] rounded-lg flex items-center justify-between w-full transition-colors duration-200 ease hover:border-accent-color"
        >
          <span className="text-muted text-sm font-medium leading-[1.25rem] transition-colors duration-200 ease group-hover:text-primary">
            View {project.name}
          </span>
          <Arrow />
        </a>
      </div>
    </div>
  );
}
