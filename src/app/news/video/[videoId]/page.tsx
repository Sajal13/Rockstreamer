import { Metadata } from 'next';
import VideoContainer from '@/components/pages/video';
import { recentItems } from '@/data/news';

type Params = {
  videoId: string;
};

export async function generateStaticParams() {
  return recentItems.map((item) => ({
    videoId: String(item.id)
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { videoId } = await params;

  const currentItem = recentItems.find((item) => item.id === Number(videoId));

  return {
    title: currentItem?.title ?? 'Video',
    description: currentItem?.description
  };
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { videoId } = await params;

  return <VideoContainer videoId={Number(videoId)} />;
};

export default Page;
