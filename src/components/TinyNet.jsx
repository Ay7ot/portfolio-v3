import { useCallback, useEffect, useRef, useState } from "react";

// A small, playful neural network that "decides" what to do next. A signal
// travels one random path from input to output, then the output node shows a
// random decision. It runs on its own while on screen, and a tap reruns it.
// Pure inline SVG and CSS, so it costs no image request and no library.

const LAYERS = [3, 4, 4, 3];
const WIDTH = 300;
const HEIGHT = 220;
const PAD_X = 36;
const PAD_Y = 34;
const STEP_MS = 260;
const HOLD_MS = 2200;

const DECISIONS = [
  "ship it",
  "write one more test",
  "make coffee first",
  "refactor it later",
  "read the logs",
  "rename that variable",
  "ask the user",
  "deploy on Friday? no.",
  "sleep on it",
  "check the metrics",
  "draw the diagram",
  "pair on it",
  "delete the dead code",
  "add a loading state",
];

// The first render is fixed so the prerendered HTML matches hydration.
const INITIAL = { path: [1, 2, 1, 1], step: LAYERS.length, decision: 0, run: 0 };

const nodes = LAYERS.map((count, layer) => {
  const x = PAD_X + (layer * (WIDTH - PAD_X * 2)) / (LAYERS.length - 1);
  const gap = (HEIGHT - PAD_Y * 2) / 3;
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

export default function TinyNet() {
  const [state, setState] = useState(INITIAL);
  const timer = useRef(null);
  const visible = useRef(false);
  const reduced = useRef(false);

  const fire = useCallback((auto) => {
    clearTimeout(timer.current);
    if (auto && !visible.current) return;
    setState((prev) => {
      let decision = randomInt(DECISIONS.length);
      if (decision === prev.decision) decision = (decision + 1) % DECISIONS.length;
      return {
        path: LAYERS.map((n) => randomInt(n)),
        step: reduced.current ? LAYERS.length : 0,
        decision,
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

  const { path, step, decision, run } = state;
  const done = step >= LAYERS.length;

  return (
    <button
      ref={root}
      type="button"
      onClick={() => fire(false)}
      aria-label="Run the tiny neural network again"
      className="tiny-net group block w-[250px] md:w-[300px] border-standard border-[1px] rounded-[1.25rem] text-left overflow-hidden bg-glass-strong transition-transform duration-200 ease-out active:scale-[0.98]"
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
            const lit = step >= layer && path[layer] === i;
            return (
              <circle
                key={`${layer}-${i}`}
                cx={n.x}
                cy={n.y}
                r={lit ? 9 : 7}
                className={lit ? "tiny-net-node is-lit" : "tiny-net-node"}
              />
            );
          })
        )}
      </svg>
      <span className="block bg-solid px-4 py-3 border-t-[1px] border-standard">
        <span className="block text-xs font-medium text-faint">
          A tiny neural net decides what&apos;s next
        </span>
        <span
          className={`block font-shadows text-[1.375rem] leading-8 text-primary transition-opacity duration-300 ${
            done ? "opacity-100" : "opacity-30"
          }`}
        >
          {done ? DECISIONS[decision] : "thinking…"}
        </span>
        <span className="block text-xs text-faint mt-1 group-hover:text-muted transition-colors duration-200">
          Tap to rerun
        </span>
      </span>
    </button>
  );
}
