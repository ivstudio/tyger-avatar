import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function TrIggy({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      id="trIggy_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310.96 365.11"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trIggy_svg__cls-2{fill:#fff}.trIggy_svg__cls-4{fill:#556e4f}.trIggy_svg__cls-5{fill:#3d4f37}.trIggy_svg__cls-6{fill:#e2ab90}.trIggy_svg__cls-7{fill:#b96458;opacity:.25}.trIggy_svg__cls-8{fill:#010101}.trIggy_svg__cls-9{fill:#3c1e11}.trIggy_svg__cls-11{fill:#60381c}.trIggy_svg__cls-12{fill:#552c0f}.trIggy_svg__cls-13{fill:#373a37}.trIggy_svg__cls-14{fill:#2c140b}"
          }
        </style>
      </defs>
      <path fill="none" d="M0 0h310.96v364.63H0z" />
      <path
        id="trIggy_svg__tshirt"
        className="trIggy_svg__cls-2"
        d="M206.33 281.63a39.49 39.49 0 00-1.08 15.23c2.61 29.69-4.94 68.14-4.94 68.14h4.19v.11l-4.61-.1-30.19-.75c.11-4.85.7-49.83-12-73.31-.91-1.68-25.1-35.48-15.56-45.7l15.56-2.38a6 6 0 00-.05.61c-.79 9.94 6 21.42 24.91 21.42.3 0 12.57-.65 14.89-10.07a16.23 16.23 0 00-.11-7.42h.22l8.61 2c5.49 13.9 2.24 24.36.16 32.22z"
      />
      <path
        id="trIggy_svg__neckline"
        d="M149.27 244.09c-.61 30.82 30.19 29.16 30.12 29.24 29.89.78 26-24.56 26-24.56s7.9 26.65-26.79 26.93c0 0-32.47.68-30.58-30.69 0-.14-.12-.51-.11-.65z"
        fill="#cfcfce"
      />
      <g id="trIggy_svg__sweatshirt">
        <path
          className="trIggy_svg__cls-4"
          d="M157.69 291c-.9-1.66-24.51-34.68-15.89-45.32l.07-.09.26-.29 15.56-2.38 1-.16a62.67 62.67 0 006.51-13.43s-8.61-2.46-43.43 1.86c0 0-49.62 5.1-47.92 22l-.14.05-.89.26c-1.27.37-3.65 1-6.7 1.81-1.25.31-35.82 4.8-48.34 23.47 0 0-16.14 19.4-17.23 86.05l169.12-.05v-.43c.13-4.94.72-49.92-11.98-73.35zm-32.55 22.78c3.37-23-2.6-36.16-6.07-41.57a20 20 0 00-2.22-3l4.29.83a14.17 14.17 0 011.26 1.81c.16.25.32.52.5.83 3 5.21 8.29 18.36 4.86 41.83a142.49 142.49 0 00-1.46 16.41 128.25 128.25 0 001.31 24.21c-5.39-16.32-2.47-41.4-2.47-41.4zM306.62 294.29a38 38 0 00-10.62-19.6 47.06 47.06 0 00-9.33-7.1 54.71 54.71 0 00-15.94-6.29l-39.13-8.36c.22-7.14-7.15-12.09-15.2-15.35l-.3.11-1.37.49.19-1.19c-1.2-.44-2.39-.86-3.58-1.24a21.39 21.39 0 01-4.12 1.59c-1.16.38-2.37.76-3.63 1.28l-.73.32-.49.24-1.86.89.58-1.69.08-.26v-.1a7.52 7.52 0 00.35-4.86c-.76-.16-1.45-.31-2.06-.42a6.42 6.42 0 01-3.67 2.84l-.27.11a16.86 16.86 0 00.23 7.79l.12.4a12.81 12.81 0 001.52 3.44h.13l8.54 1.74a2.09 2.09 0 01.13.35c5.47 13.86 2.22 24.32.14 32.18a39.49 39.49 0 00-1.08 15.23c1 11.7.48 24.77-.56 36.3-1.39 15.35-3.65 28-4.25 31.1a1.28 1.28 0 000 .17c-.07.38-.11.57-.11.57H310c1.15-55.52-3.38-70.68-3.38-70.68zm-77.26 14.4c2.58-28.63-3.06-42.67-5.89-47.74a15.42 15.42 0 00-1.5-2.3l.56-.26a2.14 2.14 0 01.1.22h.08v-.26l2.65-1.24a18.74 18.74 0 011.32 2.24c2.83 5.5 8.88 21.19 5.27 50.26A174.72 174.72 0 00230 331a156.52 156.52 0 001.15 25.77c-5.63-19.77-1.79-48.08-1.79-48.08z"
        />
      </g>
      <g id="trIggy_svg__sweatshirt_shadows">
        <path
          id="trIggy_svg__sweatshirt_shadow"
          className="trIggy_svg__cls-5"
          d="M142.05 245.52c.22-.09-17.68 1.9-13.51 24.52 0-.04.68-19.1 13.51-24.52z"
        />
        <path
          id="trIggy_svg__sweatshirt_shadow-2"
          data-name="sweatshirt_shadow"
          className="trIggy_svg__cls-5"
          d="M119.23 260.25s-55.34-16.84 3.53-22.46c0 0 27.59-3.53 38.34-1.76 0-.03-82.88 2.62-41.87 24.22z"
        />
        <path
          className="trIggy_svg__cls-2"
          d="M126.3 330.91a128.25 128.25 0 001.31 24.21c-5.39-16.31-2.47-41.39-2.47-41.39 3.37-23-2.6-36.16-6.07-41.57a20 20 0 00-2.22-3l4.29.83a14.17 14.17 0 011.26 1.81c.16.25.32.52.5.83 3 5.21 8.29 18.36 4.86 41.83a142.49 142.49 0 00-1.46 16.45z"
        />
        <path
          className="trIggy_svg__cls-5"
          d="M129.7 316.44s-3.38 20.47-.15 40.62c-2.63-7.94-3.28-18-3.25-26.15a142.49 142.49 0 011.46-16.41c3.43-23.47-1.9-36.62-4.86-41.83-.18-.31-.34-.58-.5-.83l.68.13s.22.25.59.77c2.24 3.2 10.01 16.54 6.03 43.7zM233.13 358.77v.09zM233.92 311.55s-4 23.37-.8 47.17c-2.47-8.63-3.12-18.89-3.12-27.72a174.72 174.72 0 012-21.4c3.61-29.07-2.44-44.76-5.27-50.26l.62-.3c.38.57 11.09 15.96 6.57 52.51zM201.17 238v.1l-.08.26c-1.52-.46-3.15-.93-4.93-1.41-.23-.03 1.84.34 5.01 1.05zM219 249.42s1.14-4.79-16.16-10.47l.73-.32c8.02 2.06 19.57 6.05 15.43 10.79zM222.71 258.3v.26h-.08a2.14 2.14 0 00-.1-.22 2.47 2.47 0 00-.17-.42c-3-6.17-15.36-8.67-16.17-8.87.71.05 16.76.39 16.55 8.68a4.53 4.53 0 01-.03.57z"
        />
        <path
          className="trIggy_svg__cls-5"
          d="M227.31 259c-.19.11-.4.22-.61.32a18.74 18.74 0 00-1.32-2.24l-2.65 1.24v.26h-.08a2.14 2.14 0 00-.1-.22l-.56.26a15.42 15.42 0 011.5 2.3c-.79.84-2.23 3-.5 6.66 0 0 3.79 7.62-3.18 14.48 0 0-5.78 6.3-8.48 23.71l-10.94 59.09v-.46a1.28 1.28 0 010-.17c.36-3 2-16.2 4.25-31.1 3.11-20.54 7.36-44.25 11-48.67 2.18-2.63 4.33-5.68 4.49-5.89 6.53-8.76-6.43-14.74 2.16-20.63l.19-.13.19-.06c1.2-.37 8-2.57 8.85-4.78.07.03 1.3 3.03-4.21 6.03zM169.57 364.27c0-.18-12.1-77.34-40.49-91.31a46.72 46.72 0 01-5.41-.22l-.77-.07c-.18-.31-.34-.58-.5-.83a14.17 14.17 0 00-1.26-1.81l-4.29-.83a20 20 0 012.22 3 55.91 55.91 0 01-16.6-5.35c-.12-.05-4.54-1.86-15.22-2.48 0 0-14.21-.54-14.42-10.92l.9-.53v.3c-.06 5.7 5.73 6.94 5.72 7.22 5.72 2.18 17.85 1.24 23.7 4.31 14.37 5.87 25.71 5.83 25.71 5.83 21.81 3.29 40.54 67.97 40.71 93.69z"
        />
        <path
          id="trIggy_svg__sweatshirt_shadow-3"
          data-name="sweatshirt_shadow"
          className="trIggy_svg__cls-5"
          d="M285.35 267.22c-1-.47 23.25 4.65 22.76 52.62l1.46 44.7-11.44-.34s15.52-83.66-12.78-96.98z"
        />
        <path
          id="trIggy_svg__right_armpit"
          className="trIggy_svg__cls-5"
          d="M59.64 364c-.31-1.77 1.58-32.8 1.58-32.8s1.62 32.8 1.6 32.8a29.79 29.79 0 01-3.18 0z"
        />
        <path
          id="trIggy_svg__left_armpit"
          className="trIggy_svg__cls-5"
          d="M275.17 364c-.31-1.77 1.58-32.8 1.58-32.8s1.62 32.81 1.6 32.81a29.79 29.79 0 01-3.18-.01z"
        />
      </g>
      <g id="trIggy_svg__drawstrings">
        <path
          className="trIggy_svg__cls-2"
          d="M230 331a156.52 156.52 0 001.15 25.77c-5.66-19.73-1.82-48.08-1.82-48.08 2.58-28.63-3.06-42.67-5.89-47.74a15.42 15.42 0 00-1.5-2.3l.56-.26a2.14 2.14 0 01.1.22h.08v-.26l2.65-1.24a18.74 18.74 0 011.32 2.24c2.83 5.5 8.88 21.19 5.27 50.26A174.72 174.72 0 00230 331z"
        />
        <path
          className="trIggy_svg__cls-2"
          d="M222.71 258.6h-.08a2.14 2.14 0 00-.1-.22l.18-.09v.31zM231.19 356.83v-.06.1z"
        />
      </g>
      <g id="trIggy_svg__skin">
        <path
          className="trIggy_svg__cls-6"
          d="M197.44 254.83c-2.32 9.42-14.59 10.07-14.89 10.07-19 0-25.7-11.48-24.91-21.42a2.86 2.86 0 00.6-.23c.84-.38 5.22-8.65 8.76-18.38 4.37 3.06 9.13 5.7 13.71 5.94h.69l.2-.67a3.7 3.7 0 00.11-1.91l.08-.06c2 1.51 2.36 1.86 1.59 4.2l-.68 2 2.42-1.25.82-.43a5.64 5.64 0 002.78-2.74c.28.49.54 1 .82 1.52s.6 1.16.93 1.72l.82 1.42 1.58-3.36c.09.17.19.33.28.48.66 1.12.94 1.59.18 3.1l-.92 1.85 2-.64c.4-.13.76-.25 1.11-.39-.75 3.92-.47 8.07 2 11.71h-.22a16.23 16.23 0 01.14 7.47zM233.37 200.88s-10.76 6.5-15-2.3c0 0-4.31 8.41-21.27 1.54 0 0 5.31-12.75 23.69-11.09.04-.03 12.07-1.03 12.58 11.85zM273.82 142.32a1.47 1.47 0 01-2 .36 21.85 21.85 0 00-12.39-4.07c.13.16.26.31.39.49a6.36 6.36 0 01-1.05 8.5 5.7 5.7 0 01-3.64 1.34 5.43 5.43 0 01-.69 0 6 6 0 01-5-6.77 6.33 6.33 0 01.37-1.47l-.5.25a1.45 1.45 0 11-1.4-2.54 24.9 24.9 0 0125.57 1.92 1.46 1.46 0 01.34 1.99zM126.72 138.83a21.45 21.45 0 001.32 1.85l-1.52 1.2-.18-.21a16.76 16.76 0 00-1.45-1.36v.08a36.28 36.28 0 00-5-2.88 24.85 24.85 0 00-2.52-1c3.33.26 6.16.81 6.83.69l1.34-.23.24.44c.12.19.23.39.35.59s.38.53.59.83zM155.47 133.83a1.31 1.31 0 01-.28-.12l-.12-.09c.13.08.26.14.4.21zM162.26 145.26c-.09-1.14-1.21-8.13-1-10.86.4-4.54 4.89-4.73 5.23-5 15.16-1.63 40.66 0 40.66 0a4.67 4.67 0 014.9 3.29l.1-.1c.05.29.08.59.11.92a19.22 19.22 0 010 2.85 44.19 44.19 0 01-1 7s-3.24 15.07-28.66 13.89h-.12s-11.28-.49-15.15-3.36a8.07 8.07 0 01-2.48-2.13 10.37 10.37 0 01-1.71-2.94 18.55 18.55 0 01-1-3.39 2.07 2.07 0 01.12-.17zM264.78 159.2h-.43l.43-.05h.29z"
        />
        <path
          className="trIggy_svg__cls-6"
          d="M271.86 162.17l1.21-.21q-1.65 4.74-3.66 9.68-1.41 3.53-3 7.16l.05-.52v-.38l-2.11 4.34c-2.38 4.89-11.58 16.87-17.82 20.52h-.08a7.75 7.75 0 01-2.13.92c-.07-.37-.14-.79-.2-1.25a42.81 42.81 0 00-3.12-11.56c-1.28-2.66-4.48-6.94-7.58-8.14-1.1-.43-6.83-2.55-10.8-2.39a34.53 34.53 0 01-6.85-.76c-3.27-.56-6.64-1.14-9.57-.61-7.14 1.31-16.89 10.54-20.65 17.66l-4.22-1.33c-12.42-3.87-29.44-9.16-34.65-18.51-5.88-10.53-10.83-29-9.75-41.78 7.12-1.22 14.9-2.57 16.49-2.88a4.71 4.71 0 001.34 1.27c0 .11.07.32.11.54.22 1.17.36 2.6.53 4s.39 2.78.65 4.17l.72 4.27a22.39 22.39 0 001.48 4.73 14.6 14.6 0 006.87 7.46c3.08 1.5 14.2 2.15 17.17 2.07 22.85.78 29.5-9.84 31.32-14.49 1.6-3.35 2.21-6.31 5.4-10.16 1.92-2.08 6.15-3 8.34-3 2.08.15 6.41.32 8.5 5.61a64 64 0 001.85 6.91c.07 1.56 1.36 18.4 24.94 17.4h2.4c1.23-.07 2.73-.19 4.26-.35.87-.16 1.7-.27 2.56-.39zM282.56 118.87l-.2-.26c-.06-.09-.13-.17-.2-.26l-.33-.4a23 23 0 00-5.93-5l-.11-.06a22.87 22.87 0 00-2.44-1.18l-.17-.07c-12.78-5.37-27.75 1.75-28 1.84a1.2 1.2 0 00-.34.25c-2.16 2.32-.84 7.53-.68 8.12a1.14 1.14 0 00.63.74 1.16 1.16 0 001 0c.17-.08 14.33-6.64 26.62-3.41a20.62 20.62 0 017.52 3.63c.29.22.58.45.87.7l.15.12-1.7-.07H272v-.12h-23.14c-.62 0-1.24.1-1.86.19a16.78 16.78 0 00-3.84.91 8.73 8.73 0 00-2 1.09 7.12 7.12 0 00-1.9 2.05 5.36 5.36 0 00-.34.62.16.16 0 00-.27 0c-2 2.17-4.66.54-6 0a16.31 16.31 0 00-7-1.29c-2.32.09-4.69.66-7.11 1-1.58.23-2.48.35-3.57-.43l-.2-.34a6.34 6.34 0 00-2-1.94 9.79 9.79 0 00-2.25-1 23.26 23.26 0 00-4.43-.87c-.73-.08-1.46-.13-2.18-.17s-1.48-.07-2.16-.06h-33.69l-4.25.15c-1.42.06-2.83.13-4.27.25-.72.06-1.46.14-2.21.25a10.41 10.41 0 00-2.45.63l-.59.29-.24.18-.34.29c-3.36.08-10.51 1-17.42 1.93-10.82-11.49-1.8-39.8.81-47.21 8.9 13.19 15.3 11.42 15.57 11.34l1-.3-.31-.94a12.37 12.37 0 013.77-13.93l.14-.11c27.5-29.4 78.08-9.21 78.58-9l.4.17.38-.19c9.5-4.37 17.95-5.47 25.2-3.28.79.24 1.58.52 2.36.84a24.46 24.46 0 014.91 2.77l.61.46a17.21 17.21 0 011.39 1.14c.19.15.36.32.54.47a31.37 31.37 0 017.55 10.93l1.18 3.29v-.21l.11-.51.09.46a122.2 122.2 0 011.99 35.51zM132.71 168.69a7.62 7.62 0 01-.42 1.88c-.12.31-.38.83-.73.87h-.09c-6.4 11.75-15.56-4.51-15.56-4.51-15-17.27-7.84-28.67-7.84-28.67a7 7 0 01.9-.91 5.49 5.49 0 01.69-.5 6.82 6.82 0 013.23-1 12.51 12.51 0 014.46.65 24.85 24.85 0 012.52 1 36.28 36.28 0 015 2.88c5.83 9.53 8.49 22.47 7.84 28.31z"
        />
      </g>
      <g id="trIggy_svg__skin_shodows">
        <path
          className="trIggy_svg__cls-7"
          d="M197.49 254.83c-3.44-2-5.69-3.92-5.65-5.19a158.26 158.26 0 00-5.84-16.89 5.72 5.72 0 002.78-2.74c.28.49.54 1 .81 1.52s.6 1.16.93 1.72l.83 1.42 1.57-3.36c.1.17.2.33.28.48.67 1.12.95 1.59.19 3.1l-.92 1.85 2-.64c.41-.14.79-.26 1.15-.4a16.59 16.59 0 00.23 7.79c0 .13.08.26.11.4a13 13 0 001.53 3.44h.13a.93.93 0 01.05.1l-.25-.05a16.39 16.39 0 01.07 7.45zM273.25 161.94q-1.74 4.77-3.84 9.71c-.72 1.69-1.47 3.41-2.26 5.14 0 0-.23.53-.67 1.5v-.38l-.06.13-2 4.21c-2.39 4.91-11.66 17-17.9 20.57 6.41-9.82 12.68-22.82 17.34-39.92h1.21c1.23-.07 2.73-.19 4.26-.35.85-.09 1.7-.2 2.53-.33l1.21-.2zM281 123.59l-1.7-.07H272v-.12c.19-1.35.37-2.75.55-4.17a20.8 20.8 0 017.35 3.5c.29.22.58.45.87.7zM282.68 119l-.12-.16c-.13-.18-.28-.36-.41-.53l-.33-.4a20.63 20.63 0 00-5.93-5l-.11-.06a22.87 22.87 0 00-2.44-1.18c1.39-18 0-38.53-11.3-47.37-.29-.23-.3-.41-.1-.51a23.89 23.89 0 017.72 3.94 17.21 17.21 0 011.39 1.14 31.16 31.16 0 018.25 11.53l1.06 3 .13.34.07-.39.06-.31a119.22 119.22 0 012.06 35.96z"
        />
        <path
          id="trIggy_svg__ear_shadow"
          className="trIggy_svg__cls-7"
          d="M131.15 161.25a4.3 4.3 0 01-5.87.25c-3.47-4.28 2.13-7.94 2.13-7.94-4.62-12.29-14-8.32-14.52-8 0 0 9.4-.64 11.79 8 0 0-3.09 0-4.89 4.26a6.26 6.26 0 003 7.56c.34.21 6.79 3.4 9.19-3.2z"
        />
      </g>
      <path
        id="trIggy_svg__mouth"
        className="trIggy_svg__cls-8"
        d="M210.09 189.6c-.3-.27 5.89 18.19 19.55 2.1 0 0-12.76 8.38-19.55-2.1z"
      />
      <g id="trIggy_svg__nose">
        <path
          id="trIggy_svg__nostril"
          className="trIggy_svg__cls-8"
          d="M217 179.38s-.83-3.7 5.57-1.11z"
        />
        <path
          className="trIggy_svg__cls-8"
          d="M232 182.2l-.53-.19a8.43 8.43 0 00-1.45-9.56c-6.65-5.71-14.74 1.26-15.1 1.58 8.51-9.94 15.64-4.81 15.64-4.81 5.92 4.7 3.61 9.98 1.44 12.98z"
        />
      </g>
      <g id="trIggy_svg__eyebrows">
        <path
          className="trIggy_svg__cls-9"
          d="M211.43 123a1.12 1.12 0 01-.67.64 1.07 1.07 0 01-.39.07 1.21 1.21 0 01-.53-.12c-24.41-12.78-55-2.38-55.31-2.28a1.14 1.14 0 01-1.38-.52 1.16 1.16 0 01.3-1.46c17-13.35 34.47-12.57 46.2-9.57 5.07 1.3 10.64 3.59 11.43 4.67 2.21 3.78.43 8.34.35 8.57zM283.19 120.09V123a1.12 1.12 0 01-.16.58h-.92l-1.28-.06c-.29-.25-.58-.48-.87-.7a20.62 20.62 0 00-7.52-3.63c-12.29-3.23-26.45 3.33-26.62 3.41a1.16 1.16 0 01-1 0 1.14 1.14 0 01-.63-.74c-.16-.59-1.48-5.8.68-8.12a1.2 1.2 0 01.34-.25c.2-.09 15.17-7.21 28-1.84l.17.07a22.87 22.87 0 012.44 1.18l.11.06a23 23 0 015.93 5l.33.4c.07.09.14.17.2.26l.2.26.12.16.22.29.06.08a1.1 1.1 0 01.2.68z"
        />
        <path
          className="trIggy_svg__cls-9"
          d="M273.34 111.68a20.65 20.65 0 012.44 1.23 22.87 22.87 0 00-2.44-1.18zM282.68 119l-.12-.16c-.13-.18-.28-.36-.41-.53.14.16.28.34.41.51z"
        />
      </g>
      <path
        id="trIggy_svg__beard"
        d="M264.36 182.25c-2.39 4.91-11.66 17-17.9 20.57a7.75 7.75 0 01-2.13.92c-.07-.37-.14-.79-.2-1.25a42.81 42.81 0 00-3.13-11.62c-1.28-2.66-4.48-6.94-7.58-8.14-.26-.1-.78-.3-1.48-.53l-.54-.19a28.3 28.3 0 00-8.78-1.67 34.53 34.53 0 01-6.85-.76c-3.27-.56-6.64-1.14-9.57-.61-7.14 1.31-16.89 10.54-20.65 17.66l-4.22-1.33c-12.42-3.87-29.44-9.16-34.65-18.51-5.88-10.53-10.83-29-9.75-41.78l-11.34 1.92.24.44c.12.19.23.39.35.59s.36.57.57.87a21.45 21.45 0 001.32 1.85l-1.52 1.2a15.69 15.69 0 00-1.68-1.62c6.6 10.8 9.16 26 7.45 30.31-.12.31-.38.83-.73.87l-.41.05-.08.14-.14.2c-.24.37-.35.53 1.73 9.08 1.31 5.41 2.7 10.71 3.71 14.19 2.2 7.51 14.33 18.1 20 21.85 1.36.9 3 2.19 4.79 3.56s3.77 2.92 5.81 4.36c4.37 3.06 9.13 5.7 13.71 5.94h.69l.2-.67a3.7 3.7 0 00.11-1.91l.08-.06c2 1.51 2.36 1.86 1.59 4.2l-.68 2 2.42-1.25.82-.43a5.64 5.64 0 002.78-2.74c.28.49.54 1 .82 1.52s.6 1.16.93 1.72l.82 1.42 1.58-3.36c.09.17.19.33.28.48.66 1.12.94 1.59.18 3.1l-.92 1.85 2-.64c.4-.13.76-.25 1.11-.39l.27-.11a6.42 6.42 0 003.67-2.84 6.68 6.68 0 00.69-1.95 6.5 6.5 0 011 7.23v.1l-.08.26-.58 1.69 1.86-.89.49-.24.73-.32c1.26-.52 2.47-.9 3.63-1.28a21.39 21.39 0 004.12-1.59 7.81 7.81 0 003.37-3.47 9.25 9.25 0 01.25 4.46v.25l-.19 1.19 1.37-.49.3-.11a13.53 13.53 0 008.11-7.33 4.41 4.41 0 01.87 4.46l-.55 2 1.8-1c12-6.81 19.78-13.58 25.26-21.95 6.88-10.52 13.13-20.81 14.13-31l.39-3.9.05-.52v-.38zm-46 16.33s-4.31 8.41-21.27 1.54c0 0 5.31-12.75 23.69-11.09 0 0 12-1.05 12.54 11.85.05 0-10.71 6.5-14.91-2.3z"
        fill="#4f2618"
      />
      <g id="trIggy_svg__beard_highlights">
        <path
          id="trIggy_svg__beard_highlight"
          className="trIggy_svg__cls-11"
          d="M170.54 223.06s-4.45-5.73-3.45-15.26l-3.17-1.74s.42 14.11 6.62 17z"
        />
        <path
          id="trIggy_svg__beard_highlight-2"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M196.56 227.1s8.23-4.72 1.72-13.69c0 0 1.23-.69-.26.27-.02.04 2.73 4.79-1.46 13.42z"
        />
        <path
          id="trIggy_svg__beard_highlight-3"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M217.65 235.66s8.74-6.2 6.54-11.87c0 0 1.3-.91-.32.3-.07.05.54 3.23-6.22 11.57z"
        />
        <path
          id="trIggy_svg__beard_highlight-4"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M253.24 208.29s8.05-4.87 1.38-11.23c0 0 1.21-.71-.25.25-.06.04 2.82 3.49-1.13 10.98z"
        />
        <path
          id="trIggy_svg__beard_highlight-5"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M142 183.87c.15.12-6.45-2.48-1.67-9.9l1.94-.18s-4.33 6.66-.27 10.08z"
        />
        <path
          id="trIggy_svg__beard_highlight-6"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M238.73 204.2s10.77 15.22-4.76 21c.03 0 19.39-4.39 4.76-21z"
        />
        <path
          id="trIggy_svg__beard_highlight-7"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M221.61 206.81s5.78 9.19-2.19 15.17c0 .02 5.86-5.5 2.19-15.17z"
        />
        <path
          id="trIggy_svg__beard_highlight-8"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M184 198.37s-10.73 12.47-2.17 19c-.02-.03-3.52-8.61 2.17-19z"
        />
        <path
          id="trIggy_svg__beard_highlight-9"
          data-name="beard_highlight"
          className="trIggy_svg__cls-11"
          d="M152.77 188s-5.2 10.47 1.53 14.05a18.8 18.8 0 01-1.53-14.05z"
        />
      </g>
      <g id="trIggy_svg__hair">
        <path
          className="trIggy_svg__cls-9"
          d="M281 80.13l-.31 1.58-.22 1.14-.15.72-1.18-3.29c0-.12-4.16-11.23-15-15.77-.78-.32-1.57-.6-2.36-.84-7.25-2.19-15.7-1.09-25.2 3.28l-.38.19-.4-.17c-.5-.2-51.08-20.39-78.58 9l-.14.11A12.37 12.37 0 00153.31 90l.31.94-1 .3c-.27.08-6.67 1.85-15.57-11.34-2.61 7.41-11.63 35.72-.81 47.21-4.44.6-8.77 1.23-11.92 1.68l-1 .14c-1.43.2-2.55.35-3.2.41l-8 4.2-3.37 1.76.29 1.7.49-.14h.1a5.49 5.49 0 00-.69.5l-.51.15-.86.28-.33-.84c-.18-.43-16.6-42.66 2.16-76.18.25-.48.88-2.12.32-3-.4-.58-1.5-.81-3.09-.65l-4.32.43 3.71-2.23a8.91 8.91 0 018.72.06 7.73 7.73 0 00-1.57-4.35c-2-2.65-5.82-4.18-11.3-4.53l-1.33-.08.49-1.25c.1-.26 2.6-6.46 8-7.68 2.9-.66 6 .22 9.27 2.63.85-5.24 3.8-15.84 13.82-17.74l1.95-.36-.9 1.76c0 .07-3.3 6.69-.79 13.73 1-4.12 3.59-11.24 9.91-14.11l.58-.26.47.43c.48.44.31.95.16 1.41-1.28 3.83-.72 4.43-.69 4.46s.3.07 1-.2 1.61-2.41 2.34-4.12c1.47-3.41 3.3-7.65 6.82-8.48l1.65-.39-.49 1.63a8.33 8.33 0 00.07 5.18 1.9 1.9 0 001.2 1.25c11-6.71 10.12-15.75 10.08-16.14l-.17-1.57 1.48.55c.19.08 4.56 1.76 5.3 5.21a20.42 20.42 0 01.19 4.94c0 .75-.06 1.7 0 2.25 1.26-.54 3-3.11 4.5-5.22 2.48-3.57 5.06-7.27 8-7l1.67.16-1 1.37s-1.46 2.13-.69 4c.58 1.39 2.28 2.45 4.95 3.1.23-3.5 1.91-13.36 13.14-15l2.57-.37-1.69 2a14.11 14.11 0 00-2.6 6.05 5 5 0 002.39 4.89 2.11 2.11 0 002.72-.5 9.64 9.64 0 0113.27-1.25l.75.61-.61.75c-2.24 2.73-4.27 6.36-3.73 7.37.12.24.67.35 1.44.28A8 8 0 00224 16a6.52 6.52 0 00-.93-6.84l-1.44-1.76 2.27.2a8.85 8.85 0 015.62 3 8.89 8.89 0 011.84 6.24c.23-.14.46-.3.66-.44a27.76 27.76 0 012.73-1.62 9.73 9.73 0 014.95-.7l1.76.23-1.14 1.35s-2.44 2.95-2 5.47a3.5 3.5 0 001.79 2.48 1.93 1.93 0 001.84.28c2-.72 3.5-4.39 3.93-5.75l.48-1.53 1.14 1.14a20.61 20.61 0 013.5 4.69c.1.26.22.55.35.86.55 1.34 1.56 3.84 2.58 3.94 6.61.68 7.51-5.56 7.55-5.83l.26-2 1.4 1.44a11.46 11.46 0 012.46 10.7 22.09 22.09 0 013-1.37 7.46 7.46 0 016.26.76l1.6 1.09-1.82.64a2.54 2.54 0 00-1.29 1.59c-.58 1.6-.57 4.79 2.78 10.85 4.56 8.27 8.4 17.2 4.87 35.02zM128 140.68l-1.52 1.2-.18-.21a16.76 16.76 0 00-1.45-1.36 16.43 16.43 0 00-4.93-2.8 24.85 24.85 0 00-2.52-1c3.33.26 6.16.81 6.83.69l1.34-.23.24.44c.12.19.23.39.35.59s.36.57.57.87a21.45 21.45 0 001.27 1.81z"
        />
      </g>
      <g id="trIggy_svg__hair_highlights">
        <path
          id="trIggy_svg__hair_highlight"
          className="trIggy_svg__cls-12"
          d="M133.21 22.75s-5 7.19-.19 16.42l-4.37 2.77s-4.18-14.28 4.56-19.19z"
        />
        <path
          id="trIggy_svg__hair_highlight-2"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M180.9 20.49s14.43 7-.62 18.11c0 0 2.16 1-.42-.39-.11-.05 6.6-6.01 1.04-17.72z"
        />
        <path
          id="trIggy_svg__hair_highlight-3"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M235 17.22s2.56 10.94-6.46 14c0 0 .39 1.62 0-.45 0-.1 4.36-2.24 6.46-13.55z"
        />
        <path
          id="trIggy_svg__hair_highlight-4"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M273.28 52s9.3 7.16-4.34 11.8c0 0 1.41 1.06-.23-.32-.07-.09 6.23-2.81 4.57-11.48z"
        />
        <path
          id="trIggy_svg__hair_highlight-5"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M106.42 44.05c-.3 0 10.61-2.83 12 6.3l-2.27 1.55s-1.23-8.21-9.73-7.85z"
        />
        <path
          id="trIggy_svg__hair_highlight-6"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M234.87 47.61s33.35.75 21.43-19.67c0 0 18.57 23.52-21.43 19.67z"
        />
        <path
          id="trIggy_svg__hair_highlight-7"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M198.07 55.34s17.08-5.62 15.5-19.12c0 0-.14 11.18-15.5 19.12z"
        />
        <path
          id="trIggy_svg__hair_highlight-8"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M148.46 48.77s-9-15.63 7.56-19.89c-.02 0-10.14 7.77-7.56 19.89z"
        />
        <path
          id="trIggy_svg__hair_highlight-9"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M139.1 65.64s1.84 13.55 9.62 19.77c0 0-11.78-6.41-9.62-19.77z"
        />
        <path
          id="trIggy_svg__hair_highlight-10"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M109.45 78.09s-3.65 13.18 1 22c.05-.04-8.24-10.58-1-22z"
        />
        <path
          id="trIggy_svg__hair_highlight-11"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M122.39 66.37s-7.07 15.28 4.91 30.57c0 0-16.58-14.25-4.91-30.57z"
        />
        <path
          id="trIggy_svg__hair_highlight-12"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M117.72 99.86a23.93 23.93 0 008.68 19.7s-12.46-6.8-8.68-19.7z"
        />
        <path
          id="trIggy_svg__hair_highlight-13"
          data-name="hair_highlight"
          className="trIggy_svg__cls-12"
          d="M106.38 106.74s1.84 20.07 9.79 25.25l-4.28-.12s-7.32-7.22-5.51-25.13z"
        />
      </g>
      <g id="trIggy_svg__glasses">
        <g id="trIggy_svg__lenses">
          <path
            className="trIggy_svg__cls-13"
            d="M212.34 136.41a44.19 44.19 0 01-1 7s-3.24 15.07-28.66 13.89h-.12s-11.28-.49-15.15-3.36a8.07 8.07 0 01-2.48-2.13 10.37 10.37 0 01-1.71-2.94 18.55 18.55 0 01-1-3.39 2.07 2.07 0 010-.22c-.09-1.14-1.21-8.13-1-10.86.4-4.54 4.89-4.73 5.23-5 15.16-1.63 40.66 0 40.66 0a4.67 4.67 0 014.9 3.29l.1-.1c.05.29.08.59.11.92a19.22 19.22 0 01.12 2.9z"
            id="trIggy_svg__right"
          />
          <path
            className="trIggy_svg__cls-13"
            d="M273.82 142.32a1.47 1.47 0 01-2 .36 21.85 21.85 0 00-12.39-4.07c.13.16.26.31.39.49a6.36 6.36 0 01-1.05 8.5 5.7 5.7 0 01-3.64 1.34 5.43 5.43 0 01-.69 0 6 6 0 01-5-6.77 6.33 6.33 0 01.37-1.47l-.5.25a1.45 1.45 0 11-1.4-2.54 24.9 24.9 0 0125.57 1.92 1.46 1.46 0 01.34 1.99z"
            id="trIggy_svg__left"
          />
        </g>
        <path
          id="trIggy_svg__frames"
          className="trIggy_svg__cls-14"
          d="M280.83 123.47l-1.7-.08h-7.07v.12h7.25l1.7.07zm-172 11.85l.29 1.7.49-.14h.1a6.82 6.82 0 013.23-1c-.27-.74-.53-1.49-.78-2.26z"
        />
        <path
          className="trIggy_svg__cls-14"
          d="M291.51 127.91c0-.24 0-.45-.05-.67s0-.37-.1-.68a2.86 2.86 0 00-.3-.88 2.26 2.26 0 00-.35-.44 1.16 1.16 0 00-.18-.2l-.15-.11-.31-.2a7 7 0 00-2-.66c-.62-.12-1.23-.2-1.83-.26-1.08-.12-2.15-.19-3.22-.24h-.92l-1.28-.06.15.12-1.7-.07H272v-.12h-23.14c-.62 0-1.24.1-1.86.19a16.78 16.78 0 00-3.84.91 8.73 8.73 0 00-2 1.09 7.12 7.12 0 00-1.9 2.05 5.36 5.36 0 00-.34.62.16.16 0 00-.27 0c-2 2.17-4.66.54-6 0a16.31 16.31 0 00-7-1.29c-2.32.09-4.69.66-7.11 1-1.58.23-2.48.35-3.57-.43l-.2-.34a6.34 6.34 0 00-2-1.94 9.79 9.79 0 00-2.25-1 23.26 23.26 0 00-4.43-.87c-.73-.08-1.46-.13-2.18-.17s-1.48-.07-2.16-.06h-33.69l-4.25.15c-1.42.06-2.83.13-4.27.25-.72.06-1.46.14-2.21.25a10.41 10.41 0 00-2.45.63l-.59.29-.24.18-.34.29c-3.36.08-10.51 1-17.42 1.93-4.44.6-8.77 1.23-11.92 1.68l-1 .14c-1.43.2-2.55.35-3.2.41l-8 4.2c.25.77.51 1.52.78 2.26a12.51 12.51 0 014.46.65c3.33.26 6.16.81 6.83.69l1.34-.23L136.9 135c7.12-1.22 14.9-2.57 16.49-2.88a4.71 4.71 0 001.34 1.27c0 .11.07.32.11.54.22 1.17.36 2.6.53 4s.39 2.78.65 4.17l.72 4.27a22.39 22.39 0 001.48 4.73 14.6 14.6 0 006.87 7.46c3.08 1.5 14.2 2.15 17.17 2.07 22.85.78 29.5-9.84 31.32-14.49 1.6-3.35 2.21-6.31 5.4-10.16 1.92-2.08 6.15-3 8.34-3 2.08.15 6.41.32 8.5 5.61a64 64 0 001.85 6.91c.07 1.56 1.36 18.4 24.94 17.4h2.4c1.23-.07 2.73-.19 4.26-.35.84-.1 1.69-.21 2.53-.33l1.21-.21h.13a14.73 14.73 0 004.18-1.23 17.07 17.07 0 006.67-7.86 30.94 30.94 0 001.81-5l1.11-4.5c.39-1.47.72-2.93 1-4.39s.6-2.95.93-4.2c0-.21.11-.42.14-.54a5.88 5.88 0 001.28-1.34 6.66 6.66 0 00.82-1.81 9.22 9.22 0 00.43-3.23zm-136.32 5.8l-.12-.09c.13.08.26.14.4.21a1.31 1.31 0 01-.28-.12zm57.15 2.7a44.19 44.19 0 01-1 7s-3.24 15.07-28.66 13.89h-.12s-11.28-.49-15.15-3.36a8.07 8.07 0 01-2.48-2.13 10.37 10.37 0 01-1.71-2.94 18.55 18.55 0 01-1-3.39 2.07 2.07 0 010-.22c-.09-1.14-1.21-8.13-1-10.86.4-4.54 4.89-4.73 5.23-5 15.16-1.63 40.66 0 40.66 0a4.67 4.67 0 014.9 3.29l.1-.1c.05.29.08.59.11.92a19.22 19.22 0 01.12 2.9zm69 10.27l-.06.23a26.8 26.8 0 01-1.22 3.57 13.33 13.33 0 01-1.79 3.11 9.53 9.53 0 01-2.34 2.24 6.59 6.59 0 01-.88.63l-.23.12c-.2.12-.42.22-.65.34l-.47.22-.49.2c-.19.08-.38.14-.57.21s-.57.2-.86.28l-.87.26-.79.2c-.33.08-.65.15-1 .21s-.77.16-1.15.23-.71.12-1.06.17l-.93.14-1 .12h-.72c-.94.1-1.53.13-1.53.13h-.11c-21.56 1.24-22.5-14.64-22.5-14.64a50.44 50.44 0 01.41-10.51c.61-2.1 1.93-4.21 4.76-4.21 0 0 13.65-1.08 25.58-.68l2.31.11 1.12.07 1.67.13.8.06.79.08 1 .12 1 .12a1.58 1.58 0 00.26.1l.17.05.48.17a3.16 3.16 0 01.56.23l.34.19c1 .64 2.09 1.89 2 4.49 0 2.95-1.78 10.31-1.98 11.51z"
        />
        <path
          className="trIggy_svg__cls-13"
          d="M281.49 130.74l-.34-.19c-.2-.09-.38-.17-.56-.23l-.48-.17-.17-.05a1.58 1.58 0 01-.26-.1l-1-.12-1-.12-.79-.08-.8-.06-1.67-.13-1.12-.07-2.31-.11c-11.93-.4-25.58.68-25.58.68-2.83 0-4.15 2.11-4.76 4.21a50.44 50.44 0 00-.41 10.51s.94 15.88 22.5 14.64h.11s.59 0 1.53-.13l.43-.05h.29l1-.12.93-.14c.35 0 .7-.1 1.06-.17s.76-.14 1.15-.23.65-.13 1-.21l.79-.2.87-.26c.29-.08.57-.18.86-.28s.38-.13.57-.21l.49-.2.47-.22c.23-.12.45-.22.65-.34l.23-.12a6.59 6.59 0 00.88-.63 9.53 9.53 0 002.34-2.24 13.33 13.33 0 001.79-3.11 26.8 26.8 0 001.22-3.57l.06-.23c.2-1.2 2-8.56 2.09-11.45.03-2.61-1.03-3.86-2.06-4.5zm-7.67 11.58a1.47 1.47 0 01-2 .36 21.85 21.85 0 00-12.39-4.07c.13.16.26.31.39.49a6.36 6.36 0 01-1.05 8.5 5.7 5.7 0 01-3.64 1.34 5.43 5.43 0 01-.69 0 6 6 0 01-5-6.77 6.33 6.33 0 01.37-1.47l-.5.25a1.45 1.45 0 11-1.4-2.54 24.9 24.9 0 0125.57 1.92 1.46 1.46 0 01.34 1.99z"
        />
      </g>
      <g id="trIggy_svg__eyes">
        <path
          id="trIggy_svg__right_eye"
          className="trIggy_svg__cls-8"
          d="M209.48 142.74a1.53 1.53 0 01-.86.27 1.46 1.46 0 01-1.18-.59c-2.91-4-7.49-5.49-12.09-5.78a6.52 6.52 0 011.84 4.56 6.62 6.62 0 11-12.14-3.63 39.61 39.61 0 00-5 1.39 1.46 1.46 0 01-1-2.73 47.41 47.41 0 0111.77-2.47c8.65-.65 15.22 1.76 19 6.94a1.47 1.47 0 01-.34 2.04z"
        />
        <path
          className="trIggy_svg__cls-8"
          d="M273.82 142.32a1.47 1.47 0 01-2 .36 21.85 21.85 0 00-12.39-4.07c.13.16.26.31.39.49a6.36 6.36 0 01-1.05 8.5 5.7 5.7 0 01-3.64 1.34 5.43 5.43 0 01-.69 0 6 6 0 01-5-6.77 6.33 6.33 0 01.37-1.47l-.5.25a1.45 1.45 0 11-1.4-2.54 24.9 24.9 0 0125.57 1.92 1.46 1.46 0 01.34 1.99z"
          id="trIggy_svg__left_eye"
        />
      </g>
    </svg>
  );
}
export default TrIggy;
