import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used only at build time by scripts/prerender.mjs to bake the first render
// into dist/index.html, so the page paints before the JS bundle has loaded.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
