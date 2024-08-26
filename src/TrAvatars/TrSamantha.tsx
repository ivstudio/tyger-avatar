import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrSamantha({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trSamantha_svg__avatar"
      data-name="trAvatar"
      viewBox="0 0 141.59 166.1"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="trSamantha_svg__clippath">
          <path
            id="trSamantha_svg__white_x5F_ground-2"
            d="M112.75 123.33c-22.11-4.24-52.48-4.69-65.18-3.29 0 0-31.54 4.34-37.71 14.59 0 0-9.72 12.09-9.72 31.01l141-.05s1.99-12.44-2.37-23.86c-6.43-16.86-26.02-18.4-26.02-18.4"
            className="trSamantha_svg__cls-10"
            data-name="white_x5F_ground"
          />
        </clipPath>
        <style>
          {
            ".trSamantha_svg__cls-2{fill:#2c3583}.trSamantha_svg__cls-3{fill:#010101}.trSamantha_svg__cls-6{fill:#c61e61}.trSamantha_svg__cls-10{fill:#fff}"
          }
        </style>
      </defs>
      <path
        d="M.07 0h141.35v165.89H.07z"
        style={{
          fill: "none",
        }}
      />
      <path
        id="trSamantha_svg__skin"
        d="M113.02 100.63c-8.36 5.18-21.35 5.39-20.11 5.32v.02h-.01c-1.71 3.17-2.94 8.39-.41 12.38.01.02.03.05.04.06 4.99 1.87 8.72 11.13 11.2 14.2 0 0-12.18 5.81-35.31 2.87-1.61-7.39-2.62-15.16-3.39-22.06 1.66-2.21 3.64-6.68 3.43-10.55-1.46-.52-2.98-1.22-4.62-2.21-.39-29.55-2.06-38.58 3.9-52.74 3.51-9.51 13.1-15.41 20.29-16 9.44-.77 18.32 5.53 23.59 13.34.95 1.39 2.41 3.59 3.28 5.69 5.65 13.57 6.5 28.69 6.53 35.93 0 .08.46 8.27-8.41 13.76Z"
        style={{
          fill: "#d6b089",
        }}
      />
      <path
        id="trSamantha_svg__skin_x5F_shading"
        d="M121.45 86.55s.62 8.94-8.43 14.08c-.05.03-.09.06-.14.08-1.88 1.13-4.18 2.14-6.99 2.96 0 0-4.81 1.86-13.04 2.32-.02.05-3.83 6.68-.33 12.43.02.03 2.05.33 5.23 4.63 0 0 0 .01.01.02 1.21 1.61 2.55 3.78 3.89 6.7-.4-.29-25.56-18.32-33.18-26.53-.08-.09.06-.28-.01-.36 0 0 21.75 8.88 40.87-3.52 0 0 4.65-1.97 6.26-11.99 0 0 2.46-11.48-2.13-32.08-2.38-10.67-8.5-17.38-8.49-17.37.04.03 4.71 3.26 9.32 11.69h-.05c.32.64.68 1.35.69 1.35.68 1.45 6.22 13.44 6.5 35.6Z"
        style={{
          fill: "#9f4c24",
          opacity: 0.25,
        }}
      />
      <path
        d="M95.4 80.8s-.35-1.55 2.33-.46zm-.61-2.74s3.47-3.1 6.32-.66c0 0 2.26 2.17-.09 5.1 0 0 4.07-3.5.32-6.45 0 0-2.98-2.14-6.54 2.01Z"
        className="trSamantha_svg__cls-3"
      />
      <g id="trSamantha_svg__shirt">
        <path
          id="trSamantha_svg__white_x5F_ground"
          d="M112.75 123.33c-22.11-4.24-52.48-4.69-65.18-3.29 0 0-31.54 4.34-37.71 14.59 0 0-9.72 12.09-9.72 31.01l141-.05s1.99-12.44-2.37-23.86c-6.43-16.86-26.02-18.4-26.02-18.4"
          className="trSamantha_svg__cls-10"
        />
        <g
          style={{
            clipPath: "url(#trSamantha_svg__clippath)",
          }}
        >
          <path
            id="trSamantha_svg__stripe_x5F_3"
            d="m142.39 149.72-143.53-.02.8-3.92 142.21-.07z"
            className="trSamantha_svg__cls-2"
          />
          <path
            id="trSamantha_svg__stripe_x5F_2"
            d="m142.51 165.84-144.81.97.98-4.78 143.28-.07z"
            className="trSamantha_svg__cls-2"
          />
          <path
            id="trSamantha_svg__stripe_x5F_1"
            d="M137.84 134.26 4.2 134.21l.8-4.28 132.19.04z"
            className="trSamantha_svg__cls-2"
          />
        </g>
      </g>
      <path
        id="trSamantha_svg__shirt_x5F_shading"
        d="M112.62 122.38c25.99 6.71 29.46 19.6 28.47 43.5l-5.32.03s7.49-33.32-23.14-43.53Zm-79.14 35.26 2.56 8.32h-2.85s1.38-2.97.29-8.32m85.72-.14 1.8 8.5-2.34-.05s1.25-2.97.54-8.45M.02 166.03s-2.3-43.64 40.15-45.25c-12.53 1.61-32.02 5.45-38.68 45.32z"
        style={{
          fill: "#b9e5f4",
          opacity: 0.69,
        }}
      />
      <path
        id="trSamantha_svg__mouth"
        d="M89.88 81.81s2.13 7.23 7.64 8.46c0 0-8.53 6.58-13.09.38 0 0-3.61-5.62 5.45-8.84"
        className="trSamantha_svg__cls-10"
      />
      <g id="trSamantha_svg__hair">
        <path
          d="M119.9 57.12c-.97-.42-1.93-.64-2.88-.72-.6-1.95-5-10.68-6.34-12.41-5.28-7.15-13.74-11.69-22.65-12.07-2.5-.39-17.17 5.13-21.08 19.3-5.4 15.26-4.77 76.68 6.09 96.85.25.3-22.65-7.01-32.87-27.23-1.35-1.31-22.72-106.28 37.28-103.91 0 0 21.22-4.77 36.11 14.41 0 0 8.46 10.52 6.34 25.78"
          style={{
            fill: "#ed367d",
          }}
        />
        <g id="trSamantha_svg__dark_x5F_hair">
          <path
            d="M68.47 103.24c.07 3.82-1.84 8.03-3.44 10.18-.81-8.17-.72-7.04-1.19-12.76 2.03 1.51 3.92 2.02 4.62 2.17 0 .13.01.27.01.41m3.97-2.27c-1.41-.42-16.53-38.57-1.75-57.68-3.67 14.28-6.73 31.57 1.75 57.68m40.19 22.97c0 5.18.45 10.54 1.73 15.42-14.12-3.88-11.4-14.4-21.85-20.93-.01-.02-.03-.04-.04-.06-2.52-3.99-1.3-9.2.41-12.37.47-.02 13.4-.53 22.79-7.32 0 0-3.03 12.07-3.05 25.28ZM54.24 67.76s-.29 55.54 9.62 72.76c0 0-7.75-24.54-9.62-72.76m-6.9 50.9c-10.17-52.35.73-80.75.73-80.75-6.75 41.35-.96 79.25-.73 80.75m39.62-99.27s23.68 1.15 30.71 28.27c0 0-6.17-21.96-30.71-28.27m-9.53 2.6c-1.08.24-23.2 7.25-23.2 40.7-3.37-15.77 3.69-38.22 23.2-40.7"
            className="trSamantha_svg__cls-6"
          />
          <path
            d="M91.98 27.43s17.08 5.02 20.52 16.65c0 0-4.59-9.76-20.52-16.65"
            className="trSamantha_svg__cls-6"
          />
        </g>
        <path
          id="trSamantha_svg__hair_x5F_part"
          d="M77.33 16.96c5.04 3.15 10.62 8.7 10.98 14.84l-.4.06c-1.45-5.99-5.45-11.3-10.66-14.76z"
          className="trSamantha_svg__cls-3"
        />
      </g>
      <g id="trSamantha_svg__hair_x5F_clip">
        <path
          d="m60.53 53.53-.46 3.74c-.72-.3-9.59-3.86-13.35-7l.55-3.72c.35.19 12.86 6.73 13.27 6.99Z"
          style={{
            fill: "#231f20",
          }}
        />
        <path
          id="trSamantha_svg__clip_x5F_highlight"
          d="M59.48 55.86v.49c-4.86-1.64-10.03-5-11.53-6.01 3.51 2.31 11.53 5.52 11.53 5.52"
          style={{
            fill: "#787878",
          }}
        />
      </g>
      <path
        id="trSamantha_svg__nosering"
        d="M102.5 80.18c3.54-.36 2 5.57-.91 3.5-.33-.19-.92-1.36-.19-1.01 1.69 2.28 3.76-1.69 1.13-2.08-.23-.01-.25-.36-.03-.4Z"
        style={{
          fill: "#ffc72b",
        }}
      />
      <path
        id="trSamantha_svg__eyebrows"
        d="M89.54 49.26c-.13-1.15-8.84-8.64-20.01-1.67-.1.43-.2.89-.31 1.38 3.86-2.6 11.97-5.35 19.68 1.7.3-.4.62-.5.64-1.41m29.51 3.96-.78.21c-1.23-4.49-10.23-1.86-11.89-1.13-1.48-2.67 1.5-2.35 5-2.81 2.93-.16 6.93.37 7.67 3.73"
        className="trSamantha_svg__cls-3"
      />
      <g id="trSamantha_svg__eyes">
        <path
          id="trSamantha_svg__eye_x5F_whites"
          d="M94.11 64.64s-4.35 6.41-13.04 5.79c0 0-12.62-1.3-11.32-11.94 0 0 12.08-5.43 24.36 6.15m8.51.57c7.76-9.49 18.14-6.73 18.94-5.61-.13 16.1-16.69 9.82-18.94 5.61"
          className="trSamantha_svg__cls-10"
        />
        <path
          id="trSamantha_svg__eye_x5F_shade"
          d="M93.87 64.45c-3.58-2.8-11.36-7.29-24.11-5.96 14.21-5.07 24.11 5.96 24.11 5.96m27.75-4.1c-1.15-.85-10.48-3.42-19.01 4.86 7.56-9.09 16.21-7.1 18.94-5.61.03.26.04.51.06.75Z"
          style={{
            fill: "#ccc",
            opacity: 0.5,
          }}
        />
        <path
          d="M83.59 60.18c.36 9.93-16.16 5.55-9.35-2.71-2.56.33-4.16.91-4.53 1.04.06-.35.17-1.09.23-1.45 13.11-5.61 20.97 3.64 23.57 6.98-3.53-3.59-7.39-5.4-10.94-6.21.55.68.9 1.49 1.02 2.35m37.97-.58c-2.73-1.49-6.36-1.68-9.38-.83 5.44.79 5 8.51-.63 8.46-3.11.13-5.88-3.21-4.36-6.11-1.38.93-2.8 2.13-4.26 3.68s-.05.05-.07.07c4.05-5.36 11.67-11.38 18.49-6.99.05.46.14 1.25.2 1.7Z"
          className="trSamantha_svg__cls-3"
        />
        <path
          id="trSamantha_svg__eye_x5F_highlight"
          d="M81.41 59.9c-.02.41-.38.73-.79.71a.74.74 0 0 1-.7-.79c.02-.41.38-.73.79-.7.41.02.73.38.7.79Zm32.57 1.19c-.02.41-.38.73-.79.71s-.73-.38-.7-.79.38-.73.79-.71.73.38.7.79"
          className="trSamantha_svg__cls-10"
        />
      </g>
    </svg>
  );
}
export default SvgTrSamantha;
