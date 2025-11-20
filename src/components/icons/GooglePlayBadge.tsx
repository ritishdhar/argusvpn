import type { SVGProps } from 'react';

export function GooglePlayBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="135" height="40" rx="8" fill="black"/>
      <path d="M26.43 11.19L33.7 15.52L30.95 18.27L26.43 11.19Z" fill="#FFC928"/>
      <path d="M26.43 28.81L30.95 21.73L33.7 24.48L26.43 28.81Z" fill="#F44336"/>
      <path d="M25 10V30L38.29 20L25 10Z" fill="#4CAF50"/>
      <path d="M26.43 11.19L30.95 21.73L26.43 28.81L25 27.27V12.73L26.43 11.19Z" fill="#2196F3"/>
      <foreignObject x="45" y="10" width="80" height="20">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: 'white', fontSize: '10px', lineHeight: '1', fontFamily: 'Inter, sans-serif' }}>
          <div style={{ fontSize: '8px', opacity: 0.7 }}>GET IT ON</div>
          <div style={{ fontWeight: '600', fontSize: '12px', marginTop: '2px' }}>Google Play</div>
        </div>
      </foreignObject>
    </svg>
  );
}
