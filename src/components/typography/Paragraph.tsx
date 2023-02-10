import type { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const paragraph = cva('whitespace-pre-line text-base', {
  variants: {
    variant: {
      default: 'dark:text-neutral-300 text-neutral-900',
      primary: 'dark:text-primary-500 text-primary-700',
      secondary: 'dark:text-primary-300 text-primary-600',
    },
    alignment: {
      center: 'text-center',
      justify: 'text-justify',
    },
    size: {
      small: 'text-sm',
      normal: 'text-base',
      large: 'text-lg',
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
      wide: 'tracking-[0.2em]',
    },
    italic: {
      true: 'italic',
    },
    uppercase: {
      true: 'uppercase',
    },
  },
  defaultVariants: {
    size: 'normal',
    weight: 'normal',
    spread: 'normal',
  },
});

interface ParagraphProps extends VariantProps<typeof paragraph> {
  children: ReactNode;
  variant: 'default' | 'primary' | 'secondary';
  alignment?: 'center' | 'justify';
  size?: 'small' | 'normal' | 'large';
  weight?: 'light' | 'normal' | 'medium' | 'bold' | 'heavy';
  spread?: 'tight' | 'normal' | 'wide';
  italic?: boolean;
  uppercase?: boolean;
  breaks?: boolean;
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  variant,
  alignment,
  size,
  weight,
  spread,
  italic,
  uppercase,
  breaks,
}) => {
  return (
    <p className={paragraph({ variant, alignment, size, weight, spread, italic, uppercase })}>
      {breaks && <br />}
      {children}
      {breaks && <br />}
    </p>
  );
};

export default Paragraph;
