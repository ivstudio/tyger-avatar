import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrSophia({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trSophia_svg__avatar"
      data-name="trAvatar"
      viewBox="0 0 144.99 170.11"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trSophia_svg__cls-2{fill:#e5942f}.trSophia_svg__cls-4{fill:#010101}.trSophia_svg__cls-6{fill:#d39781}.trSophia_svg__cls-8{fill:#ccc;opacity:.5}.trSophia_svg__cls-9{fill:#5e321a}.trSophia_svg__cls-10{fill:#e2ab90}.trSophia_svg__cls-11{fill:#fff}.trSophia_svg__cls-12{fill:#321b0f}.trSophia_svg__cls-14{fill:#de5386}"
          }
        </style>
      </defs>
      <path
        d="M0 0h144.99v170.01H0z"
        style={{
          fill: "none",
        }}
      />
      <g id="trSophia_svg__shirt">
        <path
          id="trSophia_svg__shirt_base"
          d="M131.89 169.98H9.57c1.69-51.98 19.86-42.42 51.64-49.7l26.83 2.43c26.84 16.09 41.61-3.56 43.85 47.27"
          style={{
            fill: "#f2759b",
          }}
        />
        <g id="trSophia_svg__shirt_shade">
          <path
            d="M123.77 170.11v-.13c-.2-44.06-5.38-29.8-30.95-42.74-1.94 9.01-34.41 14.32-37.67-4.13.71 3.39 3.99 11.08 19.53 11.64 0 0 14.31-.36 17.44-7.87-1.42-.73-2.89-1.55-4.43-2.47.21-.52.25-1.05.29-1.59v-.03c7.28 4.71 26.06 8.55 25.93 8.38 19.45 3.55 16.84 27.72 17.96 38.82l-8.11.13Zm-68.65-47.2c-.14-.76-.16-1.26-.17-1.37.04.47.09.93.17 1.37"
            className="trSophia_svg__cls-14"
          />
          <path
            id="trSophia_svg__right_arm_shade"
            d="M34 169.93v-12.71l1.58 12.76z"
            className="trSophia_svg__cls-14"
          />
          <path
            id="trSophia_svg__left_arm_shade"
            d="m110.36 170.03-1.13-.05h-.11l.16-11.21 1.08 11.21z"
            className="trSophia_svg__cls-14"
          />
        </g>
      </g>
      <g id="trSophia_svg__skin">
        <g id="trSophia_svg__skin_base">
          <path
            d="m65.54 120.09-.04.02c.01 0 .02-.01.04-.02"
            className="trSophia_svg__cls-10"
          />
          <path
            d="m65.54 120.09-.04.02c.01 0 .02-.01.04-.02"
            className="trSophia_svg__cls-10"
          />
          <path
            d="M124.71 43.91C103.2 6.45 63.65 30.2 60.25 37.12c-2.6 5.11-12.98 29.43-11.18 40.37.34 2.18 6.93 14 10.77 11.64.62-.34 1.26-1.11 1.53-1.63 2.75 4.65 11.38 14.5 11.38 14.5-.92 5.72-4.93 13.4-6.55 15.51-.97 1.03-2.62 2.09-4.98 2.77-.09 2.9.72 8.85 13.95 9.05s12.88-6.46 12.88-6.62c0 0-3.8-1.39-3.73-5.01.09-4.68 1.43-6.57 1.43-6.57s7.67 4.18 13.41 3.09c16.9-4.12 22.67-27.78 25.68-36.88 2-6.09 3.27-20.66-.12-33.43Z"
            className="trSophia_svg__cls-10"
          />
        </g>
        <g id="trSophia_svg__skin_shade">
          <path
            d="M87.69 124.41s.01 0 .02.01c0 0-1.67.7-6.94-1.64-.34-2.25-1.61-11.79-8.03-20.61 2.26 2.42 8.34 6.83 13 8.95-1.1 2.08-2.84 8.96 2.24 11.71-.04.54-.08 1.06-.29 1.58m39.13-61.23c0 17.19-12.04 48.88-27.65 50.55 0 0 21.89-5.4 21.62-49.43-.03 0-.07.02-.1.03-.18-1.56-.43-5.72-2.27-7.81-7.27-.51-41.3-3.63-43.89-5.61-3.22 15.42 9.6 28.67-1.84 51.18-.13-.11-.4-.36-.52-.48 10.79-22.4-1.6-35.46 1.51-51-.91-.28-4.2-1.28-4.44-1.38.13-.26.26-.5.39-.75 16.76 4.91 44 5.9 56.74 6.27.42 3.12.56 5.49.45 8.43"
            className="trSophia_svg__cls-6"
          />
          <path
            id="trSophia_svg__ear_shade"
            d="M60.25 81.76c-.42 2.06-3.47 1.95-4.19 1.37-3.09-2.06-.94-4.85.87-5.06-.68-2.51-3.33-3.5-5.38-3.41 2.68-.95 5.21-.07 6.62 3.44-2.55 1.21-1.48 5.32 1.71 3.29l.38.38Z"
            className="trSophia_svg__cls-6"
          />
        </g>
      </g>
      <g id="trSophia_svg__hair">
        <path
          id="trSophia_svg__hair_base"
          d="M137.71 88.63c-6.22-3.04-11.19-8.28-11.67-16.96.07-1.01.46-15.64.32-16.92-11.34-.28-31.48-.46-52.48-5.13-3.77 16.38 8.64 26.88-.95 50.63-.24.46-.49.92-.77 1.37a24.9 24.9 0 0 1-6.47 7.25c9.92-10.07 10.5-21.82 6.4-40.28-.03.34-3.25-11.48-1.87-19.93-.21-.06-.41-.12-.61-.18-2.99 5.76-5.34 12.74-7.11 24.18-.17 1.19-1.29 3.3-2.42 1.83-8.19-10.67-11.97-1.86-11.03 3 1.34 6.93 3.5 25.04 3.56 23.97 3.18 21.42-27.17 22.18-30.05 18.55-.35-.77-.63-1.65-.79-2.66 37.38-.2-23.39-53.12 16.54-101.05 0 0 8.1-10.13 18.99-13.89 0 0 29.83-8.55 30.31 7.93l1.7 4.87c5.64-.71 27.19 3.97 32.3 14.18 5.54 5.69 11.27 11.64 11.01 25.48 0 0-1.15 0-1.67-.01-8.81 25.4 5.86 33.26 6.75 33.79Z"
          style={{
            fill: "#4a2814",
          }}
        />
        <g id="trSophia_svg__hair_shade">
          <path
            id="trSophia_svg__hair_shade-2"
            d="M119.09 28.51c-22.33-10.8-50.38 1.59-50.87 19.53-.94.28-1.91-.41-2.78-.59 1.75-18.62 30.32-32.44 53.65-18.94"
            className="trSophia_svg__cls-12"
            data-name="hair_shade"
          />
          <path
            id="trSophia_svg__hair_shade-3"
            d="M98.07 53.16c2.11-6.17 2.12-12.49 1.38-19.03 4.21 11.03-1.38 19.03-1.38 19.03"
            className="trSophia_svg__cls-12"
            data-name="hair_shade"
          />
          <path
            id="trSophia_svg__hair_shade-4"
            d="M50.61 70.68c-.05-.09-1.22 1.17-1.6 4.03-.36-15.83-10.59-28.46 6.67-46.89-.94 1.16-14.43 17.99-5.07 42.86"
            className="trSophia_svg__cls-12"
            data-name="hair_shade"
          />
          <path
            id="trSophia_svg__hair_shade-5"
            d="M64.3 107.63c-.22 3.29-1.88 11.95-9.99 14.03-5.55 1.43-17.35 2.69-17.17 2.67-5.09.6-11.92 1.16-14.56-4.33 2.83 3.61 32.35 2.73 29.81-18.09 0 0-3.87-17.72-3.33-24.42-.11 1.4 6.93 14 10.77 11.64.61-.34 1.5-1.59 1.53-1.63.92 1.7 3.16 4.52 3.16 4.52-.67 4.97-.26 10.66-.23 15.61Z"
            className="trSophia_svg__cls-12"
            data-name="hair_shade"
          />
        </g>
        <g id="trSophia_svg__hair_highlights">
          <path
            id="trSophia_svg__highlights"
            d="M118.7 44.56c-4.73-11.57-10.67-16.43-13.16-18.1 3.33.37 12.28 9.85 13.16 18.1"
            className="trSophia_svg__cls-9"
          />
          <path
            id="trSophia_svg__highlights-2"
            d="M93.97 43.51c1.61-2.76 4.08-7.6.62-15.19.82 1.81 1.53 11.52-.62 15.19"
            className="trSophia_svg__cls-9"
            data-name="highlights"
          />
          <path
            id="trSophia_svg__hair_highlights-2"
            d="M70.38 2.35C39.92 5.46 27.52 46.89 26.22 55.92 30.6 17.05 53.55 1.84 70.38 2.35"
            className="trSophia_svg__cls-9"
            data-name="hair_highlights"
          />
          <path
            id="trSophia_svg__hair_highlights-3"
            d="M60.93 68.59C50.22 53.5 56.48 34.82 56.6 34.52c-2.33 16.98 3.45 33.93 4.33 34.07"
            className="trSophia_svg__cls-9"
            data-name="hair_highlights"
          />
        </g>
      </g>
      <path
        id="trSophia_svg__eyebrows"
        d="M100.18 58.8c-.08.93-.41 1-.74 1.39-9.61-9.97-20.75-2.82-22.63-1.11l-.52-.64c9.71-9.44 22.54-3.09 23.89.35Zm26.86 2.13c-.05.2-.57.91-.58.91-1.33-4.49-10.1-1.99-12.11-1.14-1.27-2.43.69-2.3 3.94-2.77 4.37-.42 7.68.4 8.75 3"
        className="trSophia_svg__cls-4"
      />
      <g id="trSophia_svg__nose">
        <path
          id="trSophia_svg__nose-2"
          d="M108.78 90.01c2.4-2.98.09-5.19.09-5.19-2.84-2.44-6.28.53-6.44.67 3.63-4.23 6.66-2.05 6.66-2.05 3.75 2.94-.15 6.42-.32 6.57Z"
          className="trSophia_svg__cls-4"
          data-name="nose"
        />
        <path
          id="trSophia_svg__nostril"
          d="m105.99 88.16-2.37.48s-.36-1.58 2.37-.48"
          className="trSophia_svg__cls-4"
        />
      </g>
      <path
        id="trSophia_svg__mouth"
        d="M105.33 97.8s-8.69 6.71-13.34.38c0 0-3.68-5.73 5.55-9 0 0 2.16 7.37 7.79 8.62"
        className="trSophia_svg__cls-11"
      />
      <g id="trSophia_svg__right_eye">
        <path
          id="trSophia_svg__rt_eye_white"
          d="M101.61 72.18s-4.43 6.54-13.28 5.9c0 0-13.28-.79-11.58-12.17 14.94-6.29 24.57 5.92 24.87 6.27Z"
          className="trSophia_svg__cls-11"
        />
        <path
          id="trSophia_svg__rt_eye_shade"
          d="M101.61 72.18c-3.65-2.85-11.96-8.92-25.02-5.03 0-.54.15-1.24.15-1.24 15.53-6.47 24.87 6.27 24.87 6.27"
          className="trSophia_svg__cls-8"
        />
        <path
          d="M90.62 66.6c2.31 10.85-15 7.42-9.29-1.74 0 0-4.15.9-4.6 1.05l.22-1.47c13.35-5.73 21.36 3.71 24.02 7.12-3.59-3.66-7.52-5.51-11.13-6.33.34.41.6.88.77 1.37Z"
          className="trSophia_svg__cls-4"
        />
        <path
          id="trSophia_svg__rt_eye_highlight"
          d="M88.68 67.36c-.05.99-1.6.9-1.53-.09.04-.99 1.59-.9 1.53.09"
          className="trSophia_svg__cls-11"
        />
      </g>
      <g id="trSophia_svg__left_eye">
        <path
          id="trSophia_svg__left_eye_white"
          d="M128.74 73.36c-4.68 9.23-17.32 3.77-18.47-.6 1.5-1.48 9.66-12.29 19.3-5.77 0 0 .61 2.78-.82 6.37Z"
          className="trSophia_svg__cls-11"
        />
        <path
          id="trSophia_svg__left_eye_shade"
          d="M129.57 66.99c-.1.2.11 1.01.11 1.01-10.04-4.11-17.94 3.31-19.44 4.8 1.32-1.65 9.61-10.6 19.33-5.81"
          className="trSophia_svg__cls-8"
        />
        <path
          d="M120.7 74.62c-3.48 1.11-7.57-2.51-5.8-6.01-1.4.93-2.95 2.27-4.37 3.8 2.39-3.86 12.27-12.19 18.86-7.13l.21 1.73c-2.76-1.45-6.09-1.78-9.57-.84 4.69.58 5.46 7.28.68 8.45Z"
          className="trSophia_svg__cls-4"
        />
        <path
          id="trSophia_svg__eye_highlight_left"
          d="M121.85 68.58c-.04.99-1.59.9-1.52-.09.05-.99 1.6-.9 1.52.09"
          className="trSophia_svg__cls-11"
        />
      </g>
      <g id="trSophia_svg__earring">
        <path
          d="M58.42 88.45c-2.42.03-2.42-3.75 0-3.73 2.42-.03 2.4 3.77 0 3.73"
          style={{
            fill: "#fbb251",
          }}
        />
        <path
          id="trSophia_svg__earring_shine"
          d="M60.08 86.57c.18 1.7-2.82 2.02-1.5 1.4.73-.32 1.12-1.15 1.05-1.9-.02-.55-.23-.89-.02-.67.29.3.46.71.46 1.16Z"
          className="trSophia_svg__cls-2"
        />
        <path
          id="trSophia_svg__earring_shine-2"
          d="M57.96 85.34c-.65.2-.95 1-.96 1.42-.32-.73.63-1.49.96-1.42"
          className="trSophia_svg__cls-2"
          data-name="earring_shine"
        />
      </g>
      <path
        d="M53.97 28.32S68.06 14.25 89.33 15.2l-1.7-4.87s-27.56 1.6-33.66 17.99"
        style={{
          fill: "#4fc3c4",
        }}
      />
    </svg>
  );
}
export default SvgTrSophia;
