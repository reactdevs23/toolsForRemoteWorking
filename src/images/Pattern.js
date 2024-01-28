import React from "react";

const Pattern = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
    >
      <mask
        id="a"
        width={348}
        height={4}
        x={0}
        y={180}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M.661 180h347v4h-347v-4Z" />
      </mask>
      <g mask="url(#a)">
        <path fill={color} d="M1.02 183.396v-2.521h346.73v2.521H1.02Z" />
      </g>
      <mask
        id="b"
        width={348}
        height={5}
        x={0}
        y={113}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M.661 113.333h347v4h-347v-4Z" />
      </mask>
      <g mask="url(#b)">
        <path fill={color} d="M1.02 116.698v-2.521h346.73v2.521H1.02Z" />
      </g>
      <mask
        id="c"
        width={348}
        height={5}
        x={0}
        y={46}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M.661 46.667h347v4h-347v-4Z" />
      </mask>
      <g mask="url(#c)">
        <path fill={color} d="M1.02 50.01v-2.52h346.73v2.52H1.02Z" />
      </g>
      <mask
        id="d"
        width={3}
        height={220}
        x={45}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M45.333.615H48V220h-2.667V.615Z" />
      </mask>
      <g mask="url(#d)">
        <path fill={color} d="M45.443 296.615V.958h2.526v295.657h-2.526Z" />
      </g>
      <mask
        id="e"
        width={4}
        height={220}
        x={108}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M108 .615h4V220h-4V.615Z" />
      </mask>
      <g mask="url(#e)">
        <path fill={color} d="M109.292 296.615V.958h2.526v295.657h-2.526Z" />
      </g>
      <mask
        id="f"
        width={4}
        height={220}
        x={172}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M172 .615h4V220h-4V.615Z" />
      </mask>
      <g mask="url(#f)">
        <path fill={color} d="M173.13 296.615V.958h2.521v295.657h-2.521Z" />
      </g>
      <mask
        id="g"
        width={4}
        height={220}
        x={236}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M236 .615h4V220h-4V.615Z" />
      </mask>
      <g mask="url(#g)">
        <path fill={color} d="M236.979 296.615V.958h2.521v295.657h-2.521Z" />
      </g>
      <mask
        id="h"
        width={4}
        height={220}
        x={300}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill={color} d="M300 .615h4V220h-4V.615Z" />
      </mask>
      <g mask="url(#h)">
        <path fill={color} d="M300.812 296.615V.958h2.527v295.657h-2.527Z" />
      </g>
    </svg>
  );
};

export default Pattern;
