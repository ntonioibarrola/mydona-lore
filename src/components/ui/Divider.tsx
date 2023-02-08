import { cva, type VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

const divider = cva('h-[1px]', {
  variants: {
    variant: {
      solid: 'dark:bg-primary-500 bg-primary-800',
      gradient:
        'dark:bg-[linear-gradient(to_right,transparent,rgb(var(--color-primary-500)),transparent)] bg-[linear-gradient(to_right,transparent,rgb(var(--color-primary-800)),transparent)]',
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
  fullWidth?: boolean;
}

export const Divider: FC<DividerProps> = ({ variant, fullWidth }) => {
  return <div className={divider({ variant, fullWidth })} />;
};

export default Divider;
