import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrNancy({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trNancy_svg__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 311.76 364.92"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trNancy_svg__cls-3{fill:#502f09}.trNancy_svg__cls-5{fill:#4097af}.trNancy_svg__cls-6{fill:#010101}.trNancy_svg__cls-7{fill:#c2882b}.trNancy_svg__cls-8{fill:#a86a28}.trNancy_svg__cls-9{fill:#fff}.trNancy_svg__cls-10{fill:#231f20}.trNancy_svg__cls-11{fill:#ccc;opacity:.5}.trNancy_svg__cls-12{fill:#053a59}"
          }
        </style>
      </defs>
      <path
        d="M.79.3h310.96v364.63H.79z"
        style={{
          fill: "none",
        }}
      />
      <path
        id="trNancy_svg__skin"
        d="M249.09 163.37a22.6 22.6 0 0 1-9.62 2.71c-15.92-.29-21-11-21.39-11.85l-.07.06.06-.07v-.05c.21-.28.41-.53.64-.8l.07-.09.18-.24c.11-.14.25-.32.42-.52l.27-.35.31-.37c.24-.3.53-.64.84-1s.54-.63.84-1c.88-1 1.93-2.1 3.13-3.25.43-.43.87-.85 1.34-1.26.21-.19.41-.38.63-.56l.25-.23.82-.71c.33-.29.68-.57 1-.85l1-.76c.67-.51 1.36-1 2.08-1.5s1.44-.94 2.19-1.38c.37-.22.75-.43 1.13-.64l1.09-.56c.87-.43 1.75-.81 2.66-1.16.34-.13.69-.25 1.06-.37s.83-.27 1.25-.38.76-.21 1.14-.29h.19c.41-.1.82-.16 1.24-.23-1.28-4.46-2.81-9-4.65-13.7h-.38a50.6 50.6 0 0 0-12.29 2.75l-.77.3-.41-.72a3.54 3.54 0 0 1-.42-2.5 2.24 2.24 0 0 1 1.16-1.39l.21-.09a53 53 0 0 1 11.61-1.54c-.74-1.78-1.53-3.59-2.36-5.39-3.4.28-8.64-.91-15.5-7.3 0 0-3.21 12.84-32.37 1.75 0 0-16-6.12-25.08-17.2 0 0 2.92 15.45-24.49 16 0 0-6.66 1.85-10.81-1.63l-.09.13c2.75 3.82 8.09 13-2.21 15.5 0 0 14 24.21-5 24.21l-.72 6.9-.57-.19a.1.1 0 0 0 0 .08l-.22-.15c-4.63-2.95-13.16-7.2-17.79-2 0 0-7.61 11.43 8.39 28.74a32 32 0 0 0 3.22 4.28 7 7 0 0 1 5.57-5.89 4.7 4.7 0 0 1 .93-.11h.43a5 5 0 0 1 .66 0 4 4 0 0 1 .5.07h.28a.6.6 0 0 1 .13 0l.25.06.35.1a2 2 0 0 1 .32.12h.17a3 3 0 0 1 .29.12 7 7 0 0 1 1 .58 4 4 0 0 1 .33.26 4 4 0 0 1 .62.56 3 3 0 0 1 .28.3l.25.31a2.5 2.5 0 0 1 .24.33.4.4 0 0 1 .07.11 3 3 0 0 1 .22.37 1 1 0 0 1 .07.15.3.3 0 0 0 0 .07.8.8 0 0 1 .08.16v.2a1.3 1.3 0 0 1 .08.21c0 .12.09.25.13.37a.6.6 0 0 1 .06.18.7.7 0 0 1 0 .2 5 5 0 0 1 .12.54 2 2 0 0 1 0 .22 1.3 1.3 0 0 1 0 .21 2 2 0 0 1 0 .21v-.14a5 5 0 0 1 0 .7 6.93 6.93 0 0 1-4.68 6.57v3.27a.3.3 0 0 0 0 .09c0 .35 0 .7.08 1s0 .56.08.86 0 .35 0 .53c0 .38.08.76.13 1.16.08.66.18 1.34.29 2.05l.06.37c0 .33.1.67.16 1a3 3 0 0 0 .05.27c.06.33.13.68.2 1l.16.8c.07.34.15.68.23 1s.18.74.28 1.11.23.92.36 1.37.26.92.41 1.38.22.69.34 1 .23.7.36 1.05l.25.69c.12.33.25.65.38 1s.3.76.47 1.13l.16.36c.1.25.22.52.35.78v.09c.2.44.42.88.65 1.33s.48.93.74 1.39l.08.15c.12.2.24.4.35.61a1 1 0 0 0 .08.12c.13.23.27.46.41.68s.28.45.43.67q.62 1 1.29 1.89l.23.29.13.18.09.1.11.16.45.56c.16.22.34.42.52.63s.26.3.39.45l.09.1.23.26a4 4 0 0 0 .26.28l.19.23.12.11.06.07c.33.35.66.68 1 1s.45.45.69.65l.2.18c.23.22.48.43.73.65.06.06.13.1.2.16s.39.33.59.48a31 31 0 0 0 3.06 2.19l-.22.2a30 30 0 0 0 5.79 2.52c-.21 10.88-6.54 24.84-10.65 28.73 0 0-1.77 2.12-9.78 4.8a63.9 63.9 0 0 0 8.1 23.17c7.71 13.69 19.46 21.74 35 24 .14-.15.28-.3.43-.44a3 3 0 0 1 .24-.23l.23-.19a7 7 0 0 1 .79-.57c.11 0 .21-.12.32-.18a6 6 0 0 1 .7-.35c.13-.06.26-.1.4-.15a7.6 7.6 0 0 1 1.15-.33 6.3 6.3 0 0 1 1.23-.12h.72a5 5 0 0 1 .77.09l.41.08.53.14.44.15a4 4 0 0 1 .46.18 4 4 0 0 1 .39.19 4 4 0 0 1 .42.23l.38.24.6.44.37.34c10.1-2.57 31.37-11.36 36.65-40.54a87 87 0 0 1-5.78-2.09c-2.83-1.16-4.81-2.25-5.37-3.16-4.61-7.46-3-21.56-2.07-27.71-1 .1-2.1.19-3.19.26-.53.05-1.07.07-1.61.1-4.15.26-8.65.35-13.46.2h-.23c-1.66 0-3.36-.13-5.08-.25q-.43 0-.87-.06a9 9 0 0 1-.9-.07h-.52L174 238c-.5 0-1-.1-1.51-.16l-.69-.06h-.33c-.84-.1-1.7-.2-2.56-.32-.23 0-.46-.06-.7-.1-.46-.05-.93-.12-1.39-.19a5 5 0 0 1-.5-.07l-2.62-.42-1.51-.27-1.13-.2-2.07-.42h-.12l-.49-.09c-.54-.11-1.1-.23-1.65-.37l-.38-.09-.67-.14-.36-.08-2.09-.5h-.07l-.25-.06-.8-.21-.21-.06-.23-.06c-.43-.1-.84-.22-1.26-.33l-.26-.07c-.72-.19-1.44-.39-2.16-.61h-.14l-.23-.05a1 1 0 0 1-.19-.07h.98l.55.05h.33l.53.05a267.5 267.5 0 0 0 44.59.4c2.82-.24 5.66-.54 8.48-.94.62-.08 1.23-.16 1.85-.26l1.84-.29 1-.16.41-.07h.2a2 2 0 0 0 .35-.06h.1c.54-.09 1.07-.19 1.6-.3a6 6 0 0 0 .74-.14l.53-.11 1.22-.26.36-.07.61-.14 1.88-.44 1.55-.4c.5-.12 1-.25 1.47-.4 1.12-.31 2.23-.65 3.31-1 .56-.19 1.11-.37 1.66-.57h.13l.27-.1h.05l.36-.12c.21-.07.41-.15.6-.23l.4-.15c.32-.12.63-.24 1-.38l1.23-.51.27-.12.82-.37.26-.12a.2.2 0 0 0 .08-.05 1.5 1.5 0 0 0 .25-.12h.2a4.5 4.5 0 0 0 .59-.28l1-.48.67-.36c.53-.29 1.05-.58 1.56-.89s.76-.46 1.13-.7.74-.47 1.09-.71l.26-.19h.05c.24-.16.48-.33.7-.51s.17-.12.26-.18c.25-.19.51-.39.75-.59s.65-.53 1-.81a12 12 0 0 0 .93-.83c.3-.29.59-.57.87-.87.29-.29.57-.59.84-.89s.69-.83 1-1.25a23.1 23.1 0 0 0 3.75-7.09s5.67-18.61 3.15-45.62m-129.58 7.4c-2.35 3.36-6.75 1.31-7 1.16a6 6 0 0 1-1.75-1.42 4.44 4.44 0 0 1-1-2.35A4.7 4.7 0 0 1 110 166c1.51-3.36 4.12-3.36 4.12-3.36-2-6.8-9.92-6.29-9.92-6.29.45-.23 8.32-3.36 12.2 6.33 0 0-4.7 2.9-1.78 6.26a3.76 3.76 0 0 0 4.79-.08l.14-.11.69.7a6 6 0 0 1-.73 1.32M141.78 122l-1.33-1.44c25.71-24.08 48.42-4.34 48.64-4.15a3 3 0 0 1 1.16 2.05 3.6 3.6 0 0 1-.82 2.44l-.65.74-.78-.64c-21.84-18.91-42.34-2.51-46.22 1m30.67 43.33s-27.6-1.65-24.09-25.31l.48-3.07c26.34-11.94 44.31 7.59 48.83 13.3l.55.66c.61.66 1.22 1.35 1.82 2.07a31.54 31.54 0 0 1-27.59 12.32Zm5.07 39s-8.74-13.59 13.16-21.35c0 0 5.15 17.47 18.48 20.44 0 0-20.62 15.91-31.64.91m30-20.69s-.59-3.37 4-1Zm10.92 2.76c4.93-6.17.16-10.75.16-10.75-5.75-4.94-12.73.83-13.35 1.36 7.53-8.76 13.82-4.23 13.82-4.23 7.61 5.99.01 13.04-.65 13.62Zm30.11 93.52s-18.32-4.15-31.51-8.32c-3.8 20.53-15.29 31.08-24.34 36.32a53 53 0 0 1-12.85 5.31c0 .06.06.11.08.17.12.22.23.44.33.67s.14.37.2.56l.09.25c0 .09.05.18.07.26a3 3 0 0 1 .09.4 7 7 0 0 1 .16 1.52 7.68 7.68 0 1 1-15.35 0v-.62a4 4 0 0 1 .06-.5v-.31a3 3 0 0 1 .08-.36 1.5 1.5 0 0 1 .08-.35 3 3 0 0 1 .12-.35 2 2 0 0 1 .1-.28c.07-.18.15-.37.24-.55-36.07-5.87-42.35-41.61-43.16-47.73-7.49 2.31-19.57 5-38.86 7 1.69 7.7 14.81 64.88 83.65 63.28 74.16-1.72 82.37-46.72 82.92-55.56Z"
        style={{
          fill: "#69441a",
        }}
      />
      <g id="trNancy_svg__skin_shade">
        <path
          d="M243.94 119.31a27.4 27.4 0 0 0-5.64-.53h-.37c-.74-1.78-1.53-3.59-2.36-5.39a8.34 8.34 0 0 0 4.48-1.6 25 25 0 0 1 1.83 3 44 44 0 0 1 2.06 4.52M249 135.51a20.3 20.3 0 0 0-5.17.15c-1.27-4.47-2.8-9-4.64-13.7a20.9 20.9 0 0 1 5.25.28h.2l.38.09h.08c1.45 4 2.74 8.49 3.9 13.18M257.66 198.35v.3c0 .2 0 .89-.06 1.67v.33a33.54 33.54 0 0 1-10.7 21.29c-.16.16-.32.32-.49.47l-.76.66c-.38.33-.75.66-1.16 1a.6.6 0 0 0-.12.11c-4.94 4.06-11.71 7.76-21 10.31a101 101 0 0 1-19.63 3.35h-.15l-1.64.13c-1 .1-2.1.19-3.19.26-.53.05-1.07.07-1.61.1-4.15.26-8.65.35-13.46.2h-.23c-1.66-.06-3.36-.14-5.08-.25q-.43 0-.87-.06l-.9-.07h-.52L174 238c-.5 0-1-.1-1.51-.16l-.69-.06h-.33c-.84-.1-1.7-.2-2.56-.32l-.7-.1c-.46-.05-.93-.12-1.39-.19l-.51-.08-2.62-.42-1.51-.27-1.13-.2c-.68-.14-1.37-.29-2.07-.42h-.12l-.49-.09-1.65-.37-.38-.09-.67-.14-2.73-.66-1-.27-.23-.06c-.43-.1-.84-.22-1.26-.33l-.26-.07-2.16-.61h-.14l-.35-.1h-.05 1.04l.55.05h.33l.53.05a267.5 267.5 0 0 0 44.59.4c2.82-.24 5.66-.54 8.48-.94.62-.08 1.23-.16 1.85-.26s1.23-.18 1.84-.29l1-.16.41-.07a.7.7 0 0 0 .2 0 2 2 0 0 0 .35-.06h.1c.54-.09 1.07-.19 1.6-.3a6 6 0 0 0 .74-.14l.53-.11c.4-.07.82-.16 1.22-.26l.36-.07.61-.14 1.88-.44c.52-.12 1-.25 1.55-.4s1-.25 1.47-.4c1.12-.31 2.23-.65 3.31-1 .56-.18 1.11-.37 1.66-.57h.13a1 1 0 0 0 .27-.1h.05l.36-.12c.21-.07.41-.15.6-.23l.4-.15c.32-.12.63-.24 1-.38s.82-.33 1.23-.51l.27-.12.82-.37.26-.12a.2.2 0 0 0 .08-.05 1.5 1.5 0 0 0 .25-.12h.2a4.5 4.5 0 0 0 .59-.28l1-.48.67-.36c.53-.29 1.05-.58 1.56-.89a13 13 0 0 0 1.13-.7c.37-.23.74-.47 1.09-.71l.26-.19h.05a6 6 0 0 0 .7-.51c.09-.05.17-.12.26-.18.25-.19.51-.39.75-.59a10 10 0 0 0 1-.81 12 12 0 0 0 .93-.83c.3-.29.59-.57.87-.87a12 12 0 0 0 .84-.89c.36-.4.71-.82 1-1.25a23.1 23.1 0 0 0 3.75-7.09s5.74-18.25 3.22-45.26a17.6 17.6 0 0 0 4.86-3.94c1.75 10.07 2.81 18.24 3.08 20.48.05.37.07.57.07.57.11 1.71.19 3.47.24 5.24 0 .49.05 1 .06 1.48s0 .78 0 1.18c0 1.12.07 2.25.1 3.4v5.24c-.02.1-.02.54-.03.98"
          className="trNancy_svg__cls-3"
        />
      </g>
      <path
        id="trNancy_svg__shirt"
        d="M297.62 318.7c-8.7-24.89-26.33-35.25-46.78-38.46v.53c-.55 8.84-8.76 53.84-82.92 55.56-68.84 1.6-82-55.58-83.65-63.28-.06-.23-.1-.42-.13-.55s-37.62 4-58.17 29.15c0 0-21.87 22.74-25.94 63.1H274.6l-4-.07a24.2 24.2 0 0 0 1.34-6.13 49.2 49.2 0 0 0-.19-11.78l2.5 11.78 1.31 6.2h23.32c0-.86-2.08-54.95-22.67-73.17.54.22 17.68 7.59 27.35 47.17l7 26a423 423 0 0 0-12.94-46.05m-243.48 46a20.2 20.2 0 0 0 1.37-6.12 39.6 39.6 0 0 0-.76-11.49l3.54 11.49 1.89 6.14Z"
        style={{
          fill: "#7cd2ee",
        }}
      />
      <g id="trNancy_svg__shirt_shade">
        <path
          d="M298.85 364.75c0-.86-2.08-54.95-22.67-73.17.54.22 17.68 7.59 27.35 47.17l7 26ZM55.51 358.54a39.6 39.6 0 0 0-.76-11.49l3.54 11.49 1.89 6.14h-6a20.2 20.2 0 0 0 1.33-6.14M275.53 364.74h-.93l-4-.07a24.2 24.2 0 0 0 1.34-6.13 49.2 49.2 0 0 0-.19-11.78l2.5 11.78Z"
          className="trNancy_svg__cls-5"
        />
      </g>
      <path
        id="trNancy_svg__rt_eyebrow"
        d="m189.43 120.87-.65.74-.78-.61c-21.88-18.88-42.38-2.48-46.26 1l-1.33-1.44c25.71-24.08 48.42-4.34 48.64-4.15a3 3 0 0 1 1.16 2.05 3.6 3.6 0 0 1-.78 2.41"
        className="trNancy_svg__cls-6"
      />
      <g id="trNancy_svg__necklace">
        <g id="trNancy_svg__chain">
          <path
            d="M217.25 270.34c-.07.42-.15.84-.23 1.26-3.8 20.53-15.29 31.08-24.34 36.32a53 53 0 0 1-12.85 5.31l-.05-.07-.14-.22a8 8 0 0 0-1.16-1.42c10.1-2.57 31.37-11.36 36.65-40.54.07-.32.12-.64.18-1a1 1 0 0 1 1.13-.8 1 1 0 0 1 .81 1.16M167.45 312a3.4 3.4 0 0 0-.34.41c-.11.14-.22.29-.31.43a2 2 0 0 0-.17.27l-.12.19a.24.24 0 0 0-.06.11 2 2 0 0 0-.16.3.4.4 0 0 0 0 .07c-36.07-5.87-42.35-41.61-43.16-47.73-.08-.55-.11-.85-.11-.89a1 1 0 0 1 .91-1.06 1 1 0 0 1 1.07.9s0 .17.05.45a63.9 63.9 0 0 0 7.41 22.55c7.71 13.66 19.46 21.71 34.99 24"
            className="trNancy_svg__cls-6"
          />
        </g>
        <g id="trNancy_svg__stone">
          <path
            id="trNancy_svg__base"
            d="M180.69 315.54a3 3 0 0 0-.09-.4c0-.08 0-.17-.07-.26l-.09-.25c-.06-.19-.12-.37-.2-.56s-.21-.45-.33-.67a1.3 1.3 0 0 1-.08-.17l-.05-.07-.14-.22a8 8 0 0 0-1.16-1.42l-.37-.34-.6-.44-.38-.24a4 4 0 0 0-.42-.23 4 4 0 0 0-.39-.19 4 4 0 0 0-.46-.18l-.44-.15-.53-.14-.41-.08a5 5 0 0 0-.77-.09h-.72a6.3 6.3 0 0 0-1.23.12 7.6 7.6 0 0 0-1.15.33c-.14 0-.27.09-.4.15a6 6 0 0 0-.7.35c-.11.06-.21.13-.32.18a7 7 0 0 0-.79.57l-.23.19a3 3 0 0 0-.24.23c-.15.14-.29.29-.43.44a3.4 3.4 0 0 0-.34.41c-.11.14-.22.29-.31.43a2 2 0 0 0-.17.27l-.12.19a.24.24 0 0 0-.06.11c-.06.1-.11.2-.16.3a.4.4 0 0 0 0 .07c-.09.18-.17.37-.24.55a2 2 0 0 0-.1.28 3 3 0 0 0-.12.35 1.5 1.5 0 0 0-.08.35 3 3 0 0 0-.08.36v.31a4 4 0 0 0-.06.5v.62a7.68 7.68 0 1 0 15.35 0 7 7 0 0 0-.32-1.56m-11-3.06a5.5 5.5 0 0 0-1.29 1.57 4.46 4.46 0 0 0-.62 2.15 2.77 2.77 0 0 1-.12-2.25 4.5 4.5 0 0 1 1.2-1.81s0 0 .08-.07c1.52-1.37 3.65-1.66 4.9-.72l.07.07a4.73 4.73 0 0 0-3.95.85 2.5 2.5 0 0 0-.27.21m9.45 6.11a6.17 6.17 0 0 1-5.58 4.91c-2.31.12-3.71-1.79-3.33-1.53 3.33 2.33 6.94-1 6.94-1 1.67-1.68 1.9-5.11 1.91-5.11a5.86 5.86 0 0 1 .06 2.73"
            className="trNancy_svg__cls-7"
          />
          <path
            id="trNancy_svg__lowlight"
            d="M179.14 318.59a6.17 6.17 0 0 1-5.58 4.91c-2.31.12-3.71-1.79-3.33-1.53 3.33 2.33 6.94-1 6.94-1 1.67-1.68 1.9-5.11 1.91-5.11a5.86 5.86 0 0 1 .06 2.73"
            className="trNancy_svg__cls-8"
          />
          <path
            id="trNancy_svg__highlight"
            d="M173.91 311.42a4.73 4.73 0 0 0-3.95.85 2.5 2.5 0 0 0-.27.21 5.5 5.5 0 0 0-1.29 1.57 4.46 4.46 0 0 0-.62 2.15 2.77 2.77 0 0 1-.12-2.25 4.5 4.5 0 0 1 1.2-1.81s0 0 .08-.07c1.52-1.37 3.65-1.66 4.9-.72Z"
            className="trNancy_svg__cls-9"
          />
        </g>
      </g>
      <path
        id="trNancy_svg__mouth"
        d="M209.16 203.42s-20.62 15.91-31.64.91c0 0-8.74-13.59 13.16-21.35 0 .02 5.15 17.47 18.48 20.44"
        className="trNancy_svg__cls-9"
      />
      <g id="trNancy_svg__nose">
        <path
          d="M218.42 186.4c4.93-6.17.16-10.75.16-10.75-5.75-4.94-12.73.83-13.35 1.36 7.53-8.76 13.82-4.23 13.82-4.23 7.63 5.99.03 13.04-.63 13.62M211.54 182.63l-4 1s-.63-3.36 4-1"
          className="trNancy_svg__cls-10"
        />
      </g>
      <path
        id="trNancy_svg__ear"
        d="M120.22 169.42a6 6 0 0 1-.71 1.35c-2.35 3.36-6.75 1.31-7 1.16a6 6 0 0 1-1.75-1.42 4.44 4.44 0 0 1-1-2.35A4.7 4.7 0 0 1 110 166c1.51-3.36 4.12-3.36 4.12-3.36-2-6.8-9.92-6.29-9.92-6.29.45-.23 8.32-3.36 12.2 6.33 0 0-4.7 2.9-1.78 6.26a3.76 3.76 0 0 0 4.79-.08l.14-.11Z"
        className="trNancy_svg__cls-6"
      />
      <g id="trNancy_svg__rt_eye">
        <path
          id="trNancy_svg__rt_eye_white"
          d="M200.06 153a31.54 31.54 0 0 1-27.61 12.27s-27.6-1.65-24.09-25.31l.11-.05a46.5 46.5 0 0 1 9.2-2.11 11 11 0 0 0-1.42 1.73 10.22 10.22 0 0 0 2.37 14 12.07 12.07 0 0 0 7.28 2.47 15 15 0 0 0 1.74-.11c5.93-.83 10.29-5.64 10.29-11a10 10 0 0 0-.09-1.35 9.5 9.5 0 0 0-.49-2 10 10 0 0 0-1.56-2.84 46.5 46.5 0 0 1 23 13.1c-.05-.08-.3-.43-.72-1a2 2 0 0 1 .19.2c.59.62 1.2 1.31 1.8 2"
          className="trNancy_svg__cls-9"
        />
        <g id="trNancy_svg__rt_eye_shade">
          <path
            d="M157.67 137.83a11 11 0 0 0-1.42 1.73 43.7 43.7 0 0 0-7.92 1.29l.14-.91a46.5 46.5 0 0 1 9.2-2.11M199.54 152.62a62.2 62.2 0 0 0-22.19-11.17 10 10 0 0 0-1.56-2.84 46.5 46.5 0 0 1 23 13.1c-.05-.08-.3-.43-.72-1l-.05-.06-.31-.4.55.66c.74 1 1.21 1.62 1.28 1.71"
            className="trNancy_svg__cls-11"
          />
        </g>
        <path
          id="trNancy_svg__rt_eye-2"
          d="M177.35 141.45a10 10 0 0 0-1.56-2.84 46.5 46.5 0 0 1 23 13.1c-.05-.08-.3-.43-.72-1l-.05-.06-.31-.4c-4.52-5.71-22.49-25.24-48.83-13.3l-.48 3.07.11-.05a46.5 46.5 0 0 1 9.2-2.11 11 11 0 0 0-1.42 1.73 10.22 10.22 0 0 0 2.37 14 12.07 12.07 0 0 0 7.24 2.41 15 15 0 0 0 1.74-.11c5.93-.83 10.29-5.64 10.29-11a10 10 0 0 0-.09-1.35 9.5 9.5 0 0 0-.49-2.09m-5.86 3a1.57 1.57 0 0 1-1.49-1.67 1.59 1.59 0 1 1 1.49 1.67"
          className="trNancy_svg__cls-6"
          data-name="rt_eye"
        />
        <path
          id="trNancy_svg__highlight-2"
          d="M173.17 143a1.59 1.59 0 0 1-1.68 1.49 1.57 1.57 0 0 1-1.49-1.67 1.59 1.59 0 1 1 3.17.18"
          className="trNancy_svg__cls-9"
          data-name="highlight"
        />
      </g>
      <g id="trNancy_svg__left_eye">
        <path
          id="trNancy_svg__left_eye_white"
          d="M254.79 158.37a.2.2 0 0 1 0 .07c-.23.32-.48.63-.72.92a17.6 17.6 0 0 1-4.86 3.94 22.6 22.6 0 0 1-9.62 2.71c-15.92-.29-21-11-21.39-11.85.38-.38.77-.75 1.15-1.1s.75-.71 1.14-1.06l1-.87c.43-.37.86-.73 1.3-1.08s.71-.56 1.07-.82.86-.65 1.28-1c.68-.49 1.36-.94 2-1.36a9 9 0 0 0-.21 1.06 8.6 8.6 0 0 0 1.75 6.46 10.5 10.5 0 0 0 6.94 4 10 10 0 0 0 1.47.1c4.87 0 9.08-3.27 9.71-7.81a9.19 9.19 0 0 0-5.21-9.34c.67-.09 1.31-.17 1.94-.21h1.87a30 30 0 0 1 5.12.33l.86.15h.12a23.4 23.4 0 0 1 6.89 2.32c.33 6.57-1.23 11.19-3.6 14.44"
          className="trNancy_svg__cls-9"
        />
        <g id="trNancy_svg__left_eye_shade">
          <path
            d="M227.5 145.74a8 8 0 0 0-.5 1.26l.1-.06-.1.07c-.66.42-1.34.87-2 1.36-.42.3-.85.61-1.28 1s-.71.55-1.07.82-.87.71-1.3 1.08l-1 .87c-.39.35-.77.69-1.14 1.06s-.77.72-1.15 1.1l-.07.06.06-.07c.14-.18.49-.61 1-1.24a53.8 53.8 0 0 1 8.41-7.26ZM258.35 143.94a23.4 23.4 0 0 0-6.89-2.32h-.12l-.86-.15a30 30 0 0 0-5.12-.33h-1.87c-.63 0-1.27.12-1.94.21a11 11 0 0 0-1.5-.62 12 12 0 0 0-1.34-.34 28.3 28.3 0 0 1 6.22-1 28 28 0 0 1 5.13.21l.81.13h.13a22.6 22.6 0 0 1 7.19 2.41v.12q.13.9.16 1.68"
            className="trNancy_svg__cls-11"
          />
        </g>
        <path
          id="trNancy_svg__left_eye-2"
          d="M257.83 138.65a20.2 20.2 0 0 0-7.92-3 .5.5 0 0 0-.17 0l-.66-.09a20.3 20.3 0 0 0-5.17.15c-.42.07-.83.14-1.24.23h-.19c-.38.09-.76.18-1.14.29s-.84.24-1.25.38L239 137c-.91.35-1.79.73-2.66 1.16l-1.09.56c-.38.21-.76.42-1.13.64-.75.44-1.49.9-2.19 1.38s-1.41 1-2.08 1.5l-1 .76c-.35.28-.7.56-1 .85l-.82.71-.25.23c-.22.18-.42.37-.63.56-.47.41-.91.83-1.34 1.26-1.2 1.15-2.25 2.26-3.13 3.25-.27.31-.56.63-.84 1s-.6.7-.84 1l-.31.37-.27.35c-.17.2-.31.38-.42.52l-.18.24-.07.09v.07c.16-.16.29-.31.45-.46a53.8 53.8 0 0 1 8.41-7.26v.05A8 8 0 0 0 227 147l.1-.06-.1.07a9 9 0 0 0-.21 1.06 8.6 8.6 0 0 0 1.75 6.46 10.5 10.5 0 0 0 6.94 4 10 10 0 0 0 1.47.1c4.87 0 9.08-3.27 9.71-7.81a9.19 9.19 0 0 0-5.21-9.34 11 11 0 0 0-1.5-.62 12 12 0 0 0-1.34-.34 28.3 28.3 0 0 1 6.22-1 28 28 0 0 1 5.13.21l.81.13h.13a22.6 22.6 0 0 1 7.19 2.41Zm-17.17 5.19a1.59 1.59 0 1 1-.18 3.17 1.59 1.59 0 1 1 .18-3.17"
          className="trNancy_svg__cls-6"
          data-name="left_eye"
        />
        <path
          id="trNancy_svg__left_highlight"
          d="M242.16 145.51a1.59 1.59 0 0 1-1.68 1.5 1.59 1.59 0 1 1 .18-3.17 1.58 1.58 0 0 1 1.5 1.67"
          className="trNancy_svg__cls-9"
        />
      </g>
      <g id="trNancy_svg__earring">
        <path
          id="trNancy_svg__base-2"
          d="M126.12 182.83v.17a2 2 0 0 0 0-.21 1.3 1.3 0 0 0 0-.21v-.22a5 5 0 0 0-.12-.54.7.7 0 0 0 0-.2.6.6 0 0 0-.06-.18c0-.12-.08-.25-.13-.37a1.3 1.3 0 0 0-.08-.21v-.2a.8.8 0 0 0-.08-.16.3.3 0 0 1 0-.07 1 1 0 0 0-.07-.15 3 3 0 0 0-.22-.37.4.4 0 0 0-.07-.11 2.5 2.5 0 0 0-.24-.33l-.25-.31a3 3 0 0 0-.28-.3 4 4 0 0 0-.62-.56 4 4 0 0 0-.33-.26 7 7 0 0 0-1-.58 3 3 0 0 0-.29-.12h-.17l-.32-.12-.35-.1-.25-.06h-.41a4 4 0 0 0-.5-.07 5 5 0 0 0-.66 0h-.43a4.7 4.7 0 0 0-.93.11 7 7 0 0 0-5.57 5.89 6 6 0 0 0-.07.94 7 7 0 0 0 6.95 7 6.4 6.4 0 0 0 1.91-.28 1.5 1.5 0 0 0 .36-.11 6.93 6.93 0 0 0 4.68-6.57 5.3 5.3 0 0 0-.4-1.14m-11.79-.09a3.16 3.16 0 0 1 1-3.74c1.39-1.24 3.31-1.5 4.45-.65 0 0 .05 0 .06.06a4.35 4.35 0 0 0-3.81 1 4.5 4.5 0 0 0-1.7 3.33m10.29 2.17a5.62 5.62 0 0 1-5.05 4.46c-2.1.1-3.36-1.63-3-1.39 3 2.1 6.29-.89 6.29-.89 1.51-1.52 1.72-4.64 1.73-4.64a5.2 5.2 0 0 1 .03 2.46"
          className="trNancy_svg__cls-7"
          data-name="base"
        />
        <path
          id="trNancy_svg__lowlight-2"
          d="M124.62 184.91a5.62 5.62 0 0 1-5.05 4.46c-2.1.1-3.36-1.63-3-1.39 3 2.1 6.29-.89 6.29-.89 1.51-1.52 1.72-4.64 1.73-4.64a5.2 5.2 0 0 1 .03 2.46"
          className="trNancy_svg__cls-8"
          data-name="lowlight"
        />
        <path
          id="trNancy_svg__highlight-3"
          d="M119.88 178.41a4.35 4.35 0 0 0-3.81 1 4.5 4.5 0 0 0-1.74 3.37 3.16 3.16 0 0 1 1-3.74c1.39-1.24 3.31-1.5 4.45-.65.06-.02.09 0 .1.02"
          className="trNancy_svg__cls-9"
          data-name="highlight"
        />
      </g>
      <path
        id="trNancy_svg__hair"
        d="M281.34 88.55c8.64-17 7.39-29-5.68-31.27C269.62 39.19 253.49 38 253.49 38c-.88-16-33.24-23.21-33.24-23.21-13.29-16.87-27.6-2.05-27.6-2.05-16.87-25.56-52.15-4.6-52.15-4.6-20.44-8.18-27.2 2.9-29.64 5.63-1.8 2-3.18 2.65-5.63 1.53C80.14 3.74 73 28.54 73 28.54 47 27 56.67 48.47 56.67 48.47 27.1 43.93 42 88 42 88c-25.59 1.14-12.51 38.09-12.51 38.09.35 11.79 4 17.48 8.87 19.69 10.84 4.94-8.27-1.18-3.68 16.2-1.49 0-1.73 2.28-1 9.2.89 8.77 9.64 3.87 6.65 12.79-1.49 4.39 2.77 12 5.11 15.85 14.31 23.51 26.77-4.79 31.69 16.86 2.56 11.25 26.28 17.43 26.28 17.43 19 9.1 34.25-3 36.26-4.74l.22-.2a31 31 0 0 1-3.06-2.19c-.2-.15-.39-.31-.59-.48s-.14-.1-.2-.16l-.41-.35-.32-.3-.2-.18c-.24-.2-.46-.42-.69-.65s-.67-.65-1-1l-.06-.07-.12-.11-.19-.23a4 4 0 0 1-.26-.28l-.23-.26-.09-.1c-.13-.15-.27-.29-.39-.45s-.36-.41-.52-.63l-.45-.56-.07-.08a1 1 0 0 0-.13-.18l-.13-.18-.23-.29q-.67-.93-1.29-1.89c-.16-.23-.3-.45-.43-.67s-.28-.45-.41-.68a1 1 0 0 1-.08-.12c-.11-.21-.23-.41-.35-.61l-.08-.15c-.26-.46-.51-.92-.74-1.39s-.45-.89-.65-1.33v-.09c-.1-.19-.19-.4-.29-.61l-.06-.17-.16-.36c-.17-.37-.32-.74-.47-1.13s-.26-.64-.38-1l-.25-.69c-.13-.35-.25-.69-.36-1.05s-.23-.69-.34-1-.28-.92-.41-1.38-.26-.91-.36-1.37-.2-.74-.28-1.11-.16-.68-.23-1l-.16-.8-.2-1a3 3 0 0 1-.05-.27c-.06-.34-.12-.68-.16-1l-.06-.37c-.11-.71-.21-1.39-.29-2.05 0-.4-.09-.78-.13-1.16v-.53c0-.17-.06-.58-.08-.86s-.07-.7-.08-1a.3.3 0 0 1 0-.09v-3.27a1.5 1.5 0 0 1-.36.11 6.4 6.4 0 0 1-1.91.28 7 7 0 0 1-6.95-7 6 6 0 0 1 .07-.94 32 32 0 0 1-3.22-4.28c-16-17.31-8.39-28.74-8.39-28.74 4.63-5.24 13.16-1 17.79 2l.22.07.57.19.72-6.9c19 0 5-24.21 5-24.21 10.3-2.52 5-11.68 2.21-15.5-.19-.26-.36-.47-.51-.68a8 8 0 0 0 .6.55c4.15 3.48 10.81 1.63 10.81 1.63 27.41-.58 24.49-16 24.49-16 9 11.08 25.08 17.2 25.08 17.2 28.88 10.92 32.06-1.92 32.06-1.92 6.86 6.39 12.1 7.58 15.5 7.3a8.34 8.34 0 0 0 4.48-1.6 25 25 0 0 1 1.83 3 44 44 0 0 1 2 4.46 27.4 27.4 0 0 0-5.64-.53h-.37a53 53 0 0 0-11.61 1.54l-.21.09a2.24 2.24 0 0 0-1.16 1.39 3.54 3.54 0 0 0 .42 2.5l.41.72.77-.3A50.6 50.6 0 0 1 238.8 122h.42a20.9 20.9 0 0 1 5.25.28h.2l.38.09h.08c1.42 3.94 2.71 8.43 3.9 13.12l.66.09a.5.5 0 0 1 .17 0 20.2 20.2 0 0 1 7.92 3l.44 3.61v.12l.2 1.62h-.08c.37 6.56-1.19 11.18-3.56 14.43a.2.2 0 0 1 0 .07c-.23.32-.48.63-.72.92 1.75 10.07 2.81 18.24 3.08 20.48.05.37.07.57.07.57 16.41-9 18.26-32.32 18.26-32.32 15.92-12.51 8.72-35.73 8.72-35.73 11.36-9.55-2.85-23.8-2.85-23.8m-246.68 38.3c.55.59 1.13 1.19 1.75 1.8.16.14.3.29.46.46a14.2 14.2 0 0 1-2.21-2.26m5.21-34.46c-14 18.6-8.84 29.86-5.24 34.42-19.27-21.08 5.88-35.28 5.24-34.42m42.38-33.85c-.11-.8 6.94 20.26-12 23.45.01.01 14.67-6.13 12-23.45M66 116.67c.61 1 17.61 28.79-9 31.94.94-.23 20.94-5.18 9-31.94M46.54 163c4.6 35.08 33.45 26.72 36.06 25.9-35.8 15.59-36.06-24.7-36.06-25.9m56.26 28.78c.7.75 20.72 25.56-12.82 25 .02.08 27.7-2.06 12.82-24.96Zm-17.61-49.02s22.92 1.07 21.86-15.19c-.05-1.19 6.39 18.65-21.86 15.19m-2.1-47.16c1 .37 30.39 10.62 46.87-5.35.04 0-14.91 22.12-46.87 5.35m18-68.72a58 58 0 0 0-7 1.68 44 44 0 0 1 7-1.68c12-2.12 30.54-1.12 32.84 24.19.07 0-6.55-28.07-32.81-24.19Zm63.23 3.25a18.8 18.8 0 0 1 3.18 2.76c4.88 4.81 11.84 14.76 3.22 27 .21-.57 6.1-16.82-3.22-27a30 30 0 0 0-3.15-2.76Zm38.23 50.76c-6.93 4.55-18.09 6.38-36.1 1.1 0 0 17.57 3.57 31.28-2.68 8.12-3.72 14.9-10.86 15.89-24.24.03 0 1.59 17.48-11.04 25.82ZM179.54 17c.18-.22 36.07-10.27 41.58 20 0 0-7.47-22.72-41.58-20m56.93 86.92a18 18 0 0 1-2.24-1.22 20.56 20.56 0 0 1-6.4-6.69 25 25 0 0 1-1.35-2.56 26.6 26.6 0 0 1-2.15-6.88c9.06 21.59 31.45 17.59 31.45 17.59-8.51 2.46-14.78 1.84-19.31-.28Zm15.59-19.51c.72-.56 17-13.54 2.91-35.43-.43-.71 21.31 20.73-2.91 35.39Zm11.17 47.46a2.6 2.6 0 0 1 .79-.12h.49c-.41.01-.84.05-1.28.08Zm1.3-.12c14.9-1.83 13.9-17.2 13.9-17.2 3.84 17.58-9.56 17.2-13.9 17.16Z"
        className="trNancy_svg__cls-6"
      />
      <g id="trNancy_svg__hair_highlights">
        <path
          d="M264.53 131.71c14.9-1.83 13.9-17.2 13.9-17.2 3.84 17.62-9.56 17.24-13.9 17.2M255.77 104.11c-8.5 2.51-14.73 1.87-19.3-.23a18 18 0 0 1-2.24-1.22 20.56 20.56 0 0 1-6.4-6.69 25 25 0 0 1-1.35-2.56 26.6 26.6 0 0 1-2.15-6.88c9.05 21.58 31.44 17.58 31.44 17.58M252.06 84.37c.72-.56 17-13.54 2.91-35.43-.43-.67 21.31 20.77-2.91 35.43M202.58 80.89c-6.93 4.55-18.09 6.38-36.1 1.1 0 0 17.57 3.57 31.28-2.68 8.12-3.72 14.9-10.86 15.89-24.24 0 0 1.56 17.48-11.07 25.82M221.12 37s-7.47-22.67-41.58-20c.18-.26 36.07-10.31 41.58 20M170.75 59.85c.21-.57 6.1-16.82-3.22-27 4.88 4.85 11.84 14.8 3.22 27M130 90.25s-14.91 22.12-46.87 5.35c1 .4 30.35 10.62 46.87-5.35M134 51.07s-6.58-28-32.84-24.19c11.97-2.12 30.5-1.12 32.84 24.19M70.26 82s14.66-6.13 12-23.45c-.12-.81 6.93 20.25-12 23.45M85.19 142.76s22.92 1.07 21.86-15.19c-.05-1.19 6.39 18.65-21.86 15.19M90 216.86s27.7-2.14 12.82-25c.68.71 20.7 25.52-12.82 25M82.6 188.94C46.8 204.49 46.54 164.2 46.54 163c4.6 35.12 33.46 26.76 36.06 25.94M57 148.61c1-.23 21-5.18 9-31.94.62.99 17.62 28.79-9 31.94M39.87 92.39c-14 18.6-8.84 29.86-5.24 34.42-19.27-21.08 5.88-35.28 5.24-34.42"
          className="trNancy_svg__cls-12"
        />
      </g>
    </svg>
  );
}
export default SvgTrNancy;
