import * as React from "react";

function Svg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      viewBox="0 0 200 200"
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:#e72964;}'}</style>
      </defs>
      <g id="Guidelines">
        <path
          className="cls-1"
          d="M100,169.87V155.4c0-17.31-.06-34.62,0-51.94,0-2.8-.87-3.55-3.6-3.53-20.91.1-41.82,0-62.74,0H30a20.33,20.33,0,0,1,1.51-1.93Q64.77,64.86,98.09,31.73a5.43,5.43,0,0,1,3.41-1.53c22.06-.09,44.12-.07,66.19-.06.65,0,1.3.09,2.31.16v3.18c0,21.33,0,42.66-.07,64a6.53,6.53,0,0,1-1.58,4.24q-33.25,33.41-66.68,66.62C101.28,168.71,100.86,169.05,100,169.87Z"
        />
      </g>
    </svg>
  );
}

export default Svg;