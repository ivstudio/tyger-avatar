import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrHarry({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trHarry_svg__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 310.96 364.63"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trHarry_svg__cls-2{fill:#e2ab90}.trHarry_svg__cls-3{fill:#c58e76}.trHarry_svg__cls-4{fill:#fff}.trHarry_svg__cls-6{fill:#314520}.trHarry_svg__cls-7{fill:#1f2a17}.trHarry_svg__cls-8{fill:#231f20}.trHarry_svg__cls-9{fill:#010101}.trHarry_svg__cls-10{fill:#c4c4c4}"
          }
        </style>
      </defs>
      <path
        d="M0 0h310.96v364.63H0z"
        style={{
          fill: "none",
        }}
      />
      <g id="trHarry_svg__skin">
        <path
          id="trHarry_svg__neck"
          d="M180.87 255.68c-24.22 3.17-40.32-8.16-42.79-18.38.57-.37 1-.67 1.21-.85h1s7-11.68 8-19.37c0 0 .33-.16-.21-.23a88 88 0 0 0 2.91-13.9c16.94 21.05 44.16 45.67 44.16 45.67a13.83 13.83 0 0 0 1.85-10.18l.13.06c2.4 16.19-15.88 17.13-16.26 17.18"
          className="trHarry_svg__cls-2"
        />
        <path
          id="trHarry_svg__face"
          d="M236.6 99v.07a.1.1 0 0 0 0-.07m21.85-9.52c-.16-.7-.34-1.41-.52-2.12-.23-1-.48-2-.74-2.93-.08-.27-.15-.55-.22-.83s-.17-.61-.26-.91a67 67 0 0 0-12 3.11.8.8 0 0 1-.23 0 .93.93 0 0 1-.5-.16c-1-.68-2.52-3.61-2.67-7.78v-.28l.22-.17a25.7 25.7 0 0 1 6.26-3.33.9.9 0 0 1 .76 0 1.67 1.67 0 0 1 .66 1.12 1.7 1.7 0 0 0 .19.53c.46-.19 1.66-.84 2.82-1.47l1.61-.86h.08c-.4-1.22-.82-2.44-1.27-3.67-.21-.59-.42-1.18-.64-1.77-.4-1.1-.82-2.21-1.25-3.31-.23-.6-.46-1.2-.7-1.81l-.8-2c-.3-.72-.6-1.43-.91-2.15s-.49-1.17-.75-1.74c-.51-1.18-1-2.35-1.58-3.53-.62-1.34-1.26-2.68-1.91-4-.48-1-1-1.93-1.45-2.9s-1-1.94-1.52-2.91c0 0-7.12-15-28.14-27.67a34 34 0 0 1 3.8 1.39c-11.92-5.34-21.25-5.71-21.25-5.71C131.73 7.26 112 49.8 112 49.8c-4.85 8.8-6.55 25.33-6.73 43.17l45.67-2.88a3 3 0 0 1 1.17.16h.05a9.6 9.6 0 0 1 1.33-2.12 1.6 1.6 0 0 1 .21-.25l.24-.26a9 9 0 0 1 4.33-2.43l.33-.07.39-.06a.7.7 0 0 1 .22 0h.6a9 9 0 0 1 1.29 0l43 3.46 6.49.53h.06a8.45 8.45 0 0 1 5.75 3.26 8.2 8.2 0 0 1 1.47 3.15.14.14 0 0 1 0 .11 1 1 0 0 1 .08.33l.36-.19c.41-.2.83-.39 1.25-.55a27 27 0 0 1 2.58-.91 25.3 25.3 0 0 1 5.42-1 16.3 16.3 0 0 1 5.62.52 9.7 9.7 0 0 1 3.55 1.85l.07-.25a1.5 1.5 0 0 1 .08-.26c.06-.14.1-.28.16-.4s.11-.28.18-.44l.31-.54.23-.34.24-.39a7 7 0 0 1 1.77-1.58h.05l.09-.06h.08l.09-.05a7 7 0 0 1 .6-.33h.1l.26-.12h.08l.48-.18.42-.1a8.4 8.4 0 0 1 1.38-.21l15.08-.65Zm-43.14-9.09a19.5 19.5 0 0 1-.68 4.59c-.23.56-.55.68-.77.68a.6.6 0 0 1-.22 0c-.09 0-3.57-1-8.72-2.32s-12-2.84-18.76-3.92c-15-2.41-32-.34-32.13-.32l-1.28.16 5.17-6.49c.21-.12 5.33-3 14.19-.7a2.2 2.2 0 0 0 2.89-1.25c.33-.52.67-1 1.31-1.1 1.4-.11 3.44.7 5.41 1.49a14.7 14.7 0 0 0 4.18 1.27c.77 0 1-.22 1-.27s0-.63-.12-.94-.3-.85 0-1.19a.91.91 0 0 1 .9-.19c2.29.54 5.79 1.38 8.93 2.16-.6-.57-1-1-.73-1.48s1-.32 1.54-.18a19.3 19.3 0 0 1 5.18 2.49 20.2 20.2 0 0 0 4.17 2.12c-.38-.51-.7-1-.4-1.37s.95-.22 1.28-.11a72 72 0 0 1 7.21 2.87c.28.17.67.36.45 3.98Z"
          className="trHarry_svg__cls-2"
        />
        <path
          id="trHarry_svg__face-2"
          d="M263.27 125.55c0-1-.07-2-.12-3 0-.68-.08-1.36-.12-2h-.17c-5.52-.55-23.55-3.69-26.25-21.45V99l-.09-.71a4.6 4.6 0 0 1 0-1 13.4 13.4 0 0 0-3.86-1.15 26 26 0 0 0-4.94-.28 49 49 0 0 0-5.07.51c-.86.11-1.71.26-2.56.41l-1.28.24-.63.14h-.07a7.8 7.8 0 0 1-.12 1.73c-1.57 8.72-7.82 22.9-31.91 22.9-1.05 0-2.12 0-3.25-.08-.25 0-27.89-.74-31.36-25.51h-.36l-45.84-.62v2.56a44 44 0 0 0-4.65-2.62 33 33 0 0 0-3.17-1.39c-5.17-1.91-10.8-2.49-14.45 1.66 0 0-9.57 14.38 10.56 36.18 0 0 7 11.63 14.09 11.06 1.21 13.12 2.42 22.13 2.42 22.13 4.07 28.38 28.6 34.64 28.6 34.64 4.22 1.14 8.33 2.12 12.32 3v-.06q-6.33-1.38-12.91-3.32s5.05.59 13.12 1.09a336 336 0 0 0 33.89.38c30.64-1.29 66.24-7.92 73.58-31-.01-.01 5.49-17.46 4.6-44.34m-156.82 2.91c-2.92 1.8-6.71 0-7-.12-4.93-2.76-3.08-7.29-3.08-7.29 1.85-4.1 5-4.1 5-4.1-2.46-8.3-12.11-7.69-12.11-7.69.55-.28 10.16-4.1 14.9 7.75 0 0-5.75 3.52-2.17 7.64a4.8 4.8 0 0 0 4.21.83 4.9 4.9 0 0 0 1.81-1.06l.85.85a6.23 6.23 0 0 1-2.41 3.19m94.47 14.85c-4.77 18.17 17.16 23.93 17.16 23.93-31.31 1.02-17.17-24.53-17.16-23.93m20.05 2s-.91-4 6-1.2Zm13.13 3.5c6.08-7.56.23-13.18.23-13.18-7.2-6.18-16 1.35-16.35 1.7 9.21-10.74 16.93-5.2 16.93-5.2 9.5 7.49-.38 16.32-.81 16.7Z"
          className="trHarry_svg__cls-2"
          data-name="face"
        />
      </g>
      <g id="trHarry_svg__skin_shade">
        <path
          d="m261.63 71.92-1.11.56c-1.19.61-2.42 1.24-3 1.45a.34.34 0 0 1-.16 0 1.4 1.4 0 0 1-.2-.39c-.15-.38-.53-1.32-1.61-.93a11 11 0 0 0-1.63.78c-.4-1.22-.82-2.44-1.27-3.67-.21-.59-.42-1.18-.64-1.77-.4-1.1-.82-2.21-1.25-3.31-.23-.6-.46-1.2-.7-1.81l-.8-2c-.3-.72-.59-1.43-.91-2.15s-.49-1.17-.75-1.74c-.51-1.18-1-2.35-1.58-3.53-.62-1.34-1.26-2.68-1.91-4-.48-1-1-1.93-1.45-2.9s-1-1.94-1.52-2.91c0 0-7.12-15-28.14-27.67a34 34 0 0 1 3.8 1.39l.45.2h.06a66 66 0 0 1 13.18 7.76c.31.21.6.44.91.67.68.51 1.36 1.05 2.06 1.63.94.78 1.9 1.62 2.88 2.5l1.75 1.64c.29.29.58.57.86.87a80.5 80.5 0 0 1 10.35 12.79c.05.07.47.77.53.84s5.77 8.96 11.8 25.7M267 89.21l-8.53.37v-.12c-.16-.7-.34-1.41-.52-2.12-.23-1-.48-2-.74-2.93-.08-.27-.15-.55-.22-.83s-.17-.61-.26-.91c2.59-.44 5.29-.77 8-1h.16c.72 2.42 1.43 4.91 2.11 7.54M108.91 125.27a6.23 6.23 0 0 1-2.46 3.19c-2.92 1.8-6.71 0-7-.12-4.93-2.76-3.08-7.29-3.08-7.29 1.85-4.1 5-4.1 5-4.1-2.46-8.3-12.11-7.69-12.11-7.69.55-.28 10.16-4.1 14.9 7.75 0 0-5.75 3.52-2.17 7.64a4.8 4.8 0 0 0 4.21.83 4.9 4.9 0 0 0 1.81-1.06ZM274.94 158.17s-.12 8.79-6.61 19l-.65 1-.72 1c-.12.18-.26.36-.4.54l-.5.68c-6 7.78-16 15.93-32.82 21.36a84 84 0 0 1-13.58 3.31c-4.34.68-9.8 1.35-16.15 1.74l-.08.13a.7.7 0 0 0-.07.11 47 47 0 0 0-3.83 7.41 1 1 0 0 0-.06.15c-2.56 5.59-5.08 13.36-3.63 20.19a13.2 13.2 0 0 0 1 3.5l.22.09a13.83 13.83 0 0 1-1.92 10.14S167.9 224 151 202.91a.3.3 0 0 1 0-.09v-.06q-6.33-1.38-12.91-3.32s5.05.59 13.12 1.09a336 336 0 0 0 33.89.38c30.64-1.29 66.24-7.92 73.58-31 0 0 5.5-17.45 4.61-44.33 0-1-.07-2-.12-3 0-.68-.08-1.36-.12-2 1.32.12 2.12.12 2.19.12a52 52 0 0 0 7.71-.63 263 263 0 0 1 1.99 38.1"
          className="trHarry_svg__cls-3"
        />
      </g>
      <path
        id="trHarry_svg__tshirt"
        d="M210 260.52c-.37 5-1.92 9.65-3.18 14.42a42.6 42.6 0 0 0-1.16 16.5c1.25 14.16.5 30-.71 43.24-2 13.26-3.45 24.49-3.85 27.68-.06.51-.1.82-.11.89h-31.13v-.72c-.34-10.41-2.41-58.27-11.81-77.06-.49-1-9.14-12.48-15.42-24.91 13.53 8.75 31 7 31 7 33.62-1.26 33.86-16.49 32.78-22.11a10.7 10.7 0 0 0-.54-2 11 11 0 0 1 .31 1.9c.46 5.2-1.23 18.95-32.05 19.52.08-.15-26.06 2.38-35.2-12.54-.41-1.06-.79-2.11-1.12-3.16a32.5 32.5 0 0 1-1.72-8.88 7.6 7.6 0 0 1 .35-1.74 5.4 5.4 0 0 1 1-1.88h.58l1.38-.06c-.24.18-.64.48-1.21.85 2.47 10.22 18.57 21.55 42.79 18.38.38-.05 18.66-1 16.3-17.19l.28.12c2 .83 5.1 1.93 6.83 3.32a12 12 0 0 1 3.47 4.09 23.4 23.4 0 0 1 1.66 5.4 32 32 0 0 1 .48 8.94"
        className="trHarry_svg__cls-4"
      />
      <path
        id="trHarry_svg__shirt_shade"
        d="M173.52 267.48s-17.43 1.77-31-7c6.28 12.43 14.93 23.91 15.42 24.91 9.4 18.79 11.47 66.65 11.81 77.06v2h-3.14s0-.45-.05-1.27v-.71c-.33-10.36-2.39-58.28-11.8-77.08-.53-1.06-8.55-13.93-14-26.44-.09-.22-.22-.48-.34-.8s-.21-.49-.32-.73c-.19-.48-.41-1-.64-1.6s-.47-1.23-.73-1.89c0-.06 0-.1-.05-.15-.13-.35-.25-.7-.39-1.07v-.15c0-.05 0-.09-.05-.15-.12-.33-.23-.66-.35-1l-.05-.14c-.12-.36-.23-.72-.35-1.09s-.21-.68-.31-1v-.07a1 1 0 0 0 0-.13c0-.1 0-.21-.08-.31s-.09-.34-.14-.5a.13.13 0 0 1 0-.06 22.7 22.7 0 0 1-1-7.92 32.5 32.5 0 0 0 1.74 8.81c.33 1.05.71 2.1 1.12 3.16 9.14 14.92 35.28 12.39 35.2 12.54 30.82-.57 32.51-14.32 32.05-19.52a1 1 0 0 0 .22.11c1.09 5.71.85 20.93-32.77 22.19"
        style={{
          fill: "#cfcfce",
        }}
      />
      <g id="trHarry_svg__hoodie_body">
        <path
          d="M166.71 364.49s0-.45-.05-1.27h-.08v.06a.3.3 0 0 0 0-.06c0-.12 0-.36-.12-.71-.38-2.31-1.65-9.6-3.9-19.22-5.91-25.26-18.54-66.69-39.4-76.69a35 35 0 0 1-5.46.1c3.18 5.47 9.16 19.76 5.39 45.5 0 0-3.65 22.15-.16 43.95-2.86-8.68-3.56-19.65-3.52-28.55a140 140 0 0 0 1.4 26.4c-5.82-17.65-2.66-44.78-2.66-44.78 3.29-22.5-1.66-36.28-5.41-43.05a49.3 49.3 0 0 1-15-4.68c-.88-.44-1.75-.92-2.62-1.43-.12-.07-5.58-.93-17.08-1.58a36 36 0 0 1-4.67-.75c-.46-.1-.94-.22-1.42-.34-2.92.77-10.6 1.95-13.87 2.55-9.84 1.8-34 8.23-42.82 23.51 0 0-13.21 20.87-15.28 81h166.73ZM40.43 364a6 6 0 0 1 0-.94c0-5.85 1.75-34.55 1.75-34.55s1.43 28.82 1.69 34.54v1a32 32 0 0 1-3.44-.05M303.44 342.11c.36-23.69-4.08-59.93-32.34-74.76a59.7 59.7 0 0 1 12.27 7.7 54.7 54.7 0 0 0-16.56-9.82l-33.34-10.31-1.65-.5.51 1c3.2 6.63 9 23.48 5.27 53.51 0 0-4.34 25.31-.86 51.08-2.67-9.34-3.39-20.46-3.35-30a171 171 0 0 0 1.24 27.92c-6.11-21.38-2-52.06-2-52.06 3-33.5-4.37-48.56-7.06-52.83-.24-.37-.43-.66-.59-.87 0 .1-.12.3-.22.58a10.8 10.8 0 0 0 .62 8.42s4.1 8-3.44 15.19c0 0-6.26 6.61-9.17 24.9l-10.32 54v.05c-.44 3.09-.83 5.51-1.09 7-.05.35-.11.66-.15.91-.11.66-.18 1-.18 1h102.36l-1.78-.09s.13-.79.34-2.25a164 164 0 0 0 1.49-19.77M273.7 364a18 18 0 0 1 0-1.92c.15-7.52 1.74-33.58 1.74-33.58s1.29 26.12 1.64 33.56c.06 1.19.09 1.89.09 2a32 32 0 0 1-3.47-.06"
          className="trHarry_svg__cls-6"
        />
        <path
          d="M154.84 285.41c-.53-1.06-8.55-13.93-14-26.44-.09-.22-.22-.48-.34-.8s-.21-.49-.32-.73c-.19-.48-.41-1-.64-1.6s-.47-1.23-.73-1.89c0-.06 0-.1-.05-.15-.15-.37-.27-.71-.39-1.07v-.15c0-.05 0-.09-.05-.15-.12-.33-.23-.66-.35-1l-.05-.14c-.12-.36-.23-.72-.35-1.09s-.21-.68-.31-1v-.07a1 1 0 0 0 0-.13c0-.1 0-.21-.08-.31s-.09-.34-.14-.5a.13.13 0 0 1 0-.06 22.7 22.7 0 0 1-1-7.92 7.6 7.6 0 0 1 .35-1.74 5.4 5.4 0 0 1 1-1.88h.58l1.38-.06h1s7-11.68 8-19.37c0 0 .33-.16-.21-.23-1.24-.12-7.07.35-32.13 4.95 0 0-54.23 10.79-52.38 29 0 0-.38 1.78 1.9 3.47a5.7 5.7 0 0 1-1.79-2.75l.35-4.16c.23 4 5.79 6.45 6.12 6.91 4 1.45 11.48.55 18 .6 3.61 0 6.91.33 9.14 1.47a89 89 0 0 0 6.36 2.27c11.75 3.72 19 3.28 19 3.28 15.11 2.26 28.91 32.51 36.86 60.94 4.25 15.26 6.83 30 7 39.61h.07c-.33-10.39-2.39-58.31-11.8-77.11m-57.78-32.52c-13.51-4.55-31.5-14 10-24.37 0 0 27-7.84 38-7.15 0 0-72.54 12.38-44.66 30.7a51.5 51.5 0 0 0 6.7 3.61 102 102 0 0 1-10.04-2.79m36.22-14.42-1 .75a23 23 0 0 0-2.93 2.8c-7.15 8.13-7 18.88-7 18.88-1.38-5.56-1.16-9.95 0-13.41a15.7 15.7 0 0 1 1.36-3 19.6 19.6 0 0 1 9.94-8c.81-.32 1.58-.59 2.32-.8l.63-.18c.43-.12.84-.22 1.22-.31a22.5 22.5 0 0 1 3-.5h-.05a28 28 0 0 0-3 1.12c-.53.24-1.06.49-1.55.75a26.5 26.5 0 0 0-2.94 1.9M197.25 221.22h-.16a30.6 30.6 0 0 0-1.25 13.65 13.2 13.2 0 0 0 1 3.5l.22.09.13.06.28.12c2 .83 5.1 1.93 6.83 3.32a12 12 0 0 1 3.47 4.09 23.4 23.4 0 0 1 1.66 5.4 32 32 0 0 1 .54 9.1c-.37 5-1.92 9.65-3.18 14.42a42.6 42.6 0 0 0-1.16 16.5c1.25 14.16.5 30-.71 43.24 3.39-22.48 8.39-50.84 12.65-55.82 2.36-2.76 4.68-6 4.85-6.19 6.26-8.15-4.64-15.24-.71-21.08a7.5 7.5 0 0 1 1.65-1.7c.27-.2.55-.4.85-.6a20 20 0 0 0 4.12.68c2.14 0 4.3-.76 4.22-4a4 4 0 0 1 .19.73c2.07-15.4-32.85-24.82-35.49-25.51m-1.07 4.11h.18c2.32.38 31 6.06 24.56 13.44 0 0 1.52-6.42-24.56-13.41Zm27 23.56h-.13c-3.94-9.09-25.24-12.73-26.57-13 1.18.07 28.68.56 26.65 12.94.03.06.1.06.1.06Z"
          className="trHarry_svg__cls-6"
        />
      </g>
      <g id="trHarry_svg__hoodie_shade">
        <path
          d="M140.82 234.73a28 28 0 0 0-3 1.12c-.53.24-1.06.49-1.55.75a26.5 26.5 0 0 0-3 1.85l-1 .75a23 23 0 0 0-2.93 2.8c-7.15 8.13-7 18.88-7 18.88-1.38-5.56-1.16-9.95 0-13.41a15.7 15.7 0 0 1 1.36-3 19.6 19.6 0 0 1 9.94-8c.81-.32 1.58-.59 2.32-.8l.63-.18c.43-.12.84-.22 1.22-.31a22.5 22.5 0 0 1 3.01-.45M100.3 252.07a51.5 51.5 0 0 0 6.7 3.61 102 102 0 0 1-9.94-2.79c-13.51-4.55-31.5-14 10-24.37 0 0 27-7.84 38-7.15-.06 0-72.64 12.38-44.76 30.7M123.08 312.18s-3.65 22.15-.16 43.95c-2.86-8.68-3.56-19.65-3.52-28.55a.17.17 0 0 0 0-.1 154 154 0 0 1 1.58-17.4c3.37-23-1-36.86-4.3-43.45l1 .05c3.19 5.47 9.17 19.76 5.4 45.5M220.92 238.79s1.52-6.42-24.56-13.41h-.18.18c2.32.35 31.01 6.03 24.56 13.41M223.23 248.89h-.13c-3.94-9.09-25.24-12.73-26.57-13 1.18.07 28.68.56 26.65 12.94-.02.06.05.06.05.06M237.59 308.93s-4.34 25.31-.86 51.08c-2.67-9.34-3.39-20.46-3.35-30a189 189 0 0 1 2.11-23.16c3.44-27.85-1.28-44.34-4.49-51.85l-.43-.94c-.11-.25-.23-.49-.33-.71s-.14-.29-.2-.41-.18-.35-.25-.51-.21-.4-.32-.58a9.6 9.6 0 0 1-1.69.26 16 16 0 0 1-2.65 0 .6.6 0 0 1-.07.12c0 .1-.12.3-.22.58a10.8 10.8 0 0 0 .62 8.42s4.1 8-3.44 15.19c0 0-6.26 6.61-9.17 24.9l-10.32 54c.76-5.25 1.69-12.42 2.43-20.56 3.39-22.48 8.39-50.84 12.65-55.82 2.36-2.76 4.68-6 4.85-6.19 6.26-8.15-4.64-15.24-.71-21.08a7.5 7.5 0 0 1 1.65-1.7c.27-.2.55-.4.85-.6a20 20 0 0 0 4.12.68c2.14 0 4.3-.76 4.22-4a4 4 0 0 1 .19.73 4.08 4.08 0 0 1-1.51 4.33c-.22.37-.46.76-.73 1.15a20 20 0 0 1 1.08 1.8 4 4 0 0 0 .21.41l.51 1c3.18 6.58 8.97 23.43 5.25 53.46"
          className="trHarry_svg__cls-7"
        />
        <path
          d="M166.57 362.49h-.12c-.38-2.31-1.65-9.6-3.9-19.22-5.91-25.26-18.54-66.69-39.4-76.69a35 35 0 0 1-5.46.1l-1-.05c-.92-.07-1.93-.16-3-.3l-.93-.13a49.3 49.3 0 0 1-15-4.68c-.88-.44-1.75-.92-2.62-1.43-.12-.07-5.58-.93-17.08-1.58a36 36 0 0 1-4.67-.75c-.46-.1-.94-.22-1.42-.34a16.5 16.5 0 0 1-6.49-3.11 5.7 5.7 0 0 1-1.79-2.75l.35-4.16c.23 4 5.79 6.45 6.12 6.91 4 1.45 11.48.55 18 .6 3.61 0 6.91.33 9.14 1.47a89 89 0 0 0 6.36 2.27c11.75 3.72 19 3.28 19 3.28 15.11 2.26 28.91 32.51 36.86 60.94 4.27 15.27 6.85 30.01 7.05 39.62M311 364.63l-7.57-.36-1.78-.09s.13-.79.34-2.25a164 164 0 0 0 1.49-19.82c.36-23.69-4.08-59.93-32.34-74.76a59.7 59.7 0 0 1 12.27 7.7l.14.11c10.66 8.46 24.51 24.28 25.88 49.87ZM43.86 364a32 32 0 0 1-3.43 0 6 6 0 0 1 0-.94c0-5.85 1.75-34.55 1.75-34.55s1.43 28.82 1.69 34.54c-.02.56-.01.89-.01.95M277.14 364a32 32 0 0 1-3.44 0 18 18 0 0 1 0-1.92c.15-7.52 1.74-33.58 1.74-33.58s1.29 26.12 1.64 33.56c.03 1.16.06 1.86.06 1.94"
          className="trHarry_svg__cls-7"
        />
      </g>
      <g id="trHarry_svg__hoodie_strings">
        <path
          id="trHarry_svg__white_string"
          d="M119.4 327.58a140 140 0 0 0 1.41 26.42c-5.82-17.65-2.66-44.78-2.66-44.78 3.29-22.5-1.66-36.28-5.41-43.05l.93.13c1.08.14 2.09.23 3 .3 3.25 6.59 7.67 20.45 4.3 43.45a154 154 0 0 0-1.58 17.4.17.17 0 0 1 .01.13"
          className="trHarry_svg__cls-4"
        />
        <path
          id="trHarry_svg__white_string-2"
          d="M233.38 330a171 171 0 0 0 1.24 27.92c-6.11-21.38-2-52.06-2-52.06 3-33.5-4.37-48.56-7.06-52.83-.24-.37-.43-.66-.59-.87a.6.6 0 0 0 .07-.12 16 16 0 0 0 2.65 0 9.6 9.6 0 0 0 1.69-.26c.11.18.2.38.32.58s.15.33.25.51.12.26.2.41.22.46.33.71l.43.94c3.24 7.56 8 24.05 4.52 51.88a189 189 0 0 0-2.05 23.19"
          className="trHarry_svg__cls-4"
          data-name="white_string"
        />
      </g>
      <path
        id="trHarry_svg__mouth"
        d="M218.08 167.24c-31.31 1-17.17-24.53-17.16-23.93-4.77 18.17 17.16 23.93 17.16 23.93"
        className="trHarry_svg__cls-8"
      />
      <g id="trHarry_svg__nose">
        <path
          d="M234.1 148.83c6.08-7.56.23-13.18.23-13.18-7.2-6.18-16 1.35-16.35 1.7 9.21-10.74 16.93-5.2 16.93-5.2 9.5 7.47-.38 16.3-.81 16.68M227 144.13l-6 1.2s-.94-4 6-1.2"
          className="trHarry_svg__cls-8"
        />
      </g>
      <g id="trHarry_svg__glasses">
        <path
          id="trHarry_svg__glasses_frames"
          d="M295.84 92.84a2 2 0 0 0-.12-.22 7.21 7.21 0 0 0-5.32-4.07h-.09c-.42-.14-.68-.2-.68-.2h-.14l-22.27 1H267l-8.53.37-15.08.65a8.4 8.4 0 0 0-1.38.21l-.42.1-.48.18h-.08l-.26.12h-.1a7 7 0 0 0-.6.33l-.09.05h-.08l-.09.06h-.05A7 7 0 0 0 238 93l-.25.35-.23.34-.31.54c-.07.16-.14.32-.18.44s-.1.26-.16.4a1.5 1.5 0 0 0-.08.26l-.07.25a9.7 9.7 0 0 0-3.55-1.85 16.3 16.3 0 0 0-5.62-.52 25.3 25.3 0 0 0-5.42 1 27 27 0 0 0-2.58.91c-.42.16-.84.35-1.25.55l-.36.19a1 1 0 0 0-.08-.33.14.14 0 0 0 0-.11 8.2 8.2 0 0 0-1.47-3.15A8.45 8.45 0 0 0 210.6 89h-.06l-6.49-.53-43-3.46a9 9 0 0 0-1.29 0h-.6a.7.7 0 0 0-.22 0l-.39.06-.33.07a9 9 0 0 0-4.33 2.43l-.24.26a1.6 1.6 0 0 0-.21.25 9.6 9.6 0 0 0-1.33 2.12h-.05a3 3 0 0 0-1.17-.16L105.23 93l-6.84.43h-.06a1.05 1.05 0 0 0-.93.74 33 33 0 0 1 3.17 1.39l4.64.06 45.84.62h.36c3.47 24.77 31.11 25.51 31.36 25.51 1.13.05 2.2.08 3.25.08 24.09 0 30.34-14.18 31.91-22.9a7.8 7.8 0 0 0 .12-1.73h.07l.63-.14 1.28-.24c.85-.15 1.7-.3 2.56-.41a49 49 0 0 1 5.07-.51 26 26 0 0 1 4.94.28 13.4 13.4 0 0 1 3.86 1.15 4.6 4.6 0 0 0 0 1l.09.71c2.7 17.76 20.73 20.9 26.25 21.45h.2c1.32.12 2.12.12 2.19.12a52 52 0 0 0 7.71-.63h.2c15.64-2.64 20.92-12.62 22.64-20.07.05-.2.1-.4.13-.59l.46-2.82a4 4 0 0 0 0-.48 7.2 7.2 0 0 0-.49-3.18m-80 5.67c-1.85 10.29-9.08 22.27-33 21.09a39.7 39.7 0 0 1-13.9-3.31c-9.15-4.14-14.39-11.24-15.54-21.12a2 2 0 0 1-.05-.34v-.66a2.6 2.6 0 0 1 .81-.61c1.41-.75 4.76-1.72 12.71-2a7.25 7.25 0 0 0-1.5 4.32c0 5 5.59 9.1 12.47 9.1s12.47-4.08 12.47-9.1a7.17 7.17 0 0 0-1.22-3.93c17.22.44 24.77 2.31 26.3 2.76a6.26 6.26 0 0 1 .6 2.7 7 7 0 0 1-.12 1.1Zm56.9 19.36h-.18a49 49 0 0 1-7.38.61s-.82 0-2.14-.13h-.17c-19.91-2-23.63-14.91-24.31-20.37a3.7 3.7 0 0 1 0-.76v-.51l.37-.43c.17-.18 1.29-1 8.61-1.7a5.24 5.24 0 0 0-1.3 3.62c.19 3.42 4.29 6.73 10.94 6.73h1.12a18 18 0 0 0 3-.41 11 11 0 0 0 4.75-2.22 6.35 6.35 0 0 0 2.41-5.23 5.57 5.57 0 0 0-1.3-3.26h11.85c.95 0 1.86-.06 2.7-.06 9.25 0 11.89 2.23 12.43 2.84-1.02 8.33-5.64 18.62-21.37 21.28Z"
          className="trHarry_svg__cls-9"
        />
        <g id="trHarry_svg__lenses">
          <path
            id="trHarry_svg__lense"
            d="M281.76 93.74c-.84 0-1.75 0-2.7.06-.11 0-4.7-.07-10.72 0h-1.13a5.57 5.57 0 0 1 1.3 3.26 6.35 6.35 0 0 1-2.41 5.23 11 11 0 0 1-4.75 2.22 18 18 0 0 1-3 .41h-1.12c-6.65 0-10.75-3.31-10.94-6.73a5.24 5.24 0 0 1 1.3-3.62c-7.32.66-8.44 1.52-8.61 1.7l-.37.43v.51a3.7 3.7 0 0 0 0 .76c.68 5.46 4.4 18.34 24.31 20.37h.17c1.32.13 2.13.13 2.14.13a49 49 0 0 0 7.38-.61h.18c15.73-2.66 20.35-13 21.42-21.29-.56-.57-3.21-2.83-12.45-2.83m4.5 16.71s-4.64 4-13.82 5.22a.06.06 0 0 1-.06 0 42.4 42.4 0 0 1-9.69.09c-1.34-.14-2.74-.34-4.19-.61 0 0 1.64.13 4.14.13a59.3 59.3 0 0 0 9.57-.73h.07c4.38-.74 8.85-2.14 11.85-4.75 0 0 6.8-5.35 2.48-13.12 0-.01 8.26 5.89-.35 13.77"
            className="trHarry_svg__cls-4"
          />
          <path
            id="trHarry_svg__lense-2"
            d="M215.37 94.68c-1.53-.45-9.08-2.32-26.3-2.76a7.17 7.17 0 0 1 1.22 3.93c0 5-5.6 9.1-12.47 9.1s-12.47-4.08-12.47-9.1a7.25 7.25 0 0 1 1.5-4.32c-7.95.31-11.3 1.28-12.71 2a2.6 2.6 0 0 0-.81.61v.66a2 2 0 0 0 .05.34c1.15 9.88 6.39 17 15.54 21.12a39.7 39.7 0 0 0 13.9 3.31c23.95 1.18 31.18-10.8 33-21.09a7 7 0 0 0 .1-1.13 6.3 6.3 0 0 0-.55-2.67m-7.93 16.51s-10.78 10-32 5.75c0 0 20.55 1.78 29.59-6.56 0 0 7.81-6.55 2.87-16 .32.24 9.27 7.37-.46 16.81"
            className="trHarry_svg__cls-4"
            data-name="lense"
          />
        </g>
        <g id="trHarry_svg__lense_shine">
          <path
            d="M207.44 111.19s-10.78 10-32 5.75c0 0 20.55 1.78 29.59-6.56 0 0 7.81-6.55 2.87-16 .32.24 9.27 7.37-.46 16.81M286.26 110.45s-4.64 4-13.82 5.22a.06.06 0 0 1-.06 0 42.4 42.4 0 0 1-9.69.09c-1.34-.14-2.74-.34-4.19-.61 0 0 1.64.13 4.14.13a59.3 59.3 0 0 0 9.57-.73h.07c4.38-.74 8.85-2.14 11.85-4.75 0 0 6.8-5.35 2.48-13.12 0-.01 8.26 5.89-.35 13.77"
            className="trHarry_svg__cls-10"
          />
        </g>
      </g>
      <g id="trHarry_svg__eyebrows">
        <path
          id="trHarry_svg__eyebrow"
          d="M215.31 80.37a19.5 19.5 0 0 1-.68 4.59c-.23.56-.55.68-.77.68a.6.6 0 0 1-.22 0c-.09 0-3.57-1-8.72-2.32s-12-2.84-18.76-3.92c-15-2.41-32-.34-32.13-.32l-1.28.16 5.17-6.49c.21-.12 5.33-3 14.19-.7a2.2 2.2 0 0 0 2.89-1.23c.33-.52.67-1 1.31-1.1 1.4-.11 3.44.7 5.41 1.49a14.7 14.7 0 0 0 4.18 1.27c.77 0 1-.22 1-.27s0-.63-.12-.94-.3-.85 0-1.19a.91.91 0 0 1 .9-.19c2.29.54 5.79 1.38 8.93 2.16-.6-.57-1-1-.73-1.48s1-.32 1.54-.18a19.3 19.3 0 0 1 5.18 2.49 20.2 20.2 0 0 0 4.17 2.12c-.38-.51-.7-1-.4-1.37s.95-.22 1.28-.11a72 72 0 0 1 7.21 2.87c.28.17.67.36.45 3.98"
          className="trHarry_svg__cls-9"
        />
        <path
          id="trHarry_svg__eyebrow-2"
          d="m284.68 82.4-.7-.14a91 91 0 0 0-18.88-.58h-.39c-2.71.2-5.41.53-8 1a67 67 0 0 0-12 3.11.8.8 0 0 1-.23 0 .93.93 0 0 1-.5-.16c-1-.68-2.52-3.61-2.67-7.78v-.28l.22-.17a25.7 25.7 0 0 1 6.26-3.33.9.9 0 0 1 .76 0 1.67 1.67 0 0 1 .66 1.12 1.7 1.7 0 0 0 .19.53c.46-.19 1.66-.84 2.82-1.47l1.61-.86h.08a11 11 0 0 1 1.63-.78c1.08-.39 1.46.55 1.61.93a1.4 1.4 0 0 0 .2.39.34.34 0 0 0 .16 0c.6-.21 1.83-.84 3-1.45l1.11-.56.19-.09a17 17 0 0 1 1.82-.82c.94-.33 1.62.46 2.11 1s.7.79.91.71c1.32-.45 8.7-1.87 9.47-.59a.74.74 0 0 1-.23 1 5.2 5.2 0 0 0-1.05 1.25 4.8 4.8 0 0 0 1.45-.19 7.13 7.13 0 0 1 4.9.69 6 6 0 0 0 .71.32l.17.11c1.8 1.77 2.36 5.3 2.49 6.34Z"
          className="trHarry_svg__cls-9"
          data-name="eyebrow"
        />
      </g>
    </svg>
  );
}
export default SvgTrHarry;
