import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function TrHarry({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      id="trHarry_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 295.77 336.02"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trHarry_svg__cls-1{fill:#e2ab90}.trHarry_svg__cls-2{fill:#c58e76}.trHarry_svg__cls-3{fill:#fff}.trHarry_svg__cls-5{fill:#314520}.trHarry_svg__cls-6{fill:#1f2a17}.trHarry_svg__cls-7{fill:#231f20}.trHarry_svg__cls-8{fill:#010101}.trHarry_svg__cls-9{fill:#c4c4c4}"
          }
        </style>
      </defs>
      <g id="trHarry_svg__skin">
        <path
          id="trHarry_svg__neck"
          className="trHarry_svg__cls-1"
          d="M172 232.4c-23 3-38.35-7.76-40.7-17.48.55-.36.93-.64 1.15-.81h.94s6.63-11.11 7.6-18.42c0 0 .31-.16-.2-.22a84.25 84.25 0 002.76-13.22c16.12 20 42 43.43 42 43.43a13.13 13.13 0 001.82-9.64l.13.06c2.28 15.36-15.11 16.25-15.5 16.3z"
        />
        <path
          id="trHarry_svg__face"
          className="trHarry_svg__cls-1"
          d="M225 83.35v.07a.09.09 0 000-.07zm20.78-9c-.15-.67-.32-1.34-.49-2-.22-.92-.46-1.85-.71-2.78l-.21-.79-.24-.87a63.78 63.78 0 00-11.38 3 .67.67 0 01-.22 0 .85.85 0 01-.47-.16c-.94-.64-2.4-3.43-2.54-7.4V63l.21-.16a24.06 24.06 0 015.95-3.17.87.87 0 01.73 0 1.55 1.55 0 01.62 1.06 2 2 0 00.18.51c.44-.18 1.58-.8 2.69-1.4l1.53-.82h.07c-.38-1.16-.78-2.32-1.2-3.49-.2-.56-.4-1.12-.61-1.68-.38-1-.78-2.1-1.19-3.15-.22-.57-.44-1.14-.67-1.72s-.5-1.24-.76-1.86-.57-1.36-.86-2-.47-1.11-.72-1.66c-.48-1.12-1-2.23-1.5-3.35-.59-1.28-1.2-2.55-1.82-3.84-.45-.91-.91-1.83-1.38-2.75s-.95-1.85-1.44-2.77c0 0-6.77-14.32-26.77-26.32a33.06 33.06 0 013.62 1.32C194.85.65 186 .3 186 .3c-60.69-4.18-79.49 36.28-79.49 36.28-4.61 8.37-6.23 24.09-6.4 41.06l43.44-2.74a2.9 2.9 0 011.11.15h.05A9.32 9.32 0 01146 73a2.2 2.2 0 01.2-.23l.23-.25a8.53 8.53 0 014.12-2.31l.31-.07.37-.06h.77a8.4 8.4 0 011.23 0l40.87 3.29 6.17.5h.06a8 8 0 015.47 3.1 7.93 7.93 0 011.4 3 .12.12 0 010 .1 1.23 1.23 0 01.07.32l.34-.18c.39-.19.79-.37 1.19-.53.81-.33 1.63-.61 2.46-.86a23.46 23.46 0 015.15-.91 15.47 15.47 0 015.35.49 9.16 9.16 0 013.37 1.76l.07-.24a1.77 1.77 0 01.08-.25c.05-.13.09-.26.15-.38s.1-.26.17-.41l.3-.52.21-.32.24-.33a6.7 6.7 0 011.65-1.54h.16l.09-.05a5.86 5.86 0 01.57-.31h.1l.24-.11h.08l.46-.17.4-.1a8.47 8.47 0 011.31-.2l14.34-.62zm-41-8.65a18.41 18.41 0 01-.65 4.37c-.22.53-.52.65-.73.65a.56.56 0 01-.21 0c-.08 0-3.39-1-8.29-2.21s-11.39-2.7-17.85-3.73c-14.27-2.29-30.4-.32-30.56-.3l-1.21.15 4.91-6.17c.2-.12 5.07-2.86 13.5-.67a2.09 2.09 0 002.74-1.13c.31-.49.64-1 1.25-1 1.33-.1 3.27.67 5.14 1.42a13.87 13.87 0 004 1.21c.73 0 .91-.21.94-.26s0-.6-.12-.89-.28-.81 0-1.13a.85.85 0 01.86-.18c2.18.51 5.51 1.31 8.49 2.05-.57-.54-1-1-.69-1.41s1-.3 1.46-.17a18.18 18.18 0 014.93 2.37 18.7 18.7 0 004 2c-.36-.48-.67-.9-.38-1.3s.9-.21 1.21-.1a67.65 67.65 0 016.86 2.73c.25 0 .62.21.41 3.65z"
        />
        <path
          id="trHarry_svg__face-2"
          data-name="face"
          className="trHarry_svg__cls-1"
          d="M250.41 108.63q0-1.42-.12-2.88c0-.64-.07-1.29-.11-1.94H250c-5.25-.52-22.4-3.51-25-20.4v-.07l-.09-.67a4.86 4.86 0 010-.93 12.78 12.78 0 00-3.68-1.1 25.07 25.07 0 00-4.69-.26 44.36 44.36 0 00-4.83.48c-.81.11-1.62.25-2.43.39l-1.22.23-.6.13h-.06a7.64 7.64 0 01-.12 1.65c-1.49 8.29-7.44 21.78-30.35 21.78-1 0-2 0-3.09-.08-.24 0-26.53-.7-29.83-24.26h-.34l-43.6-.59v2.43a45 45 0 00-4.42-2.49 32.79 32.79 0 00-3-1.32c-4.87-1.84-10.22-2.39-13.71 1.56 0 0-9.11 13.68 10 34.41 0 0 6.63 11.06 13.4 10.52 1.15 12.48 2.3 21.05 2.3 21.05 3.87 27 27.21 32.95 27.21 32.95 4 1.08 7.92 2 11.71 2.82q-6-1.32-12.28-3.16s4.81.56 12.48 1a318.76 318.76 0 0032.24.37c29.14-1.23 63-7.54 70-29.47 0 .01 5.25-16.59 4.41-42.15zm-149.16 2.76c-2.78 1.72-6.38 0-6.64-.11-4.69-2.63-2.93-6.93-2.93-6.93 1.76-3.9 4.78-3.9 4.78-3.9C94.12 92.55 85 93.13 85 93.13c.52-.26 9.66-3.9 14.17 7.37 0 0-5.47 3.35-2.07 7.27a4.59 4.59 0 004 .79 4.73 4.73 0 001.72-1l.81.81a5.94 5.94 0 01-2.38 3.02zm89.85 14.13c-4.53 17.28 16.32 22.76 16.32 22.76-29.78.97-16.33-23.28-16.32-22.76zm19.07 1.92s-.86-3.81 5.74-1.14zm12.49 3.33c5.78-7.19.22-12.54.22-12.54-6.85-5.88-15.18 1.29-15.55 1.62 8.76-10.22 16.1-4.95 16.1-4.95 9.04 7.1-.36 15.51-.77 15.87z"
        />
      </g>
      <g id="trHarry_svg__skin_shade">
        <path
          className="trHarry_svg__cls-2"
          d="M248.85 57.62l-1.06.53c-1.13.58-2.3 1.18-2.87 1.38a.31.31 0 01-.15 0 1.14 1.14 0 01-.19-.37c-.15-.37-.51-1.26-1.54-.89a11.38 11.38 0 00-1.55.74c-.38-1.16-.78-2.32-1.2-3.49-.2-.56-.4-1.12-.61-1.68-.38-1-.78-2.1-1.19-3.15-.22-.57-.44-1.14-.67-1.72s-.5-1.24-.76-1.86-.56-1.36-.86-2-.47-1.11-.72-1.66c-.48-1.12-1-2.23-1.5-3.35-.59-1.28-1.2-2.55-1.82-3.84-.45-.91-.91-1.83-1.38-2.75s-.95-1.85-1.44-2.77c0 0-6.77-14.32-26.77-26.32a33.06 33.06 0 013.62 1.32l.43.19a62.36 62.36 0 0112.54 7.38c.29.2.57.42.86.64.65.48 1.3 1 2 1.55.9.74 1.81 1.54 2.74 2.38l1.67 1.56c.27.27.55.54.82.82a77.44 77.44 0 019.84 12.17c.05.07.45.73.5.8s5.52 8.46 11.26 24.39zM254 74.06l-8.11.35v-.11c-.15-.67-.32-1.34-.49-2-.22-.92-.46-1.85-.71-2.78l-.21-.79-.24-.87c2.46-.42 5-.73 7.61-.92h.15c.63 2.25 1.31 4.62 2 7.12zM103.59 108.36a5.94 5.94 0 01-2.34 3c-2.78 1.72-6.38 0-6.64-.11-4.69-2.63-2.93-6.93-2.93-6.93 1.76-3.9 4.78-3.9 4.78-3.9C94.12 92.55 85 93.13 85 93.13c.52-.26 9.66-3.9 14.17 7.37 0 0-5.47 3.35-2.07 7.27a4.59 4.59 0 004 .79 4.73 4.73 0 001.72-1zM261.51 139.65s-.12 8.36-6.29 18.08l-.62.94-.68 1c-.12.18-.25.35-.38.52l-.48.64c-5.72 7.4-15.26 15.16-31.22 20.32a80 80 0 01-12.91 3.15c-4.13.65-9.32 1.28-15.36 1.65l-.08.13a.61.61 0 00-.07.1 44.85 44.85 0 00-3.64 7.05l-.06.14c-2.43 5.32-4.83 12.71-3.45 19.21a12.54 12.54 0 00.92 3.32l.21.09a13.13 13.13 0 01-1.82 9.64s-25.89-23.41-42-43.43a.28.28 0 010-.09v-.05q-6-1.32-12.28-3.16s4.81.56 12.48 1a318.76 318.76 0 0032.24.37c29.14-1.23 63-7.54 70-29.47 0 0 5.23-16.6 4.39-42.16q0-1.42-.12-2.88c0-.64-.07-1.29-.11-1.94 1.25.12 2 .12 2.08.12a49.54 49.54 0 007.33-.6 250.85 250.85 0 011.92 36.31z"
        />
      </g>
      <path
        id="trHarry_svg__tshirt"
        className="trHarry_svg__cls-3"
        d="M199.69 237c-.35 4.72-1.82 9.18-3 13.72a40.61 40.61 0 00-1.11 15.69c1.19 13.47.48 28.51-.67 41.13a1111.291 1111.291 0 00-3.77 27.17h-29.61v-.68c-.32-9.9-2.29-55.42-11.23-73.3-.47-.95-8.69-11.87-14.67-23.69 12.87 8.32 29.45 6.64 29.45 6.64 32-1.2 32.21-15.68 31.18-21a10.62 10.62 0 00-.51-1.91 10.76 10.76 0 01.29 1.81c.44 4.94-1.17 18-30.48 18.56.07-.14-24.79 2.27-33.48-11.92-.39-1-.75-2-1.07-3a30.64 30.64 0 01-1.63-8.44 7 7 0 01.33-1.66 5.2 5.2 0 011-1.79h1.86c-.22.17-.6.45-1.15.81 2.35 9.72 17.67 20.49 40.7 17.48.36-.05 17.75-.94 15.51-16.35l.26.11c1.9.79 4.85 1.84 6.5 3.16a11.28 11.28 0 013.3 3.89 22.55 22.55 0 011.58 5.14 30.23 30.23 0 01.42 8.43z"
      />
      <path
        id="trHarry_svg__shirt_shade"
        d="M165 243.62s-16.58 1.68-29.45-6.64c6 11.82 14.2 22.74 14.67 23.69 8.94 17.88 10.91 63.4 11.23 73.3v1.9h-3v-1.21-.67c-.32-9.86-2.28-55.43-11.23-73.32-.5-1-8.13-13.24-13.29-25.14-.09-.21-.21-.46-.33-.76l-.3-.7c-.18-.45-.39-1-.61-1.52s-.45-1.17-.69-1.8l-.05-.14-.37-1v-.14l-.05-.14-.33-1v-.14l-.33-1-.3-1v-.07a.56.56 0 000-.12c0-.1-.05-.2-.08-.3s-.08-.32-.13-.47a.13.13 0 010-.06 21.58 21.58 0 01-.9-7.53 30.64 30.64 0 001.63 8.44c.32 1 .68 2 1.07 3 8.69 14.19 33.55 11.78 33.48 11.92 29.31-.54 30.92-13.62 30.48-18.56l.21.1c.92 5.4.67 19.88-31.33 21.08z"
        fill="#cfcfce"
      />
      <g id="trHarry_svg__hoodie_body">
        <path
          className="trHarry_svg__cls-5"
          d="M158.56 335.89v-1.21h-.08v.06a.28.28 0 000-.06c0-.11-.05-.34-.11-.67-.36-2.2-1.57-9.13-3.71-18.28-5.62-24-17.64-63.43-37.48-72.95a33.45 33.45 0 01-5.19.1c3 5.2 8.71 18.79 5.13 43.28 0 0-3.48 21.06-.16 41.8-2.72-8.26-3.38-18.69-3.34-27.16a132.72 132.72 0 001.34 25.16c-5.54-16.79-2.53-42.59-2.53-42.59 3.13-21.4-1.58-34.51-5.15-41A46.85 46.85 0 0193 238c-.83-.42-1.66-.87-2.49-1.36a152.56 152.56 0 00-16.24-1.5 34 34 0 01-4.45-.71l-1.35-.33c-2.77.73-10.08 1.86-13.19 2.43-9.36 1.71-32.36 7.83-40.73 22.36 0 0-12.56 19.85-14.53 77.06h158.54zm-120.11-.49a7.36 7.36 0 010-.9c0-5.56 1.66-32.86 1.66-32.86s1.36 27.41 1.61 32.85v.91a31.51 31.51 0 01-3.27 0zM288.61 314.6c.35-22.53-3.88-57-30.76-71.1a56.36 56.36 0 0111.67 7.32 52 52 0 00-15.75-9.34l-31.71-9.81-1.57-.48c.15.29.32.62.49 1 3 6.31 8.55 22.33 5 50.9 0 0-4.13 24.07-.82 48.58-2.54-8.88-3.22-19.46-3.18-28.55a161.84 161.84 0 001.18 26.55c-5.82-20.33-1.87-49.51-1.87-49.51 2.87-31.87-4.15-46.19-6.71-50.25-.23-.35-.41-.63-.56-.83 0 .1-.12.29-.21.55a10.25 10.25 0 00.59 8s3.9 7.6-3.28 14.45c0 0-6 6.29-8.72 23.68l-9.81 51.37v.05c-.42 2.94-.79 5.24-1 6.71-.05.33-.1.62-.14.86l-.17 1h97.35l-1.7-.08s.13-.76.33-2.14a156.86 156.86 0 001.35-18.93zm-28.28 20.8a16.25 16.25 0 010-1.83c.14-7.15 1.65-31.94 1.65-31.94s1.23 24.84 1.56 31.92c.06 1.13.09 1.8.09 1.86a31.48 31.48 0 01-3.3-.01z"
        />
        <path
          className="trHarry_svg__cls-5"
          d="M147.27 260.67c-.5-1-8.13-13.24-13.29-25.14-.09-.21-.21-.46-.33-.76l-.3-.7c-.18-.45-.39-1-.61-1.52s-.45-1.17-.69-1.8l-.05-.14c-.14-.35-.26-.68-.37-1v-.14l-.05-.14-.33-1v-.14l-.33-1-.3-1v-.07a.56.56 0 000-.12c0-.1-.05-.2-.08-.3s-.08-.32-.13-.47a.13.13 0 010-.06 21.58 21.58 0 01-.9-7.53 7 7 0 01.33-1.66 5.2 5.2 0 011-1.79h2.8s6.63-11.11 7.6-18.42c0 0 .31-.16-.2-.22-1.18-.12-6.73.33-30.56 4.7 0 0-51.58 10.27-49.82 27.63 0 0-.37 1.69 1.8 3.3a5.46 5.46 0 01-1.7-2.62l.33-4c.22 3.85 5.51 6.14 5.82 6.58 3.77 1.38 10.92.53 17.13.57 3.43 0 6.57.32 8.69 1.4 2.13.85 4.16 1.57 6 2.16 11.18 3.54 18.06 3.12 18.06 3.12 14.37 2.15 27.49 30.92 35.05 58 4 14.52 6.5 28.54 6.69 37.68h.07c-.42-9.94-2.38-55.51-11.33-73.4zm-55-30.93c-12.85-4.32-30-13.34 9.47-23.18 0 0 25.64-7.45 36.1-6.8 0 0-69 11.78-42.48 29.2a47.77 47.77 0 006.37 3.44c-.27-.06-4.53-1.02-9.41-2.66zm34.5-13.74c-.32.23-.64.47-.94.71a22.13 22.13 0 00-2.79 2.66c-6.8 7.73-6.69 18-6.69 18-1.32-5.29-1.11-9.46 0-12.76a15.36 15.36 0 011.3-2.87 18.65 18.65 0 019.45-7.61c.77-.3 1.51-.56 2.21-.76l.6-.17 1.09-.2a20.46 20.46 0 012.9-.48 25 25 0 00-2.84 1.07c-.51.22-1 .46-1.48.71a24 24 0 00-2.81 1.7zM187.61 199.62h-.15a29.07 29.07 0 00-1.19 13 12.54 12.54 0 00.92 3.32l.21.09.13.06.26.11c1.9.79 4.85 1.84 6.5 3.16a11.28 11.28 0 013.3 3.89 22.55 22.55 0 011.58 5.14 30.23 30.23 0 01.51 8.65c-.35 4.72-1.82 9.18-3 13.72a40.61 40.61 0 00-1.11 15.69c1.19 13.47.48 28.51-.67 41.13 3.22-21.38 8-48.36 12-53.1 2.24-2.62 4.45-5.67 4.61-5.88 6-7.75-4.41-14.5-.67-20.05a7 7 0 011.57-1.62q.38-.28.81-.57a18.9 18.9 0 003.91.65c2 0 4.09-.73 4-3.81a4.68 4.68 0 01.18.7c2.03-14.66-31.19-23.62-33.7-24.28zm-1 3.91h.18c2.2.36 29.49 5.76 23.36 12.78 0 0 1.44-6.1-23.36-12.75zm25.73 22.41h-.12c-3.75-8.65-24-12.11-25.27-12.37 1.12.07 27.28.54 25.35 12.31-.04.06.02.06.02.06z"
        />
      </g>
      <g id="trHarry_svg__hoodie_shade">
        <path
          className="trHarry_svg__cls-6"
          d="M133.94 212.47a25 25 0 00-2.84 1.07c-.51.22-1 .46-1.48.71a24 24 0 00-2.84 1.76c-.32.23-.64.47-.94.71a22.13 22.13 0 00-2.79 2.66c-6.8 7.73-6.69 18-6.69 18-1.32-5.29-1.11-9.46 0-12.76a15.36 15.36 0 011.3-2.87 18.65 18.65 0 019.45-7.61c.77-.3 1.51-.56 2.21-.76l.6-.17L131 213a20.46 20.46 0 012.94-.53zM95.4 229a47.77 47.77 0 006.37 3.44c-.31-.06-4.57-1-9.45-2.66-12.85-4.32-30-13.34 9.47-23.18 0 0 25.64-7.45 36.1-6.8-.01-.04-69.01 11.74-42.49 29.2zM117.07 286.14s-3.48 21.06-.16 41.8c-2.72-8.26-3.38-18.69-3.34-27.16a.14.14 0 000-.09 146.26 146.26 0 011.5-16.55c3.2-21.88-1-35.06-4.09-41.33l1 .05c3.02 5.2 8.67 18.79 5.09 43.28zM210.13 216.33s1.44-6.1-23.36-12.75l-.18-.05h.18c2.23.38 29.49 5.78 23.36 12.8zM212.32 225.94h-.12c-3.75-8.65-24-12.11-25.27-12.37 1.12.07 27.28.54 25.35 12.31-.02.06.04.06.04.06zM226 283.05s-4.13 24.07-.82 48.58c-2.54-8.88-3.22-19.46-3.18-28.55a178.87 178.87 0 012-22c3.28-26.47-1.21-42.16-4.3-49.35l-.4-.89-.32-.68-.19-.39q-.14-.26-.24-.48c-.11-.19-.2-.38-.3-.55a8.84 8.84 0 01-1.61.24 15.37 15.37 0 01-2.52 0l-.12.02c0 .1-.12.29-.21.55a10.25 10.25 0 00.59 8s3.9 7.6-3.28 14.45c0 0-6 6.29-8.72 23.68l-9.81 51.37c.72-5 1.6-11.81 2.31-19.55 3.22-21.38 8-48.36 12-53.1 2.24-2.62 4.45-5.67 4.61-5.88 6-7.75-4.41-14.5-.67-20.05a7 7 0 011.57-1.62q.38-.28.81-.57a18.9 18.9 0 003.91.65c2 0 4.09-.73 4-3.81a4.68 4.68 0 01.18.7 3.87 3.87 0 01-1.44 4.11c-.21.36-.44.73-.69 1.1a19.1 19.1 0 011 1.71c.06.13.13.26.2.39.15.29.32.62.49 1 3.15 6.33 8.67 22.35 5.15 50.92z"
        />
        <path
          className="trHarry_svg__cls-6"
          d="M158.43 334h-.11c-.36-2.2-1.57-9.13-3.71-18.28-5.62-24-17.64-63.43-37.48-72.95a33.45 33.45 0 01-5.19.1l-1-.05c-.88-.06-1.84-.15-2.86-.28l-.89-.13A46.85 46.85 0 0193 238c-.83-.42-1.66-.87-2.49-1.36a152.56 152.56 0 00-16.24-1.5 34 34 0 01-4.45-.71l-1.35-.33a15.68 15.68 0 01-6.17-3 5.46 5.46 0 01-1.7-2.62l.33-4c.22 3.85 5.51 6.14 5.82 6.58 3.77 1.38 10.92.53 17.13.57 3.43 0 6.57.32 8.69 1.4 2.13.85 4.16 1.57 6 2.16 11.18 3.54 18.06 3.12 18.06 3.12 14.37 2.15 27.49 30.92 35.05 58 4.11 14.52 6.56 28.54 6.75 37.69zM295.77 336l-7.2-.34-1.7-.08s.13-.76.33-2.14a156.86 156.86 0 001.41-18.86c.35-22.53-3.88-57-30.76-71.1a56.36 56.36 0 0111.67 7.32l.14.11a63.67 63.67 0 0124.61 47.43zM41.72 335.41a31.51 31.51 0 01-3.27 0 7.36 7.36 0 010-.9c0-5.56 1.66-32.86 1.66-32.86s1.36 27.41 1.61 32.85c-.01.55 0 .87 0 .91zM263.6 335.41a31.48 31.48 0 01-3.27 0 16.25 16.25 0 010-1.83c.14-7.15 1.65-31.94 1.65-31.94s1.23 24.84 1.56 31.92c.03 1.12.06 1.79.06 1.85z"
        />
      </g>
      <g id="trHarry_svg__hoodie_strings">
        <path
          id="trHarry_svg__white_string"
          className="trHarry_svg__cls-3"
          d="M113.57 300.78a132.72 132.72 0 001.34 25.16c-5.54-16.79-2.53-42.59-2.53-42.59 3.13-21.4-1.58-34.51-5.15-41l.89.13c1 .13 2 .22 2.86.28 3.09 6.27 7.29 19.45 4.09 41.33a146.26 146.26 0 00-1.5 16.55.14.14 0 010 .14z"
        />
        <path
          id="trHarry_svg__white_string-2"
          data-name="white_string"
          className="trHarry_svg__cls-3"
          d="M222 303.08a161.84 161.84 0 001.18 26.55c-5.82-20.33-1.87-49.51-1.87-49.51 2.87-31.87-4.15-46.19-6.71-50.25-.23-.35-.41-.63-.56-.83l.06-.11a15.37 15.37 0 002.52 0 8.84 8.84 0 001.61-.24c.1.17.19.36.3.55s.15.31.24.48l.19.39.32.68.4.89c3.09 7.19 7.58 22.88 4.3 49.35a178.87 178.87 0 00-1.98 22.05z"
        />
      </g>
      <path
        id="trHarry_svg__mouth"
        className="trHarry_svg__cls-7"
        d="M207.42 148.28c-29.78 1-16.33-23.33-16.32-22.76-4.53 17.28 16.32 22.76 16.32 22.76z"
      />
      <g id="trHarry_svg__nose">
        <path
          className="trHarry_svg__cls-7"
          d="M222.66 130.77c5.78-7.19.22-12.54.22-12.54-6.85-5.88-15.18 1.29-15.55 1.62 8.76-10.22 16.1-4.95 16.1-4.95 9.04 7.1-.36 15.51-.77 15.87zM215.91 126.3l-5.74 1.14s-.86-3.81 5.74-1.14z"
        />
      </g>
      <g id="trHarry_svg__glasses">
        <path
          id="trHarry_svg__glasses_frames"
          className="trHarry_svg__cls-8"
          d="M281.38 77.51a1.3 1.3 0 00-.12-.21 6.84 6.84 0 00-5.06-3.87h-.08a5.39 5.39 0 00-.65-.19h-.13l-21.19.91H254l-8.11.35-14.38.5a8.47 8.47 0 00-1.31.2l-.4.1-.46.17h-.08l-.24.11h-.1a5.86 5.86 0 00-.57.31l-.09.05h-.16a6.7 6.7 0 00-1.69 1.51l-.24.33-.21.32-.3.52c-.07.15-.13.3-.17.41s-.1.25-.15.38a1.77 1.77 0 00-.08.25l-.07.24a9.16 9.16 0 00-3.37-1.76 15.47 15.47 0 00-5.35-.49 23.46 23.46 0 00-5.15.91c-.83.25-1.65.53-2.46.86-.4.16-.8.34-1.19.53l-.34.18a1.23 1.23 0 00-.07-.32.12.12 0 000-.1 7.93 7.93 0 00-1.4-3 8 8 0 00-5.47-3.1h-.06l-6.17-.5L153.21 70a8.4 8.4 0 00-1.21 0h-.78l-.37.06-.31.07a8.53 8.53 0 00-4.12 2.31l-.23.25a2.2 2.2 0 00-.2.23 9.32 9.32 0 00-1.26 2h-.05a2.9 2.9 0 00-1.11-.15l-43.44 2.74-6.51.41a1 1 0 00-.89.7 32.79 32.79 0 013 1.32l4.41.06 43.6.59h.26c3.3 23.56 29.59 24.26 29.83 24.26 1.07 0 2.09.08 3.09.08 22.91 0 28.86-13.49 30.35-21.78a7.64 7.64 0 00.12-1.65h.06l.6-.13 1.22-.23c.81-.14 1.62-.28 2.43-.39a44.36 44.36 0 014.83-.48 25.07 25.07 0 014.69.26 12.78 12.78 0 013.68 1.1 4.86 4.86 0 000 .93l.09.67a.09.09 0 010 .05c2.57 16.89 19.72 19.88 25 20.4h.16c1.25.12 2 .12 2.08.12a49.54 49.54 0 007.33-.6h.17c14.87-2.51 19.89-12 21.53-19.09 0-.19.09-.38.12-.56l.44-2.68a3.73 3.73 0 000-.46 6.85 6.85 0 00-.44-2.9zm-76.06 5.4c-1.76 9.78-8.63 21.18-31.41 20.06a37.9 37.9 0 01-13.22-3.15C152 95.88 147 89.13 145.9 79.73v-.32-.63a2.49 2.49 0 01.77-.58c1.34-.71 4.53-1.64 12.09-1.93a6.86 6.86 0 00-1.43 4.11c0 4.77 5.32 8.65 11.86 8.65S181 85.15 181 80.38a6.84 6.84 0 00-1.16-3.74c16.38.42 23.56 2.2 25 2.62a6 6 0 01.57 2.57 6.57 6.57 0 01-.09 1.08zm54.12 18.41H259.27a46.8 46.8 0 01-7 .58s-.78 0-2-.12h-.17c-18.93-1.93-22.47-14.18-23.12-19.38a3.35 3.35 0 010-.72v-.49l.35-.4c.16-.18 1.23-1 8.19-1.62a5 5 0 00-1.23 3.44c.18 3.25 4.08 6.4 10.4 6.4h1.07a16.47 16.47 0 002.85-.39 10.38 10.38 0 004.52-2.11 6 6 0 002.29-5 5.3 5.3 0 00-1.24-3.1h11.27c.91 0 1.77-.06 2.57-.06 8.8 0 11.31 2.12 11.83 2.7-1.05 7.95-5.45 17.74-20.41 20.27z"
        />
        <g id="trHarry_svg__lenses">
          <path
            id="trHarry_svg__lense"
            className="trHarry_svg__cls-3"
            d="M268 78.37c-.8 0-1.66 0-2.57.06-.1 0-4.47-.07-10.19 0h-1.08a5.3 5.3 0 011.24 3.1 6 6 0 01-2.29 5 10.38 10.38 0 01-4.52 2.11 16.47 16.47 0 01-2.85.39h-1.07c-6.32 0-10.22-3.15-10.4-6.4a5 5 0 011.23-3.44c-7 .63-8 1.44-8.19 1.62l-.35.4v.49a3.35 3.35 0 000 .72c.65 5.2 4.19 17.45 23.12 19.38h.17c1.25.12 2 .12 2 .12a46.8 46.8 0 007-.58H259.42c15-2.53 19.36-12.32 20.38-20.25-.5-.6-3.01-2.72-11.8-2.72zm4.28 15.89s-4.41 3.85-13.14 5h-.06a40.05 40.05 0 01-9.22.08c-1.27-.13-2.6-.32-4-.58 0 0 1.56.13 3.94.13a56.66 56.66 0 009.1-.7h.1c4.16-.7 8.41-2 11.27-4.51 0 0 6.46-5.09 2.36-12.48-.02-.04 7.83 5.57-.36 13.06z"
          />
          <path
            id="trHarry_svg__lense-2"
            data-name="lense"
            className="trHarry_svg__cls-3"
            d="M204.85 79.26c-1.46-.42-8.64-2.2-25-2.62a6.84 6.84 0 011.15 3.74c0 4.77-5.32 8.65-11.86 8.65s-11.86-3.88-11.86-8.65a6.86 6.86 0 011.43-4.11c-7.56.29-10.75 1.22-12.09 1.93a2.49 2.49 0 00-.77.58v.95c1.1 9.4 6.08 16.15 14.79 20.09a37.9 37.9 0 0013.27 3.18c22.78 1.12 29.65-10.28 31.41-20.06a6.57 6.57 0 00.1-1.08 6 6 0 00-.57-2.6zM197.3 95s-10.25 9.47-30.47 5.47c0 0 19.55 1.69 28.14-6.24 0 0 7.43-6.23 2.73-15.26.35.24 8.86 7.03-.4 16.03z"
          />
        </g>
        <g id="trHarry_svg__lense_shine">
          <path
            className="trHarry_svg__cls-9"
            d="M197.3 95s-10.25 9.47-30.47 5.47c0 0 19.55 1.69 28.14-6.24 0 0 7.43-6.23 2.73-15.26.35.24 8.86 7.03-.4 16.03zM272.27 94.26s-4.41 3.85-13.14 5h-.06a40.05 40.05 0 01-9.22.08c-1.27-.13-2.6-.32-4-.58 0 0 1.56.13 3.94.13a56.66 56.66 0 009.1-.7h.11c4.16-.7 8.41-2 11.27-4.51 0 0 6.46-5.09 2.36-12.48-.02-.04 7.83 5.57-.36 13.06z"
          />
        </g>
      </g>
      <g id="trHarry_svg__eyebrows">
        <path
          id="trHarry_svg__eyebrow"
          className="trHarry_svg__cls-8"
          d="M204.79 65.65a18.41 18.41 0 01-.65 4.37c-.22.53-.52.65-.73.65a.56.56 0 01-.21 0c-.08 0-3.39-1-8.29-2.21s-11.39-2.7-17.85-3.73c-14.27-2.29-30.4-.32-30.56-.3l-1.21.15 4.91-6.17c.2-.12 5.07-2.86 13.5-.67a2.09 2.09 0 002.74-1.13c.31-.49.64-1 1.25-1 1.33-.1 3.27.67 5.14 1.42a13.87 13.87 0 004 1.21c.73 0 .91-.21.94-.26s0-.6-.12-.89-.28-.81 0-1.13a.85.85 0 01.86-.18c2.18.51 5.51 1.31 8.49 2.05-.57-.54-1-1-.69-1.41s1-.3 1.46-.17a18.18 18.18 0 014.93 2.37 18.7 18.7 0 004 2c-.36-.48-.67-.9-.38-1.3s.9-.21 1.21-.1a67.65 67.65 0 016.86 2.73c.24.05.61.26.4 3.7z"
        />
        <path
          id="trHarry_svg__eyebrow-2"
          data-name="eyebrow"
          className="trHarry_svg__cls-8"
          d="M270.77 67.58l-.67-.13a86.18 86.18 0 00-18-.55h-.37c-2.58.19-5.15.5-7.61.92a63.78 63.78 0 00-11.38 3 .67.67 0 01-.22 0 .85.85 0 01-.47-.16c-.94-.64-2.4-3.43-2.54-7.4V63l.21-.16a24.06 24.06 0 015.95-3.17.87.87 0 01.73 0 1.55 1.55 0 01.62 1.06 2 2 0 00.18.51c.44-.18 1.58-.8 2.69-1.4l1.53-.82h.07a11.38 11.38 0 011.51-.72c1-.37 1.39.52 1.54.89a1.14 1.14 0 00.19.37.31.31 0 00.15 0c.57-.2 1.74-.8 2.87-1.38l1.06-.53.18-.09a16 16 0 011.73-.78c.89-.31 1.54.44 2 1s.67.75.87.68c1.25-.43 8.27-1.78 9-.57a.73.73 0 01-.22 1 4.66 4.66 0 00-1 1.18 4.29 4.29 0 001.38-.18 6.75 6.75 0 014.66.66 5.71 5.71 0 00.67.3l.17.11c1.71 1.68 2.24 5 2.36 6z"
        />
      </g>
    </svg>
  );
}

export default TrHarry;