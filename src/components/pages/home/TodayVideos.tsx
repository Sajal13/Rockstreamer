'use client';

import { Suspense } from 'react';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/base/Button';
import Swiper from '@/components/base/Swiper';
import { todayItems } from '@/data/news';

const TodayVideos = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-4 md:mb-6">
        <h5 className="font-bold">Today's Videos</h5>
        <Link href="#!">
          <Button variant="outlined" className="rounded-[50rem]">
            Explore More
          </Button>
        </Link>
      </div>
      <Suspense>
        <Swiper>
          {todayItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                href={`/news/video/${item.id}`}
                className="h-full rounded-md block overflow-hidden border border-primary-300 group"
              >
                <div className="min-h-100 md:min-h-auto md:h-50 w-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="rounded-t-sm object-cover md:object-fill"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium group-hover:text-primary-700">{item.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </>
  );
};

export default TodayVideos;
