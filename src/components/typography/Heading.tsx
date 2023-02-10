import { cva, type VariantProps } from 'class-variance-authority';
import type { FC, ReactNode } from 'react';

const heading = cva('text-neutral-900 dark:text-neutral-300', {
  variants: {
    variant: {
      1: 'text-4xl',
      2: 'text-2xl',
      3: 'text-xl',
      4: 'text-lg',
      5: 'text-base',
      6: 'text-sm',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
      heavy: 'font-extrabold',
    },
    spread: {
      tight: 'tracking-tighter',
      normal: 'tracking-normal',
      wide: 'tracking-[0.15em]',
    },
    italic: {
      true: 'italic',
    },
    center: {
      true: 'text-center',
    },
    uppercase: {
      true: 'uppercase',
    },
  },
  defaultVariants: {
    weight: 'normal',
    spread: 'normal',
  },
});

interface HeadingProps extends VariantProps<typeof heading> {
  children: ReactNode;
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'light' | 'normal' | 'medium' | 'bold' | 'heavy';
  spread?: 'tight' | 'normal' | 'wide';
  italic?: boolean;
  center?: boolean;
  uppercase?: boolean;
}

const Heading: FC<HeadingProps> = ({
  children,
  variant,
  weight,
  spread,
  italic,
  center,
  uppercase,
}) => {
  switch (variant) {
    case 1:
      return (
        <h1 className={heading({ variant, weight, spread, italic, center, uppercase })}>
          {children}
        </h1>
      );

    case 2:
      return (
        <h2 className={heading({ variant, weight, spread, italic, center, uppercase })}>
          {children}
        </h2>
      );

    case 3:
      return (
        <h3 className={heading({ variant, weight, spread, italic, center, uppercase })}>
          {children}
        </h3>
      );

    case 4:
      return (
        <h4 className={heading({ variant, weight, spread, italic, center, uppercase })}>
          {children}
        </h4>
      );

    case 5:
      return (
        <h5 className={heading({ variant, weight, spread, italic, center, uppercase })}>
          {children}
        </h5>
      );

    case 6:
      return (
        <h6 className={heading({ variant, weight, spread, italic, center, uppercase })}>
          {children}
        </h6>
      );
  }
};

export default Heading;
