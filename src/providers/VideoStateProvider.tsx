'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  use,
  useMemo,
  useState
} from 'react';
import { NewsItem } from '@/types/news';

interface VideoState {
  currentItem: NewsItem | null;
  sidePanelOpen: boolean;
  showPlaylist: boolean;
  showTranscript: boolean;
  linkCopied: boolean;
  setCurrentItem: Dispatch<SetStateAction<NewsItem | null>>;
  handlePlaylistToggle: () => void;
  handleTranscriptToggle: () => void;
  handleLinkCopy: (item: NewsItem) => void;
}

export const VideoStateContext = createContext({} as VideoState);

const VideoStateProvider = ({ children }: PropsWithChildren) => {
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [showTranscript, setShowTranscript] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [currentItem, setCurrentItem] = useState<NewsItem | null>(null);

  const sidePanelOpen = useMemo(
    () => showPlaylist || showTranscript,
    [showPlaylist, showTranscript]
  );

  const handlePlaylistToggle = () => {
    setShowPlaylist((prev) => !prev);
  };

  const handleTranscriptToggle = () => {
    setShowTranscript((prev) => !prev);
  };

  const handleLinkCopy = (item: NewsItem) => {
    const link = `${window.location.origin}/news/video/${item.id}`;

    navigator.clipboard.writeText(link).then(() => {
      setLinkCopied(true);
      setTimeout(() => {
        setLinkCopied(false);
      }, 3000);
    });
  };

  return (
    <VideoStateContext
      value={{
        currentItem,
        setCurrentItem,
        sidePanelOpen,
        showPlaylist,
        showTranscript,
        linkCopied,
        handleLinkCopy,
        handlePlaylistToggle,
        handleTranscriptToggle
      }}
    >
      {children}
    </VideoStateContext>
  );
};

export const useVideoStateContext = () => use(VideoStateContext);

export default VideoStateProvider;
