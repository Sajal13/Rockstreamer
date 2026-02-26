'use client';

import React from 'react';
import PlaylistCard from '@/components/cards/PlaylistCard';
import { recentItems } from '@/data/news';
import { useVideoStateContext } from '@/providers/VideoStateProvider';

const Playlist = () => {
  const { currentItem } = useVideoStateContext();
  return (
    <div className='space-y-4'>
      {recentItems.map((item) => (
        <PlaylistCard item={item} key={item.id} currentItem={currentItem && currentItem} />
      ))}
    </div>
  );
};

export default Playlist;
