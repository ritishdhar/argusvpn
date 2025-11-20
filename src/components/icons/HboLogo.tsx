import type { SVGProps } from "react";

export function HboLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 40"
      width="80"
      height="40"
      {...props}
    >
      <g fill="currentColor">
        <path d="M12.3 27.6V12.4h4.8v15.2zM27.2 27.6V12.4H32v15.2zM19.9 20c0-3.6 2.1-5.1 4.7-5.1 2.6 0 4.7 1.5 4.7 5.1s-2.1 5.1-4.7 5.1-4.7-1.5-4.7-5.1zm-4.8-5.1c-2.6 0-4.7 1.5-4.7 5.1s2.1 5.1 4.7 5.1V14.9zm14.5 0c-2.6 0-4.7 1.5-4.7 5.1s2.1 5.1 4.7 5.1V14.9z" />
        <path d="M57.6 12.4c-4.4 0-7.3 3.1-7.3 7.6s2.9 7.6 7.3 7.6 7.3-3.1 7.3-7.6-2.9-7.6-7.3-7.6zm0 10.9c-1.8 0-2.5-1.5-2.5-3.3s.7-3.3 2.5-3.3 2.5 1.5 2.5 3.3-.7 3.3-2.5 3.3zM47.7 27.6V12.4h4.8v15.2z" />
      </g>
    </svg>
  );
}
