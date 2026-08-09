import puppeteer from "puppeteer-core";
import { writeFileSync } from "node:fs";

const HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --blue: #2f6bff;
    --cyan: #22d3ee;
    --green: #10b981;
    --ink: #e8ecf8;
    --muted: #8b93a7;
  }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif;
    color: var(--ink);
    background:
      radial-gradient(900px 480px at 85% -10%, rgba(16,185,129,0.16), transparent 60%),
      radial-gradient(800px 520px at -8% 110%, rgba(47,107,255,0.22), transparent 60%),
      linear-gradient(135deg, #080b14 0%, #0b1120 55%, #0d1526 100%);
    position: relative;
  }
  .grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 60% 40%, #000 30%, transparent 100%);
  }
  .glow-a {
    position: absolute; top: -180px; left: -140px; width: 520px; height: 520px; border-radius: 50%;
    background: radial-gradient(circle, rgba(47,107,255,0.35), transparent 70%);
    filter: blur(30px);
  }
  .glow-b {
    position: absolute; bottom: -200px; right: -120px; width: 560px; height: 560px; border-radius: 50%;
    background: radial-gradient(circle, rgba(16,185,129,0.28), transparent 70%);
    filter: blur(30px);
  }
  .content { position: relative; height: 100%; padding: 56px 64px 48px; display: flex; flex-direction: column; justify-content: space-between; }

  .top { display: flex; align-items: center; gap: 14px; }
  .mark {
    width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center;
    font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 20px; letter-spacing: -0.5px;
    color: #fff;
    background: linear-gradient(135deg, #2f6bff 0%, #22d3ee 60%, #10b981 120%);
    box-shadow: 0 8px 24px rgba(47,107,255,0.45);
  }
  .brand { font-family: "Space Grotesk", sans-serif; font-weight: 600; font-size: 18px; letter-spacing: 0.04em; color: var(--ink); }
  .brand small { display: block; font-family: "Inter", sans-serif; font-weight: 500; font-size: 11.5px; letter-spacing: 0.22em; color: var(--muted); text-transform: uppercase; }

  .hero { max-width: 720px; }
  .pill {
    display: inline-flex; align-items: center; gap: 9px;
    border: 1px solid rgba(148,163,184,0.25); border-radius: 999px;
    padding: 7px 14px; font-size: 13px; font-weight: 500; color: var(--muted); letter-spacing: 0.02em;
    background: rgba(15,23,42,0.5);
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); box-shadow: 0 0 0 4px rgba(16,185,129,0.18); }
  h1 {
    font-family: "Space Grotesk", sans-serif; font-weight: 700;
    font-size: 64px; line-height: 1.02; letter-spacing: -0.03em; margin: 22px 0 0;
  }
  h1 .grad {
    background: linear-gradient(90deg, #7aa2ff 0%, #22d3ee 55%, #34d399 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  .rule { width: 72px; height: 5px; border-radius: 3px; margin: 24px 0; background: linear-gradient(90deg, #2f6bff, #10b981); }
  .tag { font-size: 22px; line-height: 1.45; color: #aeb6c7; font-weight: 400; max-width: 660px; }
  .tag b { color: #e8ecf8; font-weight: 600; }

  .bottom { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; }
  .stats { display: flex; gap: 40px; }
  .stat .num { font-family: "Space Grotesk", sans-serif; font-size: 26px; font-weight: 700; color: var(--ink); }
  .stat .lbl { font-size: 11.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-top: 3px; }
  .chips { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; max-width: 430px; }
  .chip {
    font-family: "Space Grotesk", sans-serif; font-size: 14.5px; font-weight: 500;
    padding: 8px 16px; border-radius: 10px; color: #dbe3f2;
    border: 1px solid rgba(148,163,184,0.22); background: rgba(15,23,42,0.55);
  }
  .chip.c1 { border-color: rgba(47,107,255,0.5); color: #a7c1ff; }
  .chip.c2 { border-color: rgba(34,211,238,0.45); color: #9be7f5; }
  .chip.c3 { border-color: rgba(16,185,129,0.45); color: #8de0bd; }
  .url { font-family: "Space Grotesk", sans-serif; font-size: 15px; font-weight: 600; letter-spacing: 0.05em; color: #6b7690; }
</style>
</head>
<body>
  <div class="grid"></div>
  <div class="glow-a"></div>
  <div class="glow-b"></div>
  <div class="content">
    <div class="top">
      <div class="mark">AI</div>
      <div class="brand">Ayomide Ibiteye<small>Portfolio &amp; Works</small></div>
    </div>

    <div class="hero">
      <span class="pill"><span class="dot"></span>4+ years shipping production systems</span>
      <h1>Technical Lead<br /><span class="grad">&amp; Software Architect</span></h1>
      <div class="rule"></div>
      <p class="tag">I architect and ship software <b>end to end</b>: payment infrastructure, AI systems, and multi-portal platforms across <b>fintech, health-tech, and creator products</b>.</p>
    </div>

    <div class="bottom">
      <div class="stats">
        <div class="stat"><div class="num">4+</div><div class="lbl">Years shipping</div></div>
        <div class="stat"><div class="num">3</div><div class="lbl">Sectors</div></div>
        <div class="stat"><div class="num">∞</div><div class="lbl">Ownership</div></div>
      </div>
      <div>
        <div class="chips">
          <span class="chip c1">Next.js</span>
          <span class="chip c2">TypeScript</span>
          <span class="chip c3">Node.js</span>
          <span class="chip c1">Python</span>
        </div>
        <div style="text-align:right; margin-top: 14px;" class="url">TEYEAYO.ONLINE</div>
      </div>
    </div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--force-device-scale-factor=1"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(HTML, { waitUntil: "domcontentloaded" });
await new Promise((r) => setTimeout(r, 2500));

const png = await page.screenshot({ type: "png" });
writeFileSync(new URL("../public/og-image.png", import.meta.url), png);

await browser.close();
console.log("Wrote public/og-image.png");
