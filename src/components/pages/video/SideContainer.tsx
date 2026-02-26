'use client';

import classNames from 'classnames';
import { useVideoStateContext } from '@/providers/VideoStateProvider';
import Playlist from './Playlist';
import Transcript from './Transcript';

const SideContainer = () => {
  const { showPlaylist, showTranscript } = useVideoStateContext();

  const isVisible = showPlaylist || showTranscript;


  return (
    <div
      className={classNames(
        'md:max-h-63 lg:max-h-87 xl:max-h-111 2xl:max-h-135 overflow-auto',
        {
          hidden: !isVisible
        }
      )}
    >
      {showTranscript ? <Transcript /> : showPlaylist ? <Playlist /> : null}
    </div>
  );
};

export default SideContainer;
