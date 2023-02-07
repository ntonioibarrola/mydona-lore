import { type FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import classNames from 'classnames';

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

  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacityBackground = useTransform(scrollYProgress, [0, 0.001], [0, 1]);

  const before =
    'before:absolute before:bottom-0 before:h-full before:w-full before:bg-[linear-gradient(180deg,#0D0C0E00_0%,#0D0C0E0A_18%,#0D0C0E24_34%,#0D0C0E4A_48%,#0D0C0E94_68%,#0D0C0EFF_91%)]';
  const after =
    'after:absolute after:-bottom-20 after:h-full after:w-full after:bg-[linear-gradient(180deg,rgba(13,12,14,0)_75%,rgba(13,12,14,0.1)_80%,rgba(13,12,14,1)_85%)]';

  return (
    <div className='relative min-h-screen w-full overflow-hidden' ref={ref}>
      <motion.div className='absolute h-full w-full' style={{ translateY }}>
        <Image
          className='object-cover'
          style={{ objectPosition: `${positionX}% ${positionY}%` }}
          src={imageSource}
          alt='Background Cover'
          fill
          unoptimized
        />
      </motion.div>
      <div className={classNames('absolute h-full w-full', before, after)} />
      <motion.div
        className='absolute h-full w-full bg-theme-background-neutral duration-400 ease-ease'
        style={{ opacity: opacityBackground }}
      />
    </div>
  );
};

export default BackgroundCover;
