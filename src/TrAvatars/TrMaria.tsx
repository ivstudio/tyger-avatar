import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrMaria({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="trAvatar"
      viewBox="0 0 89.45 132.08"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M88.89 132.07c-14.83.03-72.92-.07-88.75-.09-.9-22.29 2.27-36.88 15.69-30.99 7.58-1.96 16.59-4.57 22.35-6.6 0 0 .01-.01 0-.01 5.59.35 14.74.74 18.53.93 0 0 21.59 5.66 20.86 5.87h-.01c11.35-4.37 13.03 9.35 11.32 30.9Z"
        style={{
          fill: "#821a1a",
        }}
      />
      <path
        d="M18.58 117.07s.6-13.35-2.75-16.06c0 0 5.64-2.47 2.75 16.06m30.16-8.22c-14.45 0-15.54-9.04-15.7-12.59.09.65 1.73 11.01 15.56 11.45.16 0 12.33-.03 12.96-10.75.04.38 1.22 11.9-12.82 11.9Zm31.53 8.39s.6-13.35-2.75-16.05h.01c.01 0 .02 0 .04-.01.25-.09 1.3-.35 2.19.79 1.16 1.5 2.04 5.41.5 15.28Zm8.57 14.83H86.9c.32-.92 2.42-18.9.62-26.48 2.45 7.93 1.94 20.79 1.32 26.48"
        style={{
          fill: "#640e0e",
        }}
      />
      <path
        d="M77.91 80.83c-.23 5.37-6.09 10.44-11.19 7.13-.33-.19-.63-.42-.92-.66.32-.28.63-.57.94-.87 7.85 5.15 12.63-7.41 7.82-12.84.17-.46.32-.93.48-1.39 2.27 2.21 3.18 5.53 2.87 8.63"
        style={{
          fill: "#fbaf33",
        }}
      />
      <path
        d="M80.4 39.56c2.08 1.96 1.74 20.28-2.7 31.86-2.42 6.31-7.39 17.31-16.31 18.77-.29.02-2.82.13-6.62-1.03-.74 1.62-.85 3.92.39 5.38 1.95.9 1.99.85.86 3.91-4.37 6.94-16.64 3.77-17.84-4.08 2.77-.26 5.25-6.66 4.85-11.91-.92-.79-1.85-1.67-2.78-2.64v-.06a52.4 52.4 0 0 1-7.22-9.48c-1.91 2.53-4.45-1.69-4.45-1.69-4.54-4.91-6.88-17.76-6.88-17.76-.44-42.03 62.35-31.24 58.69-11.28Z"
        style={{
          fill: "#c79763",
        }}
      />
      <path
        d="M82.14 50.83h-.02c-.25 11.58-9.28 46.16-27.36 38.36.01 0 .02 0 .03.01-.96 1.74-.91 5.53 1.9 6.13.58 2.95-2.03 2.48-4.58 1.59 0-.14-3.29-9.19-7.56-13.32 2.57 2.98 15.18 7.31 18.24 5.82 13.97-8.05 15.64-29.46 16.33-44.1h-.03c-.25-9.3-6.33-7.75-10.99-7.32 0 0-19.04-10.66-30.67 3.09 3.8-15.87 47.49-20.2 44.69 9.76ZM32.67 66.85c-.3 1.24-2 1.15-2.48.81-1.86-1.27-.53-2.87.51-3-.43-1.55-1.99-2.06-3.19-2.02 1.56-.5 2.96-.2 3.92 2.04-1.43.61-.92 3.17 1.01 1.95l.22.22Z"
        style={{
          fill: "#b77e45",
        }}
      />
      <path
        d="M40.26 79.82c-1.8 10.86-10.08 7.84-10.09 7.84-7.05-2.73-7.52-13.84-1.17-17.62.34-.36.87.16.45.45-5.64 3.64-4.83 14.41 2.06 16.03 0 0 .16.03.15.03 6 .83 8.4-7 6.34-11.67-1.03-3.32-4.05-4.72-7.02-5.29 2.27-1.53 6.22.71 7.48 2.92 1.48 2.11 2.05 4.77 1.8 7.31"
        style={{
          fill: "#fbaf33",
        }}
      />
      <path
        d="M65.18 77.96c-7.75 6.44-16.15-2.46-5.84-6.46-.2.43 2.94 6.38 5.84 6.46"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="m65.68 70.72-1.78.35s-.27-1.18 1.78-.35m3.4-.51c-.13.65-1.22 1.9-1.3 1.9 1.79-2.24.07-3.89.07-3.89-2.13-1.83-4.71.4-4.83.5 3.86-4.18 6.86-.85 6.06 1.49"
        style={{
          fill: "#010101",
        }}
      />
      <path
        d="M62.68 56.72s-3.32 4.9-9.96 4.43c0 0-9.96-.6-8.7-9.13 4.02-1.76 9.84-.51 9.84-.51 2.71.62 6.4 2.33 8.82 5.22Zm18.56 3.14c-4.88 4.01-11.82-.78-12.06-2.71 1.12-1.11 1.34-2.05 3.32-3.18 2.21-1.24 4.5-2.3 4.5-2.3 1.97-.38 5.31.36 6.65 1.14.19 3.35-.97 5.92-2.41 7.04Z"
        data-name="eye_white"
        style={{
          fill: "#fff",
        }}
      />
      <g data-name="eye_shade">
        <path
          d="M62.49 56.58c-8.13-6.82-18.48-4.25-18.48-4.25l.05-.33c11.45-3.94 18.43 4.57 18.43 4.58"
          style={{
            fill: "#cccccb",
          }}
        />
        <path
          d="M54.15 51.58s-.08-.02-.12-.02c.04 0 .08.01.12.02m-.12-.02c-.06-.02-.11-.03-.17-.04h-.01c.06 0 .12.02.18.04"
          style={{
            fill: "#cccccb",
          }}
        />
      </g>
      <path
        d="M83.73 53.44c-1.36-.78-7.86-2.9-14.58 3.74.95-1.21 2.19-2.64 3.26-3.37 5.61-3.83 9.63-1.95 11.26-.99.03.21.04.42.06.62"
        data-name="eye_shade"
        style={{
          fill: "#cccccb",
        }}
      />
      <path
        d="M54.43 52.53c-.13-.37-.33-.71-.57-1.02 2.71.62 5.65 2 8.35 4.75-2.01-2.58-8.01-9.62-18.02-5.34l-.17 1.11c.35-.13 3.44-.79 3.44-.79-4.03 6.97 8.14 9.29 6.97 1.3Zm29.08-1c-4.95-3.95-12.84 2.95-14.14 5.35 1.06-1.14 2.23-2.15 3.28-2.85-1.59 3.23 3.01 6.03 5.56 3.92 2.42-1.66 1.06-5.44-1.71-5.74 2.29-.73 5.46-.39 7.18.63l-.16-1.3Z"
        style={{
          fill: "#010101",
        }}
      />
      <path
        d="M52.97 53.1c-.02.32-.29.56-.61.54a.58.58 0 0 1-.54-.61.577.577 0 0 1 1.15.06Zm24.89.91c-.02.32-.29.56-.61.54a.58.58 0 0 1-.54-.61c.02-.32.29-.56.61-.54.31.02.56.29.54.61"
        data-name="eye_sparkle"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="m59.65 45.93-.2.23c-8.02-7.31-16.1-.83-17.15.32l-.43-.45c9.42-8.98 19.49-1.99 17.78-.11Zm22.74 2.08-.6.16c-.74-3.5-9.08-.86-9.08-.86-.28-.3-.55-1.36.19-1.6.84-.43 9.11-1.64 9.49 2.3"
        style={{
          fill: "#010101",
        }}
      />
      <path
        d="M84.91 39.55s-.67 4.96-2.87 7.56c-1.17-8.87-2.35-13.03-13.99-9.58-.53-1.59-23.15-11.93-30.59 3.14 0-.06-.28.6-.27.55-3.94 12.52 9.53 29.21-7.01 46.55 7.01-7.35 8.54-19.9 5.49-30.88 0 0-.96-3.15-1.42-7.24-.61 3.2-.88 7.01-.59 11.55l-1.45.41c-1.3-.84-4.26-2.98-5.99-1.17 0 0-2.07 2.87 2.38 8.16 0 0 2.54 4.22 4.45 1.69.88 1.45 1.76 2.8 2.66 4.05 1.34 2.27-6.13-3.76-6.71-4.3-8.68-7.99-18.67-21.59-1.59-42.21 0 0-8.21-1.28-6.17-9.52 0 0-4.94-4.06 2.66-8.55 0 0 1.37-5.08 12.68-4.68 2.48-9.34 24.84-5.92 16.67 11.24 6.82 4.98 32.7-.07 31.66 23.23"
        style={{
          fill: "#010101",
        }}
      />
      <path
        d="M82.77 42.7c.47-24.01-16.34-15.93-26.79-23.44 2.4 1.7 7.72 3.46 13.25 3.41 15.1-1.04 14.89 17.63 13.53 20.03ZM28.62 57.24c-7.2-8.98-.63-23.39 1.78-25.41-1.39 2.92-2.31 5.65-2.88 8.17-2.35 10.23.95 16.94 1.1 17.24"
        style={{
          fill: "#053a59",
        }}
      />
      <path
        d="M65.27 32.99c.58-9.64-7.14-6.84-9.98-10.11 2.19 1.89 5.06 1.51 6.22 1.78 4.39.54 4.52 6.6 3.76 8.34Zm-25.04-2.77c-4.56 2.43-7.01 7.66-7.03 12.71-.04 1.87.17 3.74.55 5.58l-.02-.04c-.59-1.54-.94-3.19-1.11-4.87-.73-5.55 2.29-11.12 7.49-13.32zm5.72-12.39c.41-2.05-.82-1.97-.82-1.97-.57 2.29-3.77 4.01-3.77 4.01.98-1.31.16-3.68-.08-2.62-.2 1.01-2.29 1.74-2.29 1.72 3.36-4.75-5.57-10.56-5.57-10.56 7.94-.9 9.33 8.76 9.33 8.76 2.98-2.82 1.29-7.37 1.23-7.53 2.55 2.03 2.14 2.95 2.06 3.09 3.33-4.17-.09-9.48-.09-9.48 7.04 5.98 0 14.57 0 14.57Zm-16.46 6.63c-7.28 1.23-6.22-7.29-6.22-7.29.57 6.71 6.22 7.29 6.22 7.29"
        style={{
          fill: "#053a59",
        }}
      />
    </svg>
  );
}
export default SvgTrMaria;
