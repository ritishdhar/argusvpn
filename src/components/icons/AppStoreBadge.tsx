import type { SVGProps } from 'react';

export function AppStoreBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="120" height="40" rx="8" fill="black"/>
      <g clipPath="url(#clip0_105_2)">
      <path d="M40.166 20.354C40.198 22.342 38.74 23.638 36.91 23.67C35.08 23.702 33.784 22.502 33.752 20.514C33.72 18.526 35.2 17.23 37.03 17.198C38.86 17.166 40.134 18.366 40.166 20.354ZM25.044 20.45C25.044 24.534 28.58 27.246 32.556 27.246C36.436 27.246 38.164 25.102 39.86 25.102C41.524 25.102 42.94 27.246 44.964 27.246C49.044 27.246 52.484 24.534 52.484 20.45C52.484 16.366 49.044 13.654 44.964 13.654C41.016 13.654 39.384 15.766 37.752 15.766C36.12 15.766 34.66 13.654 30.716 13.654C26.732 13.654 25.044 16.366 25.044 20.45ZM46.124 20.354C46.156 22.342 44.7 23.638 42.868 23.67C41.036 23.702 39.74 22.502 39.708 20.514C39.676 18.526 41.156 17.23 42.988 17.198C44.816 17.166 46.092 18.366 46.124 20.354Z" fill="white"/>
      </g>
      <foreignObject x="55" y="10" width="60" height="20">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: 'white', fontSize: '10px', lineHeight: '1', fontFamily: 'Inter, sans-serif' }}>
          <div style={{ fontSize: '8px', opacity: 0.7 }}>Download on the</div>
          <div style={{ fontWeight: '600', fontSize: '12px', marginTop: '2px' }}>App Store</div>
        </div>
      </foreignObject>
      <defs>
      <clipPath id="clip0_105_2">
      <rect width="27.44" height="13.592" fill="white" transform="translate(25.044 13.654)"/>
      </clipPath>
      </defs>
    </svg>
  );
}
