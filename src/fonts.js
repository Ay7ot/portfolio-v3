import geistUrl from "./assets/fonts/GeistVariableVF.woff2";
import shadowsUrl from "./assets/fonts/ShadowsIntoLightTwo-latin.woff2";

// The web fonts are registered from script instead of @font-face in the CSS.
// With @font-face, Chrome holds back the prerendered text until the fonts
// arrive; this way the page paints at once in the fallback face from
// index.css and each font swaps in when it has loaded.
export function loadFonts() {
  const fonts = [
    new FontFace("geist", `url(${geistUrl}) format("woff2")`, {
      weight: "100 900",
      display: "swap",
    }),
    new FontFace("Shadows Into Light Two", `url(${shadowsUrl}) format("woff2")`, {
      display: "swap",
    }),
  ];
  for (const font of fonts) {
    font.load().then(() => document.fonts.add(font), () => {});
  }
}
