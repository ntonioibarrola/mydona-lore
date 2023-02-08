import type { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroTitle = cva('font-bold leading-[1.1] tracking-widest uppercase', {
  variants: {
    variant: {
      default: 'text-neutral-50',
      primary: 'text-primary-500',
    },
    fluid: {
      true: 'fluid-text-7xl 2xl:fluid-text-9xl',
      false: 'text-7xl 2xl:text-9xl',
      undefined: 'text-7xl 2xl:text-9xl',
    },
    animate: {
      true: 'duration-700 ease-out',
    },
  },
});

interface HeroTitleProps extends VariantProps<typeof heroTitle> {
  children: ReactNode;
}

const HeroTitle: FC<HeroTitleProps> = ({ children, variant, fluid, animate }) => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.0001], [0, -100]);

  return (
    <motion.h1
      className={heroTitle({ variant, fluid, animate })}
      style={{
        translateY: animate ? translateY : 0,
        textShadow: '0 0 20px rgba(var(--color-neutral-900),0.7)',
      }}
    >
      {children}
    </motion.h1>
  );
};

export default HeroTitle;
