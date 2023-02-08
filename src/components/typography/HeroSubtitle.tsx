import type { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroSubtitle = cva('font-bold tracking-[0.2em] uppercase', {
  variants: {
    variant: {
      default: 'text-neutral-50',
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

interface HeroSubtitleProps extends VariantProps<typeof heroSubtitle> {
  children: ReactNode;
}

const HeroSubtitle: FC<HeroSubtitleProps> = ({ children, variant, fluid, animate }) => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.0001], [0, -70]);

  return (
    <motion.p
      className={heroSubtitle({ variant, fluid, animate })}
      style={{
        translateY: animate ? translateY : 0,
        textShadow: '0 0 20px rgba(var(--color-neutral-900),0.7)',
      }}
    >
      {children}
    </motion.p>
  );
};

export default HeroSubtitle;
