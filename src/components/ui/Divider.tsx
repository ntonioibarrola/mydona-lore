import { cva, type VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

const divider = cva('h-[1px]', {
  variants: {
    variant: {
      solid: 'dark:bg-primary-600 bg-primary-700',
      gradient:
        'dark:bg-[linear-gradient(to_right,transparent,rgb(var(--color-primary-500)),transparent)] bg-[linear-gradient(to_right,transparent,rgb(var(--color-primary-800)),transparent)]',
    },
    center: {
      true: 'mx-auto',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-3/4',
      undefined: 'w-3/4',
    },
  },
});

interface DividerProps extends VariantProps<typeof divider> {
  variant: 'solid' | 'gradient';
  center?: boolean;
  fullWidth?: boolean;
}

export const Divider: FC<DividerProps> = ({ variant, center, fullWidth }) => {
  return <div className={divider({ variant, center, fullWidth })} />;
};

export default Divider;
