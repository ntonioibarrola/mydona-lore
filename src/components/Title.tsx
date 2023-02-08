import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroTitle from '@typography/HeroTitle';
import HeroSubtitle from '@typography/HeroSubtitle';

const Title = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.001], [1, 0]);

  return (
    <div className='absolute top-0 min-h-screen w-full' ref={ref}>
      <motion.div
        className='absolute bottom-0 flex h-[18%] w-full flex-col justify-start gap-y-5 px-10 text-center duration-500'
        style={{ opacity: opacity }}
      >
        <HeroTitle variant='default' fluid animate>
          RAMALLENE
        </HeroTitle>
        <HeroSubtitle variant='primary' fluid animate>
          SCORN OF THE EXILED
        </HeroSubtitle>
      </motion.div>
    </div>
  );
};

export default Title;
