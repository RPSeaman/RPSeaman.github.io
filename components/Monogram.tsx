import { useId, type SVGProps } from 'react';

// Canopy aligned: both visible lower edges meet at y=77 in the tile.
export function Monogram(props: SVGProps<SVGSVGElement>) {
  const maskId = useId();

  return <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" {...props}>
    <defs>
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
        <rect width="100" height="100" fill="white" />
        <path d="M18 90V16H47C68 16 82 25 82 43H49C29 43 29 63 49 63H63C87 63 87 85 63 85H37" transform="translate(15 14) scale(.7)" stroke="black" strokeWidth="10" fill="none" />
      </mask>
    </defs>
    <rect x="8" y="8" width="84" height="84" rx="2" fill="currentColor" mask={`url(#${maskId})`} />
  </svg>;
}
