import { memo, SVGProps } from 'react';

const SliderLinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 108 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M28.9374 1.5C29.7658 1.5 30.4374 0.828427 30.4374 0C30.4374 -0.828427 29.7658 -1.5 28.9374 -1.5V1.5ZM0 1.5H28.9374V-1.5H0V1.5Z'
      fill='#BCBCBC'
    />
    <path
      d='M67.5199 1.5C68.3484 1.5 69.0199 0.828427 69.0199 0C69.0199 -0.828427 68.3484 -1.5 67.5199 -1.5V1.5ZM39.6543 1.5H67.5199V-1.5H39.6543V1.5Z'
      fill='#BCBCBC'
    />
    <path
      d='M107.176 1.5C108.004 1.5 108.676 0.828427 108.676 0C108.676 -0.828427 108.004 -1.5 107.176 -1.5V1.5ZM78.2384 1.5H107.176V-1.5H78.2384V1.5Z'
      fill='#BCBCBC'
    />
  </svg>
);

const Memo = memo(SliderLinesIcon);
export { Memo as SliderLinesIcon };
