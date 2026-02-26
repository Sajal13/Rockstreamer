'use client';

import { Suspense } from 'react';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Button from '@/components/base/Button';
import Swiper from '@/components/base/Swiper';
import { recentItems } from '@/data/news';
import NewsCard from '@/components/cards/NewsCard';

const TodayVideos = () => {
  return (
    <div className="px-6 py-4 border-b border-primary-300">
      <div className="flex justify-between items-center gap-2 mb-4 md:mb-6">
        <h5 className="font-bold text-lg md:text-xl">Today's Videos</h5>
        <Link href="#!">
          <Button variant="outlined" pill>
            Explore More
          </Button>
        </Link>
      </div>
      <Suspense>
        <Swiper>
          {recentItems.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </div>
  );
};

export default TodayVideos;
