"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OdallyLogoProps extends React.SVGProps<SVGSVGElement> {
  animated?: boolean;
  color?: string;
  className?: string;
  useImage?: boolean;
}

export function OdallyLogo({
  animated = false,
  color = "currentColor",
  className = "",
  useImage = false,
  ...props
}: OdallyLogoProps) {
  if (useImage) {
    return (
      <Image
        src="/odally-logo.png"
        alt="Odally"
        width={140}
        height={46}
        className={cn("h-auto object-contain", className)}
        priority
      />
    );
  }

  const fillStyle = color === "currentColor" ? "currentColor" : color;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="70 210 350 115"
      role="img"
      aria-label="Odally"
      className={cn("h-7 w-auto overflow-visible select-none inline-block", className)}
      style={{ color: fillStyle }}
      {...props}
    >
      <title>Odally</title>
      <desc>The Odally wordmark with animated underline and O pop</desc>
      <style>
        {`
          .odally-word-p { fill-rule: evenodd; ${animated ? "opacity: 0; animation: odallyWordIn .65s ease-out .12s forwards;" : ""} }
          .odally-underline-p { fill-rule: evenodd; ${animated ? "transform: translateX(-190px); opacity: 0; animation: odallySlideIn .85s cubic-bezier(.2,.75,.25,1) .18s forwards;" : ""} }
          .odally-letter-o-p { fill-rule: evenodd; ${animated ? "transform-box: fill-box; transform-origin: center; opacity: 0; animation: odallyOPop .8s cubic-bezier(.2,.85,.25,1) .42s forwards;" : ""} }
          @keyframes odallyWordIn { to { opacity: 1; } }
          @keyframes odallySlideIn { 0% { transform: translateX(-190px); opacity: 0; } 70% { opacity: 1; } 100% { transform: translateX(0); opacity: 1; } }
          @keyframes odallyOPop { 0% { opacity: 0; transform: scale(.72); } 65% { opacity: 1; transform: scale(1.08); } 100% { opacity: 1; transform: scale(1); } }
          @media (prefers-reduced-motion: reduce) {
            .odally-word-p, .odally-underline-p, .odally-letter-o-p { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}
      </style>
      <path
        fill={fillStyle}
        className="odally-word-p"
        d="M 403,276 402,277 400,277 398,278 395,282 395,290 396,292 399,295 401,296 408,296 410,295 413,292 414,290 414,282 411,278 409,277 407,277 406,276 Z M 394,249 376,249 374,253 374,255 368,266 368,268 365,272 362,269 362,267 360,265 352,249 334,249 356,288 344,312 342,314 340,319 358,319 363,308 365,306 365,304 367,302 367,300 369,298 378,279 380,277 Z M 230,253 230,254 226,258 224,262 224,264 223,265 223,279 227,287 233,293 237,295 239,295 240,296 250,296 251,295 253,295 257,293 260,290 261,291 261,295 276,295 276,249 261,249 261,252 260,253 258,251 254,249 252,249 251,248 240,248 239,249 236,249 234,251 Z M 246,261 254,261 256,262 260,266 261,268 261,276 259,278 259,279 254,283 247,283 243,281 241,279 239,275 239,269 240,268 240,266 244,262 Z M 315,217 315,295 330,295 330,217 Z M 288,217 288,295 303,295 303,217 Z M 214,217 200,217 199,218 199,252 198,253 196,251 192,249 190,249 189,248 178,248 177,249 174,249 172,251 171,251 165,257 165,258 163,260 162,262 162,264 161,265 161,278 162,279 162,282 163,284 165,286 165,287 171,293 175,295 177,295 178,296 189,296 195,293 198,290 199,291 199,295 214,295 Z M 184,261 192,261 194,262 198,266 199,268 199,276 198,278 192,283 185,283 181,281 179,279 177,275 177,269 179,265 182,262 Z"
      />
      <path
        fill={fillStyle}
        className="odally-letter-o-p"
        d="M 113,219 112,220 109,220 103,223 101,223 95,228 94,228 87,236 83,244 83,247 82,248 82,251 81,252 81,263 82,264 82,268 83,269 83,272 86,278 91,284 91,285 93,286 98,291 102,293 104,293 107,295 110,295 111,296 126,296 127,295 129,295 130,294 135,293 137,291 141,289 149,281 149,280 151,278 151,276 153,274 153,271 155,268 155,264 156,263 156,252 155,251 155,248 154,247 153,242 150,236 142,227 141,227 136,223 134,223 131,221 128,221 124,219 Z M 113,235 124,235 128,237 134,243 134,244 137,248 137,252 138,253 138,263 137,264 137,267 135,271 133,273 133,274 130,277 124,280 113,280 112,279 110,279 103,273 99,265 99,251 100,250 100,248 102,244 109,237 Z"
      />
      <path
        fill={fillStyle}
        className="odally-underline-p"
        d="M 170,302 170,313 329,313 329,302 Z"
      />
    </svg>
  );
}

export default OdallyLogo;

