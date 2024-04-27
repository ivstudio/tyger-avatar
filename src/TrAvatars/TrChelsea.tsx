import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrChelsea({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 311 365.2"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trChelsea_svg__cls-3{fill:#69441a}.trChelsea_svg__cls-4{fill:#7f4b1e;mix-blend-mode:multiply;opacity:.36}.trChelsea_svg__cls-5{fill:#010101}.trChelsea_svg__cls-8{fill:#fff}.trChelsea_svg__cls-9{fill:#ccc;opacity:.5}.trChelsea_svg__cls-10{fill:#c2882b}.trChelsea_svg__cls-11{fill:#a86a28}.trChelsea_svg__cls-13{fill:#307d7d}.trChelsea_svg__cls-14{fill:#053a59}"
          }
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="trChelsea_svg__Layer_1" data-name="Layer 1">
          <path
            d="M0 0h311v365H0z"
            style={{
              fill: "none",
            }}
          />
          <g id="trChelsea_svg__skin">
            <path
              d="M155.55 155.19c-.39-1.29-8.2-27.26-2.7-47.9a42 42 0 0 1 2.59-7.12 53.4 53.4 0 0 0-8.67 11c-.4.65-.78 1.33-1.16 2a72.8 72.8 0 0 0-6.29 15.57c-.14.49-.26 1-.39 1.46s-.27 1-.39 1.53-.3 1.28-.45 1.93-.28 1.28-.4 1.94c-.18.82-.33 1.67-.48 2.53-.08.45-.15.9-.22 1.36-.15.92-.28 1.85-.41 2.81l-.18 1.44c-.06.48-.11 1-.16 1.46s-.11 1-.15 1.5-.09.94-.12 1.41c-.08.94-.14 1.9-.2 2.88 0 .48-.05 1-.07 1.47-.15 3.43-.18 7-.06 10.86v.51a2.75 2.75 0 0 1-1.61 2.21 5.25 5.25 0 0 1-3.74.14v-.08l-.08-.29s-14.07-11.35-20.48-4.09c0 0-7.44 11.16 8.19 28.08 0 0 9.36 15.6 16 4.8 0 .08.09.15.14.23.21.34.4.67.61 1s.32.53.48.79a4 4 0 0 0 .23.36c.33.54.67 1.07 1 1.6s.86 1.34 1.29 2c.71 1.09 1.42 2.15 2.15 3.18.42.62.85 1.23 1.28 1.83s.85 1.19 1.28 1.77.87 1.17 1.3 1.74c.86 1.13 1.72 2.25 2.59 3.32.43.54.86 1.07 1.3 1.6 2.17 2.61 4.35 5 6.52 7.29a.1.1 0 0 1 0-.05c.12-.28.25-.56.36-.84 9.1-21.61 5.69-47.26 1.1-65.23m-27.73 41.37a3.82 3.82 0 1 1 3.81-3.81 3.81 3.81 0 0 1-3.81 3.81"
              className="trChelsea_svg__cls-3"
            />
            <path
              d="M129.14 263.89v-.11c9-2.57 12.36-4.69 13.57-5.68a3.5 3.5 0 0 0 .6-.6 13.8 13.8 0 0 0 1.95-2.55c3.75-5.78 10.48-19.36 12.4-30s0 0 0-.06c-.34-.32-.66-.64-1-1 .16-.29.32-.58.47-.88q.45-.83.87-1.68a1 1 0 0 0 .08-.17c.25-.51.5-1 .74-1.54s.44-1 .66-1.5.52-1.23.77-1.86c.19-.48.38-1 .55-1.46s.3-.79.43-1.2c.4-1.15.78-2.32 1.13-3.51.14-.48.28-1 .41-1.46 0-.1.05-.19.09-.29.14-.57.29-1.13.43-1.7v-.12c.3-1.21.56-2.44.8-3.7.07-.35.14-.69.19-1s.19-1 .27-1.48.21-1.3.3-2v-.21c.09-.66.18-1.34.26-2s.16-1.35.22-2v-.28c.07-.69.13-1.39.18-2.09a117.2 117.2 0 0 0-2-31.36 146 146 0 0 1-3.72-32.33v-1.87c.35-11.35 2.66-19.68 5.77-25.77a34.9 34.9 0 0 1 6.52-9c29.75-7.59 56.05 10.76 57.67 11.93h.06l.37.27.18-.07.26-.09c12.12-4.38 21.28-2.91 21.38-2.89h.11c7.46.24 12.09 7.7 12.36 8.15 2.73 5.5 3.69 15.18 4 19.06a13.4 13.4 0 0 0-6.24-2.74c-7.45-1.44-16.68 1-17.28 1.12l-.19.07a2.12 2.12 0 0 0-1.09 1.32 3.5 3.5 0 0 0 .39 2.41l.37.63.68-.26c.13 0 9.93-3.71 17.24-2.64a12.4 12.4 0 0 1 3.46 1 7.25 7.25 0 0 1 2.84 2.31v.66l.22-.27a6.4 6.4 0 0 1 .46.86.3.3 0 0 1 0 .09c-.38 1.61-.81 3.25-1.29 4.94 0 .06-.25.84-.56 2.2a19 19 0 0 0-5.39-.32c-13 1-24 14.25-26.45 17.38-.12.15-.22.28-.28.37l-.12.15c-.23.26-.44.54-.65.82.41.9 5.5 11.57 21.41 11.86a16 16 0 0 0 1.84-.17 22.36 22.36 0 0 0 9.32-3.48l.22 1a.3.3 0 0 1 0 .09 169 169 0 0 1-6.53 23 .4.4 0 0 1 0 .1c-1.77 4.94-3.86 10.08-6.28 15.38 0 0-18.23 43.15-41.81 44.56 0 0-11.81.83-28.11-6.62-2.81 6.13-5.44 15-.31 20.07a24 24 0 0 0 2.66 2.23c.45.34.92.66 1.42 1 1.31.86 2.75 1.71 4.31 2.53l-.07.15v.19q-.3 3.38-.81 6.33c-4.85 28-23.26 29-24.08 29-32.22.74-38.57-40.8-38.63-41.22"
              className="trChelsea_svg__cls-3"
            />
            <path
              d="M280.3 364.15h-39.92l-152 .22h-5.71l-56.67.15C27.14 315.57 38.15 297 38.15 297c3.36-8.81 10.11-14.43 16.79-18a56.2 56.2 0 0 1 18.11-5.89c6.22-.64 11.88-1.31 17-2 .82-.11 1.62-.21 2.42-.33l1.37-.18 1-.14.37-.05h.08q3.18-.45 6.09-.9h.13a242 242 0 0 0 25.87-5.21c.37 2.33 7.18 42.18 39.1 42.7a5.3 5.3 0 0 1 2.53-.34 3.7 3.7 0 0 1 .68.13 24.9 24.9 0 0 0 10.48-4.79c8-6.14 11.74-16 13.4-24.93.43-2.25.71-4.45.9-6.51a1.4 1.4 0 0 0 0-.19c8.28 4.17 19.19 7.88 28.61 10.69 11.25 3.36 20.38 5.42 20.38 5.42 8.47 2.48 15.21 5.69 20.42 10.08 7.81 6.58 12.18 15.84 13.83 29.37 0 .23.05.45.08.68.07.61.13 1.23.19 1.87.14 1.5.28 3 .4 4.52v.09c1.34 15.59 1.92 31.06 1.92 31.06"
              className="trChelsea_svg__cls-3"
            />
          </g>
          <g id="trChelsea_svg__skin_shading">
            <path
              d="M188.6 267a37 37 0 0 0 4.24 2.68v.19q-.3 3.38-.81 6.33c-5.48-3.07-10.11-6.38-12.05-9.46 0 0-4.92-6.51-6.82-13.14-4.39-15.38-5.49-18.38-15-29.11a91.9 91.9 0 0 0 26.53 19.23s-8.77 16 2.5 22.26l.63.34a8 8 0 0 0 .79.65ZM221.51 288l-.22.16c-.65.47-15.74-4.7-27.72-11.13.43-2.25.71-4.45.9-6.51 5.25 2.71 14.16 6.47 28.63 10.52h.05a5.64 5.64 0 0 1-1.64 6.96M155.5 100l-.06.13a42 42 0 0 0-2.59 7.12 62 62 0 0 0-7.24 5.95l-.11.09c.42-.76.85-1.5 1.27-2.2A53.4 53.4 0 0 1 155.5 100M230.15 103.4l-.23-.1c-7.68-3.09-37.09-13.42-64.19-2.88a34.9 34.9 0 0 1 6.52-9l.1-.11c30.51-7.72 57.36 11.8 57.65 12ZM268.64 128.08v-.28a13.4 13.4 0 0 0-6.24-2.74c-.67-10.94-3.57-19.72-10.76-21.13-8.35-1.63-19.77.18-19.77.18l-1.31-.56h-.09l.35-.13c12.12-4.38 21.28-2.9 21.38-2.89h.11c7.46.24 12.09 7.7 12.36 8.15 2.75 5.54 3.7 15.33 4 19.15a2 2 0 0 1-.03.25M267.67 167.45a.4.4 0 0 0 0 .1 169 169 0 0 1-6.62 22.7.4.4 0 0 1 0 .1c-1.69 4.61-3.64 9.39-5.89 14.32 0 0-18.4 42.93-42 44.34 0 0 33.2-11.64 43.64-73.5 0 0 .53-2.22 1.26-5.88a22.36 22.36 0 0 0 9.32-3.48l.22 1c.01.06.05.18.07.3M269.5 132.26q-.56 2.37-1.26 4.84c0 .05-.28.91-.6 2.38a19 19 0 0 0-5.39-.32c.25-3.88.36-7.76.24-11.45a12.4 12.4 0 0 1 3.46 1 7.25 7.25 0 0 1 2.84 2.31v.37l.13-.15.07.11a6.4 6.4 0 0 1 .51.91M130.2 181.22a4.83 4.83 0 0 1-2.5 2.86c-2.3 1-5-.24-5.2-.35a4.79 4.79 0 0 1-2.53-6 5.75 5.75 0 0 1 2.51-2.87 3.7 3.7 0 0 1 1.62-.5 8.27 8.27 0 0 0-5.47-5.61 12.4 12.4 0 0 0-4.46-.69 8.7 8.7 0 0 1 3.61-.65c2.72 0 6.35 1.34 8.61 7a6.93 6.93 0 0 0-2.48 2.72 3.19 3.19 0 0 0 .69 3.54 4.26 4.26 0 0 0 1.76.79 3.7 3.7 0 0 0 3.14-1Z"
              className="trChelsea_svg__cls-4"
            />
          </g>
          <g id="trChelsea_svg__nose">
            <path
              id="trChelsea_svg__nostril"
              d="M220.12 196.6s-.74-3.28 4.94-1Z"
              className="trChelsea_svg__cls-5"
            />
            <path
              id="trChelsea_svg__nose-2"
              d="M217.66 190.07s7.37-6.59 13.41-1.41c0 0 4.8 4.61-.2 10.81 0 0 8.64-7.41.67-13.68 0 0-6.33-4.54-13.88 4.28"
              className="trChelsea_svg__cls-5"
              data-name="nose"
            />
          </g>
          <g id="trChelsea_svg__hair">
            <path
              d="M275.83 93.44a24.33 24.33 0 0 0-10.53-8.94c-14.23-27.63-47.56-37.43-48-37.55-9.58-2.62-14.72-3.34-25.49-4a4.6 4.6 0 0 1-.59 1.23s-40-.47-61.17 26.21a1 1 0 0 1 0-.14 9.5 9.5 0 0 1 .55-1.28c.07-.14.15-.31.25-.48 1.14-2.12 3.71-5.83 9.13-10.07.31-.25.62-.49 1-.74s.47-.35.72-.51c.8-.59 1.65-1.18 2.56-1.76l1.21-.78s12.3-7.61 25.68-10.9c12.11-3 19.3-3.71 19.17-5.68a1 1 0 0 0-.19-.52l.1.1.15.16a.3.3 0 0 0 0-.1c-.72-13-8.34-19-9.84-20C172.49-1.56 150 1.4 149.82 1.43c-18.9 1.4-24.73 6.21-25.83 7.31C106.24 13.93 96.88 23.67 92.14 31a40.2 40.2 0 0 0-6.06 14.53C65.34 62.89 56.11 97 52 122.61a325.5 325.5 0 0 0-4 52c-1.15 32.51 5.64 101.68 5.71 102.39l-.19 2H55c9.67-3.43 30-7.27 33.79-7.63l1.36-.23 1.61-.27.81-.06c1.12-.05 2.72-.07 3.36-.13a24 24 0 0 0 3.62-.58c1-.25 1.51-.48 1.86-.56h.13a242 242 0 0 0 25.87-5.21v-.11a.86.86 0 0 1 1.68-.35c9-2.57 12.36-4.69 13.57-5.68.9-1 1.75-2.09 2.55-3.15 3.75-5.78 10.48-19.36 12.4-30s0 0 0-.06c-.34-.32-.66-.64-1-1 .16-.29.32-.58.47-.88q.45-.83.87-1.68a1 1 0 0 0 .08-.17c.25-.51.5-1 .74-1.54s.44-1 .66-1.5.52-1.23.77-1.86c.19-.48.38-1 .55-1.46s.3-.79.43-1.2c.4-1.15.78-2.32 1.13-3.51.14-.48.28-1 .41-1.46 0-.1.05-.19.09-.29.14-.57.29-1.13.43-1.7v-.12c.29-1.21.56-2.44.8-3.7.07-.35.14-.69.19-1s.19-1 .27-1.48.21-1.3.3-2v-.21c.09-.66.18-1.34.26-2s.16-1.35.22-2v-.28c.07-.69.13-1.39.18-2.09a117.2 117.2 0 0 0-2-31.36 146 146 0 0 1-3.72-32.33l.27.28.29-.28c2.81-2.61 23.92-20.8 46.67-1.18l.64.56.57-.64a3.4 3.4 0 0 0 .8-2.35 2.82 2.82 0 0 0-1.11-2c-.23-.2-22.62-19.65-48.09 3.7.35-11.35 2.66-19.68 5.77-25.77a34.9 34.9 0 0 1 6.52-9l.1-.11c30.51-7.72 57.36 11.8 57.65 12l.17.13.29.11.35-.13c12.12-4.38 21.28-2.9 21.38-2.89h.11c7.46.24 12.09 7.7 12.36 8.15 2.75 5.54 3.7 15.33 4 19.15a2 2 0 0 1 0 .26v-.28a13.4 13.4 0 0 0-6.24-2.74c-7.45-1.44-16.68 1-17.28 1.12l-.19.07a2.12 2.12 0 0 0-1.09 1.32 3.5 3.5 0 0 0 .39 2.41l.37.63.68-.26c.13 0 9.93-3.71 17.24-2.64a12.4 12.4 0 0 1 3.46 1 7.25 7.25 0 0 1 2.84 2.31l.15.22.07.11a6.4 6.4 0 0 1 .46.86.3.3 0 0 1 0 .09c-.38 1.61-.81 3.25-1.29 4.94 0 .06-.25.84-.56 2.2a19 19 0 0 0-5.39-.32c-13 1-24 14.25-26.45 17.38-.12.15-.22.28-.28.37l-.12.15-.07.09.59-.61a52.7 52.7 0 0 1 8.5-7.27 7.4 7.4 0 0 0-.5 1.31 7.6 7.6 0 0 0-.27 1.19 8.5 8.5 0 0 0 1.73 6.37 10.4 10.4 0 0 0 6.86 3.92 12 12 0 0 0 1.47.09 10.34 10.34 0 0 0 6-1.91 8.45 8.45 0 0 0 1.87-12.18 2 2 0 0 1-.13-.16 10 10 0 0 0-3.47-2.75 10.3 10.3 0 0 0-2.91-.94 29.4 29.4 0 0 1 6.86-1.08 27.7 27.7 0 0 1 4.95.24 26 26 0 0 1 3.39.71 21.5 21.5 0 0 1 2.88.89 16.5 16.5 0 0 1 2 .94h.06l-.43-3.61-.93-.56q.94-3.89 2.3-7.94a69.3 69.3 0 0 0 3.75-14.26c1.6-10.66.25-19.69-3.92-26.13M143.67 209.16c-.43-.57-.87-1.15-1.3-1.74s-.86-1.17-1.28-1.77-.86-1.21-1.28-1.83c-.73-1-1.44-2.09-2.15-3.18-.43-.65-.86-1.32-1.29-2s-.68-1.06-1-1.6a4 4 0 0 1-.23-.36c-.17-.26-.32-.52-.48-.79s-.4-.66-.61-1c0-.08-.1-.15-.14-.23-6.66 10.8-16-4.8-16-4.8-15.63-16.92-8.19-28.08-8.19-28.08 6.41-7.26 20.48 4.09 20.48 4.09l.08.29A5.3 5.3 0 0 0 134 166a2.75 2.75 0 0 0 1.61-2.14v-.51c-.12-3.82-.09-7.43.06-10.86 0-.49.05-1 .07-1.47 0-1 .12-1.94.2-2.88 0-.47.08-.94.12-1.41s.1-1 .15-1.5.1-1 .16-1.46.11-1 .18-1.44c.12-1 .26-1.9.41-2.81.07-.46.14-.91.22-1.36.15-.86.3-1.71.48-2.53.12-.66.25-1.31.4-1.94s.29-1.3.45-1.93.25-1 .39-1.53.25-1 .39-1.46a72 72 0 0 1 6.18-15.48c.42-.76.85-1.5 1.27-2.2A53.4 53.4 0 0 1 155.5 100l-.06.13a42 42 0 0 0-2.59 7.12c-5.5 20.64 2.31 46.61 2.7 47.9 4.59 18 8 43.62-1.09 65.29-.11.28-.24.56-.36.84a.1.1 0 0 0 0 .05c-2.17-2.26-4.35-4.68-6.52-7.29-.44-.53-.87-1.06-1.3-1.6-.89-1.03-1.75-2.15-2.61-3.28M207.1 46.78l1.59.38c-.62-.19-1.12-.33-1.45-.42 3.14.73 6.12 1.56 8.92 2.46l1 .32.38.13c.53.17 1 .35 1.58.54l1.44.53q2.55.95 4.91 2l1.35.61c.48.21 1 .44 1.43.66.26.11.51.24.76.36.55.27 1.1.54 1.63.82.35.17.7.35 1 .54.84.44 1.66.89 2.44 1.35.42.23.82.47 1.22.7l1.17.72 1.15.72c.75.48 1.47 1 2.18 1.45l1 .73q1 .73 2 1.47l1.09.85c.2.15.39.31.58.47s.6.48.88.73c.87.73 1.7 1.46 2.48 2.18.51.47 1 1 1.48 1.42.23.22.45.44.66.67s.43.43.63.64c.63.66 1.22 1.3 1.76 1.92.36.41.72.82 1 1.22l.49.59.47.58c.76 1 1.41 1.86 2 2.7.24.34.45.65.65 1s.4.63.58.93l.28.45.45.8c.1.19.2.35.27.5l.23.44c.09.18.16.35.23.5a1.2 1.2 0 0 1 .1.2 5 5 0 0 1 .19.48v.13c0 .1.05.16 0 .18v.08a6.53 6.53 0 0 0-3.39.94c-11-25.84-44.69-35.57-48.81-36.67m48.57 41.71a31 31 0 0 0-4.67 1.13 52 52 0 0 0-20.34 12s0 0 .06-.13l-.06.06a42 42 0 0 1 17.7-13.9 30.9 30.9 0 0 1 15.08-2.11s11.45 5.07 13.54 14.64v.14c0 .05-7.98-14.32-21.31-11.83M291.63 195.46l-.77 1.54c-.08 0-.53-.25-1.25-.68a43.92 43.92 0 0 1-21.94-28.68.3.3 0 0 1 0-.09.4.4 0 0 1 0-.1c0-.12-.06-.24-.08-.36-.08-.32-.15-.64-.22-1 .16-.11.32-.22.47-.34a17 17 0 0 0 3.87-3.92 43.6 43.6 0 0 0 6.17 20.24A38.1 38.1 0 0 0 290.8 195c.27.16.55.31.83.46"
              className="trChelsea_svg__cls-5"
            />
          </g>
          <g id="trChelsea_svg__hairclip">
            <path
              id="trChelsea_svg__hairclip_highlight"
              d="M171.19 43.74c-13.38 3.29-25.68 10.9-25.68 10.9-13.31 8.26-15.43 15.76-15.43 15.76a6.15 6.15 0 0 1-4.41-4.47s22.57-31.16 64.49-28.43c1.56 2.42-5.78 2.98-18.97 6.24"
              style={{
                fill: "#d2d2d2",
              }}
            />
            <path
              id="trChelsea_svg__hairclip_shade"
              d="M191.84 42.88a4.5 4.5 0 0 1-.59 1.22s-40-.46-61.17 26.21c0 0 2.12-7.5 15.43-15.75 0 0 12.3-7.61 25.68-10.91 13.19-3.25 20.53-3.81 19-6.24l.25.26c.61.71 2.2 2.76 1.4 5.21"
              style={{
                fill: "#9e9e9e",
              }}
            />
          </g>
          <path
            id="trChelsea_svg__mouth"
            d="M207.46 197.75s4.51 15.34 16.22 17.94c0 0-18.1 14-27.78.81 0 0-7.67-11.93 11.56-18.75"
            className="trChelsea_svg__cls-8"
          />
          <g id="trChelsea_svg__eye_whites">
            <path
              d="M216.74 156.73A31.63 31.63 0 0 1 189.08 169s-27.64-1.65-24.14-25.35h.13a46.2 46.2 0 0 1 9.41-2.15 12 12 0 0 0-1.46 1.74 10.1 10.1 0 0 0 2.28 14 11.9 11.9 0 0 0 7.22 2.37 13 13 0 0 0 1.73-.12c6.36-.88 10.9-6.38 10.1-12.25a9.3 9.3 0 0 0-.51-2.1 9.9 9.9 0 0 0-1.61-2.84 46.36 46.36 0 0 1 23.17 13.16c-.05-.09-.33-.48-.81-1.1l.2.2c.07.07.12.14.18.21q.89.93 1.77 1.96M271.71 161.87a17 17 0 0 1-3.87 3.92c-.15.12-.31.23-.47.34a22.36 22.36 0 0 1-9.32 3.48 16 16 0 0 1-1.84.17c-15.91-.29-21-11-21.41-11.86.21-.28.42-.56.65-.82l-.07.09.59-.61a52.7 52.7 0 0 1 8.5-7.27 7.4 7.4 0 0 0-.5 1.31 7.6 7.6 0 0 0-.27 1.19 8.5 8.5 0 0 0 1.73 6.37 10.4 10.4 0 0 0 6.86 3.92 12 12 0 0 0 1.47.09 10.34 10.34 0 0 0 6-1.91 8.45 8.45 0 0 0 1.87-12.18 2 2 0 0 1-.13-.16 10 10 0 0 0-3.47-2.75 30 30 0 0 1 3.79-.34 30 30 0 0 1 4.87.25 29 29 0 0 1 3.57.71c.91.24 1.72.51 2.39.76a20 20 0 0 1 2.44 1.09c.36 6.4-1.09 10.97-3.38 14.21"
              className="trChelsea_svg__cls-8"
            />
          </g>
          <path
            id="trChelsea_svg__right_eye"
            d="M194.35 147.19c.8 5.87-3.74 11.37-10.1 12.25a13 13 0 0 1-1.73.12 11.9 11.9 0 0 1-7.22-2.37 10.1 10.1 0 0 1-2.28-14 12 12 0 0 1 1.46-1.74 46.2 46.2 0 0 0-9.41 2.15h-.13l.47-3.07c26.38-12 44.38 7.61 48.9 13.33.1.12.18.23.26.34.48.62.76 1 .81 1.1a46.36 46.36 0 0 0-23.17-13.16 9.9 9.9 0 0 1 1.61 2.84 9.3 9.3 0 0 1 .53 2.21"
            className="trChelsea_svg__cls-5"
          />
          <g id="trChelsea_svg__eye_shadow">
            <path
              d="M174.48 141.48a12 12 0 0 0-1.46 1.74 44.7 44.7 0 0 0-8.09 1.32l.14-.91a46.2 46.2 0 0 1 9.41-2.15M216.22 156.33a62 62 0 0 0-22.38-11.24 9.9 9.9 0 0 0-1.61-2.84 46.36 46.36 0 0 1 23.17 13.16c-.05-.09-.33-.48-.81-1.1-.08-.11-.16-.22-.26-.34l.46.54c.07.07.12.14.18.21.82 1 1.25 1.61 1.25 1.61M275.1 147.63a20 20 0 0 0-2.44-1.09c-.67-.25-1.48-.52-2.39-.76a29 29 0 0 0-3.57-.71 30 30 0 0 0-4.87-.25 30 30 0 0 0-3.79.34 10.3 10.3 0 0 0-2.91-.94 29.4 29.4 0 0 1 6.86-1.08 27.7 27.7 0 0 1 4.95.24 26 26 0 0 1 3.39.71 21.5 21.5 0 0 1 2.67.91 16.5 16.5 0 0 1 2 .94v.06c0 .53.07 1.09.1 1.63M244.42 149.27a7.4 7.4 0 0 0-.5 1.31 53.6 53.6 0 0 0-9.15 7.36l-.06.06.06-.08c.15-.19.55-.68 1.15-1.38a52.7 52.7 0 0 1 8.5-7.27"
              className="trChelsea_svg__cls-9"
            />
          </g>
          <g id="trChelsea_svg__eye_highlights">
            <circle
              cx={188.21}
              cy={146.59}
              r={1.59}
              className="trChelsea_svg__cls-8"
            />
            <circle
              cx={257.3}
              cy={149.11}
              r={1.59}
              className="trChelsea_svg__cls-8"
            />
          </g>
          <path
            d="M194.53 270v.35a1.4 1.4 0 0 1 0 .19c-.19 2.06-.47 4.26-.9 6.51-1.66 8.92-5.36 18.79-13.4 24.93a24.9 24.9 0 0 1-10.41 4.75 3.7 3.7 0 0 0-.68-.13 5.3 5.3 0 0 0-2.53.34c-31.92-.52-38.73-40.37-39.1-42.7v-.11a.86.86 0 0 1 1.68-.35v.11c.06.42 6.41 42 38.78 41.34.82 0 19.23-1.05 24.08-29q.51-3 .81-6.33v-.19l.07-.15a.88.88 0 0 1 .83-.45.87.87 0 0 1 .77.89"
            className="trChelsea_svg__cls-5"
          />
          <path
            d="M169.76 306.73a11.5 11.5 0 0 1-1.8.22h-1.41a5.3 5.3 0 0 1 2.53-.34 3.7 3.7 0 0 1 .68.12"
            className="trChelsea_svg__cls-5"
          />
          <g id="trChelsea_svg__jewelry">
            <g id="trChelsea_svg__gold">
              <path
                d="M174.33 314.35c-.43 3.91-3.48 6.78-6.81 6.42s-5.69-3.84-5.25-7.75a7.26 7.26 0 0 1 4.28-6.08 5.3 5.3 0 0 1 2.53-.34 3.7 3.7 0 0 1 .68.13c2.96.71 4.98 3.97 4.57 7.62M131.63 192.75a3.81 3.81 0 1 1-3.81-3.82 3.82 3.82 0 0 1 3.81 3.82"
                className="trChelsea_svg__cls-10"
              />
            </g>
            <g id="trChelsea_svg__shading">
              <path
                d="M127.2 195.75c-.34 0 .65.18 1 .18a2.91 2.91 0 0 0 2.91-2.91 2.5 2.5 0 0 0-.38-1.43 4 4 0 0 1-.67 2.86 3.78 3.78 0 0 1-2.86 1.3M165.43 318.37c-.34-.25.89 1.56 2.9 1.46a5.58 5.58 0 0 0 4.87-4.67 6 6 0 0 0 0-2.57s-.2 3.25-1.67 4.85c-.05 0-3.2 3.13-6.1.93"
                className="trChelsea_svg__cls-11"
              />
            </g>
            <g id="trChelsea_svg__highlights">
              <path
                d="M128.25 190h-.07a2.39 2.39 0 0 0-3.05.83 2.44 2.44 0 0 0-.1 2.92 3.27 3.27 0 0 1 .66-2.69 2.74 2.74 0 0 1 2.56-1.06M169.25 308.41a.3.3 0 0 0-.08-.07c-1.09-.9-2.95-.62-4.28.67a3.48 3.48 0 0 0-1 3.92 4.9 4.9 0 0 1 1.67-3.53 3.89 3.89 0 0 1 3.69-.99"
                className="trChelsea_svg__cls-8"
              />
            </g>
          </g>
          <path
            id="trChelsea_svg__shirt"
            d="M223.12 280.89s-6.53 51.15-60.39 50.63c-50.82-.22-60.69-55.78-60.44-61.72 0 0-13.39 1.05-29.27 2.5 0 0-26.95 3-34.92 23.91 0 0-11.31 19.92-12.45 68.88l254.6.09s-.69-20.46-2.28-37.47C275.65 303.44 266 292.3 244 285.85Z"
            style={{
              fill: "#63acae",
            }}
          />
          <g id="trChelsea_svg__shirt_shading">
            <path
              d="M260.45 293.32s15.91 7.64 17.66 34.35l2.13 37.26-12.67-.05s14.67-55.34-7.12-71.56M83.1 336.86 88.51 365l-6 .13s2.91-10.04.59-28.27M241.48 341.76l3.62 23.4-5-.07s2.75-8.23 1.38-23.33"
              className="trChelsea_svg__cls-13"
            />
          </g>
          <g id="trChelsea_svg__hair_highlights">
            <path
              d="M182.47 84.59a28.7 28.7 0 0 0-11.23 6.77 34.5 34.5 0 0 0-7 9.66c-5 9.94-7.62 25.6-2.8 50.18 0 0 15.29 61.35-15.74 84.08.66-.65 26.88-27.18 12.72-85.08.6-.87-5.61-28.63 3.5-48.15a33.2 33.2 0 0 1 7-10 30.5 30.5 0 0 1 13.55-7.46M184.75 84.06c-.74.14-1.45.31-2.15.5a13 13 0 0 1 2.15-.5M259.43 82.36v.08a6.53 6.53 0 0 0-3.39.94c-11.13-25.79-44.82-35.52-48.94-36.62l1.59.38c-.62-.19-1.12-.33-1.45-.42 3.14.73 6.12 1.56 8.92 2.46l1 .32.38.13c.53.17 1 .35 1.58.54l1.44.53q2.55.95 4.91 2l1.35.61c.48.21 1 .44 1.43.66.26.11.51.24.76.36.55.27 1.1.54 1.63.82.35.17.7.35 1 .54.84.44 1.66.89 2.44 1.35.42.23.82.47 1.22.7l1.17.72 1.15.72c.75.48 1.47 1 2.18 1.45l1 .73q1 .73 2 1.47l1.09.85c.2.15.39.31.58.47s.6.48.88.73c.87.73 1.7 1.46 2.48 2.18.51.47 1 1 1.48 1.42.23.22.45.44.66.67s.43.43.63.64c.63.66 1.22 1.3 1.76 1.92.36.41.72.82 1 1.22l.49.59.47.58c.76 1 1.41 1.86 2 2.7.24.34.45.65.65 1s.4.63.58.93l.28.45.45.8c.1.19.2.35.27.5l.23.44c.09.18.16.35.23.5a1.2 1.2 0 0 1 .1.2c.08.2.15.36.19.48v.13a.8.8 0 0 1 .13.13M277 100.35S269 86 255.67 88.49a31 31 0 0 0-4.67 1.13 52 52 0 0 0-20.34 12s0 0 .06-.13l-.06.06a42 42 0 0 1 17.7-13.9 30.9 30.9 0 0 1 15.08-2.11s11.45 5.07 13.54 14.64c0 0-.04.12.02.17M214.5 81.87s-1.36-28.95-30.76-33.93c0 0 23.07 8.6 26.24 31.67.02 0 4.07 3.16 4.52 2.26"
              className="trChelsea_svg__cls-14"
            />
            <path
              d="M194.29 46.32s21.81.79 29.34 15.27c0 0-14.47-14.28-29.34-15.27M131.63 72.49s-22.21 28.36-8.92 69.6a34.1 34.1 0 0 1-.2-11.3s-4.96-29.94 9.12-58.3M175.25 35.22c.31.5-5.35-39.06-51.35-26.37 0 0-25.78 7.73-30.14 26.56 0 0 20.42-27.95 52.74-20a43.28 43.28 0 0 1 28.75 19.81M109.14 41.07S42.53 88.89 58.47 223.25c0 0-3.98-127.52 50.67-182.18M88.08 180s-6.84 57.5 0 89.38c0 0 6.83 1.71 6.83 1.14S84.09 238.05 88.08 180M113.69 190.23s-1.7 29.6 4 46.11c0 0 2.28-2.84 1.71-4s-5.71-21.05-5.71-42.11M118.54 78.51S84 116 111.17 157.23c0 0-17.76-40.87 7.37-78.72"
              className="trChelsea_svg__cls-14"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
SvgTrChelsea.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
};
export default SvgTrChelsea;
