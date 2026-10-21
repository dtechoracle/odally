"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LandingSections } from "./LandingSections";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_125119_4963ddd4-c287-4044-b014-b68943cdd8bd.mp4";
const POSTER_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_125039_45a71f04-36dd-4620-99d8-7526316d439e.png";

const pageStyles = `
@import url("https://fonts.googleapis.com/css2?family=Figtree:wght@100..900&display=block");

:root {
  --font-sans: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  --fs-display: 55.7px;
  --fs-title: calc(var(--dp) * 20);
  --fs-heading: calc(var(--dp) * 17);
  --fs-body: 16.1px;
  --fs-eyebrow: calc(var(--dp) * 15.8);
  --fs-ui: 15px;
  --fs-meta: calc(var(--dp) * 14.3);
  --fs-item: calc(var(--dp) * 12.9);
  --fs-caption: calc(var(--dp) * 12.2);
  --fs-tab: calc(var(--dp) * 12.1);
  --fs-sup: 11.4px;
  --fs-wordmark: 17.1px;
  --fw-light: 388;
  --fw-regular: 470;
  --fw-medium: 500;
  --fw-semibold: 511;
  --fw-bold: 577;
  --fw-black: 783;
  --tr-display: -0.0572em;
  --tr-title: -0.0570em;
  --tr-heading: -0.0200em;
  --tr-body: -0.0475em;
  --tr-eyebrow: -0.0293em;
  --tr-ui: -0.0080em;
  --tr-cta: -0.0200em;
  --tr-meta: -0.0447em;
  --tr-item: -0.0287em;
  --tr-caption: -0.0295em;
  --tr-tab: -0.0398em;
  --tr-wordmark: -0.0075em;
  --lh-display: 61px;
  --lh-body: 20px;
  --lh-flat: 1;
  --lh-display-ratio: 1.1;
  --lh-body-ratio: 1.45;
  --c-ink: #000000;
  --c-ink-soft: #2e2e2e;
  --c-muted: #b8b8b8;
  --c-on-dark: #ffffff;
  --c-on-light: #000000;
  --c-surface-nav: #000000;
  --c-surface-card: #f2f2f2;
  --c-surface-panel: #ffffff;
  --c-border-row: #ededed;
  --c-accent: #38c6ec;
  --u: 548px;
  --dp: calc(var(--u) / 548);
  --ease-reveal: cubic-bezier(.22, 1, .36, 1);
  --ease-settle: cubic-bezier(.16, 1, .30, 1);
  --dur-nav: .62s;
  --dur-navitem: .5s;
  --dur-head: .92s;
  --dur-copy: .62s;
  --dur-cta: .58s;
  --dur-panel: .94s;
  --dsk-card-s: 1;
  --dsk-band-dy: 0px;
  --dsk-hero-dy: 0px;
}

*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: #fff; overflow-x: hidden; }
body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}
#viewport { position: relative; width: 100%; height: 100vh; overflow: hidden; background: #fff; }
#stage {
  position: absolute; top: 0; left: 0; width: 1290px; height: 860px;
  transform-origin: 0 0; background: #fff;
}
.t-display { font-size: var(--fs-display); font-weight: var(--fw-regular); letter-spacing: var(--tr-display); line-height: var(--lh-display); color: var(--c-ink); }
.t-body { font-size: var(--fs-body); font-weight: var(--fw-regular); letter-spacing: var(--tr-body); line-height: var(--lh-body); color: var(--c-ink); }
.t-title { font-size: var(--fs-title); font-weight: var(--fw-light); letter-spacing: var(--tr-title); line-height: var(--lh-flat); color: var(--c-ink); }
.t-heading { font-size: var(--fs-heading); font-weight: var(--fw-semibold); letter-spacing: var(--tr-heading); line-height: var(--lh-flat); color: var(--c-ink); }
.t-eyebrow { font-size: var(--fs-eyebrow); font-weight: var(--fw-light); letter-spacing: var(--tr-eyebrow); line-height: var(--lh-flat); color: var(--c-ink); }
.t-meta { font-size: var(--fs-meta); font-weight: var(--fw-light); letter-spacing: var(--tr-meta); line-height: var(--lh-flat); color: var(--c-muted); }
.t-item { font-size: var(--fs-item); font-weight: var(--fw-medium); letter-spacing: var(--tr-item); line-height: var(--lh-flat); color: var(--c-ink); }
.t-caption { font-size: var(--fs-caption); font-weight: var(--fw-light); letter-spacing: var(--tr-caption); line-height: var(--lh-flat); color: var(--c-muted); }
.navmenu__link { font-size: var(--fs-ui); font-weight: var(--fw-medium); letter-spacing: var(--tr-ui); line-height: var(--lh-flat); color: var(--c-on-dark); text-decoration: none; }
.navmenu__cta { font-size: var(--fs-ui); font-weight: var(--fw-bold); letter-spacing: var(--tr-cta); line-height: var(--lh-flat); color: var(--c-on-light); text-decoration: none; }

.nav {
  position: absolute; left: calc(50% - 439px); top: 43px; width: 880px; height: 52px;
  border-radius: 26px; background: var(--c-surface-nav); z-index: 20;
}
.logo { position: absolute; left: 9px; top: 13px; width: 26px; height: 25px; flex: none; }
.wordmark { position: absolute; left: 40px; top: 2px; height: 52px; display: flex; align-items: center; color: #fff; font-size: 18px; font-weight: 800; letter-spacing: -0.01em; white-space: nowrap; }
.wordmark sup { position: relative; top: -5px; left: 1px; font-size: var(--fs-sup); font-weight: var(--fw-black); }
.nav a.link { position: absolute; top: 0; height: 52px; display: flex; align-items: center; transform: translateX(-50%); color: #fff; font-size: var(--fs-ui); font-weight: var(--fw-medium); letter-spacing: var(--tr-ui); line-height: 1; text-decoration: none; white-space: nowrap; }
.link.l1 { left: 279px; } .link.l2 { left: 386.5px; } .link.l3 { left: 483px; } .link.l4 { left: 571px; }
.btn { position: absolute; border: 0; border-radius: 17px; height: 34px; display: flex; align-items: center; justify-content: center; font-family: inherit; font-size: var(--fs-ui); letter-spacing: var(--tr-cta); line-height: 1; white-space: nowrap; text-decoration: none; cursor: pointer; }
.btn--nav { left: 718px; top: 9px; width: 153px; background: #fff; color: #000; font-weight: var(--fw-bold); }
.btn--hero { left: calc(50% - 64px); top: calc(388px + var(--dsk-hero-dy)); width: 129px; background: #000; color: #fff; font-weight: var(--fw-medium); }
.burger, .navmenu { display: none; }
.hero-h1 { position: absolute; left: 0; right: 0; top: calc(203px + var(--dsk-hero-dy)); margin: 0; text-align: center; white-space: pre-line; }
.hero-sub { position: absolute; left: 0; right: 0; top: calc(333px + var(--dsk-hero-dy)); margin: 0; text-align: center; white-space: pre-line; }
.band { position: absolute; left: 0; right: 0; top: calc(473px + var(--dsk-band-dy)); bottom: 0; overflow: hidden; border-radius: 0; background-color: #0db5ed; }
.band__video { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.card {
  position: absolute; left: calc(50% - 273px); top: calc(549px + var(--dsk-band-dy));
  width: var(--u); height: calc(var(--dp) * 340); transform: scale(var(--dsk-card-s)); transform-origin: top center;
  overflow: hidden; border-radius: calc(var(--dp) * 16); background: var(--c-surface-card);
  box-shadow: 0 0 0 1px rgba(255,255,255,.6), 0 0 calc(var(--dp) * 9) calc(var(--dp) * 3) rgba(255,255,255,.5), 0 calc(var(--dp) * 22) calc(var(--dp) * 64) rgba(2,72,105,.16);
}
.eyebrow { position: absolute; left: calc(var(--dp) * 19); top: calc(var(--dp) * 21); white-space: nowrap; }
.cardtitle { position: absolute; left: calc(var(--dp) * 18); top: calc(var(--dp) * 47); white-space: nowrap; }
.meta { position: absolute; left: calc(var(--dp) * 15); top: calc(var(--dp) * 81); height: calc(var(--dp) * 28); display: flex; align-items: center; white-space: nowrap; }
.avatars { position: absolute; left: 0; top: 0; height: calc(var(--dp) * 28); width: calc(var(--dp) * 48); }
.av { position: absolute; top: 0; width: calc(var(--dp) * 28); height: calc(var(--dp) * 28); border: max(1px, calc(var(--dp) * 2)) solid #fff; border-radius: 50%; background-size: cover; background-position: center; }
.av1 { left: 0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%238d6a52'/%3E%3Ccircle cx='20' cy='16' r='9' fill='%23d9a882'/%3E%3Cellipse cx='20' cy='38' rx='14' ry='13' fill='%233c3a44'/%3E%3C/svg%3E"); }
.av2 { left: calc(var(--dp) * 11); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23b9b3ad'/%3E%3Ccircle cx='20' cy='15' r='9' fill='%23e8c4a0'/%3E%3Cellipse cx='20' cy='38' rx='14' ry='13' fill='%23786f66'/%3E%3C/svg%3E"); }
.av3 { left: calc(var(--dp) * 22); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23a08b7a'/%3E%3Ccircle cx='20' cy='16' r='9' fill='%23dda882'/%3E%3Cellipse cx='20' cy='38' rx='14' ry='13' fill='%236b4f3f'/%3E%3C/svg%3E"); }
.clockicon { position: absolute; left: calc(var(--dp) * 66); top: calc(var(--dp) * 5); width: calc(var(--dp) * 14); height: calc(var(--dp) * 14); }
.metatext { position: absolute; left: calc(var(--dp) * 89); top: calc(var(--dp) * -2); height: calc(var(--dp) * 28); display: flex; align-items: center; white-space: nowrap; }
.sep { padding: 0 calc(var(--dp) * 10); }
.tabs { position: absolute; left: 0; right: 0; top: calc(var(--dp) * 129); height: calc(var(--dp) * 30); }
.tab { position: absolute; top: 0; height: calc(var(--dp) * 30); display: flex; align-items: center; color: var(--c-muted); font-size: var(--fs-tab); font-weight: var(--fw-light); letter-spacing: var(--tr-tab); line-height: 1; white-space: nowrap; }
.tab.is-active { left: calc(var(--dp) * 19); padding: 0 calc(var(--dp) * 18); color: var(--c-ink-soft); background: #fff; border-radius: calc(var(--dp) * 8) calc(var(--dp) * 8) 0 0; font-weight: var(--fw-medium); }
.tab.is-active::after { position: absolute; left: calc(var(--dp) * 12); right: calc(var(--dp) * 13); bottom: 0; height: max(1px, calc(var(--dp) * 2)); background: var(--c-accent); content: ""; }
.tab.t2 { left: calc(var(--dp) * 148); } .tab.t3 { left: calc(var(--dp) * 239); } .tab.t4 { left: calc(var(--dp) * 341); }
.panel { position: absolute; left: calc(var(--dp) * 19); top: calc(var(--dp) * 160); width: calc(var(--dp) * 511); height: calc(var(--dp) * 169); border-radius: 0 calc(var(--dp) * 8) calc(var(--dp) * 8) calc(var(--dp) * 8); background: #fff; }
.panel__heading { position: absolute; left: calc(var(--dp) * 12); top: calc(var(--dp) * 10); white-space: nowrap; }
.row { position: absolute; left: calc(var(--dp) * 13); width: calc(var(--dp) * 485); height: calc(var(--dp) * 46); border: 1px solid var(--c-border-row); border-radius: calc(var(--dp) * 8); background: #fff; box-shadow: 0 1px calc(var(--dp) * 2) rgba(0,0,0,.03); }
.row1 { top: calc(var(--dp) * 36); } .row2 { top: calc(var(--dp) * 87); }
.dot { position: absolute; left: calc(var(--dp) * 7); top: calc(var(--dp) * 7); width: calc(var(--dp) * 15); height: calc(var(--dp) * 15); }
.rowtitle { position: absolute; left: calc(var(--dp) * 33); top: calc(var(--dp) * 10); white-space: nowrap; }
.rowowner { position: absolute; left: calc(var(--dp) * 33); top: calc(var(--dp) * 27); white-space: nowrap; }

@keyframes enter-wipe { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0% 0); } }
@keyframes enter-drop { from { opacity: 0; translate: 0 -10px; } to { opacity: 1; translate: 0 0; } }
@keyframes enter-rise14 { from { opacity: 0; translate: 0 14px; } to { opacity: 1; translate: 0 0; } }
@keyframes enter-rise22 { from { opacity: 0; translate: 0 22px; } to { opacity: 1; translate: 0 0; } }
@keyframes enter-fade { from { opacity: 0; } to { opacity: 1; } }
html[data-enter="pending"] .hero-h1 { clip-path: inset(0 0 100% 0); }
html[data-enter="pending"] .nav { opacity: 0; translate: 0 -10px; }
html[data-enter="pending"] .hero-sub, html[data-enter="pending"] .btn--hero { opacity: 0; translate: 0 14px; }
html[data-enter="pending"] .card { opacity: 0; translate: 0 22px; }
html[data-enter="pending"] .logo, html[data-enter="pending"] .wordmark, html[data-enter="pending"] .nav a.link, html[data-enter="pending"] .btn--nav { opacity: 0; }
html[data-enter="run"] .nav { animation: enter-drop var(--dur-nav) var(--ease-settle) .05s both; }
html[data-enter="run"] .logo { animation: enter-fade var(--dur-navitem) var(--ease-settle) .18s both; }
html[data-enter="run"] .wordmark { animation: enter-fade .22s var(--ease-settle) .18s both; }
html[data-enter="run"] .link.l1 { animation: enter-fade .26s var(--ease-settle) .22s both; }
html[data-enter="run"] .link.l2 { animation: enter-fade .30s var(--ease-settle) .26s both; }
html[data-enter="run"] .link.l3 { animation: enter-fade .34s var(--ease-settle) .30s both; }
html[data-enter="run"] .link.l4 { animation: enter-fade .38s var(--ease-settle) .34s both; }
html[data-enter="run"] .btn--nav { animation: enter-fade .42s var(--ease-settle) .38s both; }
html[data-enter="run"] .hero-h1 { animation: enter-wipe var(--dur-head) var(--ease-reveal) .30s both; }
html[data-enter="run"] .hero-sub { animation: enter-rise14 var(--dur-copy) var(--ease-settle) .62s both; }
html[data-enter="run"] .btn--hero { animation: enter-rise14 var(--dur-cta) var(--ease-settle) .78s both; }
html[data-enter="run"] .card { animation: enter-rise22 var(--dur-panel) var(--ease-settle) .88s both; }

@media (max-width: 939.98px), (scripting: none) {
  :root {
    --page-margin: clamp(16px, 4vw, 24px);
  }
  html, body { overflow-x: hidden; overflow-y: auto; }
  #viewport { position: relative; width: 100%; height: auto; min-height: 100vh; overflow: visible; }
  #stage {
    position: relative; width: 100%; height: auto; min-height: auto; transform: none !important;
    display: flex; flex-direction: column; align-items: center;
    padding: clamp(16px, 4vw, 24px) var(--page-margin) 60px;
  }
  .nav {
    position: relative; left: auto; top: auto; width: 100%; max-width: 820px; height: 52px; margin: 0 auto;
    display: flex; align-items: center; border-radius: 26px; z-index: 50; padding: 0 12px;
  }
  .nav a.link, .btn--nav { display: none; }
  .logo { position: static; margin-left: 2px; }
  .wordmark { position: static; height: auto; margin-left: 8px; font-size: 18px; font-weight: 800; }
  .burger {
    display: flex; flex-direction: column; justify-content: center; gap: 5px; width: 34px; height: 34px;
    margin-left: auto; margin-right: 2px; padding: 0 7px; border: 0; border-radius: 17px; background: none;
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .burger:focus-visible { outline: 2px solid var(--c-accent); outline-offset: 2px; }
  .burger__bar { display: block; width: 100%; height: 2px; border-radius: 1px; background: #fff; transition: transform .22s ease, opacity .22s ease; }
  .nav.is-open .burger__bar:first-child { transform: translateY(3.5px) rotate(45deg); }
  .nav.is-open .burger__bar:last-child { transform: translateY(-3.5px) rotate(-45deg); }
  .navmenu {
    position: absolute; top: calc(100% + 8px); right: 0; min-width: 216px; padding: 10px; display: flex;
    flex-direction: column; border-radius: 20px; background: #000; opacity: 0; transform: translateY(-6px);
    transition: opacity .2s ease, transform .2s ease; pointer-events: none; z-index: 60;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  }
  .navmenu[hidden] { display: flex; }
  .nav.is-open .navmenu { opacity: 1; transform: none; pointer-events: auto; }
  .navmenu__link { padding: 11px 14px; border-radius: 12px; color: #fff; text-decoration: none; font-size: 15px; font-weight: 500; }
  .navmenu__link:hover, .navmenu__link:focus-visible { background: rgba(255,255,255,.12); }
  .navmenu__cta { margin-top: 6px; padding: 11px 14px; border-radius: 17px; background: #fff; color: #000; text-align: center; font-weight: 700; text-decoration: none; font-size: 15px; }
  .hero-h1 {
    position: static; max-width: min(580px, 100%); margin: clamp(32px, 6vh, 52px) auto 0;
    font-size: clamp(34px, 7.8vw, 50px); line-height: 1.15; text-align: center; white-space: normal; text-wrap: balance;
  }
  .hero-sub {
    position: static; max-width: min(460px, 100%); margin: 16px auto 0;
    font-size: clamp(15px, 3.8vw, 17px); line-height: 1.5; letter-spacing: -0.02em; text-align: center; white-space: normal; text-wrap: balance; color: #475569;
  }
  .btn--hero {
    position: static; margin: 24px auto 0; width: 140px; height: 44px; border-radius: 22px;
    display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 600;
  }
  .band {
    position: relative; left: auto; right: auto; top: auto; bottom: auto;
    width: 100%; max-width: 560px; height: 210px; margin: 36px auto 0;
    border-radius: 20px; overflow: hidden; background-color: #0db5ed;
  }
  .card {
    position: relative; left: auto; top: auto; width: 100%; max-width: 500px;
    margin: -48px auto 0; transform: none !important; height: auto;
    border-radius: 20px; background: #f8fafc; padding: 18px;
    box-shadow: 0 12px 32px rgba(2,72,105,0.12), 0 0 0 1px rgba(0,0,0,0.06);
    display: flex; flex-direction: column; gap: 10px;
  }
  .eyebrow { position: static; font-size: 12px; font-weight: 500; color: #64748b; white-space: normal; }
  .cardtitle { position: static; font-size: 19px; font-weight: 600; color: #0f172a; white-space: normal; }
  .meta { position: static; height: auto; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .avatars { position: relative; width: 50px; height: 26px; }
  .av { position: absolute; top: 0; width: 26px; height: 26px; border: 2px solid #fff; border-radius: 50%; }
  .av1 { left: 0; } .av2 { left: 12px; } .av3 { left: 24px; }
  .clockicon { position: static; width: 14px; height: 14px; }
  .metatext { position: static; height: auto; font-size: 12px; color: #64748b; white-space: normal; }
  .tabs { position: static; height: auto; display: flex; gap: 6px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; overflow-x: auto; }
  .tab { position: static; height: auto; font-size: 13px; padding: 4px 10px; border-radius: 6px; color: #64748b; }
  .tab.is-active { background: #fff; color: #0f172a; font-weight: 600; border: 1px solid #e2e8f0; }
  .tab.is-active::after { display: none; }
  .panel { position: static; width: 100%; height: auto; background: #fff; border-radius: 12px; padding: 12px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 8px; }
  .panel__heading { position: static; font-size: 13px; font-weight: 600; color: #0f172a; white-space: normal; margin-bottom: 2px; }
  .row { position: static; width: 100%; height: auto; min-height: 44px; border: 1px solid #f1f5f9; background: #f8fafc; border-radius: 8px; padding: 8px 10px; display: flex; align-items: center; gap: 8px; }
  .dot { position: static; width: 14px; height: 14px; flex-shrink: 0; }
  .rowtitle { position: static; font-size: 12px; font-weight: 500; color: #1e293b; white-space: normal; }
  .rowowner { position: static; font-size: 11px; color: #64748b; margin-left: auto; white-space: nowrap; }
}
@media (max-width: 479.98px) { .hero-h1 { white-space: normal; text-wrap: balance; } }
@media (max-height: 520px) {
  :root { --band-h: calc(var(--card-h) + 2 * var(--card-inset)); }
  html, body { height: auto; min-height: 100%; overflow: visible; }
  #viewport { position: static; overflow: visible; }
  #stage { height: auto; min-height: 100dvh; }
}
@media (scripting: none) { .nav:hover .navmenu, .nav:focus-within .navmenu { opacity: 1; transform: none; pointer-events: auto; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .navmenu, .burger__bar { transition: none; }
}
`;

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const animationFinished = useRef(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) root.setAttribute("data-enter", "pending");

    let started = false;
    let fallbackTimer = 0;
    let finishTimer = 0;
    let firstFrame = 0;
    let secondFrame = 0;
    const finishAnimation = () => {
      if (animationFinished.current) return;
      animationFinished.current = true;
      root.setAttribute("data-enter", "done");
      window.clearTimeout(finishTimer);
    };
    const startAnimation = () => {
      if (started || reducedMotion) return;
      started = true;
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => root.setAttribute("data-enter", "run"));
      });
      finishTimer = window.setTimeout(finishAnimation, 3000);
    };
    if (!reducedMotion) {
      fallbackTimer = window.setTimeout(startAnimation, 1200);
      void document.fonts.ready.then(() => {
        window.clearTimeout(fallbackTimer);
        startAnimation();
      });
    }

    const fitStage = () => {
      const stage = stageRef.current;
      if (!stage) return;
      if (window.innerWidth < 940) {
        stage.style.width = "";
        stage.style.height = "";
        stage.style.transform = "";
        stage.style.removeProperty("--dsk-card-s");
        stage.style.removeProperty("--dsk-band-dy");
        stage.style.removeProperty("--dsk-hero-dy");
        setMenuOpen(false);
        return;
      }
      const vw = window.innerWidth;
      const vh = window.visualViewport?.height ?? window.innerHeight;
      const scale = Math.min(vh / 860, vw / 960);
      const width = vw / scale;
      const height = vh / scale;
      const cardScaleMax = Math.min(880, 0.8 * width) / 548;
      const cardScale = Math.max(1, Math.min((height - 549) / 340, cardScaleMax));
      const bandShift = Math.max(0, height - 549 - 340 * cardScale);
      stage.style.width = `${width}px`;
      stage.style.height = `${height}px`;
      stage.style.transform = `scale(${scale})`;
      stage.style.setProperty("--dsk-card-s", String(cardScale));
      stage.style.setProperty("--dsk-band-dy", `${bandShift}px`);
      stage.style.setProperty("--dsk-hero-dy", `${0.55 * bandShift}px`);
      setMenuOpen(false);
    };
    const outsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setMenuOpen(false);
    };
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && navRef.current?.classList.contains("is-open")) {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    const card = document.querySelector(".card");
    const cardEnded = () => finishAnimation();
    window.addEventListener("resize", fitStage);
    window.addEventListener("orientationchange", fitStage);
    window.addEventListener("pageshow", fitStage);
    window.visualViewport?.addEventListener("resize", fitStage);
    document.addEventListener("click", outsideClick);
    document.addEventListener("keydown", keydown);
    card?.addEventListener("animationend", cardEnded, { once: true });
    fitStage();
    void document.fonts.ready.then(fitStage);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(finishTimer);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.removeEventListener("resize", fitStage);
      window.removeEventListener("orientationchange", fitStage);
      window.removeEventListener("pageshow", fitStage);
      window.visualViewport?.removeEventListener("resize", fitStage);
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("keydown", keydown);
      card?.removeEventListener("animationend", cardEnded);
    };
  }, []);

  const onCardAnimationEnd = () => {
    if (document.documentElement.dataset.enter === "run") {
      document.documentElement.dataset.enter = "done";
    }
  };

  return (
    <>
      <style>{pageStyles}</style>
      <main className="min-h-screen bg-[#ffffff] text-[#000000]">
        <div id="viewport">
          <section id="stage" ref={stageRef} aria-label="Odally">
            <nav className={`nav${menuOpen ? " is-open" : ""}`} ref={navRef} aria-label="Main navigation">
            <svg className="logo" viewBox="0 0 26 25" role="img" aria-label="Odally">
              <rect x=".5" y=".5" width="25" height="24" rx="7" fill="#38c6ec" />
              <ellipse cx="13" cy="12.5" rx="5.5" ry="6" stroke="white" strokeWidth="2.2" fill="none" />
            </svg>
            <span className="wordmark">Odally</span>
            <a className="link l1" href="#product">Product</a>
            <a className="link l2" href="#how-it-works">How it works</a>
            <a className="link l3" href="#pricing">Pricing</a>
            <a className="link l4" href="#faq">FAQ</a>
            <a className="btn btn--nav" href="/dashboard">Get Started</a>
            <button
              className="burger"
              ref={burgerRef}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
              onClick={(event) => { event.stopPropagation(); setMenuOpen((open) => !open); }}
            >
              <span className="burger__bar" /><span className="burger__bar" />
            </button>
            <div id="nav-menu" className="navmenu" hidden={!menuOpen}>
              <a className="navmenu__link" href="#product" onClick={closeMenu}>Product</a>
              <a className="navmenu__link" href="#how-it-works" onClick={closeMenu}>How it works</a>
              <a className="navmenu__link" href="#pricing" onClick={closeMenu}>Pricing</a>
              <a className="navmenu__link" href="#faq" onClick={closeMenu}>FAQ</a>
              <a className="navmenu__cta" href="/dashboard" onClick={closeMenu}>Get Started</a>
            </div>
          </nav>

          <h1 className="hero-h1 t-display">Let your meetings{`\n`}run themselves</h1>
          <p className="hero-sub t-body">Schedule a meeting, choose what to present, and let your AI agent show up for you.</p>
          <a className="btn btn--hero" href="/dashboard">Get Started</a>

          <div className="band" role="presentation">
            <video className="band__video" autoPlay muted loop playsInline poster={POSTER_URL}>
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          </div>

          <article className="card" aria-label="Scheduled meeting preview" onAnimationEnd={onCardAnimationEnd}>
            <div className="eyebrow t-eyebrow"># Product Demo · Google Meet</div>
            <div className="cardtitle t-title">Client Presentation</div>
            <div className="meta t-meta">
              <div className="avatars" aria-hidden="true"><span className="av av1" /><span className="av av2" /><span className="av av3" /></div>
              <svg className="clockicon" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="7" fill="#d9d9d9" /><path d="M7 3.6v3.6l2.3 1.4" fill="none" stroke="#f2f2f2" strokeWidth="1.3" strokeLinecap="round" /></svg>
              <span className="metatext">Today at 10:30 a.m.<span className="sep">&bull;</span>45 mins<span className="sep">&bull;</span>Scheduled</span>
            </div>
            <div className="tabs" aria-label="Meeting preview tabs">
              <span className="tab is-active">Meeting</span><span className="tab t2">Presentation</span><span className="tab t3">Settings</span><span className="tab t4">Activity</span>
            </div>
            <section className="panel" aria-label="Meeting details">
              <div className="panel__heading t-heading">Meeting Details</div>
              <div className="row row1">
                <svg className="dot" viewBox="0 0 15 15" aria-hidden="true"><circle cx="7.5" cy="7.5" r="7.5" fill="#2a9a30" /><path d="M4.1 7.15 6.05 9.05 9.9 5.2" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="rowtitle t-item">AI agent will join automatically</div>
                <div className="rowowner t-caption">Google Meet</div>
              </div>
              <div className="row row2">
                <svg className="dot" viewBox="0 0 15 15" aria-hidden="true"><circle cx="7.5" cy="7.5" r="7.5" fill="#f6a825" /><path d="M5.8 5.5c.1-1 1-1.6 2-1.4.8.1 1.3.7 1.3 1.4 0 .8-.5 1.1-1.1 1.6-.6.4-.8.7-.8 1.4" fill="none" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" /><circle cx="7" cy="10.05" r=".78" fill="#fff" /></svg>
                <div className="rowtitle t-item">Product Demo.mp4</div>
                <div className="rowowner t-caption">Presentation video</div>
              </div>
            </section>
          </article>
        </section>
        </div>
        <LandingSections />
      </main>
    </>
  );
}