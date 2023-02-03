import { type FC } from 'react';
import { default as NextImage, type ImageProps as NextImageProps } from 'next/image';

type ImageProps = NextImageProps & {
  shadow?: boolean;
};

const Image: FC<ImageProps> = (props) => {
  const { height, width } = props;
  const { shadow, ...nextImageProps } = props;

  return (
    <div className='relative' style={{ height: height, width: width }}>
      <NextImage {...nextImageProps} style={{ height: height, width: width }} />
      {/* <div
        className='absolute top-0 overflow-hidden'
        style={{ height: height + 'px', width: width + 'px' }}
      >
        <span className={shadow ? 'image-shadow h-[200%] w-[calc(100%_+_50px)]' : 'hidden'} />
      </div> */}
      {/* <div className='divider absolute bottom-28 h-[1px] w-3/4' /> */}
      {/* <div className='glassmorphism absolute bottom-0 grid h-28 w-full place-items-center text-center'>
        <div>
          <p className='text-base tracking-widest text-subaccent'>RAMALLENE</p>
          <p className='text-sm tracking-wider text-accent'>EXILED</p>
        </div>
      </div> */}
      {/* <NextImage
        className='absolute top-8 scale-110 object-cover'
        src='/images/Frame.png'
        height={height}
        width={width}
        alt='Profile Frame'
      /> */}
    </div>
  );
};

export default Image;
