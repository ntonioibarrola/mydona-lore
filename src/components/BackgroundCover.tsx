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

  const darkBefore =
    'before:bg-[linear-gradient(180deg,rgba(var(--color-neutral-900),0)_0%,rgba(var(--color-neutral-900),0.04)_18%,rgba(var(--color-neutral-900),0.14)_34%,rgba(var(--color-neutral-900),0.29)_48%,rgba(var(--color-neutral-900),0.58)_88%,rgba(var(--color-neutral-900),1)_100%)]';
  const darkAfter =
    'after:bg-[linear-gradient(180deg,rgba(var(--color-neutral-900),0)_75%,rgba(var(--color-neutral-900),0.1)_80%,rgba(var(--color-neutral-900),1)_100%)]';

  const before = classNames(
    'before:absolute before:bottom-0 before:h-full before:w-full',
    darkBefore,
  );
  const after = classNames('after:absolute after:-bottom-20 after:h-full after:w-full', darkAfter);

  return (
    <div className='absolute min-h-screen w-full overflow-hidden' ref={ref}>
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
    </div>
  );
};

export default BackgroundCover;
