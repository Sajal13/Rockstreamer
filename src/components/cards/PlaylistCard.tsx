'use client'

import React from 'react';
import { IoPlay } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/base/Button';
import { NewsItem } from '@/types/news';
import { MdOutlinePlayArrow } from 'react-icons/md';

interface PlaylistCardProps {
  item: NewsItem;
  currentItem: NewsItem | null;
  className?: string;
}

const PlaylistCard = ({ item, className, currentItem }: PlaylistCardProps) => {
  return (
    <Link
      href={`/news/video/${item.id}`}
      className={twMerge('flex gap-1 group', className)}
    >
      <div className="h-12 lg:h-16 w-18 lg:w-22 relative rounded-md overflow-hidden border border-primary-300">
        <Image src={item.image.src} alt="image" fill sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-md" />
        {item.id !== currentItem?.id && (
          <div className="absolute left-2 bottom-2 z-10">
            <Button
              variant="outlined"
              shape="circle"
              size='small'
              color="white"
              className="group-hover:bg-white"
            >
              <MdOutlinePlayArrow className="text-xl group-hover:text-black" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex-1">
        {item.id === currentItem?.id && (
          <div className="flex items-center gap-2 mb-1">
            <IoPlay />
            <span className="text-sm">Now Playing</span>
          </div>
        )}
        <h6 className="lg:text-lg font-semibold line-clamp-2">{item.title}</h6>
      </div>
    </Link>
  );
};

export default PlaylistCard;
