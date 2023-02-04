import { type FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    <div
      className='relative'
      style={{
        maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0))',
        WebkitMaskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0))',
      }}
    >
      <div className='absolute -bottom-20 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_65%,rgba(10,10,12,.1)_70%,#0c0b0d_90%)]' />
      <motion.div
        className='relative -z-10 max-h-[80vh] min-h-[135vw] w-full bg-cover bg-top sm:min-h-screen'
        style={{ y }}
        ref={ref}
      >
        <div
          className='absolute inset-0 w-full bg-cover bg-local bg-no-repeat'
          style={{
            backgroundImage: `url('${imageSource}')`,
            backgroundPosition: `${positionX}% ${positionY}%`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default BackgroundCover;
