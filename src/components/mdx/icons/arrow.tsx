import { SVGProps } from 'react';

export function LinkArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      width="1em"
      height="1em"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function CircleArrowTopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="1em"
      width="1em"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M16 12l-4-4-4 4" />
      <path d="M12 16V8" />
    </svg>
  );
}
