import dayjs from 'dayjs';
import { NewsItem } from '@/types/news';

interface DescriptionProps {
  item: NewsItem;
}

const Description = ({ item }: DescriptionProps) => {
  return (
    <div className="md:col-span-3 md:order-1">
      {item.uploadedDate && (
        <p className="font-medium text-sm mb-2">
          {dayjs(item.uploadedDate).format('MMM D, YYYY')}
        </p>
      )}
      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        {item.title}
      </h4>
      {item.description && (
        <p className="font-medium text-sm">{item.description}</p>
      )}
    </div>
  );
};

export default Description;
