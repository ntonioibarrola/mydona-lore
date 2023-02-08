import Paragraph from '@typography/Paragraph';
import Divider from '@ui/Divider';
import { motion, useScroll, useTransform } from 'framer-motion';
import BackgroundCover from './BackgroundCover';
import Container from './Container';
import Navbar from './Navbar';
import Profile from './Profile';
import Title from './Title';
import RamalleneYulesJson from '../data/RamalleneYules.json';

export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export const Main = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.001], [0, 1]);

  return (
    <main>
      <section>
        <BackgroundCover imageSource='/images/poppy.jpg' positionX={71.4897} positionY={14.6444} />
        <Title />
      </section>
      <section>
        <motion.div
          className='relative bg-neutral-50 pt-[100vh] duration-400 ease-ease dark:bg-neutral-900'
          style={{ opacity: opacity }}
        >
          <Container>
            <div className='grid py-20 px-10 sm:grid-cols-[1fr_275px] sm:py-5'>
              <div className='order-1 sm:order-2 sm:col-start-2 sm:col-end-3'>
                <Profile />
              </div>
              <div className='order-2 my-8 mx-10 sm:order-1 sm:col-start-1 sm:col-end-2 sm:my-0'>
                <span className='flex flex-col items-center text-center text-neutral-900 dark:text-neutral-50'>
                  <h5 className='py-3 text-sm tracking-[0.2em]'>BACKSTORY</h5>
                  <Divider variant='solid' />
                  <Paragraph variant='default' breaks>
                    {RamalleneYulesJson.description.backstory}
                  </Paragraph>
                  <h5 className='py-3 text-sm tracking-[0.2em]'>APPEARANCE</h5>
                  <Divider variant='solid' />
                  <Paragraph variant='default' breaks>
                    {RamalleneYulesJson.description.appearance}
                  </Paragraph>
                  <h5 className='py-3 text-sm tracking-[0.2em]'>PERSONALITY</h5>
                  <Divider variant='solid' />
                  <Paragraph variant='default' breaks>
                    {RamalleneYulesJson.description.personality}
                  </Paragraph>
                </span>
              </div>
            </div>
          </Container>
        </motion.div>
      </section>
    </main>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className='bg-neutral-50 dark:bg-neutral-900'>
        <Container>
          <div className='h-96' />
        </Container>
      </div>
    </footer>
  );
};
