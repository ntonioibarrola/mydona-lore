import type { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, useScroll, useTransform } from 'framer-motion';

const subtitle = cva('font-bold tracking-[0.2em] uppercase', {
  variants: {
    variant: {
      default: 'text-neutral-300',
      primary: 'text-primary-500',
    },
    fluid: {
      true: 'fluid-text-lg sm:fluid-text-xl',
      false: 'text-lg sm:text-xl',
      undefined: 'text-lg sm:text-xl',
    },
    animate: {
      true: 'duration-700 ease-out',
    },
  },
});

interface SubtitleProps extends VariantProps<typeof subtitle> {
  children: ReactNode;
  variant: 'default' | 'primary';
  fluid?: boolean;
  animate?: boolean;
}

const Subtitle: FC<SubtitleProps> = ({ children, variant, fluid, animate }) => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 1], [0, -70]);

  return (
    <motion.p
      className={subtitle({ variant, fluid, animate })}
      style={{
        translateY: animate ? translateY : 0,
        textShadow: '0 0 20px rgba(var(--color-neutral-900),0.7)',
      }}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
