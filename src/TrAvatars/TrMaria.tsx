import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrMaria({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trMaria_svg__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 310.96 364.63"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trMaria_svg__cls-3{fill:#640e0e}.trMaria_svg__cls-4{fill:#fbaf33}.trMaria_svg__cls-5{fill:#c79763}.trMaria_svg__cls-6{fill:#b77e45}.trMaria_svg__cls-7{fill:#fff}.trMaria_svg__cls-8{fill:#010101}.trMaria_svg__cls-9{fill:#cccccb}.trMaria_svg__cls-10{fill:#053a59}"
          }
        </style>
      </defs>
      <path
        d="M0 0h310.96v364.63H0z"
        style={{
          fill: "none",
        }}
      />
      <path
        id="trMaria_svg__shirt"
        d="M274.87 305.19a.2.2 0 0 1 0-.07 116 116 0 0 0-1.61-13.24 10 10 0 0 1 .76 1.66c-4.09-12.58-12.5-22.41-28.2-13.83.7-.24 3.59-1 6 2.18 3.2 4.13 5.63 14.9 1.37 42.12 0 0 1.66-36.79-7.57-44.25l-2.07-.6-.37-.09-54.91-15.54v.24c.12 6.21-2.22 10.36-5.42 13.13a2 2 0 0 1-.21.18l-.32.26-.25.19-.27.2c-.18.14-.37.27-.56.39l-.57.38c-.48.31-1 .59-1.47.85s-1 .5-1.51.72c-.4.18-.8.34-1.2.49l-.69.24-.49.17c-.27.08-.53.17-.8.24-.56.17-1.09.3-1.61.42l-.77.17h-.14c-.41.09-.79.15-1.17.22l-.53.08-.65.09c-.62.09-1.18.14-1.64.18l-.71.05h-.88c-25.66.46-28.94-20.88-29.18-21.54s-3 1.08-9.49 3.14l-1.14.37c-10.5 3.42-25.4 8-41.38 12.07l-.22.06q-4.5 1.23-9.4 2.54l-.27-.13c-3.22-1.45-33.77-14.2-39.34 23 0 0-5.72 23.55-3.91 61.5l178.1.31h61.49c.39-2.21 4.99-32.47 3.2-58.55M83.22 323.55s1.65-36.8-7.58-44.26c0 0 15.55-6.81 7.58 44.26m83.13-22.67c-39.83 0-42.82-24.92-43.27-34.71.24 1.79 4.75 30.35 42.89 31.55.43 0 34-.09 35.72-29.64.12 1.05 3.31 32.8-35.34 32.8"
        style={{
          fill: "#821a1a",
        }}
      />
      <g id="trMaria_svg__shirt_shade" data-name="shirt shade">
        <path
          d="M83.22 323.55s1.65-36.8-7.58-44.26c0 0 15.55-6.81 7.58 44.26M166.35 300.88c-39.83 0-42.82-24.92-43.27-34.71.24 1.79 4.75 30.35 42.89 31.55.43 0 34-.09 35.72-29.64.12 1.05 3.31 32.8-35.34 32.8M253.26 324s1.66-36.79-7.57-44.25h.12c.7-.24 3.59-1 6 2.18 3.28 4.07 5.71 14.87 1.45 42.07M277.36 358.16a.4.4 0 0 1 0 .11c-.06 1.13-.12 2.28-.19 3.45 0 .58-.08 1.17-.11 1.77v.53h-5.35a1 1 0 0 0 0-.12c.37-2.36 5-32.62 3.18-58.7a.2.2 0 0 1 0-.07 116 116 0 0 0-1.61-13.24 10 10 0 0 1 .76 1.66 46.4 46.4 0 0 1 2.06 8.45c.17.93.33 1.94.47 3 .05.27.08.54.12.82.11.86.22 1.78.32 2.73 1.1 10.08 1.67 25.69.35 49.61"
          className="trMaria_svg__cls-3"
        />
      </g>
      <path
        id="trMaria_svg__earring"
        d="M246.76 223.64a30.6 30.6 0 0 1-2.2 8.55 26.3 26.3 0 0 1-4.78 7.53 20.8 20.8 0 0 1-7.46 5.15 18.1 18.1 0 0 1-9 1.1 18.4 18.4 0 0 1-7.34-2.66c-.34-.21-.68-.44-1-.67-.51-.36-1-.73-1.49-1.14.43-.37.86-.77 1.3-1.17s.86-.81 1.3-1.24c.29.22.59.43.89.63a18 18 0 0 0 2 1.13 15 15 0 0 0 4.85 1.44 14.5 14.5 0 0 0 7.16-1c4.55-1.87 8.06-6 10-10.66a27 27 0 0 0 1.86-7.42 30.6 30.6 0 0 0-.26-7.7 26.7 26.7 0 0 0-1.59-5.82.1.1 0 0 0 0-.06 25 25 0 0 0-3.34-6c.24-.65.47-1.32.7-2s.41-1.22.61-1.85a24.8 24.8 0 0 1 4.13 5.33s0 0 0 .06c.25.42.47.84.7 1.26a28.3 28.3 0 0 1 2.74 8.37 32 32 0 0 1 .22 8.84"
        className="trMaria_svg__cls-4"
      />
      <g id="trMaria_svg__skin">
        <path
          d="m223.54 157.19.25-.32c2.59-3.31 13.43-16.21 26.22-17.15.23-3.87.32-7.71.18-11.36-7.26-1.05-17 2.58-17.1 2.62l-.67.26-.37-.63a3.4 3.4 0 0 1-.4-2.38 2.15 2.15 0 0 1 1.09-1.32l.19-.07c.59-.16 9.73-2.53 17.12-1.11-.75-10.58-3.64-19-10.65-20.35-8.28-1.62-19.63.18-19.63.18s-50.25-24.5-84.54 8.51v-1.11l-.18.31c-2.86 11.28-3.3 27.27 1.57 49.92a113.2 113.2 0 0 1 1.27 37.38 26.5 26.5 0 0 1 2.09 3.52 28.3 28.3 0 0 1 2.72 8.57 32.6 32.6 0 0 1 .24 8.2c2.56 2.66 5.12 5.09 7.65 7.28 2.31 11.26-7.27 30.27-8.81 31.23 0 0-1.64.59-4.56 1.6.24.66 3.52 22 29.18 21.54h.88l.71-.05c.46 0 1-.09 1.64-.18l.65-.09.53-.08c.38-.07.76-.13 1.17-.22h.14l.77-.17c.52-.12 1-.25 1.61-.42.27-.07.53-.16.8-.24l.49-.17.69-.24 1.2-.49c.51-.22 1-.46 1.51-.72s1-.54 1.47-.85l.57-.38c.19-.12.38-.25.56-.39l.27-.2.26-.21.46-.38.45-.41.3-.28a15 15 0 0 0 3.25-4.62c.08-.19.17-.38.25-.59s.14-.35.2-.53.11-.32.16-.48a6 6 0 0 0 .18-.58c.05-.18.1-.36.14-.54a.3.3 0 0 0 0-.14c-.76 1.8-8.58.86-12.15-.82 0 0-7.73-22.7-19.7-35.51-.49-.52-1-1-1.48-1.53.62.54 10.45 8.8 26.79 15.12l1.72.55c10.4 3.19 17.47 2.86 18.19 2.83.38-.15 5.48-2.07 12.17-7.93.43-.37.86-.77 1.3-1.17s.86-.81 1.3-1.24c7-6.88 15.24-18 21.55-35.39.24-.65.47-1.32.7-2s.41-1.22.61-1.85a160 160 0 0 0 5.67-23.39s.58-2.47 1.38-6.48a17 17 0 0 1-1.95.18c-15.74-.27-20.83-10.83-21.24-11.78l-.08.07.07-.08v-.05c.23-.3.45-.59.69-.88ZM148.9 128.7l-.29.28-1.19-1.23c25.67-24.52 48.44-4.74 48.66-4.53a2.86 2.86 0 0 1 1.12 2 3.4 3.4 0 0 1-.8 2.33l-.56.64-.65-.56c-22.54-19.58-43.5-1.53-46.29 1.07m28.41 40.68s-27.44-1.64-24-25.17l.48-3.05c26.19-11.87 44.06 7.56 48.55 13.23.23.26.43.51.63.74.59.64 1.17 1.31 1.76 2a31.41 31.41 0 0 1-27.42 12.25m29.34 49.45c-.87.46-1.83.91-2.85 1.33-6 2.5-14.23 3.81-19.71-3.64 0 0-7.61-11.84 11.48-18.61 0 0 2.62 8.92 9.05 14.25a19 19 0 0 0 2.31 1.64 15.7 15.7 0 0 0 4.74 1.92 37 37 0 0 1-5.02 3.11m1.48-22.07s-.74-3.26 4.91-1Zm14.28-2.39a10 10 0 0 1-.69 1.58 14.4 14.4 0 0 1-2.9 3.66c5-6.16.19-10.73.19-10.73-5.87-5-13 1.11-13.31 1.39 7.5-8.76 13.78-4.24 13.78-4.24 3.57 2.81 3.78 5.85 2.93 8.34"
          className="trMaria_svg__cls-5"
        />
        <path
          d="M130.33 157.65a122 122 0 0 1-3.92-20 128.7 128.7 0 0 0-1.63 31.85l-4 1.14-1.1-.69-.09-.07c-2.11-1.5-6.88-4.5-11-4.4a5.72 5.72 0 0 0-4.36 1.94s-6 8.93 6.56 22.48c0 0 7 11.63 12.26 4.65 2.41 4 4.85 7.7 7.32 11.14q1.42 2 2.85 3.84c.44-2.2.81-4.52 1.09-7a24.7 24.7 0 0 0-2.37-3.1 19 19 0 0 0-6.12-4.52 15 15 0 0 0-2.43-.88 3 3 0 0 0-.52-.13 1 1 0 0 0-.25-.06 18.7 18.7 0 0 0-4.38-.41.85.85 0 0 1-.88-.83.87.87 0 0 1 .66-.86 16.2 16.2 0 0 1 3-.41h.21a16 16 0 0 1 3.46.25 16 16 0 0 1 2.19.54 20.3 20.3 0 0 1 7.76 4.64l.14.14c.64-10.76-.49-23.76-4.45-39.25M119 187.92a6.45 6.45 0 0 1-3.78-.57 4.23 4.23 0 0 1-2.23-5.29 5.3 5.3 0 0 1 1.71-2.23 3.6 3.6 0 0 1 1.93-.75 7.3 7.3 0 0 0-4.53-4.86 11.6 11.6 0 0 0-2.28-.6 10.6 10.6 0 0 0-2-.12 7 7 0 0 1 1.6-.45 8 8 0 0 1 2.11-.09c2.33.18 5.24 1.5 7.11 6.17 0 0-2.61 1.6-2.42 3.75l1 1.91a3.29 3.29 0 0 0 4.19-.3l.62.62a4.13 4.13 0 0 1-3.03 2.81"
          className="trMaria_svg__cls-5"
        />
      </g>
      <g id="trMaria_svg__skin_shade" data-name="skin shade">
        <path
          d="M257.94 130.36c-1.69-2.64-4.62-4-7.89-4.63-.75-10.58-3.64-19-10.65-20.35-8.28-1.62-19.63.18-19.63.18s-50.25-24.5-84.54 8.51v-1.11C143 99.74 152 95.58 152 95.58c34.85-15.58 67.6 8.72 67.6 8.72 12.41-4.49 21.65-2.91 21.65-2.91 7.67.25 11.62 6.81 12.08 7.63s.06.15.08.23a.5.5 0 0 1 0 .11l.15.43a86.2 86.2 0 0 1 4.15 19c.14.62.19 1.09.23 1.57"
          className="trMaria_svg__cls-6"
        />
        <path
          d="M258.42 141a18.9 18.9 0 0 0-8.41-1.25c.23-3.87.32-7.71.18-11.36a12.2 12.2 0 0 1 3.45 1 6.92 6.92 0 0 1 3.81 4.26l.73-.2q.26 3.55.24 7.55M255.87 165.9A176.5 176.5 0 0 1 243 205.17l-.1.23s-.3.71-.89 1.94c-.3.63-.66 1.41-1.11 2.31-3.52 7.16-11.53 21.8-22 31.19-.49.43-1 .86-1.49 1.28s-1 .8-1.48 1.18a39 39 0 0 1-3.43 2.35l-.73.42c-.67.38-1.35.74-2 1.06a24 24 0 0 1-4.19 1.57l-1.07.27a21 21 0 0 1-2.06.35h-.41c-.24 0-.49 0-.73.06.38-.15 5.48-2.07 12.17-7.93.43-.37.86-.77 1.3-1.17s.86-.81 1.3-1.24c7-6.88 15.24-18 21.55-35.39.24-.65.47-1.32.7-2s.41-1.22.61-1.85a160 160 0 0 0 5.67-23.39s.58-2.47 1.38-6.48a21.55 21.55 0 0 0 9.88-4.03M188.34 264.35v.98a3 3 0 0 0 0 .31v.15a.5.5 0 0 1 0 .11.2.2 0 0 1 0 .08.3.3 0 0 1 0 .09v.22l-.06.49v.34c-.07.43-.15.92-.25 1.45a1 1 0 0 1-.05.14c-.76 1.8-8.58.86-12.15-.82 0 0-7.73-22.7-19.7-35.51-.49-.52-1-1-1.48-1.53.62.54 10.45 8.8 26.79 15.12.55.21 1.11.43 1.68.63h.09a12 12 0 0 0-.58 1.41l-.08.24a15.2 15.2 0 0 0-.27 9.6c0 .07 0 .13.07.2l.17.41a11.1 11.1 0 0 0 1.72 2.85s1.07.67 2.19 1.28a9.5 9.5 0 0 0 2 .86s0 0 0 .13a.3.3 0 0 1 0 .1 1.4 1.4 0 0 1 0 .22 1 1 0 0 1 0 .17.6.6 0 0 1-.09.28M122.07 185.12a4.13 4.13 0 0 1-3 2.8 6.45 6.45 0 0 1-3.78-.57 4.23 4.23 0 0 1-2.23-5.29 5.3 5.3 0 0 1 1.71-2.23 3.6 3.6 0 0 1 1.93-.75 7.3 7.3 0 0 0-4.53-4.86 11.6 11.6 0 0 0-2.28-.6 10.6 10.6 0 0 0-2-.12 7 7 0 0 1 1.6-.45 8 8 0 0 1 2.11-.09c2.33.18 5.24 1.5 7.11 6.17 0 0-2.61 1.6-2.42 3.75l1 1.91a3.29 3.29 0 0 0 4.19-.3Z"
          className="trMaria_svg__cls-6"
        />
      </g>
      <g id="trMaria_svg__rt_earring" data-name="rt earring">
        <path
          d="M143 220.86a29.7 29.7 0 0 1-2.51 9.45 25.7 25.7 0 0 1-5.15 7.54 20.4 20.4 0 0 1-7.87 4.93 18.4 18.4 0 0 1-9.34.61 17 17 0 0 1-2.72-.77c.67-.49 1.31-1 1.93-1.54s1.31-1.12 1.92-1.69a14.2 14.2 0 0 0 6.84-.64c4.62-1.63 8.28-5.62 10.35-10.25a26.4 26.4 0 0 0 2.16-12.43c0-.92-.14-1.83-.26-2.73a27.7 27.7 0 0 0-1.6-6.09c.27-1.2.5-2.4.71-3.59.18-1 .35-2.06.49-3.09a26.5 26.5 0 0 1 2.09 3.52 28.3 28.3 0 0 1 2.72 8.57 32.6 32.6 0 0 1 .24 8.2"
          className="trMaria_svg__cls-4"
        />
        <path
          d="M118.85 239.33c-.6.64-1.17 1.21-1.7 1.7s-1.27 1.17-1.78 1.59a20.7 20.7 0 0 1-5.62-3.17 26.72 26.72 0 0 1-9.24-15.06 31.3 31.3 0 0 1-.81-8.78 30.2 30.2 0 0 1 1.82-8.59 29.4 29.4 0 0 1 4.2-7.65 20.3 20.3 0 0 1 6.2-5.48l.42-.24a.85.85 0 0 1 1 1.37.7.7 0 0 1-.13.11 19.6 19.6 0 0 0-5.64 5.55 27 27 0 0 0-3.47 7.19 27.6 27.6 0 0 0-1.25 7.83 27.9 27.9 0 0 0 1 7.82 23.6 23.6 0 0 0 8.31 12.79 16.25 16.25 0 0 0 6.69 3.02M134.83 197c0 .89-.1 1.76-.17 2.62-.07 1-.18 2-.29 3a24.7 24.7 0 0 0-2.37-3.1 19 19 0 0 0-6.12-4.52 15 15 0 0 0-2.43-.88 3 3 0 0 0-.52-.13 1 1 0 0 0-.25-.06 18.7 18.7 0 0 0-4.38-.41.85.85 0 0 1-.88-.83.87.87 0 0 1 .66-.86 16.2 16.2 0 0 1 3-.41h.21a16 16 0 0 1 3.46.25 16 16 0 0 1 2.19.54 20.3 20.3 0 0 1 7.76 4.64Z"
          className="trMaria_svg__cls-4"
        />
      </g>
      <path
        id="trMaria_svg__mouth"
        d="M211.67 215.72a37 37 0 0 1-5 3.11c-.87.46-1.83.91-2.85 1.33-6 2.5-14.23 3.81-19.71-3.64 0 0-7.61-11.84 11.48-18.61 0 0 2.62 8.92 9.05 14.25a19 19 0 0 0 2.31 1.64 15.7 15.7 0 0 0 4.72 1.92"
        className="trMaria_svg__cls-7"
      />
      <g id="trMaria_svg__nose">
        <path
          d="m213 195.79-4.91 1s-.7-3.29 4.91-1M222.41 194.37a10 10 0 0 1-.69 1.58 14.4 14.4 0 0 1-2.9 3.66c5-6.16.19-10.73.19-10.73-5.87-5-13 1.11-13.31 1.39 7.5-8.76 13.78-4.24 13.78-4.24 3.57 2.81 3.78 5.85 2.93 8.34"
          className="trMaria_svg__cls-8"
        />
      </g>
      <g id="trMaria_svg__eyes">
        <g id="trMaria_svg__eye_black" data-name="eye black">
          <path
            d="M182 145.62a10 10 0 0 0-1.59-2.82 46.3 46.3 0 0 1 23 13.08s-.28-.41-.83-1.11l-.25-.33c-4.49-5.67-22.36-25.1-48.55-13.23l-.48 3.05.13-.05a46 46 0 0 1 9.35-2.12 11.4 11.4 0 0 0-1.45 1.73 10 10 0 0 0 2.26 13.87 11.9 11.9 0 0 0 7.21 2.31 12.4 12.4 0 0 0 1.72-.12c6.32-.88 10.82-6.34 10-12.17a9.2 9.2 0 0 0-.52-2.09m-5.68 3.07a1.58 1.58 0 1 1 .18-3.15 1.56 1.56 0 0 1 1.5 1.66 1.58 1.58 0 0 1-1.64 1.49ZM262.21 142.88a22 22 0 0 0-3.73-1.89h-.06a18.9 18.9 0 0 0-8.41-1.25c-12.79.94-23.63 13.84-26.22 17.15l-.25.32a2 2 0 0 1-.19.24 2 2 0 0 1-.13.19c.2-.2.39-.41.59-.62a52 52 0 0 1 8.45-7.23 8 8 0 0 0-.5 1.3 9 9 0 0 0-.26 1.19 8.48 8.48 0 0 0 1.71 6.32 10.3 10.3 0 0 0 6.82 3.88 12 12 0 0 0 1.45.1 10.24 10.24 0 0 0 6.1-2 8.58 8.58 0 0 0 3.45-5.68 8.46 8.46 0 0 0-1.71-6.32l-.07-.09a10 10 0 0 0-3.49-2.81 10.7 10.7 0 0 0-2.9-.93 30 30 0 0 1 6.86-1.08 27.6 27.6 0 0 1 8.64 1.06h.06a20 20 0 0 1 4.16 1.7h.06ZM245.14 148a1.58 1.58 0 1 1-1.67 1.49 1.57 1.57 0 0 1 1.67-1.49"
            className="trMaria_svg__cls-8"
          />
        </g>
        <g id="trMaria_svg__eye_white" data-name="eye white">
          <path
            id="trMaria_svg__eye_white-2"
            d="M204.78 157.18a31.41 31.41 0 0 1-27.47 12.2s-27.44-1.64-24-25.17l.13-.05a46 46 0 0 1 9.35-2.12 11.4 11.4 0 0 0-1.45 1.73 10 10 0 0 0 2.26 13.87 11.9 11.9 0 0 0 7.2 2.36 12.4 12.4 0 0 0 1.72-.12c6.32-.88 10.82-6.34 10-12.17a9.2 9.2 0 0 0-.51-2.08 10 10 0 0 0-1.59-2.82 46.3 46.3 0 0 1 23 13.08s-.28-.41-.83-1.11c.14.14.26.28.38.41.64.63 1.22 1.3 1.81 1.99"
            className="trMaria_svg__cls-7"
            data-name="eye white"
          />
          <path
            id="trMaria_svg__eye_white-3"
            d="M255.94 165.85a.2.2 0 0 1-.07.05 21.55 21.55 0 0 1-10 4.07 17 17 0 0 1-1.95.18c-15.74-.27-20.83-10.83-21.24-11.78a52.6 52.6 0 0 1 9.06-7.3 9 9 0 0 0-.26 1.19 8.48 8.48 0 0 0 1.71 6.32 10.3 10.3 0 0 0 6.82 3.88 12 12 0 0 0 1.45.1 10.24 10.24 0 0 0 6.1-2 8.58 8.58 0 0 0 3.45-5.68 8.46 8.46 0 0 0-1.71-6.32l-.07-.09a10 10 0 0 0-3.49-2.81 33 33 0 0 1 3.82-.34 29.3 29.3 0 0 1 8.71 1.08h.06a21.5 21.5 0 0 1 4.38 1.71c.53 9.27-2.79 14.64-6.77 17.74"
            className="trMaria_svg__cls-7"
            data-name="eye white"
          />
        </g>
        <g id="trMaria_svg__eye_sparkle" data-name="eye sparkle">
          <path
            id="trMaria_svg__eye_sparkle-2"
            d="M178 147.2a1.58 1.58 0 1 1-1.48-1.66 1.56 1.56 0 0 1 1.48 1.66"
            className="trMaria_svg__cls-7"
            data-name="eye sparkle"
          />
          <path
            id="trMaria_svg__eye_sparkle-3"
            d="M246.62 149.71a1.58 1.58 0 1 1-1.48-1.67 1.57 1.57 0 0 1 1.48 1.67"
            className="trMaria_svg__cls-7"
            data-name="eye sparkle"
          />
        </g>
        <g id="trMaria_svg__eye_shade" data-name="eye shade">
          <g id="trMaria_svg__eye_shade-2" data-name="eye shade">
            <path
              d="M162.82 142a11.4 11.4 0 0 0-1.45 1.73 43.8 43.8 0 0 0-8 1.31l.14-.92a46 46 0 0 1 9.31-2.12M204.26 156.78A61.9 61.9 0 0 0 182 145.62a10 10 0 0 0-1.59-2.82 46.3 46.3 0 0 1 23 13.08s-.28-.41-.83-1.11l-.25-.33c.23.26.43.51.63.74.87.99 1.3 1.6 1.3 1.6"
              className="trMaria_svg__cls-9"
            />
          </g>
          <g id="trMaria_svg__eye_shade-3" data-name="eye shade">
            <path
              d="M232.26 149.77a8 8 0 0 0-.5 1.3 52.6 52.6 0 0 0-9.06 7.3l-.08.07.07-.08c.14-.19.53-.67 1.12-1.36a52 52 0 0 1 8.45-7.23M262.73 148.14a21.5 21.5 0 0 0-4.38-1.71h-.06a29.3 29.3 0 0 0-8.71-1.08 33 33 0 0 0-3.82.34 10.7 10.7 0 0 0-2.9-.93 30 30 0 0 1 6.86-1.08 27.6 27.6 0 0 1 8.64 1.06h.06a20 20 0 0 1 4.16 1.7v.05c.07.56.11 1.12.15 1.65"
              className="trMaria_svg__cls-9"
            />
          </g>
        </g>
      </g>
      <g id="trMaria_svg__eyebrows">
        <path
          d="m196.44 127.45-.56.64-.65-.56c-22.58-19.48-43.54-1.43-46.33 1.17l-.29.28-1.19-1.23c25.67-24.52 48.44-4.74 48.66-4.53a2.86 2.86 0 0 1 1.12 2 3.4 3.4 0 0 1-.76 2.23M259.1 133.17l-.86.22h-.06l-.73.2a6.92 6.92 0 0 0-3.81-4.26 12.2 12.2 0 0 0-3.45-1c-7.26-1.05-17 2.58-17.1 2.62l-.67.26-.37-.63a3.4 3.4 0 0 1-.4-2.38 2.15 2.15 0 0 1 1.09-1.32l.19-.07c.59-.16 9.73-2.53 17.12-1.11 3.27.62 6.2 2 7.89 4.63a.4.4 0 0 1 .07.11v.05l.1.18a9.5 9.5 0 0 1 .86 2Z"
          className="trMaria_svg__cls-8"
        />
      </g>
      <path
        id="trMaria_svg__hair"
        d="M249.66 68.37c-13.21-11.74-37.6-13.67-37.6-13.67-27.25-3.45-33.28-8.87-33.28-8.87 8.5-13 3.15-28.07 3.15-28.07-7.78-19-26.74-17-26.74-17-20.66 1.53-22.35 14.09-22.35 14.09-31.16-1.11-34.95 12.9-34.95 12.9-21 12.38-7.33 23.56-7.33 23.56-5.62 22.7 17 26.25 17 26.25-34 34.5-24.3 76.78-24.3 76.78 2.91 21.39 26.25 37.44 26.25 37.44.79.73 1.59 1.44 2.41 2.12l.42-.24a.85.85 0 0 1 1 1.37 77.3 77.3 0 0 0 13.86 8.55s6.94 8.44 3.24 2.16c-2.47-3.44-4.91-7.14-7.32-11.14-5.27 7-12.26-4.65-12.26-4.65-12.51-13.55-6.56-22.48-6.56-22.48a5.72 5.72 0 0 1 4.36-1.94c4.07-.1 8.84 2.9 11 4.4l.09.07 1.1.69 4-1.14a128.7 128.7 0 0 1 1.63-31.85 122 122 0 0 0 3.92 20c4 15.49 5.09 28.49 4.5 39.31 0 .89-.1 1.76-.17 2.62-.07 1-.18 2-.29 3-.28 2.46-.65 4.78-1.09 7-3.08 15.33-9.72 24.75-14.43 29.76-.6.64-1.17 1.21-1.7 1.7s-1.27 1.17-1.78 1.59l-.37.3q.19-.13.39-.3c.67-.49 1.31-1 1.93-1.54s1.31-1.12 1.92-1.69c8.35-7.73 13.33-17.33 16.19-27.09.5-1.68.93-3.37 1.3-5.05.27-1.2.5-2.4.71-3.59.18-1 .35-2.06.49-3.09a113.2 113.2 0 0 0-1.27-37.38c-4.87-22.65-4.43-38.64-1.57-49.92.06-.27.13-.53.21-.8v.49C143 99.74 152 95.58 152 95.58c34.85-15.58 67.6 8.72 67.6 8.72 12.41-4.49 21.65-2.91 21.65-2.91 7.67.25 11.62 6.81 12.08 7.63s.06.15.08.23a.5.5 0 0 1 0 .11l.15.43a86.2 86.2 0 0 1 4.15 19c.07.41.12.76.16 1.05v.17c0 .13 0 .25.06.35l.1.18c6.07-7.16 7.91-20.84 7.91-20.84 2.06-28.27-16.28-41.33-16.28-41.33M96.15 48.18c1.59 18.5 17.15 20.08 17.15 20.08-20.07 3.38-17.15-20.08-17.15-20.08m-9.68 78.62c-3 30.05 16.25 54.83 16.25 54.83C80.78 165 86.09 129.17 86.47 126.8m24.44 31.83a53.9 53.9 0 0 1-8.3-19.69c-5.35-27 12.7-49.75 13.2-50.36a108 108 0 0 0-7.94 22.53c-6.46 28.27 2.61 46.68 3.04 47.52m-7.08-131.44c11.43 9.46 21.58 6.48 22.09 6.33-12.4 8.78-22.09-6.33-22.09-6.33m38.71 57.14c-.34.18-.74.41-1.2.7l-.59.36c-.51.33-1.07.71-1.67 1.16l-.37.28a1.3 1.3 0 0 1-.19.14l-.28.22-.29.23-.39.32-.52.44c-.36.3-.73.64-1.1 1-.14.13-.28.25-.41.39l-.22.21c-.15.14-.3.3-.45.45s-.4.41-.6.63a5 5 0 0 0-.43.46l-.66.74-.42.5c-.14.17-.28.33-.42.51l-.25.33c-.13.15-.25.31-.37.48s-.15.18-.22.29-.13.18-.2.26l-.1.15-.07.09c-.09.11-.16.23-.25.35a3 3 0 0 0-.19.28c-.13.19-.26.38-.39.59s-.15.23-.23.35-.29.45-.43.68-.11.18-.16.28a.5.5 0 0 0-.1.17.4.4 0 0 0-.07.13s0 0 0 .06a1.2 1.2 0 0 0-.12.19 5 5 0 0 0-.24.44l-.36.65a41 41 0 0 0-2 4.34q-.21.52-.39 1c-.13.35-.25.7-.36 1.06-.24.74-.45 1.47-.65 2.21-.09.33-.18.67-.25 1-.13.5-.24 1-.35 1.51s-.17.83-.24 1.25v.16a.3.3 0 0 0 0 .09v.13a.6.6 0 0 0 0 .13l-.16 1c-.1.73-.18 1.46-.26 2.19v.66a.6.6 0 0 0 0 .13l-.06.8c0 .46-.06.92-.07 1.38s0 .73 0 1.1v4.95a3 3 0 0 0 0 .29 1 1 0 0 0 0 .15c0 .27 0 .56.06.83 0 .56.09 1.13.15 1.7 0 .27.06.54.1.82s.06.54.09.82v.18a2 2 0 0 0 0 .2c.07.52.15 1.06.23 1.6.07.39.13.8.21 1.2v.29c0 .09.07.42.11.64a.4.4 0 0 1 0 .11c0 .18.07.35.11.53s0 .22.07.34c0 .2.07.41.12.62v-.05c0-.06 0-.12-.07-.19v-.05a.3.3 0 0 0 0-.12l-.11-.3a1 1 0 0 0-.06-.17c0-.06 0-.13-.07-.19l-.24-.64c-.14-.4-.27-.78-.4-1.18-.07-.19-.12-.38-.18-.57l-.18-.58q-.28-1-.51-2c-.08-.29-.15-.59-.21-.89s-.14-.66-.2-1-.13-.67-.19-1-.11-.67-.16-1c-.11-.68-.19-1.37-.27-2s-.13-1.37-.17-2a.4.4 0 0 1 0-.11v-1.78a2 2 0 0 0 0-.24v-4.4c0-.25 0-.57.07-.86a4 4 0 0 1 0-.49c0-.43.09-.87.15-1.31 0-.25.07-.52.11-.79a3 3 0 0 0 .07-.41l.12-.68c0-.22.09-.45.13-.67l.09-.46c.06-.28.13-.56.2-.85s.14-.57.22-.85l.11-.39c0-.15.08-.3.13-.47s.17-.56.27-.85.12-.37.19-.56c.11-.32.23-.64.35-1 .18-.49.38-1 .6-1.46.09-.22.19-.44.29-.67l.44-.89c.16-.33.34-.65.51-1l.5-.87c.1-.16.18-.31.28-.46s.19-.32.3-.48.37-.58.58-.87a.2.2 0 0 1 0-.06c.21-.31.43-.61.67-.92l.18-.26.31-.39a2.4 2.4 0 0 1 .2-.25 4 4 0 0 1 .28-.34 3 3 0 0 1 .25-.3c.13-.16.27-.33.42-.49l.25-.29c.14-.15.28-.31.43-.46s.47-.5.73-.75l.36-.35a.5.5 0 0 1 .14-.14c.15-.15.29-.28.45-.42l.59-.54c.18-.16.36-.32.55-.47s.36-.32.56-.47l.19-.16q.2-.17.39-.3c.3-.24.61-.48.94-.71a6 6 0 0 1 .52-.38 40 40 0 0 1 3.79-2.39l.74-.4q.93-.51 1.95-1a.7.7 0 0 1 .15-.07l.17-.08ZM158.66 50c1.12-5.64-2.26-5.41-2.26-5.41-1.58 6.32-10.38 11-10.38 11 2.71-3.61.45-10.15-.22-7.22a3.4 3.4 0 0 1-.25.67c-1.28 2.54-6.07 4.07-6.07 4.07C148.73 40.06 124.14 24 124.14 24c21.88-2.49 25.71 24.14 25.71 24.14 8.21-7.77 3.55-20.33 3.4-20.76 7 5.59 5.9 8.14 5.66 8.52 9.2-11.49-.25-26.12-.25-26.12 19.4 16.51 0 40.22 0 40.22m53.26 41.8s.51-7.48-2.21-13.54c-.14-.32-.29-.62-.45-.92a11.5 11.5 0 0 0-7.93-6.38c-14.38-3.06-16.78-6.81-16.91-7 6 5.21 14 4.16 17.14 4.89C207.75 70.2 210.7 74 212 78c.08.25.15.49.21.73 1.7 6.27-.29 13.05-.29 13.05Zm48.23 26.75s2.26-47.67-31.09-51.63c-34.72-4.11-42.32-12.46-42.74-13 6.6 4.7 21.28 9.54 36.53 9.39 19.4-.18 26.94 9.05 26.94 9.05 18.09 19.79 10.36 46.17 10.36 46.17Z"
        className="trMaria_svg__cls-8"
      />
      <g id="trMaria_svg__hair_highlights" data-name="hair highlights">
        <path
          d="M260.15 118.53s2.26-47.67-31.09-51.63c-34.72-4.11-42.32-12.46-42.74-13 6.6 4.7 21.28 9.54 36.53 9.39 19.4-.18 26.94 9.05 26.94 9.05 18.09 19.81 10.36 46.19 10.36 46.19M110.91 158.63a53.9 53.9 0 0 1-8.3-19.69c-5.35-27 12.7-49.75 13.2-50.36a108 108 0 0 0-7.94 22.53c-6.46 28.27 2.61 46.68 3.04 47.52"
          className="trMaria_svg__cls-10"
        />
        <path
          d="M211.92 91.78s.51-7.48-2.21-13.54c-.14-.32-.29-.62-.45-.92a11.5 11.5 0 0 0-7.93-6.38c-14.38-3.06-16.78-6.81-16.91-7 6 5.21 14 4.16 17.14 4.89C207.75 70.2 210.7 74 212 78c.08.25.15.49.21.73 1.7 6.27-.29 13.05-.29 13.05M142.89 84.14l-.35.19c-.34.18-.74.41-1.2.7l-.59.36c-.51.33-1.07.71-1.67 1.16l-.37.27-.19.15-.28.22-.29.23-.39.32-.52.44c-.36.3-.73.64-1.1 1-.14.13-.28.25-.41.39l-.22.21c-.15.14-.3.3-.45.45s-.4.41-.6.63a5 5 0 0 0-.43.46l-.66.74-.42.5c-.14.17-.28.33-.42.51l-.25.33c-.13.15-.25.31-.37.48l-.42.56-.61.86c-.13.19-.26.38-.39.59s-.15.23-.23.35c-.34.52-.67 1.07-1 1.63-.16.27-.3.53-.45.81l-.15.28c-.12.21-.23.43-.34.64s-.32.64-.48 1-.23.49-.34.74l-.33.76c-.3.7-.59 1.44-.86 2.2 0 .1-.07.2-.1.29s-.09.25-.13.38-.09.26-.13.39c-.11.33-.21.66-.31 1s-.19.66-.29 1l-.15.64-.27 1.13-.15.64-.12.62c-.06.3-.12.59-.17.9v.45a.6.6 0 0 0 0 .13 3 3 0 0 0-.05.27v.3l-.06.43c0 .27-.08.55-.11.83v2.02a.6.6 0 0 0 0 .13l-.06.8c0 .46-.06.92-.07 1.38s0 .73 0 1.1v4.949999999999999a3 3 0 0 0 0 .29 1 1 0 0 0 0 .15c0 .27 0 .56.06.83 0 .56.09 1.13.15 1.7 0 .27.06.54.1.82s.06.54.09.82v.18a2 2 0 0 0 0 .2c.07.52.15 1.06.23 1.6.07.39.13.8.21 1.2v.29c0 .09.07.42.11.64a.4.4 0 0 1 0 .11c0 .18.07.35.11.53s0 .22.07.34c0 .2.07.41.12.62v-.05c0-.06 0-.12-.07-.19v-.05a.3.3 0 0 0 0-.12l-.11-.3c0-.11-.09-.23-.13-.36s-.08-.24-.13-.37-.08-.27-.13-.4v-.05c0-.06 0-.13-.08-.21-.09-.3-.2-.62-.3-1v-.12l-.08-.25c-.09-.29-.17-.6-.27-.93a1 1 0 0 0 0-.15l-.06-.26a.2.2 0 0 1 0-.08c-.32-1.23-.64-2.63-.92-4.18l-.06-.37c0-.24-.09-.5-.12-.75s0-.26-.06-.38v-.23c0-.31-.09-.63-.13-1-.06-.52-.12-1-.17-1.58a.4.4 0 0 1 0-.11v-.06a1 1 0 0 1 0-.07c0-.32 0-.65-.08-1v-.32a1 1 0 0 1 0-.19v-.87a2 2 0 0 0 0-.24v-4.4c0-.25 0-.57.07-.86a4 4 0 0 1 0-.49c0-.43.09-.87.15-1.31 0-.25.07-.52.11-.79a3 3 0 0 0 .07-.41l.12-.68c0-.22.09-.45.13-.67l.09-.46c.06-.28.13-.56.2-.85s.15-.57.22-.85l.11-.39c0-.15.08-.3.13-.47s.17-.56.27-.85.12-.37.19-.56c.11-.32.23-.64.35-1 .18-.49.38-1 .6-1.46.09-.22.19-.44.29-.67l.44-.89c.16-.33.34-.65.51-1l.5-.87c.1-.16.18-.31.28-.46s.2-.32.3-.48.38-.58.58-.87a.2.2 0 0 1 0-.06c.21-.31.44-.61.67-.92l.18-.26.31-.39a2.4 2.4 0 0 1 .2-.25 4 4 0 0 1 .28-.34 3 3 0 0 1 .25-.3c.13-.16.27-.33.42-.49l.25-.29c.14-.15.28-.31.43-.46l.73-.75c.16-.17.32-.33.5-.49s.29-.28.45-.42l.59-.54c.18-.16.36-.32.55-.47s.36-.32.56-.47l.19-.16q.2-.17.39-.3c.3-.24.61-.48.94-.71.17-.13.34-.26.52-.38a40 40 0 0 1 3.79-2.39l.74-.4q.93-.51 1.95-1a.7.7 0 0 1 .15-.07ZM158.66 50c1.12-5.64-2.26-5.41-2.26-5.41-1.58 6.32-10.38 11-10.38 11 2.71-3.61.45-10.15-.22-7.22a3.4 3.4 0 0 1-.25.67c-1.28 2.54-6.07 4.07-6.07 4.07C148.73 40.06 124.14 24 124.14 24c21.88-2.49 25.71 24.14 25.71 24.14 8.21-7.77 3.55-20.33 3.4-20.76 7 5.59 5.9 8.14 5.66 8.52 9.2-11.49-.25-26.12-.25-26.12 19.4 16.51 0 40.22 0 40.22M113.3 68.26c-20.07 3.38-17.15-20.08-17.15-20.08 1.59 18.5 17.15 20.08 17.15 20.08M125.92 33.52c-12.4 8.78-22.09-6.33-22.09-6.33 11.43 9.46 21.58 6.48 22.09 6.33M102.72 181.63C80.78 165 86.09 129.17 86.47 126.8c-3.04 30.05 16.25 54.83 16.25 54.83"
          className="trMaria_svg__cls-10"
        />
      </g>
    </svg>
  );
}
SvgTrMaria.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
};
export default SvgTrMaria;
