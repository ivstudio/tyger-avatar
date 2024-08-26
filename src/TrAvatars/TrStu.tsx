import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrStu({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="trStu_svg__avatar"
      data-name="trAvatar"
      viewBox="0 0 144.54 169.68"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".trStu_svg__cls-3{fill:#231f20}.trStu_svg__cls-5{fill:#dfc0be}.trStu_svg__cls-6{fill:#020202}.trStu_svg__cls-8{fill:#fff}.trStu_svg__cls-12{fill:#6f3d18}"
          }
        </style>
      </defs>
      <path
        d="M0 .08h144.54v169.49H0z"
        style={{
          fill: "none",
        }}
      />
      <g id="trStu_svg__shirt">
        <path
          id="trStu_svg__light_red_stripes"
          d="M136.03 164.27v5.35H4.79l.24-4.46c31.88-.79 101.36-.87 131-.88Z"
          style={{
            fill: "#ac4c3e",
          }}
        />
        <path
          id="trStu_svg__red_stripes"
          d="M26.6 169.49c-1.22.04-16.59 0-18.28 0v-29.85c1.82-11.43 14.86-16.2 17.43-17.16 0 .24.23 14.76.32 21.15h.05c.07 3.43.43 22.9.48 25.84Zm95.43.19-18.29-.1v-49.41c1.18-.45 2.28-1.08 3.25-1.89 0 0 13.85 7.31 14.25 7.51l.78 43.89Zm-52.51-38.45s-.02.04-.06 0c-.13-.18-2.87-3.71-4.01-5.28-1.46-2.01-2.71 11.78-2.67 17.69h.05c.06 3.69.36 22.4.4 25.65l-18.28.19s-.45-52.23 0-52.62l3.23-1.1h15.58c.54 3.36 1.51 6.65 2.87 9.76.82 1.37 2.86 5.32 2.86 5.69Z"
          style={{
            fill: "#9c2923",
          }}
        />
        <path
          id="trStu_svg__brown_stripes"
          d="M130.27 145.02h-8.68c0-.46-.3-17.98-.3-17.77h1.44c4.4 3.59 6.65 11.61 7.54 17.77m-85.31-19.28v17.91H26.12c-.08-4.39-.25-13.27-.33-17.64 2.29-.03 16.55-.23 19.17-.27m25.13 17.91h-7.25s-.64-20.53-.12-20.68c.04-.01.44 0 .67.18 1.63 2.03 5.95 7.89 6.07 8.07 1.15 3.03.62 11.69.63 12.43m33.66 1.37h-8.41c0-1.47-.14-2.94-.23-4.4-.29-2.65-.2-6.37-.83-11.29 4.84-1.57 7.3-8.54 7.3-8.54s2.17-.4 2.16-.62v24.85Zm-47.36-37.18v7.94H48.2c.16-1.86.38-3.1.38-3.1z"
          style={{
            fill: "#513f3c",
          }}
        />
        <path
          id="trStu_svg__dk_brown_stripes"
          d="M121.59 145.02h-17.84v-17.51c1.51-.02 16.52-.23 17.53-.25l.32 17.76Zm-95.47-1.37H7.55c1.07-9.26 4.22-13.43 10.81-17.53l7.41-.1c.44 4.34.67 13.53.35 17.63m36.72 0H44.96v-17.91l3.79-.05c1.63 4.88 2.97 10.06 6.16-.08.69 0 7.14-.11 7.62-.09v1.02l.3 17.12Zm5.14-41.26c-.01.22-.04.43-.08.64-.3 1.28-.81 2.5-1.52 3.61.16-.67-1.86 1.78-2.26 3.16-.53 1.95-.64 3.98-.3 5.97h-7.41v-7.93c3.09-1.7 7.81-5.75 11.57-5.44Z"
          style={{
            fill: "#4c3330",
          }}
        />
        <g id="trStu_svg__beige_stripes">
          <path
            d="m101.8 127.53-4.65.07c.95-.85 1.72-1.86 2.43-2.91.08.09 2.07 2.66 2.22 2.84m1.95-7.36v7.33h-.63c-.08-1.43-1.94-5.46-1.94-5.75.04-.09.34-.81.4-.97.74-.14 1.46-.35 2.17-.62Zm-77.63 23.48.38 21.22c4.6-.07 13.77-.17 18.45-.25v-20.96H26.12Zm43.58 25.41v.06-.07.02Zm.19-4.79c0 .29 0 .57-.03.85v-.85z"
            className="trStu_svg__cls-5"
          />
          <path
            d="m69.89 164.27-6.69.09-.33-20.71h7.33c.07 7.85-.13 15.67-.3 20.62ZM8.32 143.65v21.48c-.79 0-2.49.01-3.3.02.59-9.71 1.57-16.67 2.53-21.52l.76.02Zm36.64-26.78v8.87c-2.71.04-16.8.24-19.17.27 0-.4-.06-3.17-.05-3.5 5.81-1.92 16.51-4.56 19.22-5.65Zm11.43-1.1v8.21c-3.91 3.18-3.41 14.48-7.66 1.71h.07c-.94-3.23-.8-6.65-.61-9.91h8.2Zm38.95 29.25c.41 8.48.2 16.96.04 21.41l8.37-.12v-21.29h-8.4Zm34.93 0h-8.68c.03 6.08.35 15.06.76 21.05.05 0 8.96-.08 8.96-.13.32-9.84-.44-16.95-1.05-20.93Zm-26.52 24.64h-8.51l26.79.02zm17.5-43.87v.26zm2.47 1.47h-2.46l-.02-1.47s2.46 1.45 2.47 1.47Z"
            className="trStu_svg__cls-5"
          />
        </g>
        <path
          id="trStu_svg__shirt_shading"
          d="M67.3 104.41c-3.7-.56-7.63 7.6-7.58 14.62.09-4.38 1.19-17.37 7.58-14.62m-32.75 65.18c-.5.03-1 .03-1.51 0-.01-3.29.76-15.33.77-15.66 0 .07.66 12.81.74 15.66m88.03.01c-.46.04-1.62.01-1.88 0-.23-4.6.62-9.61.94-15.97.28 4.43.67 11.8.94 15.98Zm13.61.06c-.88 0-1.48-.05-1.48-.06l-3.57-.05c.56-20.23-1.1-36.09-8.9-42.66-.46-.35-.96-.66-1.48-.92 7.71 3.03 11.39 9.5 13.69 17.72 1.96 7.61 1.29 18.15 1.73 25.97Z"
          className="trStu_svg__cls-3"
        />
      </g>
      <g id="trStu_svg__tshirt">
        <path
          id="trStu_svg__tshirt-2"
          d="M95.24 169.66c.97-11.07-.34-35.41-.96-40.33-1.32.3-2.57.37-3.82-.34-.64 6.28-2.87 14.77-8.4 22.11-1.18-1.19-10.37-17.15-12.58-20.93.18.43.17.4-.05-.03.37.83 3.31 20.21.31 39.49z"
          className="trStu_svg__cls-8"
        />
        <path
          id="trStu_svg__shade"
          d="M72.02 169.6H69.7c.03-2.08.51-28.53.22-37.23 2.1 3.82 2.1 37.23 2.1 37.23"
          style={{
            fill: "#d0cfce",
          }}
        />
      </g>
      <path
        id="trStu_svg__skin"
        d="M125.63 71.64c-6.89 23.62-27.44 44.03-35.22 57.21-3.16 5.35-2.61 14.08-7.97 21.51-1.7-5-18.33-30.29-16.08-43.88 2.32-4.58 4-10.45 2.72-15.38A79.2 79.2 0 0 1 58.3 76.79c-1.02 1.43-2.19 1.45-3.25.93-3.91-2.03-8.03-9.66-7.51-12.15.13-6.97 3.44-29.04 12.23-34.51 0 0 67.04-36.12 69.49 18.09.41 9.01-3.64 22.49-3.64 22.49Z"
        style={{
          fill: "#c79763",
        }}
      />
      <path
        id="trStu_svg__skin_shading"
        d="M82.96 149.61s-.79 1.31-.94 1.51c-.94-.92-22.3-30.27-17.86-41.44 0 0 .61-1.97 2.33-3.33 0 0-2.93 13.07 16.48 43.27Zm-2.08-48.63c-4.29-2.75-7.82-5.82-11.49-9.51 3.44 3.24 7.25 6.05 11.37 8.37 0 .38.07.77.12 1.14m49.35-46.63c-.01.29-.32 3.03-.32 3.03-2.75 20.2-9.15 30.48-14.58 37.79a20 20 0 0 0-.87-2.4c3.15-5.05 8.57-18.41 10.07-36.3.06-.67.1-1.35.14-2.02.26-23.96-2.96-14.99-19.3-21.56-8.95-3.91-6.89-4.78-14.32-9.3-6.82-4.13.03 5.83 2.13 7.04-4.55-2.13-6.26-8.32-6.26-8.32 4.96-3.93 33.3 12.7 41.87 12.67 1.44 5.57 1.97 12.04 1.45 19.39ZM57.71 72.01c-.49 1.75-2.64 2.09-4.09 1.33-2.96-2.01-1.01-4.65.86-4.93-.58-2.28-3.04-3.42-5.24-3.33 2.81-.89 4.93-.17 6.48 3.35-2.77 1.38-.92 5.22 1.66 3.2z"
        style={{
          fill: "#b17c59",
        }}
      />
      <path
        d="M106.38 92.45c-3.48 2.46-6.01 1.07-7.6-.75.52-.17 1.02-.37 1.51-.6 1.62.57 3.37.62 5.02.17.33.42.69.82 1.07 1.19Z"
        className="trStu_svg__cls-3"
      />
      <path
        id="trStu_svg__nose"
        d="M107.45 83.29c2.63-3.25.1-5.7.1-5.7-3.12-2.68-6.91.58-7.07.73 3.98-4.65 7.33-2.25 7.33-2.25 4.12 3.23-.17 7.05-.35 7.21Zm-3.62-2.01-2.13.53s-.32-1.77 2.13-.53"
        className="trStu_svg__cls-3"
      />
      <path
        d="M57.17 80.46c-2.1.83-3.97-2.25-2.53-3.89.35-.71 2.17-.84 1.87.22-.13.21-.39.29-.61.18-1.78.03-.41 3.31.89 2.67.25-.13.4-.41.36-.69.11-1.85 2.01.46.02 1.51"
        className="trStu_svg__cls-6"
      />
      <g id="trStu_svg__eyes">
        <path
          d="M136.13 60.18c.1 13.09-22.49 15.55-25.91 1.74-1.22-4.91 9.57-4.11 14.21-4.26 0 0 11.7-1.33 11.7 2.52"
          className="trStu_svg__cls-6"
        />
        <path
          id="trStu_svg__white-2"
          d="M135.13 60.85c-1.15 7.59-6.77 9.28-12.54 9.49-5.47-.08-11.52-3.53-11.52-9.43 0-.85 1.59-.67 3.89-.93-3.73 5.74 12.14 6.14 8.49-.34 2.53-.04 11.68-.62 11.68 1.2Z"
          className="trStu_svg__cls-8"
        />
        <path
          d="M73.28 60.2c-.24-2.37 1.86-4.63 4.27-4.37l21.3 1.71c1.58.13 2.83.07 3.25 2.85 1.68 12.57-25.77 17.89-28.82-.19"
          className="trStu_svg__cls-6"
        />
        <path
          id="trStu_svg__white"
          d="M101.23 61.69c-.23 11.79-26.38 13.14-27.05-1.91.46-.55 2.53-1 5.87-1.14-4.14 7.41 13.21 7.71 9.6.19 7.44.19 11.77-1.33 11.57 2.86Z"
          className="trStu_svg__cls-8"
        />
      </g>
      <path
        id="trStu_svg__eyebrows"
        d="M100.4 55.89c-6.1-2.48-22.85-4-25.88-2.85 2.25-2.63 1.61-3.55 7.8-2.6 1.43.37 1.8-.49 1.89-.99.15-.81 4.28-.26 4.85.07 3.54 2.07 2.86-.15 4.21.21 1.62.44 2.61 1.58 4.14 2.04 1.12.33-.7-1.01.27-.67 1.2.42 2.26.84 3.1 1.23.21.13-.03 3.68-.38 3.57Zm30.4-1.46c-5.72-.76-11.65-.38-17.12 1.52-.21.08-.81-.46-1.15-3.15.16-.38 5.83-3.14 5.99-2.11.08.57.28.76.86.55s2.55-.98 3.12-1.12c3.51-.84 4.61-.08 4.17.53-2.21 2.41 3.87-1.63 4.13 3.78"
        className="trStu_svg__cls-12"
      />
      <path
        id="trStu_svg__hair_beard"
        d="M115.31 95.17c-7.52-24.71-42.66-6.43-32.8 10.46-1.21 12.03 8.49 11.53 8.3 17.4.41 2.12-1.71 2.91-2.75 1.55-1.03 3.38 3.36 4.89 6.42 4.65 6-.49 7.02-8.4 7.02-8.4 14.37-2.54 14.17-24.44 13.82-25.65Zm-11.47-1.2-2.32-.32c-1.5 4.44-11.79 4.25-10.76-2.01 4.42 1.62 9.52.33 12.89-2.87.69 2.71 5 5.91 7.52 6.06 0 0-7.1 8.15-7.33-.86m34.68-66.63c-3.49 7.05-11.46.88-11.46.88 8.47-5.58 6.22-17.93 6.22-17.93-2.61 7.46-16.86 9.04-17.12 8.9C124.06 6.3 115.1 0 115.1 0c4.09 9.66-4.07 15.65-5.52 16.62l-.08-.03c3.05-3.78 1.11-8.07 1.11-8.07-1.43 8.65-13.03 5.93-13.03 5.93 4.05-4.94 1.58-11.52 1.58-11.52-4 11.29-13.15 5.48-20.42 12.05C82.96 6.46 76.23-.01 76.23-.01c0 11.47-11.95 19.41-11.95 19.41 1.5-7.36-2.74-14.7-2.74-14.7 2.25 13.23-7.23 21.91-7.23 21.91-1.71-12.87-8.95-12.2-8.95-12.2 6.73 4.41 2.74 18.53 2.74 18.53-6.2 8.9-14.67 7.4-14.67 7.4 7.41 5.46 13.94-3.29 13.94-3.29-5.73 14.7 0 28.36 0 28.36.61-6.22 8.57-1.58 9.73-.1 1.74-.57 5.16-7.33 5.23-7.36-7.92-1.43-6.03-17.96-6-17.96 4.21 3.27 8.94 6.25 13.02 2.65-7.55.46-10.04-7.95-9.56-11.47 9.43 2.87 12.72-.91 15.9-4.59 1.72-2.53 9.39 6.51 17.48 4.08-4.55-2.13-6.26-8.32-6.26-8.32 5.73-.29 12.45 6.76 12.45 6.76 11.93 9.19 41.11 8.54 39.16-1.75Zm-78.27 13"
        className="trStu_svg__cls-12"
      />
    </svg>
  );
}
export default SvgTrStu;
