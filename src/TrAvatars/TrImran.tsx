import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrImran({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="trAvatar"
      viewBox="0 0 144.21 169.1"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trImran_svg__cls-3{fill:#010101}.trImran_svg__cls-4{fill:#725355}.trImran_svg__cls-5{fill:#2a1c0f;mix-blend-mode:multiply;opacity:.29}.trImran_svg__cls-7{fill:#c4c4c4}.trImran_svg__cls-9{fill:#fff}.trImran_svg__cls-10{fill:#69441a}.trImran_svg__cls-11{fill:#333}"
          }
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="trImran_svg__avatar">
          <path
            d="M0 0h144.21v169.1H0z"
            style={{
              fill: "none",
            }}
          />
          <path
            id="trImran_svg__sweater"
            d="m142.16 169.1-140.77-.15c2.55-51.62 15.75-42.98 47.69-54.06v-.04c9.74-5.37 42.74-2.9 44.5-1.24l-.15-.21s.02 0 .03-.02c.02 0 .03 0 .04-.02.86-.34 4.92-1.43 14.59 3.79l15.88 5.38c14.13 6.33 16.06 13.55 18.17 46.58Z"
            style={{
              fill: "#555655",
            }}
          />
          <g id="trImran_svg__sweater_shade">
            <path
              id="trImran_svg__left_ribbing"
              d="m112.18 168.79-.54.01c.02-.16.45-5.41.45-7.84-1.08-.31-5.61-1.48-11.82-1.1 0 0 6.46-1.77 11.82 1.04-.19-11.08-1.01-25.87-1.24-30.14-1.37-.49-7.83-2.77-11.71-3.45.51-.03 7.82.5 11.71 3.35-.03-8.39-2.51-13.14-2.71-13.36 2.43 2.64 3.84 4.14 3.82 22.47 0 5.14 1.39 16.48.22 29.02"
              className="trImran_svg__cls-11"
            />
            <path
              d="M100 149.21c-.35-.01 6.06-1.05 11.66 1.84 0 0-5-1.64-11.66-1.84m-75.36 19.42v.03c-.25.05-1.56 0-1.56 0v-.02c-.14-1.06.78-16.08.78-16.08s.76 15.3.79 16.08Zm105.81.03c-.25.05-1.56 0-1.56 0-.13-1.75.78-16.03.77-16.1 0 .2.72 14.42.79 16.11Zm-73.92-7.24c.02 2.49.06 5.89-.14 7.54-.02.17-.57.05-.57.05.24-15.38-1.65-29.73-4.23-36.13-1.04-4.22-4.2-17.23-2.5-18.07.03 1.87.47 4.55.86 6.83 3.28-2.49 9.48-3.42 11.44-3.66 0 .02-10.21 3.22-11.42 3.77.58 3.32 3.75 15.66 4.92 21.08 4.49-3.64 12.36-3.71 12.37-3.71-6.27 1.15-11.04 3.22-12.34 3.81.7 3.32 1.59 14.37 1.62 18.38 5.44-2.34 10-1.54 12.29-1.1-6.04-.39-11.03.82-12.29 1.19Z"
              className="trImran_svg__cls-11"
            />
          </g>
          <path
            id="trImran_svg__turtleneck"
            d="M68.82 149.69v.02h.02s.02 0-.02-.02m27.27-32.02s-1.92-3.23-2.65-4.27c0 0-.16-.47-.09-1.28.08-.97 1.61-2.76 1.75-3.94.16-1.41-1-4.2-.82-5.1S85.84 85.6 65.6 97.49c.17.52 1.32 2.97 1.34 3.12.62 2.09-2.14 3.81-2.52 4.9-1.12 3.2 1.37 5.25.72 5.73 0 0-2.41 1.63-2.78 2.06-3.26 3.72 3.71 16.97 5.62 31.21 2.05 15.27.51 24.32.5 24.38l31.51.17c0-.16 2.36-42.16-3.9-51.39"
            style={{
              fill: "#9d7373",
            }}
          />
          <g id="trImran_svg__turtleneck_shade">
            <path
              id="trImran_svg__neck_shade"
              d="M94.93 108.94c-1.87 3.42-1.48 4.46-1.49 4.46-6.41 3.4-11.68 1.28-11.68 1.28 3.67.49 12.17-1.95 8.4-2.22-13.52 1.02-18.68-2.11-18.96-2.28 22.72 1.9 23.71-1.21 23.72-1.24Z"
              className="trImran_svg__cls-4"
            />
            <path
              d="M66.45 99.5c-.07-.13 3.22 2.26 15.97 4.14 0 0-10.18-.02-15.51-1.68.18-.92-.02-1.7-.46-2.46m5.32 55.96v13.43h-3.29s1.52-13.53-.78-26.5c-2.54-14.29-8.41-26.44-5.34-29.09.42 13.89 8.66 16.15 9.41 42.16"
              className="trImran_svg__cls-4"
            />
          </g>
          <g id="trImran_svg__skin">
            <path
              id="trImran_svg__face"
              d="M73.68 43.55h-.05.08zm-25.16 2.31c0 .29 0 .58-.01.87h.07c-.02-.3-.05-.59-.06-.87m25.16-2.31h-.05.08zm-25.17 2.11c0 .06 0 .13.01.2v-.2h-.02Z"
              className="trImran_svg__cls-10"
            />
            <path
              d="M125.86 69.77c-.14-3.64-.45-7.5-.86-10.81-1.25-10-3.27-17.01-4.98-22.11C111.46 11.28 90.9 9.3 81.58 9.43c-20.4.28-27.88 13.87-29.52 17.68-4.13 7.74-3.77 21.5-3.77 21.5-8.56-5.86-16.45 1.44-4.59 15.77 0 0 2.62 4.39 5.54 4.97 1.98-.56 3.46-2.14 3.97-4.28 5 13.5 13.37 27.67 22.14 30.2 7.12 2.05 18.53 3.05 25.08 1.7 27.01-5.58 25.42-27.24 25.43-27.2M73.63 43.56h.08z"
              className="trImran_svg__cls-10"
            />
          </g>
          <g id="trImran_svg__face_shade">
            <path
              d="M120.44 76.89c1.36-31.23-7.55-54.4-21.74-64.14 10.04 2.8 16.69 13.92 16.69 13.93 9.74 16.89 10.36 39.65 10.46 43.06 0 0-2.21 5.76-5.41 7.16Z"
              className="trImran_svg__cls-5"
            />
            <path
              id="trImran_svg__ear_shade"
              d="M51.15 60.73c-.53 2.15-3.41 1.99-4.28 1.4-3.56-2.3-.16-5.35.89-5.17-1.12-3.77-5.49-3.49-5.49-3.49.32-.46 5.28-1.16 6.76 3.51-2.66 1.35-1.47 5.4 1.74 3.36l.39.39Z"
              className="trImran_svg__cls-10"
            />
            <path
              d="M51.15 60.73c-.53 2.15-3.41 1.99-4.28 1.4-3.56-2.3-.16-5.35.89-5.17-1.12-3.77-5.49-3.49-5.49-3.49.32-.46 5.28-1.16 6.76 3.51-2.66 1.35-1.47 5.4 1.74 3.36l.39.39Z"
              className="trImran_svg__cls-5"
            />
          </g>
          <path
            id="trImran_svg__rt_eyebrow"
            d="M98.84 43.15c-.47 1.28-6.34-1.59-13.17-2.39-8.15-1.14-13.86-.15-15.66 0 2.9-3.31 2.23-5.03 9.38-3.8.65.17.75-3.37 12.34.69-1.41-.5 2.92-1.96 7.09 1.32.65.51.16 3.81.01 4.17Z"
            className="trImran_svg__cls-3"
          />
          <path
            id="trImran_svg__left_eyebrow"
            d="M130.68 42.2c-2.45-.83-13.97-.61-18.33 1.46-1.23.13-1.78-2.09-1.87-4.16.21.2 6.88-3.69 7.36-1.72 1.06-.28 8.3-1.75 6.64.2 3.26-.74 6.2.95 6.2 4.21Z"
            className="trImran_svg__cls-3"
          />
          <g id="trImran_svg__nose">
            <path
              id="trImran_svg__nostril"
              d="M102.71 65.32s-.33-1.87 2.23-.56z"
              className="trImran_svg__cls-3"
            />
            <path
              id="trImran_svg__nose-2"
              d="M101.43 61.67s4.08-3.64 7.42-.78c0 0 2.66 2.55-.11 5.98 0 0 4.78-4.11.37-7.57 0 0-3.5-2.52-7.68 2.36Z"
              className="trImran_svg__cls-3"
              data-name="nose"
            />
          </g>
          <path
            d="M109.51 73.87a5 5 0 0 0-.57-.34s.02-.01.03-.02q.27.165.54.36M73.68 43.55h-.05.08z"
            className="trImran_svg__cls-3"
          />
          <path
            d="M108.53 48.67c2.68 16.92 29.06 11.5 27.05-1.68-.39-1.42-1.82-2.45-3.3-2.37-.03 0-9.82.39-9.85.4-2.16.08-7.04.28-9.24.37-1.83-.12-4.07.41-4.56 2.45-2.43-1.94-5.99-1.15-8.52.14-.28-1.66-1.77-3-3.45-3.11-1.54.04-26.9-2.88-26.39.6-2.48.12-23.1.92-24.82 1.77.82.37 1.73.78 2.64.64 1.33 6.57 10.55 17.43 1.15 21.48-.41 13.6 2.5 26.63 18.69 28.57 6.86.35 12.28 6.1 19.15 5.79 0-1.18.49-2.37 1.42-3.13 1.62.99 2.07 3.01 1.67 4.76 1.47-.81 2.37-2.16 2.49-4.18.53.63 1.05 1.31 1.62 1.92s.3.33.3.33c.11-.44.29-1.13.38-1.56.48 1.36.29 2.81-.15 4.14 0 .02.02.05.03.08 2.24-.79 4-2.84 4.15-5.26 1.66 1.67 2.21 4.16 1.76 6.41 3.18-1.82 5.53-4.97 6.12-8.6.8 1.48.63 2.31.75 3.65 1.38-1.86 2.78-3.73 4.16-5.57 1.62 1.79 2.22 4.28 1.97 6.64 11.05-7.4 18.02-22.4 11.71-34.61.57 4.04-2.62 7.75-6.5 8.67-1.49-7.53-8.33-11.92-15.42-9.48-6.67.13-14.4 1.99-16.38 9.34C73.3 74.69 62.33 62.15 61.6 48.08c.19 0 8.17.12 8.36.1 3.72 17.98 30.77 12.96 30.23.45 2.75-.42 5.68-.96 8.35.06Zm.56 24.96c-1.91 1.72-5.52 3.99-11.14.38 6.99-3.03 11.09-.41 11.14-.38m-11.34.5c1.64 2.37 6.36 7.38 11.75-.26 1.55 1.04 2.76 2.67 3.31 5.02 0 0-5.2 4.16-8.59-.26 0 0-1.38 4.77-11.64 2.19 0 0 .87-4.2 5.18-6.69Z"
            className="trImran_svg__cls-3"
          />
          <path
            id="trImran_svg__beard_highlights"
            d="M125.29 82.73s-1.38 11.51-9.83 17.33c.21-.27 7.12-8.8 9.83-17.33m-15.38 13.85s-.02 0-.04.01c.84-1.42 4.38-6.67 2.2-13.33 0 0 .57 6.24-2.16 13.32m-7.56 6.87c.34-3.73-5.38-8.49-5.08-15.33-.25 5.54 5.68 9.82 5.08 15.33M83.4 97.94c-6.06-7.18-8.22-14.16-8.01-14.36.62 7.58 4.72 11.62 8.01 14.36"
            className="trImran_svg__cls-11"
          />
          <path
            id="trImran_svg__hair"
            d="M81.58 9.43c-.22.85-.66.69-.66.69-2.11-1.79-9.09-1.28-9.1-1.29 0 0 4.51-1.44 7.6-.33-4.6-3.9-10.62-3.95-10.62-3.95C79.58 1.8 80.98 9.42 80.98 9.42 80.23 2.7 72.76.6 73.15.63c8.97.75 8.7 6.94 8.43 8.8"
            className="trImran_svg__cls-3"
          />
          <path
            id="trImran_svg__rt_lense"
            d="M99.19 49.21c-.15 12.08-27.32 14.09-28.37-1.99 1.19-.89 2.88-.97 6.15-1.2-4.33 7.77 13.86 8.07 10.07.2 7.79.2 11.22 1.05 11.93 1.25.25.54.33 1.14.23 1.74Z"
            className="trImran_svg__cls-9"
          />
          <path
            d="M134.71 48.33c-.93 12.65-23.85 14.08-25.21 0 .54-.5 1.69-.67 4.08-.9-3.93 6.05 12.76 6.35 8.89-.37 2.17-.04 4.42.03 6.59-.01 4.17 0 5.32-.35 5.64 1.28Z"
            className="trImran_svg__cls-9"
          />
          <path
            id="trImran_svg__rt_lense_shade"
            d="M95.53 47.05c5.05 4.54-.77 12.63-14.71 10.26 1.64.32 19.12.48 14.71-10.26"
            className="trImran_svg__cls-7"
          />
          <path
            id="trImran_svg__left_lense_highlight"
            d="M124.73 56.74c-1.85.25-4.18.14-6.22-.25 1.02.11 4.45.08 6.15-.26 3.43-.64 9.02-2.28 6.6-8.12 0 0 5.49 6.88-6.53 8.63"
            className="trImran_svg__cls-7"
          />
        </g>
      </g>
    </svg>
  );
}
export default SvgTrImran;
