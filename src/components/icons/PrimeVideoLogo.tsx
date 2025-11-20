import type { SVGProps } from "react";

export function PrimeVideoLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 40"
      width="120"
      height="40"
      {...props}
    >
      <g fill="currentColor">
        <path d="M9.8 27.6V12.4h8.3c2.4 0 4.1 1.6 4.1 3.9s-1.7 3.9-4.1 3.9h-3.5v7.4zm4.8-9.8h3.1c.9 0 1.3-.6 1.3-1.3s-.4-1.3-1.3-1.3h-3.1zM25.7 18.9l2.7-6.5h5.4l-5.3 12.8h-4.9l-5.3-12.8h5.4zM39.6 27.6V12.4h4.8v15.2zM47.4 27.6V12.4h8.8v4.2h-4v2.3h3.7v4.1h-3.7v2.6h4.1v4.2zM59.2 27.6l4.5-8.4-4.5-6.8h5.6l1.8 3.5 1.8-3.5h5.5l-4.5 6.8 4.5 8.4h-5.6l-1.9-3.9-1.9 3.9z" />
        <path d="M85.4 27.6V12.4h4.8v15.2zM93.3 14.6c0-1.2.9-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-.9 2.2-2.2 2.2s-2.2-1-2.2-2.2zm-2.4 13V17.2h4.8v10.4zM100.9 27.6V12.4h8.8v4.2h-4v2.3h3.7v4.1h-3.7v2.6h4.1v4.2z" />
        <path d="M112.5 12.4h4.8v10.9l7-10.9h5.7v.2l-6.2 9 6.2 9.2v.2h-5.8l-4.7-7.4v7.2h-4.8z" />
      </g>
    </svg>
  );
}
