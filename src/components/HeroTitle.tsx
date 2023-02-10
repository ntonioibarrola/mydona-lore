import { motion, useScroll, useTransform } from 'framer-motion';
import Title from '@typography/Title';
import Subtitle from '@typography/Subtitle';

const HeroTitle = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 1], [1, 0]);

  return (
    <div className='absolute top-0 min-h-screen w-full'>
      <motion.div
        className='absolute bottom-0 flex h-[18%] w-full flex-col justify-start gap-y-5 px-10 text-center duration-500'
        style={{ opacity: opacity }}
      >
        <Title variant='default' fluid animate>
          RAMALLENE
        </Title>
        <Subtitle variant='primary' fluid animate>
          SCORN OF THE EXILED
        </Subtitle>
      </motion.div>
    </div>
  );
};

export default HeroTitle;
