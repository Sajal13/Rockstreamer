'use client';

import { PropsWithChildren, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  Swiper as ReactSwiper,
  SwiperProps as ReactSwiperProps
} from 'swiper/react';
import classNames from 'classnames';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface SwiperProps extends ReactSwiperProps {
  nextButtonClassName?: string;
  prevButtonClassName?: string;
  paginationClassName?: string;
  className?: string;
}

const Swiper = ({
  nextButtonClassName,
  prevButtonClassName,
  paginationClassName,
  className,
  children
}: PropsWithChildren<SwiperProps>) => {
  const paginationClass = twMerge(
    'custom-swiper-pagination',
    'absolute',
    'top-full',
    'left-1/2',
    '-translate-x-1/2',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'gap-3',
    'cursor-pointer',
    'mt-4',
    'z-10',
    paginationClassName
  );
  return (
    <div
      className={twMerge(
        'swiper-theme-container w-full relative mb-12',
        className
      )}
    >
      <ReactSwiper
        loop={true}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false
        }}
        grabCursor={true}
        freeMode={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        }}
        pagination={{
          el: '.custom-swiper-pagination',
          clickable: true
        }}
      >
        {children}
      </ReactSwiper>
      <div className={paginationClass}></div>
      <div className="absolute top-full right-0 flex items-center gap-1 mt-2">
        <Button
          variant="outlined"
          shape="circle"
          size="small"
          className={twMerge(
            'swiper-button-prev-custom',
            prevButtonClassName
          )}
        >
          <FaChevronLeft />
        </Button>
        <Button
          variant="outlined"
          shape="circle"
          size="small"
          className={twMerge('swiper-button-next-custom', nextButtonClassName)}
        >
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Swiper;
