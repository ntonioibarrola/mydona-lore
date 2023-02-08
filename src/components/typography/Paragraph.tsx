import type { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const paragraph = cva('whitespace-pre-line text-justify text-base tracking-wide', {
  variants: {
    variant: {
      default: 'dark:text-neutral-50 text-neutral-900',
      primary: 'dark:text-primary-500 text-primary-800',
    },
  },
});

interface ParagraphProps extends VariantProps<typeof paragraph> {
  children: ReactNode;
  breaks?: boolean;
}

const Paragraph: FC<ParagraphProps> = ({ children, variant, breaks }) => {
  return (
    <p className={paragraph({ variant })}>
      {breaks && <br />}
      {children}
      {breaks && <br />}
    </p>
  );
};

export default Paragraph;
