import type { SVGProps } from "react";

export function NetflixLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 40"
      width="80"
      height="40"
      {...props}
    >
      <path
        d="M11.6,33V6.9h5.1l.2,5.2V33h-5.3Zm10.1,0L22,7h4.8L27,33h-5.3ZM37.9,7l.2,26H32.8V7h5.1ZM48.6,33V6.9h5.3v5.2l-.2,20.9h-5.1Zm10.1-26H54v26h5.3l-.2-26ZM43.2,7l-.2,26h5.3V7h-5.1ZM69.3,33V6.9h5.3v26Z"
        fill="currentColor"
      />
    </svg>
  );
}
