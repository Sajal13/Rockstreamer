'use client';

import { Suspense } from 'react';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Button from '@/components/base/Button';
import Swiper from '@/components/base/Swiper';
import NewsCard from '@/components/cards/NewsCard';
import { NewsItem } from '@/types/news';
import { Pagination } from 'swiper/modules';

interface TopVideosProps {
  items: NewsItem[];
}

const TopVideos = ({ items }: TopVideosProps) => {
  return (
    <div className="py-6 border-b border-b-primary-300">
      <div className="flex justify-between items-center gap-2 mb-4 md:mb-6">
        <h5 className="font-bold text-lg md:text-xl">Top Videos</h5>
        <Link href="#!">
          <Button variant="outlined" pill>
            Explore More
          </Button>
        </Link>
      </div>
      <Suspense>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1.4
            },
            768: {
              slidesPerView: 2.5
            },
            1024: {
              slidesPerView: 3.3
            },
            1200: {
              slidesPerView: 4
            }
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </div>
  );
};

export default TopVideos;
