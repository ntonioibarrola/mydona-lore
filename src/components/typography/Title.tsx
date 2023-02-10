import type { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, useScroll, useTransform } from 'framer-motion';

const title = cva('font-bold leading-[1.1] tracking-widest uppercase', {
  variants: {
    variant: {
      default: 'text-neutral-300',
      primary: 'text-primary-500',
    },
    fluid: {
      true: 'fluid-text-7xl 2xl:fluid-text-8xl',
      false: 'text-7xl 2xl:text-8xl',
      undefined: 'text-7xl 2xl:text-8xl',
    },
    animate: {
      true: 'duration-700 ease-out',
    },
  },
});

interface TitleProps extends VariantProps<typeof title> {
  children: ReactNode;
  variant: 'default' | 'primary';
  fluid?: boolean;
  animate?: boolean;
}

const Title: FC<TitleProps> = ({ children, variant, fluid, animate }) => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 1], [0, -100]);

  return (
    <motion.h1
      className={title({ variant, fluid, animate })}
      style={{
        translateY: animate ? translateY : 0,
        textShadow: '0 0 20px rgba(var(--color-neutral-900),0.7)',
      }}
    >
      {children}
    </motion.h1>
  );
};

export default Title;
