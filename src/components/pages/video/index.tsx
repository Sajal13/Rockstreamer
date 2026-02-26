import { recentItems } from '@/data/news';
import VideoStateProvider from '@/providers/VideoStateProvider';
import { NewsItem } from '@/types/news';
import Description from './Description';
import TopVideos from './TopVideos';
import VideoWrapper from './VideoWrapper';
import SideContainer from './SideContainer';
import AvailableOn from './AvailableOn';

const VideoContainer = ({ videoId }: { videoId: number }) => {
  const currentNews: NewsItem =
    recentItems.find((item) => item.id === videoId) || recentItems[0];
  return (
    <VideoStateProvider>
      <section className="py-10 px-10 container border border-primary-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 md:mb-8 lg:mb-10">
          <VideoWrapper item={currentNews} />
          <Description item={currentNews} />
          <SideContainer />
        </div>
        <TopVideos items={recentItems} />
        <AvailableOn />
      </section>
    </VideoStateProvider>
  );
};

export default VideoContainer;
