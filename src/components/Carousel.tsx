import classNames from 'classnames';
import { type FC, useCallback, useRef, useState } from 'react';
import Image from './Image';

type CarouselProps = {
  height: number;
  width: number;
  imageSources: string[];
};

const Carousel: FC<CarouselProps> = ({ height, width, imageSources }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const slideWidth = width;
  const slideMargin = 12.5;

  const scrollSlide = useCallback(
    (slider: HTMLUListElement | null, index: number) => {
      if (!slider) return;

      slider.scrollTo({
        left: index * (slideWidth + slideMargin),
        behavior: 'smooth',
      });
    },
    [slideWidth],
  );

  const goToSlide = useCallback(
    (index: number) => {
      setActiveSlide(index);
      scrollSlide(sliderRef.current, index);
    },
    [scrollSlide],
  );

  return (
    <div className='relative overflow-hidden' style={{ height: height, width: width }}>
      <div className='overflow-hidden' style={{ height: height }}>
        <ul
          className='flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-8'
          style={{ height: height + 20 }}
          ref={sliderRef}
        >
          {imageSources.map((source, index) => (
            <li className='mr-5 snap-start snap-always last:mr-0' key={`Profile Image ${index}`}>
              <Image
                className='object-cover'
                src={source}
                height={height}
                width={width}
                alt='Ramallene Yules - Profile Image'
                shadow
              />
            </li>
          ))}
          <div className='absolute top-0 h-[45rem] w-[27.5rem] overflow-hidden'>
            <span className='image-shadow h-[200%] w-[calc(100%_+_50px)]' />
          </div>
        </ul>
      </div>
      <div className='glassmorphism absolute bottom-0 h-28 w-full'>
        <div className='relative bottom-2 flex h-full w-full items-center justify-center gap-x-5'>
          {imageSources.map((_, index) => (
            <div
              key={`Profile Button ${index}`}
              className={classNames(
                'cursor-pointer rounded-full transition-transform',
                activeSlide === index
                  ? 'h-2 w-2 scale-175 bg-subaccent shadow-[0px_0px_0px_3px_#dddddd24]'
                  : 'h-[0.7rem] w-[0.7rem] bg-zinc-600',
              )}
              onClick={() => goToSlide(index)}
              role='button'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
