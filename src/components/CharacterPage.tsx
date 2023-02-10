import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import BackgroundCover from './BackgroundCover';
import Container from './Container';
import Navbar from './Navbar';
import Profile from './Profile';
import HeroTitle from './HeroTitle';
import RamalleneYulesJson from '../data/RamalleneYules.json';
import Heading from '@typography/Heading';
import Paragraph from '@typography/Paragraph';
import Divider from '@ui/Divider';

export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export const Main = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1], [0, 1]);

  return (
    <main>
      <section>
        <BackgroundCover imageSource='/images/Poppy.jpg' positionX={71.4897} positionY={14.6444} />
        <HeroTitle />
      </section>
      <section>
        <motion.div
          className='pointer-events-none relative bg-neutral-50 pt-[100vh] pb-96 duration-400 ease-ease dark:bg-neutral-900'
          style={{ opacity: opacity }}
        >
          <Container>
            <div className='mb-16'>
              <Heading variant={2} weight='bold' spread='wide' center uppercase>
                Ramallene
              </Heading>
              <Paragraph variant='primary' alignment='center' weight='bold' spread='wide' uppercase>
                Scorn of the Exiled
              </Paragraph>
            </div>
            <div className='grid px-10 sm:grid-cols-[1fr_275px]'>
              <div className='relative order-1 sm:order-2 sm:col-start-2 sm:col-end-3'>
                {/* <Profile /> */}
                <div className='space-y-7'>
                  <div className='relative grid h-[45rem] w-[27.5rem] place-items-center shadow-lg outline outline-1 outline-primary-400 dark:shadow-2xl dark:outline-primary-900'>
                    <Image
                      className='object-cover'
                      style={{ objectPosition: '71%' }}
                      src='/images/Poppy.jpg'
                      alt='Poppy'
                      fill
                      sizes='27.5rem'
                    />
                    <div className='absolute h-[42rem] w-[24.5rem] border-1 border-solid border-primary-700 dark:border-primary-500' />
                  </div>
                  <div className='relative grid h-[41rem] w-[27.5rem] place-items-center shadow-lg outline outline-1 outline-neutral-300 dark:shadow-2xl dark:outline-neutral-800'>
                    <Image
                      className='object-cover opacity-10 [filter:brightness(.9)_grayscale(100%)] dark:opacity-20 dark:[filter:brightness(.3)_grayscale(100%)]'
                      style={{ objectPosition: '71%' }}
                      src='/images/Poppy.jpg'
                      alt='Poppy'
                      fill
                      sizes='27.5rem'
                    />
                    <div className='absolute h-[36.5rem] w-[22rem]'>
                      <div className='flex h-full flex-col justify-between'>
                        <div>
                          <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                            Full Name
                          </Paragraph>
                          <Paragraph variant='default' size='small' weight='medium'>
                            Ramallene Yules
                          </Paragraph>
                        </div>
                        <div>
                          <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                            Gender
                          </Paragraph>
                          <Paragraph variant='default' size='small' weight='medium'>
                            Female
                          </Paragraph>
                        </div>
                        <div>
                          <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                            Race
                          </Paragraph>
                          <Paragraph variant='default' size='small' weight='medium'>
                            Accursed (Dremolith)
                          </Paragraph>
                        </div>
                        <div>
                          <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                            Birth Date
                          </Paragraph>
                          <Paragraph variant='default' size='small' weight='medium'>
                            6th of Mid Year, 4E 66
                          </Paragraph>
                        </div>
                        <div>
                          <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                            Age
                          </Paragraph>
                          <Paragraph variant='default' size='small' weight='medium'>
                            25
                          </Paragraph>
                        </div>
                        <div>
                          <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                            Occupation
                          </Paragraph>
                          <Paragraph variant='default' size='small' weight='medium'>
                            Mercenary
                          </Paragraph>
                        </div>
                        <div>
                          <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                            Status
                          </Paragraph>
                          <Paragraph variant='default' size='small' weight='medium'>
                            Alive
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='order-2 my-8 mr-16 sm:order-1 sm:col-start-1 sm:col-end-2 sm:my-0'>
                <div className='space-y-2'>
                  <Heading variant={6} weight='bold' spread='wide'>
                    BACKSTORY
                  </Heading>
                  <Divider variant='solid' fullWidth />
                </div>
                <Paragraph variant='default' weight='medium' alignment='justify' breaks>
                  {RamalleneYulesJson.description.backstory}
                </Paragraph>
                <div className='space-y-2'>
                  <Heading variant={6} weight='bold' spread='wide'>
                    APPEARANCE
                  </Heading>
                  <Divider variant='solid' fullWidth />
                </div>
                <Paragraph variant='default' weight='medium' alignment='justify' breaks>
                  {RamalleneYulesJson.description.appearance}
                </Paragraph>
                <div className='space-y-2'>
                  <Heading variant={6} weight='bold' spread='wide'>
                    PERSONALITY
                  </Heading>
                  <Divider variant='solid' fullWidth />
                </div>
                <Paragraph variant='default' weight='medium' alignment='justify' breaks>
                  {RamalleneYulesJson.description.personality}
                </Paragraph>
              </div>
            </div>
          </Container>
        </motion.div>
      </section>
    </main>
  );
};

export const Footer = () => {
  return <footer />;
};
