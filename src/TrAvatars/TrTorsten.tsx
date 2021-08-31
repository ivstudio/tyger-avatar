import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function TrTorsten({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      id="trTorsten_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 311.51 372.42"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trTorsten_svg__cls-1{fill:#e2ab90}.trTorsten_svg__cls-2{fill:#9f4c24;opacity:.25}.trTorsten_svg__cls-3{fill:#010101}.trTorsten_svg__cls-4{fill:#353635}.trTorsten_svg__cls-5{fill:#053a59}.trTorsten_svg__cls-6{fill:#fff}.trTorsten_svg__cls-7{fill:#cfcfce}"
          }
        </style>
      </defs>
      <g id="trTorsten_svg__skin">
        <path
          className="trTorsten_svg__cls-1"
          d="M269.83 151a232.6 232.6 0 01-8.67 21.78 159.55 159.55 0 01-16.52 28.49l-.19.26c-8.2 11-18.85 21.2-30.69 22.59h-.3l-1 .09s-14.59 1.1-34.45-8.47a1 1 0 01-.08.14 34.5 34.5 0 00-3.37 8.66v.09c-.06.26-.11.52-.17.78 0 .3-.1.6-.14.9s-.08.6-.11.9 0 .4 0 .59a16.9 16.9 0 00.07 3.26.2.2 0 010 .07 20.12 20.12 0 00.74 3.87c.49 2.78.9 6.25 1.24 10.12 1.52 17.29 1.66 42.48 1.66 48.9v.35c-.12-.31-.26-.65-.42-1-2.5-5.7-9.71-18.08-30-44.45 0 0-11-15.21-6.79-30.29a75.81 75.81 0 005.56-25.57v-.4a169.77 169.77 0 01-25-32.52c-6.17 8.16-14.33-5.44-14.33-5.44-14.62-15.83-7.66-26.27-7.66-26.27a4.49 4.49 0 01.43-.44c6.16-5.86 18.72 4.27 18.72 4.27l.29 1 1 .62c2.14 1.4 3.49 2.5 3.53 2.53l6.89 5.65-5.46-7c-.35-.45-.69-.91-1-1.36s-.6-.84-.88-1.25c-.29-.43-.57-.86-.84-1.3s-.54-.86-.78-1.28l-.08-.13a.17.17 0 010-.05c-.14-.24-.28-.48-.41-.72s-.27-.48-.39-.71-.33-.61-.48-.91c-.52-1-1-2-1.37-2.86l1.46-.27c.25.24.51.47.77.69s.51.45.77.67c.77.66 1.54 1.27 2.31 1.85q1.55 1.17 3 2.13l1.46.92.72.43.69.4.68.38.66.36.57.3 1.08.55a47.11 47.11 0 004.66 2l.24.08h.08l5.4 1.8-4.47-3.54a21.93 21.93 0 01-1.77-1.56c-.19-.17-.38-.36-.56-.55s-.61-.64-.89-1-.45-.51-.66-.78-.33-.41-.48-.62l-.59-.81a.13.13 0 010-.06c-.17-.23-.33-.47-.48-.71s-.27-.4-.39-.6-.27-.43-.39-.65-.27-.45-.39-.68-.22-.39-.31-.58-.27-.52-.4-.78-.26-.52-.38-.79-.25-.53-.36-.8l.65-.1q3.28-.49 6.57-.93l3.29-.4 1.55-.17a4.17 4.17 0 002.53 3.73 9.86 9.86 0 010 2.36c-.05.57-.1 1.1-.1 1.6l.69 8.83v.17C148.28 151 159.27 151 162.88 151h29.39a13.65 13.65 0 0010.78-4.94 15.73 15.73 0 003.68-9.24l.67-8.16c1.92-.37 3.89-.66 5.84-.89a70.77 70.77 0 017.26-.47 54.18 54.18 0 017.21.4l1.79.25c.59.1 1.17.24 1.76.35a27.6 27.6 0 013.11.75l.52 7.69c.17 6 4.09 14.26 12.29 14.26h22.65z"
        />
        <path
          className="trTorsten_svg__cls-1"
          d="M278.76 85.09c-.43.2-.87.39-1.32.58a91.2 91.2 0 01-16.7 5.18A118.48 118.48 0 01228.49 93c-.44 0-48.11-.73-77-25.63l-1.2-1.06c0 .46.09 1 .16 1.55 0 .22.07.45.1.69.81 5.15 3.49 14.07 12.17 23.45l.8.87 2.75 3-4.72-2.26c-.83-.39-17.54-8.48-28.35-20.12a48.34 48.34 0 01-3.76-4.56c-.07.33-.16.69-.24 1.09 0 .17-.07.34-.11.51l-.23 1.12c-.08.4-.16.81-.25 1.24-.17.87-.34 1.81-.52 2.83-.08.5-.17 1-.26 1.56s-.18 1.09-.26 1.66c0 .29-.09.57-.13.86-.08.59-.17 1.18-.25 1.79l-.12.92c-.06.47-.12.94-.17 1.42s-.11 1-.16 1.45a118.38 118.38 0 00-.69 14c0 .71 0 1.43.06 2.14s.06 1.45.11 2.18c.09 1.42.21 2.83.38 4.23v.26c.07.58.14 1.16.23 1.73v.26c0 .35.11.7.17 1.05v.53c.13.7.26 1.38.4 2.06.1.47.21.93.32 1.39s.26 1 .41 1.53c0 .17.08.33.13.49q.23.78.48 1.56l1.67-.08q3.34-.12 6.69-.18h5.2a11.3 11.3 0 01.29-1.1c.72-2.25 4.51-2.52 13-2.93l2-.1H194c5.57.17 9.1 1 11.17 2.56a6.6 6.6 0 012.5 5.24 27.36 27.36 0 01-.07 3.11c0 .32 0 .65-.05 1a42.42 42.42 0 015.31-1.31 46.42 46.42 0 017.64-.74 37.6 37.6 0 017.7.64 27.71 27.71 0 016.1 1.85c0-.49 0-1-.06-1.43 0-1.08-.1-2.11-.06-3.09a7.15 7.15 0 012.08-5.16c1.78-1.64 4.8-2.48 9.5-2.65h30.07l1.78.1h.7l.21-1.84h-.06l-1.23-1.18a20.3 20.3 0 00-10.05-4.82c-11.7-2.47-26.17 1.36-26.36 1.41l-.71.19-.39-.61a3.76 3.76 0 01-.56-2.85 2.41 2.41 0 011.46-1.53l.2-.06c.8-.16 14.67-2.76 26.19-.12 4.54 1 8.72 2.88 11.59 6l.19.21a133.34 133.34 0 00-.03-24.23z"
        />
      </g>
      <g id="trTorsten_svg__skin_shadows">
        <path
          className="trTorsten_svg__cls-2"
          d="M174.88 235.09c.49 2.78.9 6.25 1.24 10.12-3.29-2-5.46-3.83-5.43-5 0 0-10.7-29.88-23.78-46.09 2.92 3.41 13 13.95 31 21.86l.38.17a40.63 40.63 0 00-2.32 4.8 14.88 14.88 0 00-1.43 3.69v.09c-.06.26-.11.52-.17.78 0 .3-.1.6-.14.9s-.08.6-.11.9 0 .4 0 .59a23 23 0 00.07 3.26.2.2 0 010 .07 20.12 20.12 0 00.69 3.86zM177.19 238.09l-.11-.09zM177.36 238.22h-.15v-.08zM189.59 251.92l-.16-.07a1.45 1.45 0 01.1-.18 1 1 0 01.06.25zM201.33 256.24h-.07l-5.48-10.7-1.32-2.54h.08c1.9 3.71 4.52 8.85 6.79 13.24zM133.21 73.5q-1.92-1.64-4-3.47c.08-.4.17-.76.24-1.09a48.34 48.34 0 003.76 4.56zM151.49 67.38c-.71-.25-1 0-1 .49-.07-.58-.13-1.09-.16-1.55zM165.28 93.72l-1.75-.81-.8-.87c-8.68-9.38-11.36-18.3-12.17-23.45 1.37 5.41 16.08 25.79 14.72 25.13zM269.64 151c-2.07 6-4.54 12.17-7.46 18.57a171.31 171.31 0 01-17.54 31.7l-.19.26c-8.29 11.43-18.93 21.73-30.69 22.59h-.3S246.42 210 261 151zM278.42 112.69q-.09.93-.21 1.89h-.64l-1.78-.1H267c.17-2.61.25-5.24.19-7.75a20.3 20.3 0 0110.05 4.82zM278.75 109.34l-.19-.21c-2.87-3.13-7.05-5-11.59-6-.53-6.52-2.27-11.58-6.27-12.25a91.2 91.2 0 0016.7-5.18c.45-.19.89-.38 1.32-.58a139.4 139.4 0 01.03 24.22zM121.52 149.43a4.4 4.4 0 01-5.74.23c-3.39-3.92 2.08-7.27 2.08-7.27-4.52-11.27-13.65-7.63-14.18-7.37 0 0 9.18-.59 11.52 7.32 0 0-3 0-4.78 3.9 0 0-1.76 4.29 2.92 6.93.34.19 6.64 3.12 9-2.93z"
        />
      </g>
      <path
        id="trTorsten_svg__mouth"
        className="trTorsten_svg__cls-3"
        d="M192.77 171.67c0-.58-13.45 23.73 16.32 22.76 0 0-20.84-5.43-16.32-22.76z"
      />
      <g id="trTorsten_svg__nose">
        <path
          className="trTorsten_svg__cls-3"
          d="M209 166s8.56-7.64 15.56-1.63c0 0 5.58 5.34-.23 12.54 0 0 10-8.61.78-15.87-.01.01-7.35-5.27-16.11 4.96zM211.85 173.59s-.86-3.81 5.73-1.14z"
        />
      </g>
      <g id="trTorsten_svg__lenses">
        <path
          className="trTorsten_svg__cls-4"
          d="M204.64 122.4a27 27 0 01-.08 2.77c-.05.86-.1 1.76-.1 2.7l-.72 8.82c-.13 3.78-3.16 11.51-11.78 11.34h-29.08c-5.63 0-12.33-1.27-14.28-11.16l-.67-8.57c0-.38 0-.83.08-1.29.16-1.93.38-4.58-1.75-5.36-.51-.19-1.43-.53-.7-3 1.23-.66 6.5-.91 10.38-1.1l2-.09h36c4.8.14 7.87.78 9.39 1.94a3.59 3.59 0 011.31 3zM285.31 121.69c-1.85.81-1.68 3.2-1.53 5.3 0 .49.07 1 .07 1.27l-.57 8.65c-.89 5.51-3 11.12-11.63 11.12h-24.22c-6.3.14-9.41-6.67-9.54-11.4l-.6-8.75c0-.94 0-1.83-.09-2.69s-.1-2-.06-2.81a4 4 0 011.12-3.08c1.2-1.11 3.68-1.72 7.52-1.86h29.92l1.69.1h.5c2.93.17 6.92.43 7.92 1 .64 2.64-.21 3.02-.5 3.15z"
        />
      </g>
      <g id="trTorsten_svg__eyes">
        <path
          className="trTorsten_svg__cls-3"
          d="M200.52 133.92a1.51 1.51 0 01-2.09-.33c-3-4.12-7.71-5.65-12.44-6a6.73 6.73 0 011.89 4.7 6.82 6.82 0 11-12.5-3.75 42.08 42.08 0 00-5.14 1.44 1.5 1.5 0 11-1-2.81 48.56 48.56 0 0112.1-2.54c8.92-.66 15.67 1.81 19.55 7.14a1.5 1.5 0 01-.37 2.15zM271.87 131.93a1.5 1.5 0 01-2.09.37 22.33 22.33 0 00-12.73-4.14 6.43 6.43 0 011.53 5 6.2 6.2 0 01-6 5.54 5.32 5.32 0 01-.69 0 5.76 5.76 0 01-3.87-2.22 6.47 6.47 0 01-1.28-4.76 6.14 6.14 0 01.37-1.49l-.5.25a1.5 1.5 0 01-1.46-2.62 25.67 25.67 0 0126.34 2 1.51 1.51 0 01.38 2.07z"
        />
      </g>
      <g id="trTorsten_svg__eyebrows">
        <path
          className="trTorsten_svg__cls-3"
          d="M205.3 105.64l-.47.53-.65-.26c-25.49-10-54.8 1.6-55.09 1.72l-.83-1.82c28.74-14.81 56.07-5.46 56.34-5.37l.16.06.13.11a3.27 3.27 0 011.33 2.31 4 4 0 01-.92 2.72zM279.05 113.29l-.57-.55h-.06l-1.23-1.18a20.3 20.3 0 00-10.05-4.82c-11.7-2.47-26.17 1.36-26.36 1.41l-.71.19-.39-.61a3.76 3.76 0 01-.56-2.85 2.41 2.41 0 011.46-1.53l.2-.06c.8-.16 14.67-2.76 26.19-.12 4.54 1 8.72 2.88 11.59 6l.19.21v.07z"
        />
      </g>
      <path
        id="trTorsten_svg__hair_color"
        className="trTorsten_svg__cls-3"
        d="M309.46 28.59l-.82-1.73-.95 1.67a22.71 22.71 0 01-14.51 11.09c-21.16 5.5-52.3-13.1-52.59-13.28C218.36 12.14 190.36 7.84 190 7.8c-43.45-4.26-61 13.63-65 18.71-3-5.51-3-10.93 0-16.18a23.81 23.81 0 016.15-6.93l4.9-3.4-5.71 1.62c-16.1 4.58-19.7 19.57-20.5 26.13-12.69-8.86-27.91 1.49-28.07 1.6l-3 2.11 3.69-.29c10.46-.83 17.89.93 21.47 5.08a10.66 10.66 0 012.47 7.39c-5.26-2.57-13.48 1.08-13.86 1.25L87 47.41l6-.61c4.88-.49 6.88 1.75 7.5 2.68-18.89 34.43-2.14 77.5-2 77.93l.32.8.71-.16c6.16-5.86 18.72 4.27 18.72 4.27l.29 1 1 .62c2.14 1.4 3.49 2.5 3.53 2.53l6.89 5.65-5.46-7c-.35-.45-.69-.91-1-1.36s-.6-.84-.88-1.25c-.3-.44-.58-.87-.84-1.3s-.54-.86-.78-1.28l-.08-.13a.17.17 0 010-.05c-.15-.24-.29-.48-.41-.72s-.27-.48-.39-.71-.33-.61-.48-.91c-.52-1-1-2-1.37-2.86l1.46-.27c.25.24.51.47.77.69s.51.45.77.67c.77.66 1.54 1.27 2.31 1.85q1.55 1.17 3 2.13l1.46.92.72.43.69.4.68.38.66.36.57.3 1.08.55a47.11 47.11 0 004.66 2l.24.08h.08l5.4 1.8-4.47-3.54a21.93 21.93 0 01-1.77-1.56c-.19-.17-.38-.36-.56-.55s-.61-.64-.89-1-.45-.51-.66-.78-.33-.41-.48-.62a9.3 9.3 0 01-.59-.81.13.13 0 010-.06c-.17-.23-.33-.47-.48-.71s-.27-.4-.39-.6-.27-.43-.39-.65-.27-.45-.39-.68-.22-.39-.31-.58-.28-.52-.4-.78-.26-.52-.38-.79-.25-.53-.36-.8c-.25-.57-.49-1.14-.71-1.73s-.39-1.07-.57-1.62l-.06-.16q-.25-.78-.48-1.56c-.05-.16-.09-.32-.13-.49-.15-.51-.29-1-.41-1.53s-.22-.92-.32-1.39c-.14-.68-.28-1.37-.4-2.06v-.28-.25c-.06-.35-.12-.7-.17-1.05v-.26c-.09-.57-.16-1.15-.23-1.73v-.26c-.17-1.4-.29-2.81-.38-4.23 0-.73-.09-1.45-.11-2.18s-.05-1.43-.06-2.14a118.38 118.38 0 01.69-14c0-.49.1-1 .16-1.45s.11-1 .17-1.42l.12-.92c.08-.61.17-1.2.25-1.79 0-.29.09-.57.13-.86.08-.57.17-1.12.26-1.66s.18-1.06.26-1.56c.18-1 .35-2 .52-2.83.08-.43.17-.84.25-1.24s.15-.77.23-1.12c0-.17.07-.34.11-.51.08-.4.17-.76.24-1.09a48.34 48.34 0 003.76 4.56c10.58 11.62 27.31 19.71 28.14 20.1l4.72 2.26-2.75-3-.8-.87c-8.68-9.38-11.36-18.3-12.17-23.45a2.79 2.79 0 01-.1-.69c-.07-.58-.13-1.09-.16-1.55l1.2 1.06c28.89 24.9 76.56 25.63 77 25.63a118.48 118.48 0 0032.21-2.14 91.2 91.2 0 0016.7-5.18c.45-.19.89-.38 1.32-.58 9.69-4.31 14.42-8.71 14.62-8.9 26.47-24.83 16.22-47.39 16.11-47.62zm-209.33 96.69s-7.48-11-5.5-38.09c0 0 1.76 30.39 9.91 38.31zm22.29-6c-5.21-4.84-32.53-32.61-9.74-64 0 0-15 31.87 10 64 .18.25.38.49.57.74-.08-.09-.37-.34-.83-.76z"
      />
      <g id="trTorsten_svg__hair_highlights">
        <path
          className="trTorsten_svg__cls-5"
          d="M135.57 0S116 10.25 124.92 26.74l-4.51 2.85S113.38 10.75 135.57 0zM81.66 30.86s22.27-8.63 28.23 9.7c0 0-3.3 3-3.3 2.86S108 27.24 81.66 30.86zM89.91 46.71c-.26.08 8.24-3.86 12.11 1.27l-1.48 1.39s-3.46-4.62-10.63-2.66zM196.13 40.07s97.1 41.62 110.32-3.74c0 0-.89 58.13-110.32 3.74zM155.18 49.32s36.33 40.51 96.66 31.93c0 0-50.84 3.52-96.66-31.93zM139.77 21.36s36.77-16.52 76.62 1.76c0 0-38.09-11.45-76.62-1.76zM143.73 50s3.74 29.73 19.6 43.38c0-.02-24-14.12-19.6-43.38zM123.24 120c-.07-.06-.36-.31-.82-.73-5.21-4.84-32.53-32.61-9.74-64 0 0-15 31.87 10 64 .17.23.37.47.56.73zM104.54 125.5l-4.41-.22s-7.48-11-5.5-38.09c0 0 1.76 30.39 9.91 38.31z"
        />
      </g>
      <path
        id="trTorsten_svg__glasses_frames"
        className="trTorsten_svg__cls-3"
        d="M288.65 117.54c-.6-2.22-3.8-2.58-10.38-3h-.7l-1.78-.1h-30.07c-4.7.17-7.72 1-9.5 2.65a7.15 7.15 0 00-2.08 5.16c0 1 0 2 .06 3.09 0 .46.05.94.06 1.43a27.71 27.71 0 00-6.1-1.85 37.6 37.6 0 00-7.7-.64 46.42 46.42 0 00-7.64.74 42.42 42.42 0 00-5.31 1.31c0-.33 0-.66.05-1a27.36 27.36 0 00.07-3.11 6.6 6.6 0 00-2.5-5.24c-2.07-1.58-5.6-2.39-11.17-2.56h-36.13l-2 .1c-8.52.41-12.31.68-13 2.93a11.3 11.3 0 00-.29 1.1h-5.2q-3.34.06-6.69.18l-1.67.08.06.16c.18.55.37 1.08.57 1.62s.46 1.16.71 1.73l.65-.1q3.28-.49 6.57-.93l3.29-.4 1.55-.17a4.17 4.17 0 002.62 3.68 9.86 9.86 0 010 2.36c-.05.57-.1 1.1-.1 1.6l.69 8.83v.17C148.28 151 159.27 151 162.88 151h29.39a13.65 13.65 0 0010.78-4.94 15.73 15.73 0 003.68-9.24l.67-8.16c1.92-.37 3.89-.66 5.84-.89a70.77 70.77 0 017.26-.47 54.18 54.18 0 017.21.4l1.79.25c.59.1 1.17.24 1.76.35a27.6 27.6 0 013.11.75l.52 7.69c.17 6 4.09 14.26 12.29 14.26h24.47c8.34 0 13.12-4.48 14.61-13.71l.59-9c0-.47 0-1-.08-1.58a11.25 11.25 0 010-2.46c1.52-.71 2.99-2.52 1.88-6.71zm-84.09 7.63c-.05.86-.1 1.76-.1 2.7l-.72 8.82c-.13 3.78-3.16 11.51-11.78 11.34h-29.08c-5.63 0-12.33-1.27-14.28-11.16l-.67-8.57c0-.38 0-.83.08-1.29.16-1.93.38-4.58-1.75-5.36-.51-.19-1.43-.53-.7-3 1.23-.66 6.5-.91 10.38-1.1l2-.09h36c4.8.14 7.87.78 9.39 1.94a3.59 3.59 0 011.34 3 27 27 0 01-.11 2.77zm80.75-3.48c-1.85.81-1.68 3.2-1.53 5.3 0 .49.07 1 .07 1.27l-.57 8.65c-.89 5.51-3 11.12-11.63 11.12h-24.22c-6.3.14-9.41-6.67-9.54-11.4l-.6-8.75c0-.94 0-1.83-.09-2.69s-.1-2-.06-2.81a4 4 0 011.12-3.08c1.2-1.11 3.68-1.72 7.52-1.86h29.92l1.69.1h.5c2.93.17 6.92.43 7.92 1 .64 2.64-.21 3.02-.5 3.15z"
      />
      <g id="trTorsten_svg__shirt">
        <path
          className="trTorsten_svg__cls-6"
          d="M181.07 371.74l-116.13-.08H1.87c-.13-65.46 8.21-83.28 8.21-83.28C15.32 275.17 35 264.27 35 264.27c3.14-4 64.7-16.28 68.73-17.09.86 6.79 4.67 30.56 17.79 32.8 4.27-11.14 5.65-11.62 11.91-18.67.95-1.07 2.38.11 3.31 1.19 2.76 3.21 4.1 8.28 7.3 8.19 7-.21 26.39 15.56 33.71 26.16 1.25 8.98 5.09 35.15 3.32 74.89zM253.45 258.43l-4.93-1.32c1.69.4 3.34.89 4.93 1.32zM191 268.18a97.13 97.13 0 00-11.2 27.88c2.2-11.71 7.72-40.51 9.67-44.21a1.45 1.45 0 01.1-.18 1 1 0 01.06.25c.27 2.08 1.37 16.26 1.37 16.26zM201.33 256.24h-.07l-5.48-10.7-1.32-2.54-.11-.22h.07l.12.23c1.9 3.7 4.52 8.84 6.79 13.23zM284.91 293.81c-2.64-11.6-6.85-18.95-10.79-23.55 5.14 5.5 8.88 13.02 10.79 23.55z"
        />
        <path
          className="trTorsten_svg__cls-6"
          d="M177.66 295.25l-.17-.24c-.14-.21-.28-.41-.43-.61-.91-1.32-2-2.75-3.2-4.25-8.71-10.76-23.78-24.63-29.79-24.45-3.2.09-4.82-3.31-7.58-6.51-.93-1.09-2.6-2.89-3.41-1.71-5.66 8.28-8.27 11.79-13.94 20.07-.14.1-.61-.27-1.21-.85a55.9 55.9 0 01-3.8-4.29l-.06-.09c-.21-.32-.41-.64-.61-1l-.06-.1-.29-.52c-.13-.22-.25-.44-.37-.66l-.42-.81c-.65-1.31-1.22-2.65-1.75-4l-.51-1.38a66.62 66.62 0 01-2.65-9.73c0-.13 0-.27-.07-.4s-.08-.35-.11-.53a95.42 95.42 0 01-.61-3.77c-.09-.62-.21-1.25-.33-1.9v-.17c-.12-.64-.22-1.28-.28-1.91a8.48 8.48 0 01-.07-1.11v-.12-.08-.09l2.4-2.54-.13.11.13-.14 22.53-23.77c4.34-5 10.92-3.29 10.92-3.29a21.32 21.32 0 00-1.28 2.64c-.14.35-.28.71-.4 1.07v.09c-.09.25-.18.51-.25.77l-.06.21-.06.19c-.09.31-.17.62-.24.94-.16.66-.3 1.33-.41 2-.09.58-.16 1.14-.22 1.72a.22.22 0 010 .08v.96a.28.28 0 010 .09v.07a.66.66 0 010 .14v3.51a32.1 32.1 0 00.4 3.68 38.66 38.66 0 003.22 10.59v.05a.11.11 0 000 .07 1.11 1.11 0 00.07.16.77.77 0 00.07.16.51.51 0 00.07.15V243.87a1 1 0 01.07.15c.06.14.14.27.21.41s0 0 0 .06l.06.11.11.21v.05c.17.29.34.58.53.86l.11.17.15.21 1.59 2.19 1 1.34.08.1.28.4.37.5q.21.27.39.54l.62.85 1.07 1.49q.18.22.33.45c2.38 3.32 4.74 6.66 7.13 10 .28.39.55.76.81 1.14 2.87 4.09 5.68 8.24 8.57 12.32l.55.81c1.81 2.71 3.66 5.5 5.46 8.25.45.69.92 1.39 1.41 2.09.05.08.1.16.16.24a.18.18 0 01.05.08.42.42 0 01.08.12l.23.35.12.18c1.07 1.56 2.11 3.15 3 4.77l.16.27a.75.75 0 01.07.12zM108.23 241.5l-2.4 2.54 2.27-2.4z"
        />
        <path
          className="trTorsten_svg__cls-6"
          d="M140.06 237c-.05-.18-.11-.36-.16-.55zM141.43 241.11c-.07-.17-.13-.34-.2-.52.07.18.14.35.2.52zM141.69 241.77a3.45 3.45 0 01-.14-.34.14.14 0 000-.06c.05.17.09.29.14.4zM142.31 243.25l-.19-.45-.06-.15.08.17.08.2zM142.63 244V243.88zM143.21 245.15l-.11-.23a.42.42 0 01-.06-.14l.11.21zM159.93 268.57c-.74-1.06-1.52-2.15-2.32-3.29-.26-.38-.53-.75-.81-1.14q-2-2.89-4.33-6.09l-.88-1.22c-.09-.14-.19-.27-.29-.41l-.6-.84a1.13 1.13 0 00-.1-.13l-.93-1.29q-.15-.22-.33-.45l-1.07-1.49-.62-.85q-.18-.27-.39-.54l-.37-.5-.28-.4-.08-.1-1-1.34-1.53-2.19-.15-.21-.42-.57.29.39q1.92 2.61 3.69 5.06l1.52 2.11q2.24 3.09 4.26 5.92c.36.5.71 1 1 1.47q3.13 4.36 5.74 8.1zM167.13 279l-.4-.57-.55-.81q-1.68-2.46-3.64-5.29a4.68 4.68 0 01-.27-.4c1.8 2.57 3.42 4.91 4.86 7.07zM173.29 288.25c-.06-.07-.1-.15-.15-.22l-.5-.76-1.27-1.93c-.13-.21-.27-.42-.42-.64l-.14-.22-.74-1.11-.95-1.42-.49-.74-.52-.76c-.15-.22-.29-.44-.43-.66.25.36.49.72.72 1.07l.27.39c1.53 2.28 2.85 4.27 4 6zM173.76 289c-.06-.08-.11-.16-.16-.24l-.07-.12.08.12a1.58 1.58 0 01.15.24zM175.09 291.07l-.18-.29.09.13a.83.83 0 01.09.16zM175.43 291.6l-.09-.13-.24-.39.24.37zM176.4 293.15l-.15-.22a.41.41 0 00-.05-.09c.08.16.14.21.2.31zM177.92 295.65a.76.76 0 00-.08-.11l-.06-.1v-.06l-.08-.13-.18-.31-.07-.12a9.61 9.61 0 00-.28-.46l-.15-.25c-.11-.18-.22-.35-.33-.55.23.35.42.67.59.94l.16.27a.75.75 0 01.07.12c.12.19.22.35.3.5zM269.28 266.92c-5.27-2.92-20.88-9.51-67-22.08l-.37-.1-1.31-.35-6.2-1.64.12.23c1.9 3.73 4.52 8.87 6.79 13.26 1.5 2.9 2.84 5.48 3.72 7.12 0 0 4.17 10.07 1.61 8.09a4.66 4.66 0 01-.45-.4c-.09-.09-5.54-8-5.54-8l-6.91-9.46-2-2.79s-.72-4.5-2.23-10.17c-1.63-6.11-4.17-13.58-7.68-18.26a16 16 0 00-2.24-1.55c-1 .89-4.38 4.53-3 13.36 0 .28.09.57.14.86 0 0 .19.95.45 3l.17.12h-.15c.24 1.83.54 4.5.83 8.14.77 9.61 1.49 25.95.85 51v.2-.13c.11.39.22.8.33 1.22v.09c5.28 20.6 3.4 68.49 3.2 73.05l71.18.05h23.67c.87-4.86 13.3-82.65-7.98-104.86zm-89.52 29.14c2.2-11.71 7.72-40.51 9.67-44.21a1.45 1.45 0 01.1-.18 1 1 0 01.06.25c.31 2.07 1.37 16.26 1.37 16.26a97.13 97.13 0 00-11.2 27.88zM177.19 238.09l-.11-.09zM177.19 238.09l-.11-.09z"
        />
        <path className="trTorsten_svg__cls-6" d="M177.36 238.22h-.15v-.08z" />
      </g>
      <g id="trTorsten_svg__shirt_shade">
        <path
          className="trTorsten_svg__cls-7"
          d="M176.67 298.37a3 3 0 01-2.19 3.15 2.94 2.94 0 01-.51.05 2.78 2.78 0 01-1.82-.72 4.07 4.07 0 01-1.24-2.18 4 4 0 01.23-2.5 2.72 2.72 0 011.86-1.57c1.58-.34 3.16.91 3.58 2.85a4.18 4.18 0 01.09.92zM179.39 334.88c0 1.95-1.32 3.54-2.94 3.54s-2.93-1.59-2.93-3.54 1.32-3.54 2.93-3.54 2.94 1.59 2.94 3.54zM179.11 368.29c0 1.95-1.31 3.53-2.93 3.53s-2.93-1.58-2.93-3.53 1.31-3.54 2.93-3.54 2.93 1.59 2.93 3.54zM133.05 251.28s-9.65-38.85 7.79-36.36l-.08.7s-12.22 0-7.71 35.66zM277.33 371.8c.8-4.88 13.23-82.67-8.05-104.88-5.27-2.92-20.88-9.51-67-22.08l12.44 3.29 1.17.31 2.93.78 1.76.47 6.49 1.72 1.93.52 2.25.59 2.21.59 8.48 2.26 1.76.47 3.28.87 1.51.4 4.93 1.32.36.1.25.07a55.41 55.41 0 0111.42 4.85 19.7 19.7 0 013.48 2h.05a29.73 29.73 0 015.05 4.72c3.94 4.6 8.15 11.95 10.79 23.55a122.39 122.39 0 012.66 28.35l1.5 50.24-11.69-.31s.01 0 .04-.2zM61.68 371.84c-.32-1.83 1.62-33.77 1.62-33.77l1.7 33.78a31.51 31.51 0 01-3.32-.01zM253.66 371.84c-.32-1.83 1.62-33.77 1.62-33.77s1.67 33.77 1.65 33.78a31.51 31.51 0 01-3.27-.01zM206.66 271.45a4.66 4.66 0 01-.45-.4c-.09-.09-5.54-8-5.54-8l-6.91-9.46-2-2.79s-.72-4.5-2.23-10.17c-1.63-6.11-4.17-13.58-7.68-18.26h.06c.72.38 4.81 3 10 15.32l2.52 5h-.07l.11.22 1.32 2.57 5.48 10.7h.07c1.5 2.9 2.84 5.48 3.72 7.12-.01.06 4.16 10.13 1.6 8.15zM191 268.18a97.13 97.13 0 00-11.2 27.88c2.2-11.71 7.72-40.51 9.67-44.21a1.45 1.45 0 01.1-.18 1 1 0 01.06.25c.27 2.08 1.37 16.26 1.37 16.26z"
        />
        <path
          className="trTorsten_svg__cls-7"
          d="M182.48 371.74h-1.41c1.77-39.71-2-65.91-3.32-74.89-7.32-10.6-26.75-26.37-33.71-26.16-3.2.09-4.54-5-7.3-8.19-.93-1.08-2.36-2.26-3.31-1.19-6.26 7.05-7.64 7.53-11.91 18.67-13.12-2.24-16.93-26-17.79-32.8C99.7 248 38.14 260.3 35 264.27c0 0-19.68 10.9-24.92 24.07 0 0-8.34 17.82-8.21 83.28v.1L0 372c.14-.29-1.84-66.12 11.46-91.32a33.56 33.56 0 012.66-3.3v-.06C27 260.86 52.47 257.17 52.71 257L71 253.09l5.86-1.41c1.85-.51 15.14-3.25 22.32-4.72l.29-.06 4.07-.92-.06-.54 4.58-3.82-2.27 2.4v.29a8.48 8.48 0 00.07 1.11c.06.63.16 1.27.28 1.91v.17c.16 1.15.37 2.53.64 4.07.07.34.13.68.19 1 0 .19.08.38.11.57s.07.35.11.53 0 .27.07.4a66.62 66.62 0 002.65 9.73l.51 1.38.12.34c.13.32.25.64.38.95.38.94.8 1.85 1.25 2.73.13.28.27.54.42.81l.36.67.3.51.06.1c.19.33.39.65.61 1l.06.09a17.83 17.83 0 003.8 4.29c.6.58 1.07.95 1.23.86 5.67-8.28 8.28-11.79 13.94-20.07.81-1.18 2.48.62 3.41 1.71 2.76 3.2 4.38 6.6 7.58 6.51 3.8-.11 7.88 3.34 10.68 5.51a114 114 0 0113.44 12.46 103.72 103.72 0 019.76 12q-2.65-4.38-5.44-8.65-1.39-2.14-2.82-4.26a25.74 25.74 0 00-2.53-3.73c-1.44-2.14-3.06-4.48-4.86-7.07l-.44-.62-.35-.51-.1-.14c-3.24-4.74-6.49-9.48-10-14.05s-7.24-9.49-9.63-14.95a38.4 38.4 0 01-3.18-14c-.1-3.08.23-6.34 2-8.84-2 6.8-.89 14.22 1.81 20.77s6.9 12.36 11.24 18c7.71 10 15.26 20.16 21.35 31.21.85 1.54 1.67 3.1 2.37 4.71.16.36.3.7.42 1v-.35c0-6.42-.14-31.61-1.66-48.9-.34-3.87-.75-7.34-1.24-10.12a20.13 20.13 0 01-.74-3.88.2.2 0 000-.07 23 23 0 01-.07-3.26v-.59c0-.2.07-.6.11-.9s.09-.6.14-.92.11-.52.17-.78v-.09a14.88 14.88 0 011.43-3.69 12.93 12.93 0 011-1.62l2.91 1.35a3.18 3.18 0 00-.3.23c-1 .89-4.38 4.53-3 13.36 0 .28.09.57.14.86 0 0 .19.95.45 3l-.11-.08.11.09v.08c.24 1.83.54 4.5.83 8.14.77 9.61 1.49 25.95.85 51v.2-.13c.11.39.22.8.33 1.22v.09c5.55 20.53 3.67 68.42 3.47 72.98z"
        />
      </g>
    </svg>
  );
}

export default TrTorsten;
