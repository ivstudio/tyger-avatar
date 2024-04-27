import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrRachel({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trRachel_svg__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 310.96 364.71"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trRachel_svg__cls-2{fill:#e2ab90}.trRachel_svg__cls-3{fill:#9f4c24;opacity:.25}.trRachel_svg__cls-4{fill:#010101}.trRachel_svg__cls-7{fill:#323333}.trRachel_svg__cls-8{fill:#171919}.trRachel_svg__cls-9{fill:#fff}.trRachel_svg__cls-11{fill:#8a5335}.trRachel_svg__cls-12{fill:#ccc;opacity:.5}"
          }
        </style>
      </defs>
      <path
        d="M0 0h310.96v364.63H0z"
        style={{
          fill: "none",
        }}
      />
      <g id="trRachel_svg__skin">
        <path
          d="M248.86 123.84a1.75 1.75 0 1 0 1.65 1.84 1.74 1.74 0 0 0-1.65-1.84m-63.13-3.06.21.09Zm0 0 .21.09Zm-12.84.29a1.74 1.74 0 1 0 1.65 1.84 1.75 1.75 0 0 0-1.65-1.84m0 0a1.74 1.74 0 1 0 1.65 1.84 1.75 1.75 0 0 0-1.65-1.84m12.84-.29.21.09Zm-12.84.29a1.74 1.74 0 1 0 1.65 1.84 1.75 1.75 0 0 0-1.65-1.84m-56.81 32.43c-3.22-3.71 2-6.89 2-6.89-4.29-10.68-13-7.23-13.44-7 0 0 8.69-.56 10.92 6.93 0 0-2.88 0-4.54 3.71 0 0-1.66 4.06 2.77 6.57.33.18 6.3 2.95 8.51-2.78l-.76-.77a4.15 4.15 0 0 1-5.46.23m69.65-32.72.21.09Zm0 0 .21.09Z"
          className="trRachel_svg__cls-2"
        />
        <path
          d="m266.41 136.38-.14.31a19.22 19.22 0 0 1-10 9.61 25 25 0 0 1-8.68 2C230 148 224.41 136.19 224 135.27a59 59 0 0 1 10.05-8.08 9 9 0 0 1 .43-1.18c0-.08.08-.17.13-.25-.39.26-.78.54-1.18.82l-1 .73c-.28.21-.55.42-.83.65l-.71.56-1.12.93-1 .9a63 63 0 0 0-3.62 3.53c-.08.08-.14.16-.21.24s-.23.22-.34.34l.15-.21a1.7 1.7 0 0 1 .25-.25l.27-.36c2.75-3.51 13.87-16.76 27.24-18.79a21.35 21.35 0 0 1 9.29.57c-.86-3.12-1.76-6.05-2.66-8.78l-.38.1a7.7 7.7 0 0 0-4.22-4.72 15.2 15.2 0 0 0-6-1.29c-7.69-.3-16.66 3.05-16.78 3.1l-.75.28-.4-.69a3.72 3.72 0 0 1-.45-2.65 2.38 2.38 0 0 1 1.22-1.45l.19-.08a54.3 54.3 0 0 1 15.8-1.63c3.61.26 7.11 1.12 9.66 3.09-.85-2.31-1.69-4.45-2.5-6.4a.5.5 0 0 1-.05-.1c-2.38-5.07-7.46-14-15.56-19-7.41-4.6-17.34-5.94-30 1.93 0 0-38.5-19.72-59-3.37 0 0-7.88 15.92 3.35 23.16a16.7 16.7 0 0 0 2.67 1.39 24.3 24.3 0 0 0 5.25 1.51 16.6 16.6 0 0 1-9.63.93 16 16 0 0 1-2.69-.82c-4.2-1.67-8.72-5.53-12.26-13.72 0 0-25.31 37.28-4.39 53.84a30.2 30.2 0 0 0-8 1.69 55.6 55.6 0 0 0-7.35-5.29 1 1 0 0 0 0 .19c-.43-.31-.9-.66-1.43-1-3.46-2.37-8.93-5.24-12.87-3.22a6.3 6.3 0 0 0-2 1.72s-6.63 11.07 7.29 27.84c0 0 5.92 11 11.33 8 1 9.84 1.84 16.34 1.84 16.34 3.16 21.62 18.73 28.83 24 30.68 1.05 10.13-.86 17.52-3.75 22.62a41.6 41.6 0 0 0-7.45 14.89l-.33 1.3c-.1.44-.2.87-.28 1.28a43 43 0 0 0-.72 12.13 27 27 0 0 0 .37 2.76c0 .16.05.28.07.38s0 .2.05.25a2.5 2.5 0 0 1 .06.38c.42 2.88.79 5.82 1.13 8.8a1 1 0 0 1 0 .23c.18 1.61.35 3.22.51 4.84.16 1.44.3 2.89.44 4.35.08.26.06.84.14 1.09.18.52.67.73.85 1.25a50.3 50.3 0 0 0 3.6 7.79c0 .06 0 .09.08.15l.11.19c5.16 8.73 13.25 15 26 14.77.26 0 22.87 1.21 30.13-23 .16-6.55.21-13.07.11-19.31a108 108 0 0 0-.95-13.48 70 70 0 0 0-1.39-7.18q-.58-2.36-1.37-4.7v-.12a.2.2 0 0 1 0-.08c-.1-.22-.19-.44-.28-.67-.16-.43-.29-.84-.41-1.28a14.7 14.7 0 0 1-.45-2.95v-.09a12 12 0 0 1 0-1.47v-.58a1 1 0 0 1 0-.19.13.13 0 0 1 0-.06 27.1 27.1 0 0 1 2.6-8.91c.38-.8.76-1.56 1.14-2.25a45 45 0 0 1 2.46-3.95 1 1 0 0 1 .07-.1c.24-.34.45-.61.61-.83a6.6 6.6 0 0 1 1-.86c21.18-.27 33.69-4.35 33.69-4.35 1.66-.44 3.25-.91 4.76-1.43h.16c31.77-10.89 31.9-38.23 31.9-38.23a233.8 233.8 0 0 0-3.28-44m-152.65 20.46c-4.43-2.51-2.77-6.57-2.77-6.57 1.66-3.71 4.54-3.71 4.54-3.71-2.23-7.49-10.92-6.93-10.92-6.93.49-.25 9.15-3.7 13.44 7 0 0-5.19 3.18-2 6.89a4.15 4.15 0 0 0 5.43-.21l.76.77c-2.18 5.71-8.15 2.92-8.48 2.76m34-40.61c29.16-13.23 49.02 8.67 53.83 14.77l.25.31v.06c.53.7.8 1.1.8 1.1-.51-.52-1-1-1.55-1.52l-.1-.09-.12-.11c-.69-.65-1.38-1.27-2.09-1.87l-.09-.06a.6.6 0 0 0-.14-.13c-.15-.14-.31-.26-.46-.38-.56-.47-1.11-.9-1.68-1.32l-.8-.59a.15.15 0 0 0-.06-.05l-.39-.28-.34-.25c-.11-.06-.21-.14-.31-.2s-.44-.31-.66-.45l-.64-.42c-.29-.19-.57-.37-.86-.54s-.5-.31-.75-.45-.7-.41-1-.6c-.19-.11-.38-.22-.58-.32l-.45-.25-.35-.18c-.57-.3-1.15-.59-1.73-.85-.28-.14-.57-.28-.86-.4l-.64-.28-.21-.09-.38-.15-.48-.2c-.29-.11-.57-.23-.86-.33l-1.29-.47c-.53-.19-1.06-.36-1.59-.54l-.51-.15-.59-.18-.25-.06c-.28-.09-.56-.16-.84-.24h-.17l-1.49-.36h-.07a11 11 0 0 1 1.5 2.47c.09.22.19.44.27.67a11 11 0 0 1 .57 2.29c.87 6.47-4.1 12.51-11.11 13.48a14 14 0 0 1-1.91.13 13.28 13.28 0 0 1-7.94-2.59 11.16 11.16 0 0 1-2.52-15.37 8 8 0 0 1 .5-.68c.35-.43.72-.84 1.11-1.24-.6.08-1.19.16-1.76.26-.38 0-.74.12-1.1.18l-.26.05-.7.13h-.06l-.66.14-.24.05-.43.1-.33.07-.31.07-.61.15-.39.1c-.12 0-.25 0-.36.09l-.66.18-.61.17-.53.16-.45.15h-.1a.2.2 0 0 0-.09 0l-.34.11c-.15 0-.26.09-.35.12l-.13.06Z"
          className="trRachel_svg__cls-2"
        />
      </g>
      <g id="trRachel_svg__skin_shade">
        <path
          d="m142.8 364.55-4.81-.1v-.06c0-.87.29-11.55 0-26.76-.27-12.86-1.22-29.1-2.82-45.22v-.7c-.66-6.54-1.24-13-2.24-19.29a40 40 0 0 1 2.33-22.31 1 1 0 0 1 0-.13 42.9 42.9 0 0 1 5.94-10.29c-.49.84-7.53 13.6-2.43 52.24 0 0 .38 3.69.92 9.56.05.64.12 1.31.18 2 .79 8.85 1.83 21.65 2.47 34.24.21 4.17.38 8.31.47 12.29v.49c.19 5.09.19 9.87-.01 14.04M247.26 97.37s-6.62-15-8.37-22.22c8.1 5 13.18 14 15.56 19a31 31 0 0 1 1.63 3.85c.36.91.72 1.87 1.09 2.85-2.56-2.06-6.14-3-9.83-3.22a2 2 0 0 0-.08-.26M262 116c-.06-.2-.1-.39-.16-.58a21.35 21.35 0 0 0-9.29-.57 115 115 0 0 0-4-14.12 15.2 15.2 0 0 1 6 1.29 7.7 7.7 0 0 1 4.22 4.72l.38-.1h.09c.89 2.72 1.77 5.66 2.62 8.82ZM269.47 179.31a13.5 13.5 0 0 1-.12 1.79c-.34 2.72-1.51 26-31.65 37.39h-.16a75 75 0 0 1-5.76 1.91s-11.32 3.67-32.69 3.87l-1.6 1.69a1 1 0 0 0-.07.1 34 34 0 0 0-2.46 3.95c-.38.69-.76 1.45-1.14 2.25a28 28 0 0 0-2.52 8.48c0 .28-.08.52-.1.68s0 .19 0 .2v.38a4.4 4.4 0 0 0 0 1.36v.11a3 3 0 0 0 0 .32s.32 1.82.81 4c.05.19.09.38.14.57v.12a40 40 0 0 0 1.37 4.7 70 70 0 0 1 1.39 7.18c0 .77-.07 1.44-.12 1.82 0 0-34.5-26-49.79-45 0 0 1.4.47 3.93 1.16h.08c1.8.38 4.58.93 8.08 1.49a198 198 0 0 0 28.19 2.56c18.57.29 40-2.47 55.24-13.77 0 0 10.85-4.58 14.6-28a242.5 242.5 0 0 0 1-34.54 19.22 19.22 0 0 0 10-9.61 274 274 0 0 1 3.35 42.84M122.27 154.06c-2.21 5.73-8.18 3-8.51 2.78-4.43-2.51-2.77-6.57-2.77-6.57 1.66-3.71 4.54-3.71 4.54-3.71-2.23-7.49-10.92-6.93-10.92-6.93.49-.25 9.15-3.7 13.44 7 0 0-5.19 3.18-2 6.89a4.15 4.15 0 0 0 5.43-.21Z"
          className="trRachel_svg__cls-3"
        />
      </g>
      <g id="trRachel_svg__nose">
        <path
          d="M201.52 165.3s8.1-7.24 14.75-1.54c0 0 5.28 5.06-.22 11.89 0 0 9.5-8.16.74-15.05 0 0-6.96-5-15.27 4.7M204.23 172.49s-.82-3.62 5.43-1.09Z"
          className="trRachel_svg__cls-4"
        />
      </g>
      <g id="trRachel_svg__shirt">
        <path
          id="trRachel_svg__shirt-2"
          d="M190.9 364.44H138s.28-10.43-.16-26.64c-.34-12.47-2.66-45.5-2.61-45.47 0-.43-.1-1.34-.1-1.32.08.26.78 2 1 2.49a50 50 0 0 0 3.69 8l.11.19c5.16 8.73 13.25 15 26 14.77.26 0 22.87 1.21 30.13-23-.43 16.24-1.56 32.71-2.64 45.7-1.35 15.07-2.52 25.28-2.52 25.28"
          data-name="shirt"
          style={{
            fill: "#737474",
          }}
        />
        <path
          id="trRachel_svg__shirt_shade"
          d="m142.71 364.5-4.72-.11h-.09s.17-10.55-.27-26.76c-.34-12.47-1-28.29-2.48-45.22 0-.11 0-.15.06-.12s.12.11.22.25.27.44.45.79c1.22 2.24 3.51 7.28 3.69 7.95.1.69.19 1.41.28 2.16 1.1 8.83 2.07 21.64 2.58 34.24.18 4.17.31 8.32.36 12.29v.49c.1 5.13.07 9.88-.08 14.04"
          style={{
            fill: "#606161",
          }}
        />
      </g>
      <g id="trRachel_svg__jacket">
        <g id="trRachel_svg__jacket-2" data-name="jacket">
          <path
            d="M297.64 287.57A44 44 0 0 0 271.76 269l-1.46-.42h-.09l-4.58-1.32-.24-.06-43.64-12.55a58 58 0 0 1 8.32 11.53 75 75 0 0 1 5.75 13.07 80 80 0 0 1 3.29 13.95 91 91 0 0 1 .88 14.32l-.1 1.26-1.1.15-15 2 14.46 15.94.36.41-.18.49L226 364.21a.47.47 0 0 1-.23.27h14l59-.05c.23-2.14 3.61-55.69-1.13-76.86m-21.18 76.83c-.3-1.23 1.55-22.77 1.55-22.77s1.55 22.5 1.55 22.78c-.49.08-3.1-.01-3.1-.01"
            className="trRachel_svg__cls-7"
          />
          <path
            d="M239.11 293.14a91 91 0 0 1 .88 14.32l-.1 1.26-1.1.15-15 2 14.46 15.94.36.41-.18.49-12.43 36.5a.47.47 0 0 1-.23.27h-35.08s1.2-10.39 2.45-25.44c1.08-13 2.21-29.46 2.64-45.7.16-6.55.21-13.07.11-19.31a108 108 0 0 0-.95-13.48 70 70 0 0 0-1.39-7.18q-.59-2.35-1.37-4.7v-.12a18.4 18.4 0 0 1-1-4.58c0-.14 0-.28-.07-.43 3.69-.67 20.27.18 30.42 11l.11.11h.07a58 58 0 0 1 8.32 11.53 75 75 0 0 1 5.75 13.07 80 80 0 0 1 3.33 13.89M278 341.63s1.55 22.5 1.55 22.78c-.49.08-3.1 0-3.1 0-.29-1.24 1.55-22.78 1.55-22.78M298.85 364.44c.13-2.15 3.53-55.7-1.21-76.87.29.4.56.82.83 1.23a.4.4 0 0 1 .08.14 47.7 47.7 0 0 1 5.45 13.52s.14.46.39 1.4a5 5 0 0 1 .13.55c.07.27.15.56.22.9s.19.83.3 1.27c.19.92.42 2 .67 3.24v.28a316 316 0 0 1 3.77 35.11c0 .3 0 .6.05.91 0 .67.05 1.35.08 2 .12 3.38.22 7 .26 10.74v5.51Z"
            className="trRachel_svg__cls-7"
          />
          <path
            d="M298.47 288.8c-.27-.41-.54-.83-.83-1.23.29.35.56.79.83 1.23M309.53 345.21a313 313 0 0 0-3.81-35.32 249 249 0 0 1 3.81 35.32M309.94 364.43v.12l-70.13-.06 59.04-.05zM141.23 239.64a34.3 34.3 0 0 0-5.97 10.36 1 1 0 0 0 0 .13 40 40 0 0 0-2.33 22.31c.88 6 1.61 12.26 2.22 18.6 0 .43.08.85.11 1.27-.05 0-.06 0-.06.12 1.44 16.93 2.14 32.75 2.48 45.22.44 16.21.27 26.76.27 26.76h.05v.06l-131.69.03H0c-.08-42.74 6.66-62.18 6.66-62.18 7.58-28.49 40-37.73 40-37.73l56.66-14.09c17.8-13.59 35.44-12.11 37.65-11.1.25.08.33.17.26.24"
            className="trRachel_svg__cls-7"
          />
          <path
            d="M138 364.39h-.09s.17-10.55-.27-26.76c-.34-12.47-1-28.29-2.48-45.22 0-.11 0-.15.06-.12 1.5 16 2.2 32.29 2.53 45.34.38 15.12.25 25.89.25 26.76M132.88 272.42a40 40 0 0 1 2.33-22.31 45.2 45.2 0 0 0-2.33 22.31"
            className="trRachel_svg__cls-7"
          />
        </g>
        <g id="trRachel_svg__jacket_shade">
          <path
            d="M310 364.49h-11.16v-.06c.13-2.15 3.53-55.7-1.21-76.87.32.06 3.62 3.67 6.74 16.35a5 5 0 0 1 .13.55c.08.29.15.59.22.9s.19.83.3 1.27c.23 1.11.48 2.28.72 3.52.07.36.14.74.2 1.13.05.23.09.46.14.71s.09.49.13.74a261 261 0 0 1 3.35 33.44c0 .67.05 1.35.08 2 .1 2.17.16 4.41.22 6.73v6.51ZM57.23 364.46c-.31-1.23 1.54-22.77 1.54-22.77s1.57 22.78 1.56 22.78c-.5.07-3.1-.01-3.1-.01M279.56 364.41c-.49.08-3.1 0-3.1 0-.3-1.23 1.55-22.77 1.55-22.77s1.55 22.49 1.55 22.77"
            className="trRachel_svg__cls-8"
          />
        </g>
        <g id="trRachel_svg__lapels">
          <path
            d="m240 307.46-.1 1.26-1.1.15-15 2 14.46 15.94.36.41-.18.49-12.44 36.5a.47.47 0 0 1-.23.27.5.5 0 0 1-.38 0h-.06a.46.46 0 0 1-.23-.56l11.41-36.28-14-16.8-.53-.63.8-.15 14.3-3.83c.06-1.2.08-2.4.08-3.61a86 86 0 0 0-.49-9.18 77.7 77.7 0 0 0-2.7-13.66 75 75 0 0 0-5.15-13 56.6 56.6 0 0 0-7.75-11.6.47.47 0 0 1 .54-.75.4.4 0 0 1 .15.09 58 58 0 0 1 8.32 11.53 75 75 0 0 1 5.75 13.07 80 80 0 0 1 3.29 13.95 91 91 0 0 1 .88 14.39M101.76 255.38A56 56 0 0 0 94 267a73.4 73.4 0 0 0-5.16 13 78 78 0 0 0-2.7 13.67 85.4 85.4 0 0 0-.4 12.79l14.26 3.77.8.15-.53.63-14 16.8 11.42 36.28a.49.49 0 0 1-.31.59.46.46 0 0 1-.59-.3L84.34 327.9l-.17-.49.35-.42L99 311.05l-15-2-1.1-.15-.1-1.26v-1.61a88.6 88.6 0 0 1 .91-12.71A79.4 79.4 0 0 1 87 279.36a76.4 76.4 0 0 1 5.75-13.06 57.6 57.6 0 0 1 8.36-11.57.47.47 0 0 1 .67 0 .48.48 0 0 1-.02.65"
            className="trRachel_svg__cls-4"
          />
        </g>
      </g>
      <path
        id="trRachel_svg__mouth"
        d="M192.6 173.23s5 16.87 17.83 19.73c0 0-19.9 15.35-30.54.88 0 0-8.43-13.11 12.71-20.61"
        className="trRachel_svg__cls-9"
      />
      <path
        id="trRachel_svg__hair"
        d="M261.12 40.46c2.65 3.79 2.69 8.6-1.65 11.13-3.46 2-8.58 1.29-8.58 1.29 7.2-4.7 4.8-14.19-2.21-16.85 2.58 4.54.28 8-1.13 9.08-2.3 1.7-7.08 1.53-11.48-1.84-21.23-16.21-49.14-13.46-49.14-13.46C152.5 19.17 135 41.4 135 41.4c-2.41-5.09 3.76-11.59 3.76-11.59-13.76 2.51-13.48 15.4-13.48 15.4s-5.39-7.26-13.51-6.46c-7 .69-10.9 8.17-10.9 8.17 11.08.66 9.13 9.14 9.13 9.14-6.51-6.06-13.5.43-13.5.43 7-.87 8.27 3.49 8.27 3.49-17.61 31.45-3.35 69.56-2.25 72.38 3.94-2 9.41.85 12.87 3.22.48.26 1 .54 1.42.82a55.6 55.6 0 0 1 7.35 5.29 30.2 30.2 0 0 1 8-1.69c-20.92-16.56 4.39-53.84 4.39-53.84 3.54 8.19 8.06 12 12.26 13.72a16 16 0 0 0 2.69.82 16.6 16.6 0 0 0 9.63-.93 24.3 24.3 0 0 1-5.25-1.51 16.7 16.7 0 0 1-2.67-1.39c-11.23-7.24-3.35-23.16-3.35-23.16 20.5-16.35 59 3.37 59 3.37 12.7-7.87 22.63-6.53 30-1.93 8.1 5 13.18 14 15.56 19 .49 1 .65 1.31 1.63 3.78 9-1.48 19.68-12.59 20.3-28 1.1-26.41-15.23-29.47-15.23-29.47m-147.55 41c-9 26.15 0 42.3.41 43-17.09-22.97-.41-42.99-.41-42.99Zm26.53-17.65.17-.27v.16c-4.18 21.5 3 28.44 4.08 29.36-14.52-10.82-5.65-26.91-4.25-29.25m8.53-18.65s22.1-17.92 35.88-3.76c-.51-.29-16.2-8.13-35.88 3.76m33 16.71c27.52 7.9 29.2-8.78 29.2-8.78 1.64 20.52-28.2 9.17-29.2 8.78m35.07-12.52c1.21.57 30.48 14.28 32.94-.44 0 0 1.67 22.09-32.94.44m40.88 41.29c16.69-15.51 9.9-39.35 9.23-41.56 12.65 30.8-8.71 41.32-9.23 41.56"
        style={{
          fill: "#6f3c18",
        }}
      />
      <g id="trRachel_svg__hair_highlights">
        <path
          d="M257.58 90.64c16.69-15.51 9.9-39.35 9.23-41.56 12.65 30.8-8.71 41.32-9.23 41.56M216.7 49.35c1.21.57 30.48 14.28 32.94-.44 0 0 1.67 22.09-32.94.44M181.63 61.87c27.52 7.9 29.2-8.78 29.2-8.78 1.64 20.52-28.2 9.17-29.2 8.78M144.33 93.05c-14.5-10.81-5.63-26.9-4.23-29.24l.17-.27v.16c-4.2 21.49 2.97 28.43 4.06 29.35M114 124.44c-17.09-23-.41-43-.41-43-9.01 26.18 0 42.33.41 43M184.51 41.4c-.56-.29-16.2-8.13-35.88 3.76 0 0 22.1-17.92 35.88-3.76"
          className="trRachel_svg__cls-11"
        />
      </g>
      <g id="trRachel_svg__eyes">
        <g id="trRachel_svg__eye_whites">
          <path
            d="M204.15 134a34.76 34.76 0 0 1-30.4 13.51s-30.41-1.82-26.54-27.88l.13-.06c.09 0 .2-.08.35-.12l.34-.11a1 1 0 0 1 .19-.06l.45-.15c.17 0 .34-.1.53-.16l.61-.17.66-.18c.11 0 .24-.06.36-.09l.39-.1c.39-.09.81-.2 1.25-.29l.43-.1.94-.19.7-.13.26-.05c.36-.06.73-.13 1.1-.18.57-.1 1.16-.18 1.76-.26-.39.4-.76.81-1.11 1.24a8 8 0 0 0-.5.68 11.16 11.16 0 0 0 2.52 15.37 13.28 13.28 0 0 0 7.94 2.59 14 14 0 0 0 1.91-.13c7-1 12-7 11.11-13.48a11 11 0 0 0-.57-2.29c-.08-.23-.18-.45-.27-.67a11 11 0 0 0-1.5-2.47h.07l1.49.36h.17c.28.08.56.15.84.24s.56.16.84.24l.51.15c.53.18 1.06.35 1.59.54l1.29.47c.29.1.57.22.86.33l.48.2.38.16.21.09.64.28.86.4c.58.26 1.16.55 1.73.85l.35.18.45.25c.2.1.39.21.58.32.35.19.69.39 1 .6l.75.45c.29.17.57.35.86.54l.64.42q.33.21.66.45c.1.06.2.14.31.2l.34.25c.13.09.25.19.39.28a.15.15 0 0 1 .06.05l.8.59c.57.42 1.12.85 1.68 1.32.15.12.31.24.46.38a1 1 0 0 1 .14.13l.09.06c.71.6 1.4 1.22 2.09 1.87l.12.11.1.1c.52.49 1 1 1.55 1.52 0 0-.27-.4-.8-1.1l.22.23a2 2 0 0 1 .19.23c.82.77 1.38 1.45 1.97 2.19M266.41 136.38l-.14.31a19.22 19.22 0 0 1-10 9.61 25 25 0 0 1-8.68 2C230 148 224.41 136.19 224 135.27a59 59 0 0 1 10.05-8.08 8 8 0 0 0-.29 1.32 9.37 9.37 0 0 0 1.9 7 11.36 11.36 0 0 0 7.54 4.3 11 11 0 0 0 1.62.12c5 0 9.3-3.13 10.39-7.59a7 7 0 0 0 .17-.91 9.2 9.2 0 0 0-1-5.51 10.6 10.6 0 0 0-4.9-4.7 34 34 0 0 1 4.11-.37 32.2 32.2 0 0 1 9.82 1.18 23.8 23.8 0 0 1 4.86 1.91 26.5 26.5 0 0 1-1.86 12.44"
            className="trRachel_svg__cls-9"
          />
          <path
            d="M234.61 125.76c-.05.08-.09.17-.13.25a9 9 0 0 0-.43 1.18 59 59 0 0 0-10.05 8.08c.26-.34.5-.66.77-1l-.15.21c.11-.12.22-.23.34-.34s.13-.16.21-.24a63 63 0 0 1 3.62-3.53l1-.9 1.12-.93.71-.56c.28-.23.55-.44.83-.65l1-.73c.38-.3.77-.6 1.16-.84"
            className="trRachel_svg__cls-9"
          />
        </g>
        <g id="trRachel_svg__eye_shade">
          <path
            d="M155.92 117.45c.57-.1 1.16-.18 1.76-.26-.39.4-.76.81-1.11 1.24a8 8 0 0 0-.5.68 48.5 48.5 0 0 0-8.89 1.44l.16-1c.09 0 .2-.08.35-.12l.34-.11a1 1 0 0 1 .19-.06l.45-.15c.17 0 .34-.1.53-.16l.61-.17.66-.18c.11 0 .24-.06.36-.09l.39-.1c.39-.09.81-.2 1.25-.29l.43-.1.94-.19.7-.13.26-.05c.38-.08.75-.15 1.12-.2M203.59 133.53A68.2 68.2 0 0 0 179 121.17c-.08-.23-.18-.45-.27-.67a11 11 0 0 0-1.5-2.47h.07l1.49.36h.17c.28.08.56.15.84.24s.56.16.84.24l.51.15c.53.18 1.06.35 1.59.54l1.29.47c.29.1.57.22.86.33l.48.2.38.16.21.09.64.28.86.4c.58.26 1.16.55 1.73.85l.35.18.45.25c.2.1.39.21.58.32.35.19.69.39 1 .6l.75.45c.29.17.57.35.86.54l.64.42q.33.21.66.45c.1.06.2.14.31.2l.34.25c.13.09.25.19.39.28a.15.15 0 0 1 .06.05l.8.59c.57.42 1.12.85 1.68 1.32.15.12.31.24.46.38a1 1 0 0 1 .14.13l.09.06c.71.6 1.4 1.22 2.09 1.87l.12.11.1.1c.52.49 1 1 1.55 1.52 0 0-.27-.4-.8-1.1v-.06l-.25-.31.52.6a2 2 0 0 1 .19.23c.9 1.15 1.32 1.76 1.32 1.76M234.61 125.76c-.05.08-.09.17-.13.25a9 9 0 0 0-.43 1.18 59 59 0 0 0-10.05 8.08l-.09.09.08-.11c.14-.18.47-.57.94-1.13.07-.08.13-.16.21-.24a63 63 0 0 1 3.62-3.53l1-.9 1.12-.93.71-.56c.28-.23.55-.44.83-.65l1-.73c.41-.28.8-.58 1.19-.82M268.34 123.94a23.5 23.5 0 0 0-4.86-1.91 32.1 32.1 0 0 0-9.82-1.19 34 34 0 0 0-4.1.37 10 10 0 0 0-1.43-.58 8.7 8.7 0 0 0-1.77-.44c.5-.15 1-.27 1.48-.38l.67-.15.57-.12.92-.16c.38-.07.75-.11 1.11-.17h.1l.78-.08.51-.05.84-.06a30 30 0 0 1 9.66 1q-.075-.345 0 0a23.4 23.4 0 0 1 5.21 2l.06.52c.01.46.04.95.07 1.4"
            className="trRachel_svg__cls-12"
          />
        </g>
        <g id="trRachel_svg__eyes-2" data-name="eyes">
          <path
            d="M201.91 131.43v-.06l-.25-.31c-4.81-6.12-24.67-28-53.88-14.79l-.53 3.38.13-.06c.09 0 .2-.08.35-.12l.43-.15h.1l.45-.15.53-.16.61-.17.66-.18c.11 0 .24-.06.36-.09l.39-.1.92-.22 1-.22.66-.14h.06l.7-.13.26-.05c.36-.06.72-.13 1.1-.18.57-.1 1.16-.18 1.76-.26-.39.4-.76.81-1.11 1.24a8 8 0 0 0-.5.68 11.16 11.16 0 0 0 2.52 15.37 13.28 13.28 0 0 0 7.94 2.59 14 14 0 0 0 1.91-.13c7-1 12-7 11.11-13.48a11 11 0 0 0-.57-2.29c-.08-.23-.18-.45-.27-.67a11 11 0 0 0-1.5-2.47h.07l1.49.36h.17l1.09.3 1.1.33c.53.18 1.06.35 1.59.54s.87.3 1.29.47.57.22.86.33l.48.2.38.15.21.1.64.28c.29.12.58.26.86.4.58.26 1.16.55 1.73.85l.35.18.45.25c.2.1.39.21.58.32.35.19.69.39 1 .6s.5.29.75.45.57.35.86.54l.64.42q.33.21.66.45c.1.06.2.14.31.2l.34.25.39.28a.15.15 0 0 1 .06.05c.27.19.53.38.8.59.57.42 1.12.85 1.68 1.32.15.12.31.24.46.38l.23.19c.71.6 1.4 1.22 2.09 1.87l.12.11.1.1c.52.49 1 1 1.55 1.52.08.04-.19-.36-.72-1.06m-29.22-6.88a1.74 1.74 0 0 1 .2-3.48 1.74 1.74 0 1 1-.2 3.48"
            className="trRachel_svg__cls-4"
          />
          <path
            d="M174.54 122.91a1.75 1.75 0 0 1-1.85 1.64 1.74 1.74 0 0 1 .2-3.48 1.75 1.75 0 0 1 1.65 1.84M185.73 120.78l.21.1-.21-.09ZM198.57 128.7l.23.19-.09-.06a1 1 0 0 0-.16-.14ZM201.16 131l-.1-.09ZM267.76 118.14a24 24 0 0 0-6-2.74 21.5 21.5 0 0 0-9.29-.57c-13.37 2-24.49 15.28-27.24 18.79l-.23.38c-.09.1-.15.19-.21.26s-.13.18-.15.21.22-.23.34-.34.13-.16.21-.24c1.21-1.28 2.43-2.44 3.62-3.52l1-.91c.38-.32.75-.63 1.12-.92l.71-.57c.28-.23.55-.44.83-.65s.66-.5 1-.73.79-.56 1.18-.82c-.05.08-.09.17-.13.25a9 9 0 0 0-.43 1.18 9 9 0 0 0-.29 1.32 9.4 9.4 0 0 0 1.9 7 11.36 11.36 0 0 0 7.54 4.3 11 11 0 0 0 1.62.12c5 0 9.3-3.13 10.39-7.58a6 6 0 0 0 .17-.9 9.3 9.3 0 0 0-.95-5.52 10.65 10.65 0 0 0-4.9-4.7 10 10 0 0 0-1.43-.58 9.6 9.6 0 0 0-1.77-.45c.5-.14 1-.26 1.48-.37l.67-.16.57-.11.92-.16c.38-.07.75-.11 1.11-.17h.09l.79-.09h.51l.84-.06a30.3 30.3 0 0 1 9.66 1 25.7 25.7 0 0 1 5.22 2h.05Zm-18.9 5.7a1.75 1.75 0 1 1-.2 3.49 1.75 1.75 0 1 1 .2-3.49"
            className="trRachel_svg__cls-4"
          />
          <path
            d="M250.51 125.68a1.75 1.75 0 1 1-1.65-1.84 1.75 1.75 0 0 1 1.65 1.84"
            className="trRachel_svg__cls-4"
          />
        </g>
        <g id="trRachel_svg__eye_highlights">
          <path
            d="M174.54 122.91a1.75 1.75 0 0 1-1.85 1.64 1.74 1.74 0 0 1 .2-3.48 1.75 1.75 0 0 1 1.65 1.84M250.51 125.68a1.75 1.75 0 1 1-1.65-1.84 1.75 1.75 0 0 1 1.65 1.84"
            className="trRachel_svg__cls-9"
          />
        </g>
      </g>
      <g id="trRachel_svg__eyebrows">
        <path
          d="m144.65 104.66-.36.33ZM144.29 105l.36-.33ZM151.49 100.7a43.7 43.7 0 0 0-6.36 4.8l-.33.31-1.31-1.36a67 67 0 0 1 5.27-4.52 16 16 0 0 0 2.73.77M197.78 104.12l-.62.71-.72-.62c-15.77-13.61-30.82-10.69-40.57-5.95a16.7 16.7 0 0 1-2.67-1.39c24.25-14.86 44 2.31 44.23 2.51a3.07 3.07 0 0 1 1.23 2.15 3.8 3.8 0 0 1-.88 2.59M260.54 106.23l-1.36.36h-.09l-.38.1a7.7 7.7 0 0 0-4.22-4.72 15.2 15.2 0 0 0-6-1.29c-7.69-.3-16.66 3.05-16.78 3.1l-.75.28-.4-.69a3.72 3.72 0 0 1-.45-2.65 2.38 2.38 0 0 1 1.22-1.45l.19-.08a54.3 54.3 0 0 1 15.8-1.63c3.61.26 7.11 1.12 9.66 3.09.06 0 .12.08.17.13a9.6 9.6 0 0 1 3.26 4.92Z"
          className="trRachel_svg__cls-4"
        />
      </g>
      <g id="trRachel_svg__earring">
        <circle
          id="trRachel_svg__base"
          cx={116.68}
          cy={164.15}
          r={4.19}
          className="trRachel_svg__cls-9"
        />
        <path
          id="trRachel_svg__bottom_highlight"
          d="M116 167.45c-.37 0 .72.2 1.11.2a3.2 3.2 0 0 0 3.2-3.2 2.7 2.7 0 0 0-.42-1.57 4.43 4.43 0 0 1-.74 3.15 4.16 4.16 0 0 1-3.15 1.42"
          style={{
            fill: "#bee1f7",
          }}
        />
        <path
          id="trRachel_svg__top_highlight"
          d="M117.15 161.15h-.08a2.59 2.59 0 0 0-3.34.91 2.68 2.68 0 0 0-.12 3.22 3.62 3.62 0 0 1 .72-3 3 3 0 0 1 2.82-1.13"
          style={{
            fill: "#ffe6c5",
          }}
        />
      </g>
    </svg>
  );
}
SvgTrRachel.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
};
export default SvgTrRachel;
