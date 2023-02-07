import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Title = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const opacityText = useTransform(scrollYProgress, [0, 0.001], [1, 0]);
  const translateTitle = useTransform(scrollYProgress, [0, 0.001], [0, -100]);
  const translateSubtitle = useTransform(scrollYProgress, [0, 0.001], [0, -70]);

  return (
    <div className='absolute top-0 min-h-screen w-full' ref={ref}>
      <motion.div
        className='absolute bottom-0 flex h-[18%] w-full flex-col justify-start gap-y-3 px-20 text-center duration-500'
        style={{ opacity: opacityText }}
      >
        <motion.h1
          className='font-serif font-bold leading-[1.1] tracking-[0.15em] duration-700 ease-out fluid-text-7xl 2xl:fluid-text-9xl'
          style={{ translateY: translateTitle }}
        >
          Ramallene Yules
        </motion.h1>
        <motion.p
          className='font-bold tracking-[0.2em] text-theme-text-primary duration-700 ease-out fluid-text-base 2xl:fluid-text-lg'
          style={{ translateY: translateSubtitle }}
        >
          SCORN OF THE EXILED
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Title;
