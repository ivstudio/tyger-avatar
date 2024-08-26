import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrEric({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trEric_svg__avatar"
      data-name="trAvatar"
      viewBox="0 0 145.01 168.95"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trEric_svg__cls-1{fill:#010101}.trEric_svg__cls-3{fill:#8a5335}.trEric_svg__cls-5{stroke:#544b43;stroke-miterlimit:10;stroke-width:2px;fill:none;stroke-linecap:round}"
          }
        </style>
      </defs>
      <g id="trEric_svg__sweater">
        <path
          id="trEric_svg__sweater_x5F_base"
          d="M137.09 167.95H1.02c-.55-32.54 9.32-40.17 9.32-40.17 11.87-10.95 39.31-16.42 39.31-16.42 5.24-2.7 9.49-1.73 9.49-1.73 14.15 1.77 27.33 2.48 27.54 2.39.53-.24 4.67-.43 8.39 1.79.23.14 20.17 6.11 20.17 6.11 13.8 4.39 18.69 14.41 20.36 28.77 1.03 8.91 1.48 19.26 1.48 19.26Z"
          style={{
            fill: "#eae8da",
            stroke: "#544b43",
            strokeMiterlimit: 10,
            strokeWidth: 2,
          }}
        />
        <path
          d="M38.41 114.23c7.81 8.62-7.69 11.15.63 20 3.93 3.68.65 7.4-1.34 11.01-1.97 4 1.25 7.02 2.97 10.29 1.68 4.95-7.39 7.89-1.51 12.02m62.52-51.42c7.8 8.41-7.71 10.74.63 19.29 2.7 2.44 2.28 6.15-.21 8.54-2.51 2.89-2.16 7.07.47 9.78 5.27 6.13-6.53 9.38-.14 13.81m21.02-43.46c7.8 7.22-7.72 9.04.63 16.31.78.68 1.48 1.55 1.78 2.56.86 2.94-2.41 4.5-3.32 6.94-2.34 5.64 7.56 7.24 1.25 12.7 0 0-4.22 2.31.42 4.96M15.57 123.95c7.79 7.19-7.72 8.99.63 16.21 5.39 4.81-3.03 7.43-1.81 12.35.32 1.25 1.25 2.16 2.09 3.09 5.13 5.16-6.46 8.03-.16 11.57m44.12-40.5c7.79 6.78-7.73 8.4.63 15.19 5.13 4.17-3.01 6.95-1.82 11.54.31 1.21 1.26 2.05 2.09 2.92 5.12 4.8-6.53 7.4-.16 10.83m20.1-37.38c7.79 6.33-7.74 7.71.63 14.02 5.9 4.67-3.13 6.03-1.78 10.8.36 1.14 1.35 1.88 2.17 2.67 4.81 3.96-6.51 6.98-.28 9.89"
          className="trEric_svg__cls-5"
        />
        <path
          d="M49.66 111.36c-1.95 16.57 43.97 30.64 45.43 2.45"
          className="trEric_svg__cls-5"
        />
        <path
          d="M58.92 110.49c-.13 13.11 30.09 18.92 28.7 2.53"
          className="trEric_svg__cls-5"
        />
      </g>
      <path
        id="trEric_svg__skin"
        d="M126.73 67.73c-1.21 3.91-2.78 8.07-4.78 12.45 0 0-9.8 22.87-22.43 23.99l-.31.03s-5.86.44-14.12-3.06c-.94 2.89-1.85 7.6.5 11.02.2.29.66.61 1.31.92.25 1.41.27 2.85-1.24 5.07-2.81 4.13-10.02 3.78-10.02 3.78-10.1.07-15.79-6.88-16.49-12.28 9.55-4.55 12.15-12.72 10.84-18.51-4.05-3.76-9.46-9.19-12.65-15.63-20.79-41.94 14.67-60.54 14.81-60.73 16.38-10.21 52.49-8.56 57.98 23.96.34 3.29.96 15.43-3.38 28.99Z"
        style={{
          fill: "#c79763",
        }}
      />
      <path
        id="trEric_svg__skin_x5F_shade"
        d="M70.27 91.51s4.52 5.16 14.82 9.63c0 0-3.17 8.98 1.81 11.94 0 0 .2 1.43-.28 3.13-.42 1.49-3.99-.64-5.07-3.84 0 0-4.97-13.43-11.27-20.86Zm60.03-52.57c-13.53 5.2-38.82-2.92-59.16-8.18-.19-.05-13.83 16.5-13.65 44.99 0-.12.45.87.45.88.22.48 2.34-16.46 2.8-16.01 1.96 1.68 4.21 2.06 3.3 1.56-3.04-1.57-3.52-4.33-3.36-4.87.95-4.74 6.45-17.33 9.1-23.2.32 2.85 1.49 6.37 5 8.33-1.77-1.31-4.55-5.82-4.96-8.43.54-1.2.96-2.11 1.19-2.58 9.08 8.72 37.3 14.76 49.47 11.03 1.84-.33 3.18 1.3 3.88 5.34.72 16.82-13.44 52.95-24.83 56.36 19.85-5.93 29.44-39.55 30.79-53.17h.01c.39-4.37.31-8.6-.02-12.05Zm.05 11.55-.12-.11.13.04v.07Z"
        style={{
          fill: "#84381c",
          opacity: 0.25,
        }}
      />
      <g id="trEric_svg__nose">
        <path
          id="trEric_svg__nose-2"
          d="M97.22 78.55s3.99-3.57 7.26-.76c0 0 2.6 2.49-.11 5.85 0 0 4.68-4.02.36-7.41 0 0-3.43-2.46-7.52 2.31Z"
          className="trEric_svg__cls-1"
          data-name="nose"
        />
        <path
          id="trEric_svg__nostril"
          d="M98.55 82.09s-.4-1.78 2.68-.53z"
          className="trEric_svg__cls-1"
        />
      </g>
      <path
        id="trEric_svg__mouth"
        d="M89.64 81.2c0-.27-6.28 11.08 7.62 10.62 0 0-9.73-2.56-7.62-10.62"
        className="trEric_svg__cls-1"
      />
      <g id="trEric_svg__glases">
        <path
          id="trEric_svg__glasses_x5F_frames"
          d="M134.19 52.1c-1.26-2.67-17.06-1-20.04-1.45-4.43-.1-5.93 2.17-5.35 5.76-3.93-1.65-8.46-1.42-12.49-.21.69-4.02-1.66-5.59-6.33-5.55-3.92.45-21.44-1.17-23.84 1.29-1.66.13-3.39.37-5.04.6-.13.65-.24 1.31-.35 1.97 1.73-.12 3.53-.24 5.27-.28.24.59.72.91 1.12 1.06-.52 7.86 1.99 12.76 8.33 12.43h13.72c6.24-.18 6.93-5.79 7.06-10.43 4.15-.77 8.5-.97 12.59.18-.21 13.62 7.71 9.69 17.4 10.25 6.71.36 7.29-7.16 7.05-12.47.71-.36 1.4-1.2.88-3.16Z"
          className="trEric_svg__cls-1"
        />
        <path
          id="trEric_svg__lenses"
          d="M94.98 54.37c-.55 4.36 1.15 11.33-5.77 11.97H75.49c-10.1.01-5.13-10.91-7.76-12.31-.24-.09-.67-.25-.33-1.41 3.29-1 18.73-.4 22.57-.56 2.94.31 4.65-.01 5.01 2.32Zm37.65-.34c-1.04.44-.71 2.05-.68 3.07-.14 3.8-.2 9.44-5.69 9.23h-11.31c-4.86-.21-4.47-6.07-4.73-9.41-.31-3.24-.19-4.93 3.96-4.88 1.17.01 15.13-.07 15.86.12 1.19.07 2.45.2 2.82.41.3 1.23-.1 1.4-.23 1.46"
          style={{
            fill: "#353635",
          }}
        />
      </g>
      <path
        id="trEric_svg__eyes"
        d="M93.05 59.74c-1.22.58-2.51-3.08-6.78-2.93 1.93 1.88.43 5.46-2.3 5.37-2.47.07-4.07-2.92-2.66-4.92-1.41.31-2.37.65-2.39.66-.84.33-1.35-1.01-.49-1.31 3.03-1.54 9.8-2.68 14.77 2.15.28.27.16.75-.15.97Zm33.3-.93c-.54 1.01-4.51-2.32-6.93-1.78 3.55 5.14-6.09 7.29-4.63.98-.82.7-1.82-.54-.91-1.11.22-.12 4.86-2.63 10.16-.28.69.48 2.87.96 2.31 2.18Z"
        className="trEric_svg__cls-1"
      />
      <g id="trEric_svg__eyebrows">
        <path
          d="m95.28 46.54-.22.25c-11.63-4.83-26 .6-26.02.69l-.39-.85c13.39-6.72 30.11-3.65 26.63-.08Zm34.93 3.65v.07c-4.84-5.49-15.81-2.6-18.93-2.78-.42-.51-.52-1.78.58-2.06 1.25-.47 17.85-2.16 18.36 4.77Z"
          className="trEric_svg__cls-1"
        />
        <path
          d="M130.24 50.29s-.03-.02-.03-.03v-.07c0 .02.02.07.02.1Z"
          className="trEric_svg__cls-1"
        />
      </g>
      <g id="trEric_svg__hair">
        <path
          id="trEric_svg__hair_x5F_color"
          d="M136.66 34.73s-2.12 2.01-6.51 3.99l-.04.02c-4.91 2.22-12.65 4.4-23.39 3.72 0 0-22.25-.2-35.74-11.92-.1.14-.66.91-1.49 2.23.01.17.04.35.07.53.23 2.95 1.31 6.81 5.06 8.91.1.1.18.17.22.21-.11 0-.25-.02-.43-.05h-.02c-1.3-.18-4.36-.84-7.53-3.22-.2-.15-.39-.3-.59-.46-2.18 4.56-4.57 10.81-5.82 18.22v-.02l-.06.46c.02-.15.05-.29.07-.44.02.05.05.11.07.16.9 1.96 2.13 3.68 3.8 5.01-.05-.01-.26-.09-.6-.22-.75-.3-2.12-.91-3.72-1.88-.49 4.06-12.74 12.01-16.3-.49C33.92 25 70.75 7.84 73.08 6.73c7.31-3.48 36.67 4.11 38.68 5.29 9.68 5.69 17.12 6.73 17.12 6.73-.01-.06-.03-.11-.04-.16 5.96.98 11.99.14 15.23-5.54 0 0 4.83 10.19-7.41 21.68"
          style={{
            fill: "#6f3c18",
          }}
        />
        <g id="trEric_svg__hair_x5F_highlights">
          <path
            d="M139.17 21.31c-3.5 3.33-7.69 4.44-11.95 4.28-.13 0-.26 0-.39-.01-8.52-.48-17.24-5.9-21.22-8.7l.42-.06c8.38 4.88 15.01 6.84 20.07 7.34l.55.06c8 .64 11.91-2.38 12.52-2.9Z"
            className="trEric_svg__cls-3"
          />
          <path
            d="m106.04 16.82-.42.06c-1.23-.87-2.01-1.48-2.18-1.62.89.55 1.76 1.07 2.6 1.56m4.87 13.61c-13.82-1.12-20.89-8.47-21.71-9.39 4.97 5.02 21.71 9.39 21.71 9.39m25.66-.32c-1.93 2.32-4.26 4.09-6.81 5.44-.02.01-.04.02-.07.03-14.76 7.76-37.06 1.28-36.81 1.33 18.03 3.43 29.86.57 36.62-2.43.03-.01.06-.03.09-.04 4.4-1.97 6.62-3.99 6.99-4.34Z"
            className="trEric_svg__cls-3"
          />
        </g>
      </g>
      <g id="trEric_svg__hat">
        <path
          d="M128.89 18.75s-7.44-1.03-17.12-6.73c-2.01-1.19-4.08-1.14-6.29-.86-8.72 1-18.09 3.43-25.15 9.31-19.34 16.27-19.29 34.76-23 55.03-.07-.1-.13-.19-.18-.29.05.12.11.23.18.34.26 4.94-2.8 7.35-7.67-1.08-1.88-3.36-3.79-5.65-6.06-4.92C15.33 74.14 29 21.35 43.35 14c0 0 24.11-21.97 29.48-10.86 0 0 12.57-4.25 20.28-.8.04-.02 31.05-2.82 35.79 16.42Z"
          style={{
            fill: "#434344",
          }}
        />
        <path
          id="trEric_svg__hat_x5F_wrinkles"
          d="M92.42 2.66c-23.47 10.33-37.92 32.63-40 56.87-.02 0-.04-.02-.07-.03C50.67 34.78 71.4 8.65 92.42 2.66M59.78 24.13c-6.42 5.36-18.92 29.57-16.37 45.18-3.68-10.74 3.16-33.76 16.37-45.18M72.14 3.54C60.37 9.79 44.49 22.96 37.5 36.61c3.71-9.85 20.94-28.56 34.64-33.07"
          className="trEric_svg__cls-1"
        />
      </g>
    </svg>
  );
}
export default SvgTrEric;
