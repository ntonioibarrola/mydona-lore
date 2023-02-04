import type { DetailedHTMLProps, HTMLAttributes, FC } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import classNames from 'classnames';

interface BackgroundCoverProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageSource: string;
  positionX: number;
  positionY: number;
}

const BackgroundCover: FC<BackgroundCoverProps> = ({
  className,
  imageSource,
  positionX,
  positionY,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.div
      className={classNames(
        'relative -z-10 max-h-[80vh] min-h-[135vw] w-full bg-cover bg-top sm:min-h-[88vh]',
        className,
      )}
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
      {/* <div className='absolute -bottom-10 h-full w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_65%,rgba(10,10,12,.1)_70%,#0c0b0d_90%)]' /> */}
      {/* <div className='absolute -bottom-10 mx-auto w-full text-center'>
        <h1 className='font-serif font-bold leading-[1.1] tracking-[0.15em] fluid-text-8xl'>
          Ramallene Yules
        </h1>
        <p className='font-bold tracking-[0.2em] text-accent fluid-text-lg'>SCORN OF THE EXILED</p>
      </div> */}
    </motion.div>
  );
};

export default BackgroundCover;
