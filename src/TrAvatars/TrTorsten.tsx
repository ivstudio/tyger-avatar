import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrTorsten({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trTorsten_svg__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 310.96 364.65"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trTorsten_svg__cls-2{fill:#e2ab90}.trTorsten_svg__cls-3{fill:#9f4c24;opacity:.25}.trTorsten_svg__cls-4{fill:#010101}.trTorsten_svg__cls-5{fill:#353635}.trTorsten_svg__cls-6{fill:#053a59}.trTorsten_svg__cls-7{fill:#fff}.trTorsten_svg__cls-8{fill:#cfcfce}"
          }
        </style>
      </defs>
      <path
        d="M0 0h310.96v364.63H0z"
        style={{
          fill: "none",
        }}
      />
      <g id="trTorsten_svg__skin">
        <path
          d="M267.51 147.88a227 227 0 0 1-8.51 21.33 156 156 0 0 1-16.18 27.89l-.18.26c-8 10.74-18.46 20.75-30 22.12h-.3c-.33 0-.66.07-1 .09 0 0-14.28 1.08-33.73-8.29a1 1 0 0 1-.08.14 34 34 0 0 0-3.3 8.48s0 .05 0 .08c-.05.26-.1.51-.16.77-.05.29-.1.58-.14.88s-.08.59-.11.88 0 .39 0 .58a18 18 0 0 0 .07 3.19.2.2 0 0 1 0 .07 20 20 0 0 0 .73 3.79c.48 2.72.88 6.12 1.21 9.91 1.49 16.93 1.63 41.59 1.63 47.88v.34c-.12-.3-.26-.64-.41-1-2.45-5.58-9.51-17.7-29.4-43.52 0 0-10.81-14.9-6.65-29.66a74.1 74.1 0 0 0 5.45-25v-.39a165.8 165.8 0 0 1-24.49-31.84c-6 8-14-5.33-14-5.33-14.32-15.5-7.5-25.72-7.5-25.72a3.4 3.4 0 0 1 .42-.43c6-5.74 18.33 4.18 18.33 4.18l.28 1 1 .61c2.1 1.37 3.42 2.44 3.46 2.47l6.74 5.54-5.34-6.9c-.35-.44-.68-.89-1-1.33s-.59-.82-.86-1.22c-.29-.42-.56-.84-.83-1.28s-.52-.84-.76-1.25l-.08-.13-.4-.71c-.14-.23-.26-.47-.38-.7s-.32-.59-.47-.89c-.51-1-1-1.91-1.34-2.8l1.43-.26c.24.23.5.46.75.67s.5.45.76.66c.75.65 1.5 1.24 2.26 1.81 1 .77 2 1.46 3 2.09l1.43.9.71.42c.22.14.45.26.67.39s.45.26.67.37l.65.36.55.29 1.06.54c2.22 1.09 3.89 1.73 4.56 2l.24.07h.08l5.29 1.77-4.38-3.47a20 20 0 0 1-1.73-1.53 6 6 0 0 1-.55-.54 11 11 0 0 1-.87-.95c-.23-.24-.44-.5-.65-.76s-.32-.4-.47-.61-.39-.53-.58-.79a.13.13 0 0 1-.05-.06c-.16-.22-.32-.46-.47-.69L133 124c-.13-.21-.26-.42-.38-.64a6 6 0 0 1-.38-.66c-.11-.19-.22-.39-.31-.57l-.39-.77c-.13-.25-.25-.5-.37-.77s-.24-.52-.35-.78l.63-.1c2.15-.32 4.29-.63 6.44-.91l3.22-.39 1.52-.17a4.08 4.08 0 0 0 2.66 3.57 9.4 9.4 0 0 1 0 2.31c-.05.55-.1 1.07-.1 1.56l.68 8.65v.17c2.58 13.38 13.34 13.38 16.88 13.38h28.77a13.34 13.34 0 0 0 10.56-4.84 15.4 15.4 0 0 0 3.6-9l.66-8c1.88-.37 3.81-.65 5.72-.88a71 71 0 0 1 7.11-.46 54 54 0 0 1 7.06.4l1.75.24c.58.1 1.14.24 1.72.34a27 27 0 0 1 3 .74l.51 7.53c.16 5.84 4 14 12 14h22.18Z"
          className="trTorsten_svg__cls-2"
        />
        <path
          d="M276.25 83.32q-.63.3-1.29.57A89 89 0 0 1 258.57 89 115.8 115.8 0 0 1 227 91.07c-.43 0-47.11-.71-75.4-25.1l-1.17-1c0 .45.09 1 .16 1.51l.09.68c.8 5 3.42 13.78 11.92 23l.78.85 2.7 2.91-4.63-2.21c-.81-.38-17.17-8.31-27.75-19.7a47 47 0 0 1-3.69-4.47c-.06.33-.15.68-.23 1.07 0 .17-.07.33-.11.5-.07.34-.15.71-.22 1.1s-.16.79-.25 1.21c-.16.85-.33 1.77-.51 2.77-.08.49-.16 1-.25 1.53s-.18 1.07-.26 1.62l-.12.85c-.08.57-.17 1.15-.25 1.75l-.12.9c0 .46-.11.92-.16 1.39s-.11.94-.16 1.42a116 116 0 0 0-.67 13.73c0 .69 0 1.4.05 2.09s.06 1.42.11 2.14c.09 1.39.21 2.77.37 4.14v.25c.07.57.14 1.14.23 1.7v.25c.05.34.11.69.16 1v.52l.39 2c.1.47.21.92.32 1.37s.25 1 .4 1.49c0 .17.08.33.13.48.14.51.3 1 .47 1.53l1.63-.08c2.18-.08 4.37-.13 6.55-.17h5.09a10 10 0 0 1 .29-1.08c.7-2.2 4.41-2.47 12.75-2.87l2-.1h35.38c5.45.17 8.91 1 10.94 2.51a6.45 6.45 0 0 1 2.44 5.13 29 29 0 0 1-.06 3v1a42 42 0 0 1 5.2-1.29 45.5 45.5 0 0 1 7.48-.72 36.8 36.8 0 0 1 7.54.62 27.3 27.3 0 0 1 6 1.82c0-.48 0-.95-.06-1.4-.05-1.06-.1-2.07-.06-3a7 7 0 0 1 2-5c1.74-1.61 4.7-2.43 9.3-2.6h29.44l1.75.1h.68c.07-.61.14-1.2.21-1.8h-.06l-1.21-1.16a20 20 0 0 0-9.84-4.72c-11.45-2.41-25.62 1.34-25.81 1.39l-.69.18-.38-.6a3.66 3.66 0 0 1-.55-2.79 2.33 2.33 0 0 1 1.43-1.49l.19-.06c.79-.16 14.37-2.71 25.65-.12 4.44 1 8.53 2.82 11.34 5.88l.19.21a130.5 130.5 0 0 0 .17-23.81"
          className="trTorsten_svg__cls-2"
        />
      </g>
      <g id="trTorsten_svg__skin_shadows">
        <path
          d="M174.54 230.19c.48 2.72.88 6.12 1.21 9.91-3.22-2-5.35-3.75-5.32-4.94 0 0-10.47-29.26-23.28-45.13 2.86 3.34 12.69 13.66 30.35 21.41l.38.16a40 40 0 0 0-2.28 4.7 15 15 0 0 0-1.4 3.62s0 .05 0 .08c-.05.26-.1.51-.16.77-.05.29-.1.58-.14.88s-.08.59-.11.88 0 .39 0 .58a23.5 23.5 0 0 0 .07 3.19.2.2 0 0 1 0 .07 20 20 0 0 0 .68 3.82M176.8 233.12l-.11-.08a.4.4 0 0 0 .11.08M177 233.25h-.15v-.08ZM188.94 246.67l-.16-.07a1.5 1.5 0 0 1 .1-.18 1 1 0 0 1 .06.25M200.44 250.9h-.07L195 240.4l-1.29-2.52h.08c1.86 3.68 4.42 8.72 6.65 13.02M133.74 72c-1.26-1.07-2.56-2.21-3.92-3.4.08-.39.17-.74.23-1.07a47 47 0 0 0 3.69 4.47M151.63 66c-.69-.24-1 0-1 .48-.07-.56-.13-1.06-.16-1.51ZM165.14 91.77l-1.72-.8-.78-.85c-8.5-9.18-11.12-17.92-11.92-23 1.35 5.35 15.75 25.29 14.42 24.65M267.32 147.88c-2 5.86-4.44 11.92-7.3 18.18a167.7 167.7 0 0 1-17.18 31l-.18.26c-8.12 11.19-18.54 21.27-30 22.12h-.3s32.27-13.92 46.5-71.62ZM275.92 110.34c-.06.61-.13 1.22-.21 1.85h-.62l-1.75-.1h-8.65c.16-2.55.24-5.13.18-7.59a20 20 0 0 1 9.84 4.72ZM276.24 107.06l-.19-.21c-2.81-3.06-6.9-4.87-11.34-5.88-.52-6.38-2.23-11.34-6.14-12a89 89 0 0 0 16.35-5.07q.66-.27 1.29-.57a135.7 135.7 0 0 1 .03 23.73M122.28 146.32a4.3 4.3 0 0 1-5.61.22c-3.32-3.84 2-7.12 2-7.12-4.43-11-13.37-7.47-13.89-7.22 0 0 9-.57 11.28 7.17 0 0-3 0-4.68 3.82 0 0-1.72 4.21 2.86 6.79.34.18 6.5 3.05 8.79-2.87Z"
          className="trTorsten_svg__cls-3"
        />
      </g>
      <path
        id="trTorsten_svg__mouth"
        d="M192.05 168.09c0-.56-13.17 23.23 16 22.28-.05 0-20.43-5.37-16-22.28"
        className="trTorsten_svg__cls-4"
      />
      <g id="trTorsten_svg__nose">
        <path
          d="M207.94 162.55s8.37-7.49 15.23-1.6c0 0 5.46 5.23-.22 12.28 0 0 9.81-8.43.76-15.54 0 0-7.19-5.17-15.77 4.86M210.73 170s-.84-3.73 5.62-1.12Z"
          className="trTorsten_svg__cls-4"
        />
      </g>
      <g id="trTorsten_svg__lenses">
        <path
          d="M203.68 119.85a26 26 0 0 1-.08 2.71c0 .84-.1 1.72-.1 2.64l-.7 8.64c-.13 3.7-3.1 11.27-11.54 11.1h-28.47c-5.52 0-12.08-1.24-14-10.92l-.65-8.4c0-.37 0-.81.08-1.26.15-1.89.37-4.48-1.72-5.25-.5-.18-1.4-.52-.68-3 1.2-.65 6.36-.9 10.16-1.08l1.93-.09h35.25c4.7.14 7.71.76 9.19 1.9a3.51 3.51 0 0 1 1.33 3.01M282.66 119.15c-1.81.8-1.64 3.14-1.49 5.19 0 .48.06.94.06 1.25l-.55 8.46c-.88 5.4-2.93 10.89-11.39 10.89h-23.72c-6.16.14-9.21-6.53-9.34-11.16l-.58-8.57c0-.92-.05-1.79-.09-2.63s-.1-1.92-.06-2.75a3.94 3.94 0 0 1 1.1-3c1.17-1.08 3.6-1.68 7.36-1.82h29.29l1.66.1h.49c2.87.16 6.77.42 7.75 1 .63 2.54-.15 2.89-.49 3.04"
          className="trTorsten_svg__cls-5"
        />
      </g>
      <g id="trTorsten_svg__eyes">
        <path
          d="M199.64 131.13a1.5 1.5 0 0 1-.86.27 1.43 1.43 0 0 1-1.18-.6c-2.93-4-7.55-5.53-12.18-5.82a6.6 6.6 0 0 1 1.85 4.6 6.68 6.68 0 1 1-12.27-3.67 40 40 0 0 0-5 1.41 1.46 1.46 0 1 1-1-2.75 47.3 47.3 0 0 1 11.84-2.49c8.74-.65 15.35 1.77 19.15 7a1.47 1.47 0 0 1-.35 2.05M269.5 129.18a1.47 1.47 0 0 1-1.21.63 1.44 1.44 0 0 1-.83-.27 21.93 21.93 0 0 0-12.47-4 6.25 6.25 0 0 1 1.5 4.92 6.07 6.07 0 0 1-5.87 5.43 5 5 0 0 1-.68 0 5.64 5.64 0 0 1-3.79-2.18 6.3 6.3 0 0 1-1.25-4.71 6 6 0 0 1 .36-1.46l-.49.25a1.47 1.47 0 1 1-1.43-2.57 25.14 25.14 0 0 1 25.79 1.94 1.47 1.47 0 0 1 .37 2.02"
          className="trTorsten_svg__cls-4"
        />
      </g>
      <g id="trTorsten_svg__eyebrows">
        <path
          d="m204.32 103.44-.46.52-.63-.26c-25-9.75-53.66 1.57-53.95 1.69l-.81-1.79c28.16-14.5 54.9-5.34 55.17-5.25l.15.05.13.11a3.22 3.22 0 0 1 1.3 2.26 3.87 3.87 0 0 1-.9 2.67M276.53 110.93l-.55-.54h-.06l-1.21-1.16a20 20 0 0 0-9.84-4.72c-11.45-2.41-25.62 1.34-25.81 1.39l-.69.18-.38-.6a3.66 3.66 0 0 1-.55-2.79 2.33 2.33 0 0 1 1.43-1.49l.19-.06c.79-.16 14.37-2.71 25.65-.12 4.44 1 8.53 2.82 11.34 5.88l.19.21v.07Z"
          className="trTorsten_svg__cls-4"
        />
      </g>
      <path
        id="trTorsten_svg__hair_color"
        d="m306.31 28-.8-1.69-.93 1.63a22.2 22.2 0 0 1-14.21 10.86c-20.72 5.39-51.21-12.82-51.49-13-21.77-13.9-49.19-18.11-49.51-18.15C146.8 3.47 129.63 21 125.67 26a15.45 15.45 0 0 1 .07-15.85 23.1 23.1 0 0 1 6-6.78L136.52 0l-5.59 1.59c-15.77 4.48-19.29 19.16-20.08 25.58-12.42-8.67-27.32 1.46-27.48 1.57l-3 2.06 3.63-.28c10.24-.81 17.51.91 21 5a10.52 10.52 0 0 1 2.42 7.24c-5.15-2.52-13.2 1.06-13.57 1.22l-5.44 2.47 5.93-.6c4.78-.48 6.74 1.72 7.35 2.63-18.5 33.71-2.1 75.88-1.93 76.3l.31.79.7-.16c6-5.74 18.33 4.18 18.33 4.18l.28 1 1 .61c2.1 1.37 3.42 2.44 3.46 2.47l6.74 5.54-5.34-6.9c-.35-.44-.68-.89-1-1.33s-.59-.82-.86-1.22c-.3-.43-.57-.85-.83-1.28s-.52-.84-.76-1.25l-.08-.13c-.14-.24-.28-.47-.4-.71s-.26-.47-.38-.7-.32-.59-.47-.89c-.51-1-1-1.91-1.34-2.8l1.43-.26c.24.23.5.46.75.67s.5.45.76.66c.75.65 1.5 1.24 2.26 1.81 1 .77 2 1.46 3 2.09l1.43.9.71.42c.22.14.45.26.67.39s.45.26.67.37l.65.36.55.29 1.06.54c2.22 1.09 3.89 1.73 4.56 2l.24.07h.08l5.29 1.77-4.38-3.47a20 20 0 0 1-1.73-1.53 6 6 0 0 1-.55-.54 11 11 0 0 1-.87-.95c-.23-.24-.44-.5-.65-.76s-.32-.4-.47-.61a9 9 0 0 1-.58-.79.13.13 0 0 1-.05-.06c-.16-.22-.32-.46-.47-.69L133 124c-.13-.21-.26-.42-.38-.64a6 6 0 0 1-.38-.66c-.11-.19-.22-.39-.31-.57s-.27-.51-.39-.77-.25-.5-.37-.77-.24-.52-.35-.78c-.25-.56-.48-1.12-.7-1.7s-.38-1-.56-1.58c0 0 0-.11-.05-.16-.17-.51-.33-1-.47-1.53 0-.15-.09-.31-.13-.48-.15-.5-.29-1-.4-1.49s-.22-.9-.32-1.37c-.13-.67-.27-1.35-.39-2v-.52c0-.34-.11-.69-.16-1v-.25c-.09-.56-.16-1.13-.23-1.7v-.25c-.16-1.37-.28-2.75-.37-4.14-.05-.72-.09-1.42-.11-2.14s-.05-1.4-.05-2.09a116 116 0 0 1 .67-13.73c0-.48.1-1 .16-1.42s.11-.93.16-1.39l.12-.9c.08-.6.17-1.18.25-1.75l.12-.85c.08-.55.17-1.09.26-1.62s.17-1 .25-1.53c.18-1 .35-1.92.51-2.77.08-.42.17-.82.25-1.21s.14-.76.22-1.1c0-.17.07-.33.11-.5.08-.39.17-.74.23-1.07a47 47 0 0 0 3.55 4.43c10.58 11.39 26.94 19.32 27.75 19.7l4.63 2.21-2.7-2.91-.78-.85c-8.5-9.18-11.12-17.92-11.92-23a3 3 0 0 1-.09-.68c-.07-.56-.13-1.06-.16-1.51l1.17 1c28.29 24.39 75 25.1 75.4 25.1A115.8 115.8 0 0 0 258.57 89a89 89 0 0 0 16.35-5.07q.66-.27 1.29-.57c9.49-4.22 14.12-8.53 14.32-8.72 25.92-24.33 15.89-46.42 15.78-46.64m-205 94.68S94 111.89 96 85.37c0 0 1.72 29.76 9.7 37.51Zm21.82-5.9c-5.1-4.74-31.85-31.93-9.54-62.66 0 0-14.64 31.2 9.79 62.65.17.25.37.48.55.73Z"
        className="trTorsten_svg__cls-4"
      />
      <g id="trTorsten_svg__hair_highlights">
        <path
          d="M136.05 0s-19.19 10-10.43 26.14L121.21 29s-6.9-18.47 14.84-29M83.26 30.22s21.8-8.45 27.64 9.5c0 0-3.23 2.92-3.23 2.79S109 26.68 83.26 30.22M91.34 45.74c-.26.07 8.07-3.79 11.86 1.24l-1.46 1.37s-3.39-4.53-10.4-2.61M195.35 39.24s95.07 40.74 108-3.67c.01 0-.86 56.92-108 3.67M155.25 48.29S190.82 88 249.89 79.55c0 0-49.8 3.45-94.64-31.26M140.15 20.91s36-16.17 75 1.73c.03 0-37.27-11.21-75-1.73M144 48.94s3.7 29.06 19.22 42.47c0 0-23.5-13.8-19.22-42.47M124 117.49l-.8-.72c-5.1-4.74-31.85-31.93-9.54-62.66 0 0-14.64 31.2 9.79 62.65.14.24.34.48.55.73M105.66 122.88l-4.31-.21S94 111.89 96 85.37c0 0 1.68 29.76 9.66 37.51"
          className="trTorsten_svg__cls-6"
        />
      </g>
      <path
        id="trTorsten_svg__glasses_frames"
        d="M285.93 115.09c-.58-2.18-3.72-2.53-10.16-2.9h-.68l-1.75-.1H243.9c-4.6.17-7.56 1-9.3 2.6a7 7 0 0 0-2 5c0 1 0 2 .06 3 0 .45 0 .92.06 1.4a27.3 27.3 0 0 0-6-1.82 36.8 36.8 0 0 0-7.54-.62 45.5 45.5 0 0 0-7.48.72 42 42 0 0 0-5.2 1.29v-1a29 29 0 0 0 .06-3 6.45 6.45 0 0 0-2.44-5.13c-2-1.55-5.49-2.34-10.94-2.51h-35.34l-2 .1c-8.34.4-12 .67-12.75 2.87a10 10 0 0 0-.29 1.08h-5.09c-2.18 0-4.37.09-6.55.17l-1.63.08s0 .11.05.16c.18.54.37 1.06.56 1.58s.45 1.14.7 1.7l.63-.1c2.15-.32 4.29-.63 6.44-.91l3.22-.39 1.52-.17a4.08 4.08 0 0 0 2.66 3.57 9.4 9.4 0 0 1 0 2.31c-.05.55-.1 1.07-.1 1.56l.68 8.65v.17c2.58 13.38 13.34 13.38 16.88 13.38h28.77a13.34 13.34 0 0 0 10.56-4.84 15.4 15.4 0 0 0 3.6-9l.66-8c1.88-.37 3.81-.65 5.72-.88a71 71 0 0 1 7.11-.46 54 54 0 0 1 7.06.4l1.75.24c.58.1 1.14.24 1.72.34a27 27 0 0 1 3 .74l.51 7.53c.16 5.84 4 14 12 14h24c8.16 0 12.85-4.39 14.3-13.42l.58-8.78c0-.46 0-1-.08-1.54a11.4 11.4 0 0 1 0-2.41c1.55-.75 2.97-2.56 1.9-6.66m-82.33 7.47c0 .84-.1 1.72-.1 2.64l-.7 8.64c-.13 3.7-3.1 11.27-11.54 11.1h-28.47c-5.52 0-12.08-1.24-14-10.92l-.65-8.4c0-.37 0-.81.08-1.26.15-1.89.37-4.48-1.72-5.25-.5-.18-1.4-.52-.68-3 1.2-.65 6.36-.9 10.16-1.08l1.93-.09h35.25c4.7.14 7.71.76 9.19 1.9a3.51 3.51 0 0 1 1.32 3 26 26 0 0 1-.07 2.72m79.06-3.41c-1.81.8-1.64 3.14-1.49 5.19 0 .48.06.94.06 1.25l-.55 8.46c-.88 5.4-2.93 10.89-11.39 10.89h-23.72c-6.16.14-9.21-6.53-9.34-11.16l-.58-8.57c0-.92-.05-1.79-.09-2.63s-.1-1.92-.06-2.75a3.94 3.94 0 0 1 1.1-3c1.17-1.08 3.6-1.68 7.36-1.82h29.29l1.66.1h.49c2.87.16 6.77.42 7.75 1 .63 2.54-.15 2.89-.49 3.04"
        className="trTorsten_svg__cls-4"
      />
      <g id="trTorsten_svg__shirt">
        <path
          d="m180.6 364-113.71-.08H5.14c-.13-64.1 8-81.54 8-81.54 5.13-12.9 24.4-23.57 24.4-23.57 3.08-3.89 63.35-15.94 67.3-16.74.84 6.65 4.57 29.93 17.42 32.12 4.18-10.91 5.53-11.38 11.66-18.28.93-1.05 2.33.11 3.24 1.17 2.7 3.14 4 8.1 7.15 8 6.81-.2 25.84 15.24 33 25.62 1.28 8.75 5.02 34.41 3.29 73.3M251.47 253l-4.83-1.29q2.49.62 4.83 1.29M190.28 262.59a94.9 94.9 0 0 0-11 27.3c2.15-11.47 7.55-39.67 9.46-43.29a1.5 1.5 0 0 1 .1-.18 1 1 0 0 1 .06.25c.34 2.02 1.38 15.92 1.38 15.92M200.44 250.9h-.07L195 240.4l-1.29-2.52-.11-.21h.07l.12.22c1.86 3.67 4.42 8.71 6.65 13.01M282.27 287.68c-2.58-11.36-6.7-18.55-10.56-23.06 5.03 5.38 8.65 12.75 10.56 23.06"
          className="trTorsten_svg__cls-7"
        />
        <path
          d="m177.26 289.09-.17-.23c-.13-.21-.27-.4-.42-.6-.89-1.29-1.95-2.69-3.13-4.16-8.53-10.54-23.29-24.12-29.17-23.94-3.13.09-4.72-3.24-7.42-6.37-.91-1.07-2.55-2.83-3.34-1.68-5.54 8.11-8.1 11.55-13.65 19.65-.14.1-.6-.26-1.18-.83a55 55 0 0 1-3.73-4.2.4.4 0 0 0 0-.09c-.21-.31-.41-.63-.6-.94l-.06-.1a5 5 0 0 1-.28-.51c-.13-.21-.25-.43-.37-.64l-.41-.8c-.63-1.28-1.19-2.59-1.71-3.93l-.5-1.35a64 64 0 0 1-2.59-9.53c0-.13-.05-.26-.07-.39s-.08-.34-.11-.52c-.23-1.22-.42-2.46-.6-3.69-.09-.61-.2-1.23-.32-1.86v-.17c-.12-.63-.22-1.25-.28-1.87a10 10 0 0 1-.06-1.09s0-.08 0-.11v-.16999999999999998l2.35-2.49-.13.11.13-.14 22.06-23.27c4.25-4.94 10.69-3.22 10.69-3.22a20 20 0 0 0-1.25 2.58l-.4 1v.09c-.08.24-.17.5-.24.75l-.06.21-.06.18c-.09.31-.16.61-.23.93-.16.64-.3 1.3-.4 2-.09.57-.16 1.12-.22 1.69a.2.2 0 0 1 0 .08v.94a.2.2 0 0 1 0 .08v.07a.7.7 0 0 1 0 .14v3.44a33 33 0 0 0 .39 3.6 37.9 37.9 0 0 0 3.16 10.37s0 0 0 .05a.07.07 0 0 0 0 .06.5.5 0 0 0 .06.16.8.8 0 0 0 .07.16.4.4 0 0 0 .07.14v.12000000000000001a1 1 0 0 1 .07.15l.2.4v.06l.06.11.11.2c.16.28.33.57.52.84a1 1 0 0 1 .1.17l.15.2 1.56 2.15c.32.44.63.88.95 1.31l.08.1.27.39c.13.17.25.33.36.49a6 6 0 0 1 .38.53c.21.27.42.56.61.83l1.05 1.46c.12.15.22.29.32.44 2.33 3.25 4.64 6.52 7 9.77.28.38.54.75.8 1.12 2.81 4 5.56 8.07 8.39 12.06l.54.79c1.77 2.66 3.58 5.39 5.34 8.08.44.68.9 1.36 1.38 2.05l.16.23a.2.2 0 0 1 .05.08.4.4 0 0 1 .08.12l.22.34.12.18a55 55 0 0 1 2.94 4.67 2 2 0 0 1 .15.26 1 1 0 0 1 .07.12ZM109.28 236.46l-2.35 2.54 2.22-2.35Z"
          className="trTorsten_svg__cls-7"
        />
        <path
          d="m140.44 232-.15-.54c.06.19.1.37.15.54M141.78 236.08l-.19-.51c.07.18.14.35.19.51M142 236.73a4 4 0 0 1-.14-.34c.14.11.14.23.14.34M142.65 238.18c-.06-.14-.12-.29-.19-.44l-.06-.15.08.17c0 .07.06.13.08.19ZM143 238.87v-.12000000000000001a.1.1 0 0 1 0 .05ZM143.53 240l-.11-.23a.5.5 0 0 1-.06-.13l.11.2ZM159.9 263l-2.27-3.22c-.26-.37-.52-.74-.8-1.12l-4.24-6-.86-1.2-.28-.4-.59-.82a1 1 0 0 0-.1-.13c-.29-.41-.59-.83-.91-1.26-.1-.15-.2-.29-.32-.44l-1.05-1.41c-.19-.27-.4-.56-.61-.83a6 6 0 0 0-.38-.53c-.11-.16-.23-.32-.36-.49l-.27-.39-.08-.1c-.32-.43-.63-.87-.95-1.31l-1.56-2.15-.15-.2-.41-.56.29.38c1.25 1.7 2.45 3.36 3.61 5l1.49 2.06q2.19 3 4.17 5.8l1 1.44c2.06 2.77 3.93 5.4 5.63 7.88M167 273.16a7 7 0 0 1-.39-.56l-.54-.79c-1.1-1.61-2.28-3.33-3.57-5.18l-.26-.39c1.76 2.54 3.3 4.83 4.76 6.92M173 282.24c-.06-.07-.1-.15-.15-.22-.15-.24-.32-.49-.49-.74-.39-.6-.8-1.23-1.24-1.89-.13-.21-.26-.41-.41-.63l-.14-.21c-.23-.36-.48-.72-.72-1.09s-.61-.91-.93-1.39l-.48-.72c-.17-.25-.35-.5-.51-.75s-.29-.43-.42-.65l.7 1.05.27.38c1.49 2.24 2.79 4.19 3.87 5.87.21.34.42.67.65.99M173.44 283l-.16-.23a.7.7 0 0 1-.06-.12l.07.12a1.5 1.5 0 0 1 .15.23M174.74 285l-.17-.28a.4.4 0 0 1 .08.12 1 1 0 0 1 .09.16M175.08 285.52l-.09-.13-.24-.38.24.36ZM176 287l-.15-.22a.4.4 0 0 0 0-.09c.06.15.15.25.15.31M177.51 289.48s0-.06-.07-.1l-.06-.1v-.06l-.08-.13-.18-.3-.07-.12a5 5 0 0 0-.27-.45l-.15-.24c-.1-.18-.21-.35-.32-.54.23.34.41.65.58.92a2 2 0 0 1 .15.26 1 1 0 0 1 .07.12c.12.19.22.34.3.49s.06.19.1.25M267 261.35c-5.16-2.86-20.45-9.31-65.58-21.62l-.37-.09-1.28-.35-6.07-1.6.12.22c1.86 3.65 4.42 8.69 6.65 13 1.46 2.84 2.78 5.36 3.64 7 0 0 4.08 9.86 1.57 7.92l-.44-.39c-.08-.09-5.42-7.8-5.42-7.8l-6.82-9.3-2-2.73s-.71-4.41-2.19-10c-1.59-6-4.08-13.3-7.52-17.88a17 17 0 0 0-2.19-1.52c-1 .88-4.29 4.44-2.95 13.09 0 .27.09.55.14.84 0 0 .18.93.44 2.93l.17.12h-.15c.23 1.79.53 4.41.81 8 .75 9.41 1.46 25.41.83 49.93v.2-.13c.11.38.22.78.33 1.19v.09c5.28 20.16 3.45 67.05 3.28 71.53l69.69.05h23.18c.76-4.78 12.93-80.95-7.87-102.7m-87.65 28.54c2.15-11.47 7.55-39.67 9.46-43.29a1.5 1.5 0 0 1 .1-.18 1 1 0 0 1 .06.25c.3 2 1.34 15.92 1.34 15.92a94.9 94.9 0 0 0-10.99 27.3Z"
          className="trTorsten_svg__cls-7"
        />
        <path
          d="m176.8 233.12-.11-.08a.4.4 0 0 0 .11.08"
          className="trTorsten_svg__cls-7"
        />
        <path
          d="m176.8 233.12-.11-.08a.4.4 0 0 0 .11.08M177 233.25h-.15v-.08Z"
          className="trTorsten_svg__cls-7"
        />
      </g>
      <g id="trTorsten_svg__shirt_shade">
        <path
          d="M176.29 292.15a3 3 0 0 1-2.14 3.08 3 3 0 0 1-.5 0 2.73 2.73 0 0 1-1.79-.7 4.1 4.1 0 0 1-1.21-2.14 3.9 3.9 0 0 1 .22-2.45 2.66 2.66 0 0 1 1.82-1.53c1.54-.34 3.09.89 3.5 2.79a4 4 0 0 1 .1.95M179 327.9a3.21 3.21 0 0 1-2.88 3.46c-1.57 0-2.86-1.55-2.86-3.46s1.29-3.47 2.86-3.47a3.22 3.22 0 0 1 2.88 3.47M178.68 360.61a2.92 2.92 0 1 1-5.74 0c0-1.91 1.28-3.47 2.87-3.47s2.87 1.56 2.87 3.47M133.58 246s-9.45-38 7.63-35.6l-.09.68s-11.96.04-7.54 34.92M274.85 364.05c.78-4.78 12.95-80.95-7.88-102.7-5.16-2.86-20.45-9.31-65.58-21.62l12.18 3.27 1.14.3 2.87.76 1.72.46c2.11.55 4.23 1.12 6.36 1.69l1.89.51 2.2.57c.73.2 1.45.4 2.16.58l8.31 2.21 1.72.46 3.21.86 1.48.39 4.83 1.29.35.1.25.07a54 54 0 0 1 11.19 4.75 19 19 0 0 1 3.4 2h.05a29.3 29.3 0 0 1 4.95 4.62c3.86 4.51 8 11.7 10.56 23.06a120 120 0 0 1 2.61 27.76l1.47 49.19-11.54-.37s.07-.06.1-.21M63.7 364.08c-.32-1.78 1.59-33.08 1.59-33.08s1.63 33.07 1.61 33.07a30 30 0 0 1-3.2.01M251.67 364.08c-.31-1.78 1.59-33.06 1.59-33.06s1.64 33.07 1.62 33.07a30 30 0 0 1-3.21-.01M205.65 265.79l-.44-.39c-.08-.09-5.42-7.8-5.42-7.8l-6.79-9.26-2-2.73s-.71-4.41-2.19-10c-1.59-6-4.08-13.3-7.52-17.88h.06c.71.37 4.71 2.94 9.78 15l2.47 4.87h-.07l.11.21 1.36 2.59 5.37 10.48h.07c1.46 2.84 2.78 5.36 3.64 7 0-.01 4.08 9.85 1.57 7.91M190.28 262.59a94.9 94.9 0 0 0-11 27.3c2.15-11.47 7.55-39.67 9.46-43.29a1.5 1.5 0 0 1 .1-.18 1 1 0 0 1 .06.25c.34 2.02 1.38 15.92 1.38 15.92"
          className="trTorsten_svg__cls-8"
        />
        <path
          d="M182 364h-1.4c1.73-38.88-2-64.54-3.25-73.33-7.17-10.38-26.2-25.82-33-25.62-3.13.09-4.45-4.87-7.15-8-.91-1.06-2.31-2.22-3.24-1.17-6.13 6.9-7.48 7.37-11.66 18.28-12.86-2.16-16.59-25.49-17.43-32.16-4 .8-64.22 12.85-67.3 16.74 0 0-19.27 10.67-24.4 23.57 0 0-8.16 17.44-8 81.54v.1l-1.81.28c.14-.28-1.8-64.74 11.22-89.41a34 34 0 0 1 2.61-3.24l.05-.05c12.52-16.13 37.47-19.74 37.7-19.9 6.55-1.4 12.49-2.67 17.89-3.84h.06l5.74-1.38c1.81-.5 14.82-3.18 21.85-4.62l.29-.06 4-.9v-.53l4.48-3.74-2.22 2.35v.28a10 10 0 0 0 .06 1.09c.06.62.16 1.24.28 1.87v.17c.16 1.12.36 2.48.63 4l.18 1c0 .19.08.37.11.56s.07.34.11.52 0 .26.07.39a64 64 0 0 0 2.59 9.53l.5 1.35.12.33c.12.31.24.63.37.93.37.92.78 1.81 1.22 2.67.13.28.27.53.41.8l.36.65.29.5.06.1a9 9 0 0 0 .6.94.4.4 0 0 1 0 .09 17.7 17.7 0 0 0 3.73 4.2c.58.57 1 .93 1.2.84 5.55-8.11 8.11-11.54 13.65-19.65.79-1.16 2.43.61 3.34 1.67 2.7 3.14 4.29 6.47 7.42 6.38 3.72-.11 7.71 3.27 10.45 5.39A113.5 113.5 0 0 1 168 277.74a102 102 0 0 1 9.55 11.71q-2.59-4.27-5.32-8.47-1.37-2.09-2.77-4.16a25.5 25.5 0 0 0-2.47-3.66c-1.41-2.09-3-4.38-4.76-6.92l-.43-.61-.34-.5a.6.6 0 0 0-.1-.13c-3.18-4.65-6.36-9.28-9.8-13.76s-7.09-9.29-9.43-14.64a37.5 37.5 0 0 1-3.13-13.7c-.11-3 .22-6.21 2-8.66-2 6.65-.87 13.92 1.78 20.33s6.75 12.1 11 17.58c7.55 9.75 14.94 19.75 20.91 30.57.83 1.5 1.62 3 2.32 4.61.15.35.29.69.41 1V288c0-6.29-.14-31-1.63-47.88-.33-3.79-.73-7.19-1.21-9.91a20 20 0 0 1-.73-3.8.2.2 0 0 0 0-.07 23.5 23.5 0 0 1-.07-3.19v-.58c0-.2.07-.59.11-.88s.09-.59.14-.9.11-.51.16-.77v-.08a15 15 0 0 1 1.4-3.62 13.6 13.6 0 0 1 1-1.58l2.85 1.32a3 3 0 0 0-.29.22c-1 .88-4.29 4.44-2.95 13.09 0 .27.09.55.14.84 0 0 .18.93.44 2.93a.4.4 0 0 1-.11-.07l.11.08v.08c.23 1.79.53 4.41.81 8 .75 9.41 1.46 25.41.83 49.93v.2-.13c.11.38.22.78.33 1.19v.09c5.25 20.12 3.42 67.01 3.25 71.49"
          className="trTorsten_svg__cls-8"
        />
      </g>
    </svg>
  );
}
SvgTrTorsten.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
};
export default SvgTrTorsten;
