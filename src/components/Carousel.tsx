import { type FC, useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import RadioGroup from '@ui/RadioGroup';

const SCROLLBAR_OFFSET = 20; // Make space for scrollbar so we can hide it with overflow hidden

type CarouselProps = {
  height: number;
  width: number;
  imageSources: string[];
};

const Carousel: FC<CarouselProps> = ({ height, width, imageSources }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevActiveSlide: number) => {
        if (prevActiveSlide === imageSources.length - 1) {
          return 0;
        }
        return prevActiveSlide + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imageSources.length, activeSlide]);

  return (
    <div className='relative overflow-hidden' style={{ height: height, width: width }}>
      <ul className='flex pb-8' style={{ height: height + SCROLLBAR_OFFSET }}>
        {imageSources.map((source, index) => (
          <li
            key={`Profile Image ${index}`}
            className={classNames(
              'absolute transition-opacity duration-500',
              activeSlide === index ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Image
              className='object-cover'
              style={{ height: height, width: width }}
              src={source}
              height={height}
              width={width}
              alt='Ramallene Yules - Profile Image'
            />
          </li>
        ))}
        <span className='image-shadow' />
      </ul>
      <div className='glass absolute bottom-0 h-28 w-full'>
        <div className='relative bottom-2 flex h-full w-full items-center justify-center'>
          <RadioGroup
            currentValue={activeSlide}
            length={imageSources.length}
            handleChange={goToSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
