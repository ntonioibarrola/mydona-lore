import type { FC, ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface BackgroundCoverShadowProps {
  children: ReactNode;
}

const BackgroundCoverShadow: FC<BackgroundCoverShadowProps> = ({ children }) => {
  return (
    <div
      className='relative'
      style={{
        maskImage: 'linear-gradient(var(--theme-background-neutral) 40%, rgba(0, 0, 0, 0))',
        WebkitMaskImage: 'linear-gradient(var(--theme-background-neutral) 40%, rgba(0, 0, 0, 0))',
      }}
    >
      <div className='absolute -bottom-20 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_65%,rgba(10,10,12,.1)_70%,var(--theme-background-neutral)_90%)]' />
      {children}
    </div>
  );
};

interface BackgroundCoverProps {
  imageSource: string;
  positionX: number;
  positionY: number;
}

const BackgroundCover: FC<BackgroundCoverProps> = ({ imageSource, positionX, positionY }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

  return (
    <BackgroundCoverShadow>
      <motion.div
        className='relative -z-10 max-h-[80vh] min-h-[135vw] w-full bg-cover bg-top sm:min-h-screen'
        style={{ y }}
        ref={ref}
      >
        <Image
          className='absolute inset-0 object-cover'
          style={{ objectPosition: `${positionX}% ${positionY}%` }}
          src={imageSource}
          alt='Background Cover'
          fill
          unoptimized
        />
      </motion.div>
    </BackgroundCoverShadow>
  );
};

export default BackgroundCover;
