import type { FC, ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface BackgroundCoverShadowProps {
  children: ReactNode;
}

const BackgroundCoverShadow: FC<BackgroundCoverShadowProps> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.65], [0, 1]);

  return (
    <div className='relative'>
      {children}
      <motion.div
        className='absolute bottom-0 h-full w-full bg-theme-background-neutral'
        style={{ opacity: opacity }}
        ref={ref}
      />
      <div className='absolute bottom-0 h-full w-full bg-[linear-gradient(180deg,#0D0C0E00_0%,#0D0C0E0A_18%,#0D0C0E24_34%,#0D0C0E4A_48%,#0D0C0E94_68%,#0D0C0EFF_91%)]' />
      <div className='absolute -bottom-20 h-full w-full bg-[linear-gradient(180deg,rgba(13,12,14,0)_75%,rgba(13,12,14,0.1)_80%,rgba(13,12,14,1)_85%)] bg-no-repeat' />
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
        className='relative max-h-[80vh] min-h-[135vw] w-full bg-cover bg-top sm:min-h-screen'
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
