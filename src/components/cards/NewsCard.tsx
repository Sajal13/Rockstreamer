import React from 'react';
import { MdOutlinePlayArrow } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/base/Button';
import { NewsItem } from '@/types/news';

interface NewsCardProps {
  item: NewsItem;
  className?: string;
  titleClass?: string;
}

const NewsCard = ({ item, className, titleClass }: NewsCardProps) => {
  return (
    <Link
      href={`/news/video/${item.id}`}
      className={twMerge(
        'h-full min-h-68 rounded-md block overflow-hidden border border-primary-300 group',
        className
      )}
    >
      <div className="min-h-50  w-full relative z-0">
        <Image
          src={item.image.src}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-t-sm object-cover md:object-fill"
        />
        <div className="absolute left-5 bottom-5 z-10 flex items-center gap-3">
          <Button
            variant="outlined"
            shape="circle"
            color="white"
            className="group-hover:bg-white"
          >
            <MdOutlinePlayArrow className="text-2xl group-hover:text-black" />
          </Button>
          <p className="text-sm text-white font-medium">{item.duration}</p>
        </div>
      </div>
      <div className="p-4">
        <p
          className={twMerge(
            'text-sm font-medium group-hover:text-primary-700',
            titleClass
          )}
        >
          {item.title}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
