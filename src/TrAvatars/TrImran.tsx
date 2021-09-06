import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function TrImran({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 295.19 352.97"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trImran_svg__cls-3{fill:#725355}.trImran_svg__cls-4{fill:#555655}.trImran_svg__cls-5{fill:#333}.trImran_svg__cls-6{fill:#69441a}.trImran_svg__cls-7{fill:#2a1c0f;mix-blend-mode:multiply;opacity:.29}.trImran_svg__cls-8{fill:#010101}.trImran_svg__cls-9{fill:#fff}.trImran_svg__cls-10{fill:#c4c4c4}"
          }
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="trImran_svg__Layer_1" data-name="Layer 1">
          <path
            id="trImran_svg__turtleneck"
            d="M141.39 312.59h.05c.06.04.04.02-.05 0zm66 21.32s13.55-3.71 24.78 2.18c0-11-.9-20.65-.9-20.65-.43-5.7-.77-13.46-1-20.14a111.88 111.88 0 00-24.41-6.83s15-.47 24.41 6.73c-.27-7.71-.4-14-.4-14 0-3-.13-5.77-.3-8.34-2.87-1-16.42-5.81-24.56-7.23 1.06-.06 16.39 1 24.56 7a100.89 100.89 0 00-2.88-18.74c-1.4-.63-11.36-5-28.07-8.49a75.91 75.91 0 00-5.54-8.95.07.07 0 00.06 0 .12.12 0 00.08 0h.12a3.13 3.13 0 01-.5-1.88 1.48 1.48 0 010-.21 3.32 3.32 0 01.06-.44c.39-2 2.23-4 3.17-6.39s.08-.2.13-.31a.08.08 0 000-.05.27.27 0 000-.12 7.19 7.19 0 00.29-1.3 11 11 0 00-.56-4.41c0-.06 0-.12-.05-.17-.64-2.17-1.48-4.23-1.12-6.11l-.64-.7c-.52-.59-1-1.19-1.51-1.8s-.83-1-1.25-1.51c-.19 3.11-1.51 6.2-3.4 7.51l-1.82 1.26.26-2.2a8.39 8.39 0 00-3.77-7.78 8.16 8.16 0 00-2.92 5.68l-.06.89-.88.05c-6.63.39-12.71-2.6-18.56-5.5a82 82 0 00-8.43-3.78 76.16 76.16 0 00-12.25-3.18c-1.6-.29-3.25-.59-4.88-.92a31.38 31.38 0 001.79 4.21c.21.44.45.91.7 1.4a2.91 2.91 0 01.31.93 3.26 3.26 0 01-.05 1.39 1.55 1.55 0 01-.06.23 5.29 5.29 0 01-.39 1.09c-1.2 2.58-4 5.26-4.79 7.56-2.34 6.7 2.88 11 1.5 12a34.5 34.5 0 01-5.32 3.34.89.89 0 01.07.28 3.54 3.54 0 00-.58.69c-1.27 1.87-1.41 5.29-.86 9.7l-1.17.13v.15l1.2-.18c.77 6.09 2.88 14.06 5.23 22.4h-.31v.1l.3-.06c2.08 7.36 4.35 15 6.06 21.95h-.22a.14.14 0 000 .07h.2a101 101 0 012.46 12.69c3.28 29.55 2.34 44.77 2 48.58a16.56 16.56 0 00-2.08-.54c0 .12 0 .23-.05.33.63.07 1.24.15 1.85.25h.27c0 .18 0 .33-.05.46l64-.06c0-.33.06-.84.1-1.53v-.14c2.24-.77 14-3.38 24.47 1.12a131.87 131.87 0 00.82-15.39 76.1 76.1 0 00-24.69-2.32z"
            fill="#9d7373"
          />
          <g id="trImran_svg__turtleneck_shade" data-name="turtleneck shade">
            <path
              id="trImran_svg__neck_shade"
              data-name="neck shade"
              className="trImran_svg__cls-3"
              d="M196 227.37a2.72 2.72 0 00.12-.25 36 36 0 01-2.74 5.57 2.68 2.68 0 00-.56 1.1 3.32 3.32 0 00-.06.44 1.48 1.48 0 000 .21 3.9 3.9 0 00.52 1.87l-.11.07a.12.12 0 01-.08 0 .07.07 0 01-.06 0c-10.44 6.56-24.5 2.69-24.5 2.69 5.83.39 13.74-1.29 13.74-1.29 10.62-3.5 3.88-3.37 3.88-3.37-28.36 2.14-39.18-4.42-39.75-4.78 6.23 1.8 21.48 1.54 21.48 1.54 23 1.29 27.31-2.38 28.14-3.86-.02.08-.02.07-.02.06z"
            />
            <path
              className="trImran_svg__cls-3"
              d="M136.44 207.32c-.14-.27 6.75 4.73 33.48 8.69 0 0-21.8-.19-33-3.66 0 0 .91-1.8.54-2.7zM147.58 324.67v27.5h-4.88c0-.13 0-.28.05-.46h-.27c-.61-.1-1.22-.18-1.85-.25 0-.1 0-.21.05-.33a16.56 16.56 0 012.08.54c.34-3.81 1.28-19-2-48.58a101 101 0 00-2.46-12.69h-.2a.14.14 0 010-.07h.22c-1.71-6.93-4-14.59-6.06-21.95l-.3.06v-.1h.31c-2.35-8.34-4.46-16.31-5.23-22.4l-1.16.27v-.15L127 246c-.55-4.41-.41-7.83.86-9.7a114.22 114.22 0 009.71 36.13s10.01 18.43 10.01 52.24z"
            />
          </g>
          <g id="trImran_svg__sweater">
            <path
              id="trImran_svg__sweater-2"
              data-name="sweater"
              className="trImran_svg__cls-4"
              d="M232.32 352.63l62.87.13c-1.62-47.72-9-67.06-9-67.06-7.74-24.46-29.09-30.09-29.09-30.09l-33.31-11.27c-20.14-10.93-28.89-8.6-30.49-8h-.12a.12.12 0 01-.08 0 .07.07 0 01-.06 0 75.91 75.91 0 015.54 8.95c1.36.12 19.7 1.9 28.06 8.44-.42-1.61-.84-3-1.22-4.13-1.08-3.27-1.85-4.8-1.56-5.08 0 0 1.54 3 3.21 5.62.32.49.64 1 .95 1.4 0 0 5.41 9.39 4.2 38.55a187.5 187.5 0 001.1 27.95s2.07 17.95-.9 33.95zM269 318.58s1.5 30.26 1.64 33.5v.28a31.48 31.48 0 01-3.27 0v-.26c-.22-3.56 1.63-33.52 1.63-33.52z"
            />
            <path
              id="trImran_svg__sweater-3"
              data-name="sweater"
              className="trImran_svg__cls-4"
              d="M231.31 351.64a3.93 3.93 0 01-.06.48 4.43 4.43 0 01-.06.51l-24.48-.05v-.43c0-.33.06-.84.1-1.53 9.77-1.73 22.8.69 24.5 1.02z"
            />
            <path
              className="trImran_svg__cls-4"
              d="M232.14 336.21a131.87 131.87 0 01-.82 15.39c-10.47-4.5-22.23-1.89-24.47-1.12.17-2.92.45-8.75.51-16.57a76.1 76.1 0 0124.78 2.3zM229.53 272.67c-8.17-6-23.5-7.09-24.56-7-.09-.93-.21-1.77-.34-2.47a62.82 62.82 0 00-6-17.74c16.71 3.5 26.67 7.86 28.07 8.49a100.89 100.89 0 012.83 18.72z"
            />
            <path
              className="trImran_svg__cls-4"
              d="M232.14 336.09c-11.23-5.89-24.78-2.18-24.78-2.18 0-6.31-.05-13.92-.47-22.33a.11.11 0 000-.05c-.22-4.45-.53-9.12-.95-13.95-.21-2.37.09-22.39-1-31.92 8.14 1.42 21.69 6.2 24.56 7.23.17 2.57.27 5.34.3 8.34 0 0 .13 6.26.4 14-9.44-7.2-24.41-6.73-24.41-6.73a111.88 111.88 0 0124.41 6.83c.23 6.68.57 14.44 1 20.14.04-.03.95 9.59.94 20.62z"
            />
            <path
              id="trImran_svg__rt_side_sweater"
              data-name="rt side sweater"
              className="trImran_svg__cls-4"
              d="M113 316.24c-.71-18.21-7.69-38.91-7.69-38.91-2.72-8.3-5.58-27.9-6-31.11 0-.29-.07-.45-.07-.45-.79-4.22-.15-5.63.36-6.1-5.6 1.59-42.7 12.33-47.13 13.42-1.28.32-27 7.15-38 25.31 0 0-13 18.63-14.49 74.57l114.21-.28v-.45c-.07-18.24-1.19-36-1.19-36zm-64.25 36.12a31.48 31.48 0 01-3.27 0c-.29-2.22 1.63-33.73 1.63-33.73s1.59 32.09 1.65 33.72z"
            />
            <path
              className="trImran_svg__cls-4"
              d="M127.84 236.25c-1.27 1.87-1.41 5.29-.86 9.7l-1.17.13c-4.11.5-17.11 2.44-24 7.67-.51-2.93-.93-5.61-1.23-7.91a57.39 57.39 0 01-.57-6.31l.19-.06c6.74-3.94 26.83-7.62 28.14-4.19a.89.89 0 01.07.28 3.54 3.54 0 00-.57.69z"
            />
            <path
              className="trImran_svg__cls-4"
              d="M132.22 268.36h-.31c-2.7.11-17.34 1.73-25 8.67-2.1-7.77-3.86-16.08-5.08-23.05a129.35 129.35 0 0124-7.76L127 246c.76 6.05 2.87 14 5.22 22.36z"
            />
            <path
              className="trImran_svg__cls-4"
              d="M138.3 290.36h-.22c-2.4 0-16.5.2-25.91 7.84-2.3-10.76-5.13-20.78-5.13-20.78l-.09-.33c1.21-.51 16.06-6.74 25-8.61l.3-.06c2.07 7.35 4.34 15.01 6.05 21.94z"
            />
            <path
              className="trImran_svg__cls-4"
              d="M142.76 351.65a16.56 16.56 0 00-2.08-.54c-4.42-.91-14.92-2.2-24.72 1.13h-.6c.25-4.61.3-9.94.26-15.07a94.83 94.83 0 0126.28-2.25l1.1.05s-.39-.1-1.1-.23c-3.67-.71-15.81-2.5-26.28 2.23-.06-8.41-.4-16.26-.55-19.54a93.39 93.39 0 0126.32-4.8h0a41.8 41.8 0 00-26.33 4.63c0-.9-.07-1.4-.07-1.4a133.46 133.46 0 00-2.77-17.4 114.55 114.55 0 0125.88-8h.2a101 101 0 012.46 12.69c3.24 29.47 2.34 44.69 2 48.5z"
            />
            <path
              className="trImran_svg__cls-4"
              d="M142.75 351.72c0 .18 0 .33-.05.46v.41l-27.32.07a.22.22 0 010-.08c.55-.09 1.38-.22 2.44-.37 4.92-.7 14.61-1.75 22.82-.8.63.07 1.24.15 1.85.25z"
            />
          </g>
          <g id="trImran_svg__sweater_shade" data-name="sweater shade">
            <path
              id="trImran_svg__left_ribbing"
              data-name="left ribbing"
              className="trImran_svg__cls-5"
              d="M232.41 352.12l-.09.51H231.19a4.43 4.43 0 00.06-.51 3.93 3.93 0 00.06-.48c-1.7-.33-14.73-2.75-24.47-1v-.14c2.24-.77 14-3.38 24.47 1.12a131.87 131.87 0 00.82-15.39 76.1 76.1 0 00-24.78-2.3s13.55-3.71 24.78 2.18c0-11-.9-20.65-.9-20.65-.43-5.7-.77-13.46-1-20.14a111.88 111.88 0 00-24.41-6.83s15-.47 24.41 6.73c-.27-7.71-.4-14-.4-14 0-3-.13-5.77-.3-8.34-2.87-1-16.42-5.81-24.56-7.23 1.06-.06 16.39 1 24.56 7a100.89 100.89 0 00-2.88-18.74c-1.4-.63-11.36-5-28.07-8.49 1.36.12 19.7 1.9 28.06 8.44-.42-1.61-.84-3-1.22-4.13-1.08-3.27-1.85-4.8-1.56-5.08 0 0 1.54 3 3.21 5.62.32.49.64 1 .95 1.4 0 0 5.41 9.39 4.2 38.55a187.5 187.5 0 001.1 27.95s2.06 17.95-.91 33.95z"
            />
            <path
              className="trImran_svg__cls-5"
              d="M206.78 311.58c-.73 0 12.71-2.21 24.46 3.86a95.56 95.56 0 00-24.46-3.86zM48.75 352.3v.06a31.48 31.48 0 01-3.27 0c-.29-2.22 1.63-33.73 1.63-33.73s1.58 32.04 1.64 33.67zM270.63 352.36a31.48 31.48 0 01-3.27 0v-.26c-.18-3.55 1.65-33.51 1.65-33.51s1.5 30.26 1.64 33.5c-.02.16-.02.25-.02.27zM115.62 337.17c0 5.13 0 10.46-.26 15.07v.22c.21-.08.41-.16.62-.22 9.8-3.33 20.3-2 24.72-1.13 0 .12 0 .23-.05.33-8.21-.95-17.9.1-22.82.8-1.06.15-1.89.28-2.44.37a.22.22 0 000 .08l-1.12.13v-.59c-.09-18.27-1.25-36-1.25-36-.71-18.21-7.69-38.91-7.69-38.91-2.72-8.3-5.58-27.9-6-31.11 0-.29-.07-.45-.07-.45-.79-4.22-.15-5.63.36-6.1a.8.8 0 01.49-.24v.1a57.39 57.39 0 00.57 6.31c.3 2.3.72 5 1.23 7.91 6.88-5.23 19.88-7.17 24-7.67v.15a129.35 129.35 0 00-24 7.76c1.22 7 3 15.28 5.08 23.05 7.63-6.94 22.27-8.56 25-8.67v.1c-8.93 1.87-23.78 8.1-25 8.61l.09.33s2.83 10 5.13 20.78c9.41-7.64 23.51-7.86 25.91-7.84a.14.14 0 000 .07 114.55 114.55 0 00-25.88 8 133.46 133.46 0 012.77 17.4s0 .5.07 1.4a41.8 41.8 0 0126.33-4.63 93.39 93.39 0 00-26.32 4.8c.15 3.28.49 11.13.55 19.54 10.47-4.73 22.61-2.94 26.28-2.23.71.13 1.1.23 1.1.23l-1.1-.05a94.83 94.83 0 00-26.3 2.3z"
            />
          </g>
          <g id="trImran_svg__skin">
            <path
              id="trImran_svg__face"
              className="trImran_svg__cls-6"
              d="M261 145c-.06-1.35-.12-2.68-.19-4a.35.35 0 000-.12c-.36-6.58-.92-12.77-1.61-18.56a48.92 48.92 0 01-7.19.58h-1c-4.69-.31-24-2.73-26.29-21.2a5.43 5.43 0 01-.05-.9 14 14 0 00-3.71-1 29.57 29.57 0 00-4.64-.23c-1.58.07-3.19.2-4.81.42-.81.1-1.62.22-2.44.34l-1.22.2-.61.1h-.07a7.37 7.37 0 01-.12 1.62c-1.48 8.29-7.43 21.78-30.33 21.78-1 0-2 0-3.11-.08-.24 0-26.53-.7-29.84-24.25h-.33l-17.2-.23a66.85 66.85 0 0053.61 61.22 26.39 26.39 0 0117.21-17.29 51.23 51.23 0 0110.86-1.64c2.07-.16 4.22-.33 6.28-.65 1-.15 2-.34 3-.53a34.65 34.65 0 017.77-.85 21.11 21.11 0 0114.66 7.43 32.57 32.57 0 016.89 13.84 17.69 17.69 0 002.56-.82 5.62 5.62 0 00.56-.25 18.93 18.93 0 0010.45-11.82l.06-5.29.84 2.1zm-34.3 8.59c-.38-.27-.75-.52-1.13-.74a17.71 17.71 0 00-9-2.48 30.6 30.6 0 00-13.89 3.42c-.22.11-.44.24-.65.36a23.17 23.17 0 00-10.85 14c21.52 5.41 24.41-4.59 24.41-4.59 7.12 9.29 18 .56 18 .56a18.19 18.19 0 00-6.87-10.54zM253.88 93c-.57-2.32-1.17-4.53-1.77-6.65H252c-2.37.15-4.88.42-7.45.84a63.17 63.17 0 00-11.88 3 1 1 0 01-.39.07 1.33 1.33 0 01-.74-.24c-1-.69-2.62-3.64-2.77-7.8v-.75l.56-.18a24.9 24.9 0 015.95-3.15 1.41 1.41 0 011.14.06 1.92 1.92 0 01.85 1.32c.56-.28 1.47-.77 2.23-1.18s1.39-.75 1.9-1a11.24 11.24 0 011.25-.58 1.59 1.59 0 012.15 1.13c.63-.26 1.63-.77 2.53-1.23l1.36-.69a.31.31 0 00.1 0 136.7 136.7 0 00-6.23-14.84c-.2-.39-.36-.72-.51-1s-.22-.45-.33-.66c-1.15-2.21-2.13-3.91-2.86-5.09-.88-1.42-1.39-2.11-1.39-2.11l-.14-.2c-19.66-27.33-51.55-32.75-51.55-32.75a94.71 94.71 0 00-17.58-.82c-.09.66-.18 1.06-.18 1.11 0 .34-.95.34-.95.34l-.23-.26v.26a7.18 7.18 0 00-2.09-1.2c-41.53 3.78-58.44 36.84-58.44 36.84-5.32 9-7.24 24.53-7.44 41.14l44.48-2.81a2.67 2.67 0 011.1.14h.05a12.42 12.42 0 011-1.67l.41-.49.28-.33a.6.6 0 00.08-.08.1.1 0 00.05 0l.41-.39a8.87 8.87 0 013-1.63l.46-.13a1 1 0 01.25-.06h.26a7.93 7.93 0 01.89-.13h.17l48.11 3.76h.14a8 8 0 015.56 3.07 8.09 8.09 0 011.43 3.31l.34-.19c.39-.21.78-.39 1.18-.57a24 24 0 012.45-.91 23 23 0 015.18-1 14.59 14.59 0 015.39.52A9.05 9.05 0 01224.9 99a6.85 6.85 0 011.37-2.56 7 7 0 015-2.45l3.18-.13 11.76-.48 7.61-.3h.06V93zm-49.52-3.86a1.29 1.29 0 01-1.21 1 1.16 1.16 0 01-.35-.06 244.47 244.47 0 00-26.06-5.92c-14.19-2.28-30.25-.32-30.41-.3l-2.42.3 5.64-7.16.16-.1c.21-.12 5.24-3 13.87-.72 1.36.35 1.69-.15 2.19-.92a2.26 2.26 0 011.64-1.26c1.46-.11 3.44.68 5.36 1.45a13.22 13.22 0 003.79 1.17 1.93 1.93 0 00.48-.06 3.31 3.31 0 00-.13-.41 1.54 1.54 0 01.09-1.65 1.28 1.28 0 011.34-.33c2 .46 4.64 1.1 7.15 1.72a1.06 1.06 0 01.1-.84c.47-.83 1.52-.55 2-.41a18.56 18.56 0 015.06 2.43 25.61 25.61 0 002.73 1.54 1.06 1.06 0 01.21-.67c.52-.72 1.43-.4 1.78-.28a71.41 71.41 0 016.9 2.75c1.63.75.4 7.98.09 8.75zm.24 9.07c-1.49-.42-8.67-2.2-25-2.62a6.78 6.78 0 011.16 3.73c0 4.77-5.32 8.65-11.86 8.65s-11.9-3.86-11.9-8.63a6.88 6.88 0 011.45-4.14c-6.11.26-10.31 1-12.11 1.93a2.38 2.38 0 00-.79.58 5 5 0 000 .67v.32c1.1 9.39 6.08 16.15 14.79 20.08a37.59 37.59 0 0013.22 3.15c22.77 1.14 29.65-10.28 31.41-20.05a6.09 6.09 0 00-.37-3.65zm-53-8.21h-.11.11z"
            />
            <path
              id="trImran_svg__ear"
              className="trImran_svg__cls-6"
              d="M105.26 117.61l-.69-1.53a142.82 142.82 0 01-5.88-14.36c-.13-.4-.24-.76-.34-1.09-.9-.53-1.89-1.07-2.93-1.58a31.45 31.45 0 00-3-1.32c-4.86-1.84-10.22-2.4-13.71 1.56 0 0-9.11 13.68 10 34.41 0 0 5.51 9.2 11.62 10.41a.86.86 0 01.62-.32l.41-.11a7.29 7.29 0 001.43-.55c3.47-1.75 6-6 6.26-10.53.35-5.31-1.78-10.52-3.79-14.99zm-5.1 12.15a8.75 8.75 0 01-4.79-.8c-4.68-2.64-2.92-6.93-2.92-6.93 1.75-3.91 4.78-3.91 4.78-3.91-2.35-7.9-11.52-7.32-11.52-7.32.5-.25 8.86-3.58 13.54 5.94.22.45.44.92.64 1.43a5.65 5.65 0 00-.54.38c-1.28 1-4.26 3.76-1.54 6.89a4.8 4.8 0 002.07.91 4.19 4.19 0 003.66-1.13l.81.81a5.37 5.37 0 01-4.19 3.73z"
            />
          </g>
          <g id="trImran_svg__face_shade" data-name="face shade">
            <path
              id="trImran_svg__face_shade-2"
              data-name="face shade"
              className="trImran_svg__cls-7"
              d="M248.67 76l-1.36.69c-.9.46-1.9 1-2.53 1.23a1.59 1.59 0 00-2.15-1.13 11.24 11.24 0 00-1.25.58 184 184 0 00-11.06-25.16s-6.3-14.8-26.27-26.8c1.22.5 21.08 9 34.36 28.42 0 0 .23.29.41.5l.21.25a52.76 52.76 0 012.65 4.84q.17.31.33.66c.15.28.31.61.51 1A153 153 0 01248.67 76z"
            />
            <path
              id="trImran_svg__face_shade-3"
              data-name="face shade"
              className="trImran_svg__cls-7"
              d="M253.83 93.08l-7.61.3q-.75-3-1.65-6.13c2.57-.42 5.08-.69 7.45-.84.61 2.11 1.22 4.33 1.81 6.64-.01-.05 0 .01 0 .03z"
            />
            <path
              id="trImran_svg__face_shade-4"
              data-name="face shade"
              className="trImran_svg__cls-7"
              d="M261 144.91l-.84-2.1-.06 5.29a18.93 18.93 0 01-10.45 11.82 162 162 0 001.35-37.08h1a48.92 48.92 0 007.19-.58c.71 5.83 1.26 12 1.58 18.57a.35.35 0 010 .12c.12 1.33.23 2.64.23 3.96z"
            />
            <path
              id="trImran_svg__ear_shade"
              data-name="ear shade"
              className="trImran_svg__cls-6"
              d="M104.35 126a5.37 5.37 0 01-4.19 3.73 8.75 8.75 0 01-4.79-.8c-4.68-2.64-2.92-6.93-2.92-6.93 1.75-3.91 4.78-3.91 4.78-3.91-2.35-7.9-11.52-7.32-11.52-7.32.5-.25 8.86-3.58 13.54 5.94.22.45.44.92.64 1.43a5.65 5.65 0 00-.54.38c-1.28 1-4.26 3.76-1.54 6.89a4.8 4.8 0 002.07.91 4.19 4.19 0 003.66-1.13z"
            />
            <path
              className="trImran_svg__cls-7"
              d="M104.35 126a5.37 5.37 0 01-4.19 3.73 8.75 8.75 0 01-4.79-.8c-4.68-2.64-2.92-6.93-2.92-6.93 1.75-3.91 4.78-3.91 4.78-3.91-2.35-7.9-11.52-7.32-11.52-7.32.5-.25 8.86-3.58 13.54 5.94.22.45.44.92.64 1.43a5.65 5.65 0 00-.54.38c-1.28 1-4.26 3.76-1.54 6.89a4.8 4.8 0 002.07.91 4.19 4.19 0 003.66-1.13z"
            />
          </g>
          <path
            id="trImran_svg__rt_eyebrow"
            data-name="rt eyebrow"
            className="trImran_svg__cls-8"
            d="M204.36 89.16a1.29 1.29 0 01-1.21 1 1.16 1.16 0 01-.35-.06 244.47 244.47 0 00-26.06-5.92c-14.19-2.28-30.25-.32-30.41-.3l-2.42.3 5.64-7.18.16-.1c.21-.12 5.24-3 13.87-.72 1.36.35 1.69-.15 2.19-.92a2.26 2.26 0 011.64-1.26c1.46-.11 3.44.68 5.36 1.45a13.22 13.22 0 003.79 1.17 1.93 1.93 0 00.48-.06 3.31 3.31 0 00-.13-.41 1.54 1.54 0 01.09-1.65 1.28 1.28 0 011.34-.33c2 .46 4.64 1.1 7.15 1.72a1.06 1.06 0 01.1-.84c.47-.83 1.52-.55 2-.41a18.56 18.56 0 015.06 2.43 25.61 25.61 0 002.73 1.54 1.06 1.06 0 01.21-.67c.52-.72 1.43-.4 1.78-.28a71.41 71.41 0 016.9 2.75c1.63.75.4 7.98.09 8.75z"
          />
          <path
            id="trImran_svg__left_eyebrow"
            data-name="left eyebrow"
            className="trImran_svg__cls-8"
            d="M271.12 87.18l-1.36-.27a88 88 0 00-17.65-.54H252c-2.37.15-4.88.42-7.45.84a63.17 63.17 0 00-11.88 3 1 1 0 01-.39.07 1.33 1.33 0 01-.74-.24c-1-.69-2.62-3.64-2.77-7.8v-.75l.56-.18a24.9 24.9 0 015.95-3.15 1.41 1.41 0 011.14.06 1.92 1.92 0 01.85 1.32c.56-.28 1.47-.77 2.23-1.18s1.39-.75 1.9-1a11.24 11.24 0 011.25-.58 1.59 1.59 0 012.15 1.13c.63-.26 1.63-.77 2.53-1.23l1.36-.69a.31.31 0 00.1 0 17.49 17.49 0 011.62-.72c1.22-.43 2 .55 2.54 1.14a4.4 4.4 0 00.46.49 29.7 29.7 0 014.82-.9c3.71-.41 4.32 0 4.65.58a1.25 1.25 0 01-.3 1.59l-.18.17h.19c3.15-.49 4.42.3 5.55 1l.32.23c1.76 1.73 2.34 5 2.5 6.33z"
          />
          <g id="trImran_svg__nose">
            <path
              id="trImran_svg__nostril"
              className="trImran_svg__cls-8"
              d="M212.47 135.67s-.7-3.92 4.68-1.18z"
            />
            <path
              id="trImran_svg__nose-2"
              data-name="nose"
              className="trImran_svg__cls-8"
              d="M209.77 128s8.56-7.64 15.57-1.63c0 0 5.57 5.34-.24 12.55 0 0 10-8.61.78-15.88 0 .01-7.34-5.27-16.11 4.96z"
            />
          </g>
          <path
            id="trImran_svg__mouth"
            className="trImran_svg__cls-8"
            d="M226.72 153.58c-11.32 16-21.23 5.53-24.66.56.21-.12.43-.25.65-.36 8.41 6.95 18 2.32 22.88-.94.41.22.75.47 1.13.74z"
          />
          <path
            id="trImran_svg__beard_and_glasses"
            data-name="beard and glasses"
            className="trImran_svg__cls-8"
            d="M281.39 97.21a6.91 6.91 0 00-6.9-4.93l-20.59.83h-.06l-7.61.3-11.76.48-3.18.13a7 7 0 00-5 2.45A6.85 6.85 0 00224.9 99a9.05 9.05 0 00-3.34-1.83 14.59 14.59 0 00-5.39-.52 23 23 0 00-5.18 1 24 24 0 00-2.45.91c-.4.18-.79.36-1.18.57l-.34.19a8.09 8.09 0 00-1.53-3.44 8 8 0 00-5.56-3.07h-.14L151.68 89h-.17a7.93 7.93 0 00-.89.13h-.26a1 1 0 00-.25.06l-.46.13a8.87 8.87 0 00-3 1.63l-.41.39a.1.1 0 01-.05 0 .6.6 0 01-.08.08l-.28.33-.41.49a12.42 12.42 0 00-1 1.67h-.05a2.67 2.67 0 00-1.1-.14l-44.46 2.91-5.47.32a1 1 0 00-.89.71 31.45 31.45 0 013 1.32h2.52l.07.29c.09.39.2.79.34 1.26s.21.69.34 1.09a142.82 142.82 0 005.88 14.36l.69 1.53c2 4.47 4.14 9.68 3.81 15-.28 4.55-2.79 8.78-6.26 10.53a7.29 7.29 0 01-1.43.55l-.41.11a.86.86 0 00-.62.32c-.39.59-.25 2.48.3 9.66 0 .73.09 1.26.1 1.44v.61c.52 9.52 1 18.51 5.74 27.16A38.73 38.73 0 00126 200.66a50.55 50.55 0 008.11 2.33l.51.11c1.63.33 3.28.63 4.88.92a76.16 76.16 0 0112.28 2.92 82 82 0 018.43 3.78c5.85 2.9 11.93 5.89 18.56 5.5l.88-.05.06-.89a8.16 8.16 0 012.92-5.68 8.39 8.39 0 013.77 7.78l-.26 2.2 1.82-1.26c1.89-1.31 3.21-4.4 3.4-7.51.42.49.83 1 1.25 1.51s1 1.21 1.51 1.8l.64.7.62.69.46-1.83c.12-.48.24-.95.35-1.43a11.92 11.92 0 01.2 6.82l-.51 1.86c0 .05 0 .11.05.17l1.84-.86a12.46 12.46 0 006.87-10.17 14.27 14.27 0 013.93 11.33l-.25 2.12 1.79-1.16a25.39 25.39 0 0011.05-16.88 10.73 10.73 0 011.4 4.92l.17 2.73 1.63-2.19 6.56-8.79.53-.71a17 17 0 014.21 11.81l-.09 2.12 1.69-1.28a81 81 0 0014.22-13.62 64.2 64.2 0 009.52-15.54c5.21-12.41 5.62-26 1.13-37.28L261 145v-.07l-.84-2.1-.06 5.29a18.93 18.93 0 01-10.45 11.82 5.62 5.62 0 01-.56.25 17.69 17.69 0 01-2.56.82 32.57 32.57 0 00-6.89-13.84 21.11 21.11 0 00-14.64-7.45 34.65 34.65 0 00-7.77.85c-1 .19-2 .38-3 .53-2.06.32-4.21.49-6.28.65a51.23 51.23 0 00-10.86 1.64 26.39 26.39 0 00-17.21 17.29 66.85 66.85 0 01-53.61-61.22l17.2.23h.33c3.31 23.55 29.6 24.25 29.84 24.25 1.07 0 2.11.08 3.11.08 22.9 0 28.85-13.49 30.33-21.78a7.37 7.37 0 00.12-1.62h.07l.61-.1 1.22-.2c.82-.12 1.63-.24 2.44-.34 1.62-.22 3.23-.35 4.81-.42a29.57 29.57 0 014.64.23 14 14 0 013.71 1 5.43 5.43 0 00.05.9c2.29 18.47 21.6 20.89 26.29 21.2h1a48.92 48.92 0 007.19-.58c17.24-2.78 21.45-14.77 22.36-22.31a1.1 1.1 0 000-.18 10 10 0 00-.2-2.61zm-21.57 75s-2.89 24.14-20.61 36.35c.45-.56 14.93-18.5 20.61-36.4zm-48.11 43.46a17.7 17.7 0 00-1.34-9.94c-.4-1-.83-1.87-1.23-2.65a27.33 27.33 0 00-2.08-3.37c-.28-.39-.55-.79-.81-1.17-5.38-8.15-5.18-15-5.18-15 2.22 9.76 6.21 13.08 6.21 13.08.29.53.57 1 .82 1.56.89 1.71 1.61 3.26 2.2 4.67.41 1 .76 1.9 1 2.75 2.76 7.93.41 10.02.41 10.02zm22-27.18a31 31 0 01-3.44 8.63 41.89 41.89 0 01-2.73 4.13 4.68 4.68 0 01-.29.37l.21-.34a35.89 35.89 0 002-3.88 42.41 42.41 0 002.56-7.84 36.83 36.83 0 00.08-16.24s3.71 5.95 1.64 15.12zm-31.68-34.3c.21-.12.43-.25.65-.36a30.6 30.6 0 0113.89-3.42 17.71 17.71 0 019 2.48c.38.22.75.47 1.13.74a18.19 18.19 0 016.92 10.56s-10.9 8.73-18-.56c0 0-2.89 10-24.41 4.59a23.17 23.17 0 0110.85-14.08zm-46.89 19.8c.65 13.76 9.34 23.5 14 27.76l.29.26c1.37 1.23 2.33 1.94 2.54 2.1a30.27 30.27 0 01-3.54-2.09l-.82-.58c-13.61-10-12.61-26.81-12.44-27.5zM151.6 90h-.11zm53.48 11.88c-1.76 9.77-8.64 21.19-31.41 20.05a37.59 37.59 0 01-13.22-3.15c-8.71-3.93-13.69-10.69-14.79-20.08v-.32a5 5 0 010-.67 2.38 2.38 0 01.79-.58c1.8-.94 6-1.67 12.11-1.93a6.88 6.88 0 00-1.56 4.14c0 4.77 5.32 8.65 11.86 8.65s11.86-3.88 11.86-8.65a6.78 6.78 0 00-1.16-3.73c16.34.42 23.52 2.2 25 2.62a6.09 6.09 0 01.52 3.65zm53.92 18.4a43.81 43.81 0 01-6.95.61s-.46 0-1.18-.06c-4.72-.35-22.08-2.79-24.14-19.43a4.9 4.9 0 010-1.38.94.94 0 00.35-.25c.6-.69 3.67-1.24 8.2-1.63a5 5 0 00-1.24 3.45c.18 3.25 4.08 6.4 10.4 6.4h1.07a15.47 15.47 0 003.64-.6 9.88 9.88 0 003.73-1.9 6.12 6.12 0 002.3-4.67v-.31a5.28 5.28 0 00-1.23-3.11h11.26c.91 0 1.76-.06 2.57-.06 8.74 0 11.28 2.09 11.82 2.69-1.82 13.97-11.85 18.75-20.6 20.25z"
          />
          <g id="trImran_svg__beard_highlights" data-name="beard highlights">
            <path
              className="trImran_svg__cls-5"
              d="M259.82 172.16s-2.89 24.14-20.61 36.35c.45-.51 14.93-18.45 20.61-36.35zM233.74 188.44a31 31 0 01-3.44 8.63 41.89 41.89 0 01-2.73 4.13h-.08a35.89 35.89 0 002-3.88 42.41 42.41 0 002.56-7.84 36.83 36.83 0 00.08-16.24s3.68 6.03 1.61 15.2zM211.71 215.62a17.7 17.7 0 00-1.34-9.94c-.4-1-.83-1.87-1.23-2.65a27.33 27.33 0 00-2.08-3.37c-.28-.39-.55-.79-.81-1.17-5.38-8.15-5.18-15-5.18-15 2.22 9.76 6.21 13.08 6.21 13.08.29.53.57 1 .82 1.56.89 1.71 1.61 3.26 2.2 4.67.41 1 .76 1.9 1 2.75 2.76 7.98.41 10.07.41 10.07zM172 204.06a30.27 30.27 0 01-3.54-2.09l-.82-.58c-13.64-9.95-12.64-26.76-12.47-27.45.65 13.76 9.34 23.5 14 27.76l.29.26c1.34 1.23 2.3 1.94 2.54 2.1z"
            />
          </g>
          <path
            id="trImran_svg__hair"
            className="trImran_svg__cls-8"
            d="M168.16 18.45c-.09.66-.18 1.06-.18 1.11 0 .34-.95.34-.95.34l-.23-.26v.26a7.18 7.18 0 00-2.09-1.2c-5.68-2.25-17-1.51-17-1.51s9.46-3 15.93-.7c-9.64-8.17-22.29-8.28-22.29-8.28C164 2.44 166.9 18.43 166.9 18.43 165.32 4.33 149.66-.07 150.48 0c18.8 1.58 18.24 14.55 17.68 18.45z"
          />
          <path
            id="trImran_svg__rt_lense"
            data-name="rt lense"
            className="trImran_svg__cls-9"
            d="M205.08 101.88c-1.76 9.77-8.64 21.19-31.41 20.05a37.59 37.59 0 01-13.22-3.15c-8.71-3.93-13.69-10.69-14.79-20.08v-.32a5 5 0 010-.67 2.38 2.38 0 01.79-.58c1.8-.94 6-1.67 12.11-1.93a6.88 6.88 0 00-1.56 4.14c0 4.77 5.32 8.65 11.86 8.65s11.86-3.88 11.86-8.65a6.78 6.78 0 00-1.16-3.73c16.34.42 23.52 2.2 25 2.62a6.09 6.09 0 01.52 3.65z"
          />
          <path
            id="trImran_svg__left_lense"
            data-name="left lense"
            className="trImran_svg__cls-9"
            d="M267.75 97.34c-.81 0-1.66 0-2.57.06-3.41-.05-6.88-.07-10.26 0h-1a5.28 5.28 0 011.23 3.11v.31a6.12 6.12 0 01-2.3 4.67 9.88 9.88 0 01-3.73 1.9 15.47 15.47 0 01-3.64.6h-1.07c-6.32 0-10.22-3.15-10.4-6.4a5 5 0 011.24-3.45c-4.53.39-7.6.94-8.2 1.63a.94.94 0 01-.35.25 4.9 4.9 0 000 1.38c2.06 16.64 19.42 19.08 24.14 19.43.72.06 1.15.06 1.18.06a43.81 43.81 0 006.95-.61c8.76-1.5 18.79-6.32 20.58-20.25-.55-.6-3.06-2.69-11.8-2.69zm4.25 15.34s-4.48 3.91-13.35 5a39.25 39.25 0 01-8.05.13 47.81 47.81 0 01-5-.66s2 .16 4.9.12a56.24 56.24 0 008-.66c4.23-.68 8.58-2 11.49-4.54 0 0 6.46-5.09 2.36-12.48-.02-.01 7.83 5.6-.35 13.09z"
          />
          <path
            id="trImran_svg__rt_lense_shade"
            data-name="rt lense shade"
            className="trImran_svg__cls-10"
            d="M197.41 97.35s9.06 6.88-.39 16c0 0-10.25 9.47-30.46 5.47 0 0 19.54 1.7 28.13-6.24 0 .04 7.44-6.18 2.72-15.23z"
          />
          <path
            className="trImran_svg__cls-10"
            d="M272 112.68s-4.48 3.91-13.35 5a39.25 39.25 0 01-8.05.13 47.81 47.81 0 01-5-.66s2 .16 4.9.12a56.24 56.24 0 008-.66c4.23-.68 8.58-2 11.49-4.54 0 0 6.46-5.09 2.36-12.48-.02-.01 7.83 5.6-.35 13.09z"
          />
        </g>
      </g>
    </svg>
  );
}

export default TrImran;