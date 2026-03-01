'use client';

import { useEffect, useRef, useState } from 'react';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import Button from '@/components/base/Button';
import { CUSTOM_BUTTONS } from '@/data/video';
import { useVideoStateContext } from '@/providers/VideoStateProvider';
import { NewsItem } from '@/types/news';
import { vjsCustomButtonCreate } from '@/utils/vjsCustomButtonCreate';

CUSTOM_BUTTONS.forEach(vjsCustomButtonCreate);

type ButtonName = (typeof CUSTOM_BUTTONS)[number]['name'];

interface VideoWrapperProps {
  item: NewsItem;
}

const VideoWrapper = ({ item }: VideoWrapperProps) => {
  const {
    linkCopied,
    sidePanelOpen,
    setCurrentItem,
    handleTranscriptToggle,
    handleLinkCopy,
    handlePlaylistToggle
  } = useVideoStateContext();

  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const transcriptRef = useRef(handleTranscriptToggle);
  const shareRef = useRef(handleLinkCopy);
  const playlistToggleRef = useRef(handlePlaylistToggle);

  useEffect(() => {
    transcriptRef.current = handleTranscriptToggle;
  }, [handleTranscriptToggle]);

  useEffect(() => {
    shareRef.current = () => handleLinkCopy(item);
  }, [handleLinkCopy, item]);

  useEffect(() => {
    playlistToggleRef.current = handlePlaylistToggle;
  }, [handlePlaylistToggle]);

  useEffect(() => {
    if (!placeholderRef.current || playerRef.current) return;

    const videoEl = document.createElement('video');
    videoEl.className =
      'video-js vjs-big-play-centered rounded-md aspect-video';
    videoEl.setAttribute('playsinline', '');
    videoEl.setAttribute('muted', '');
    videoEl.poster =
      'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png';
    placeholderRef.current.appendChild(videoEl);

    const player = videojs(videoEl, {
      controls: true,
      fluid: true,
      autoplay: true,
      muted: true,
      responsive: true,
      playbackRates: [0.25, 0.5, 1, 1.25, 1.5, 2],
      sources: [
        {
          src: 'https://s3.brilliant.com.bd/videos/03d79fd080d34421b0810b681a7a34be/master.m3u8',
          type: 'application/x-mpegURL'
        }
      ],
      tracks: [
        {
          kind: 'subtitles',
          src: '/assets/subtitles/en.vtt',
          srclang: 'en',
          label: 'English',
          default: true
        }
      ],
      controlBar: {
        children: [
          'playToggle',
          'volumePanel',
          'currentTimeDisplay',
          'durationDisplay',
          'progressControl',
          'playbackRateMenuButton',
          'subsCapsButton',
          'TranscriptButton',
          'ShareButton',
          'PlaylistButton',
          'fullscreenToggle'
        ]
      },
      html5: {
        vhs: { overrideNative: true },
        nativeAudioTracks: false,
        nativeVideoTracks: false
      }
    });

    playerRef.current = player;

    player.ready(() => {
      const controlBar = player.getChild('controlBar');
      if (!controlBar) return;

      const handlers: Record<ButtonName, () => void> = {
        TranscriptButton: () => transcriptRef.current(),
        ShareButton: () => shareRef.current(item),
        PlaylistButton: () => playlistToggleRef.current()
      };

      (Object.entries(handlers) as [ButtonName, () => void][]).forEach(
        ([name, handler]) => {
          const btn = controlBar.getChild(name) as
            | { setClickHandler: (fn: () => void) => void }
            | undefined;
          btn?.setClickHandler(handler);
        }
      );

      player.on('pause', () => setIsPaused(true));
      player.on('play', () => setIsPaused(false));
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  const handleResume = () => {
    playerRef.current?.play();
  };

  return (
    <div
      className={classNames('transition-all duration-300 relative', {
        'md:col-span-2': sidePanelOpen,
        'md:col-span-3': !sidePanelOpen
      })}
    >
      <div ref={placeholderRef} />

      {isPaused && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 rounded-md pointer-events-none">
          <h2 className="text-white text-base font-semibold drop-shadow-md line-clamp-2">
            {item.title}
          </h2>

          <div className="flex items-center justify-center flex-1">
            <Button variant='filled' onClick={handleResume} color="white" className='min-w-30'>
              <FaPlay className="text-sm mr-3" />
              Resume
            </Button>
          </div>

          <div className="h-6" />
        </div>
      )}

      <div
        className={twMerge(
          'absolute right-16 bottom-12 z-10',
          'flex items-center gap-2',
          'bg-primary-50/90 px-4 py-2 rounded-md shadow-sm opacity-0',
          'transition-all duration-300',
          classNames({
            'opacity-100': linkCopied
          })
        )}
      >
        <FaCheckCircle className="text-success-500 text-xl" />
        <p className="font-medium">Copied</p>
      </div>
    </div>
  );
};

export default VideoWrapper;
