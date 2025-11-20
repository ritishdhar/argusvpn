import type { SVGProps } from "react";

export function HuluLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 40"
      width="80"
      height="40"
      {...props}
    >
      <g fill="currentColor">
        <path d="M12,12.4h5.2v6.2h7.4v-6.2h5.2v15.2h-5.2v-6.6h-7.4v6.6H12V12.4z" />
        <path d="M35.6,12.4h5.2v15.2h-5.2V12.4z" />
        <path d="M47.3,12.4h5.2l3.4,10.4l3.4-10.4h5.2v15.2h-4.6V17.1l-3.3,8.5h-1.5l-3.3-8.5v10.5h-4.6V12.4z" />
      </g>
    </svg>
  );
}
