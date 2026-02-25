export interface NewsItem {
  id: number;
  image: {
    src: string;
    height: number;
    width: number
  };
  title: string;
  caption: string;
  newsType?: string;
  description?: string;
  className?: string;
  related?: {
    id: number;
    relatedStr: string;
    link: string;
  }[];
}

export interface TodayItem {
  id: number;
  title: string;
  duration: string;
  image: string;
}
