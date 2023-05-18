import { memo, SVGProps } from 'react';

const StarsIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.14436 0.5L8.74837 5.42325H13.9391L9.7397 8.46599L11.3437 13.3892L7.14436 10.3465L2.94501 13.3892L4.54902 8.46599L0.34967 5.42325H5.54035L7.14436 0.5Z'
      fill='#FAE210'
    />
  </svg>
);

const Memo = memo(StarsIcon2);
export { Memo as StarsIcon2 };
