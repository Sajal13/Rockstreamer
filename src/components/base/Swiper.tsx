'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  Swiper as ReactSwiper,
  SwiperProps as ReactSwiperProps
} from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
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
  children,
  ...rest
}: PropsWithChildren<SwiperProps>) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!swiperRef.current || !paginationRef.current) return;

    const swiper = swiperRef.current;

    // Fix pagination
    swiper.params.pagination = {
      ...(swiper.params.pagination as object),
      el: paginationRef.current
    };
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();

    // Fix navigation
    swiper.params.navigation = {
      ...(swiper.params.navigation as object),
      prevEl: prevRef.current,
      nextEl: nextRef.current
    };
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <div
      className={twMerge(
        'swiper-theme-container w-full relative mb-12',
        className
      )}
    >
      <ReactSwiper
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        grabCursor={true}
        navigation={true}
        pagination={{
          el: paginationRef.current,
          clickable: true
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        {...rest}
      >
        {children}
      </ReactSwiper>

      <div
        ref={paginationRef}
        className={twMerge(
          'absolute top-full left-1/2 -translate-x-1/2',
          'rounded-full flex justify-center items-center gap-3',
          'cursor-pointer mt-4 z-10 custom-swiper-pagination',
          paginationClassName
        )}
      />

      <div className="absolute top-full right-0 flex items-center gap-1 mt-2">
        <Button
          ref={prevRef}
          variant="outlined"
          shape="circle"
          size="small"
          className={prevButtonClassName}
        >
          <FaChevronLeft />
        </Button>
        <Button
          ref={nextRef}
          variant="outlined"
          shape="circle"
          size="small"
          className={nextButtonClassName}
        >
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Swiper;
