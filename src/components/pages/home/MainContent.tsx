import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { newItems } from '@/data/news';

const MainContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {newItems.map((news) => (
        <div
          key={news.id}
          className={twMerge(
            'border-b last:border-b-0 md:border-e border-primary-300 px-10 py-8',
            news.className
          )}
        >
          <Link href="#!">
            <Image
              src={news.image.src}
              alt={news.title}
              width={news.image.width}
              height={news.image.height}
              className="mb-1 w-full rounded-sm"
            />
          </Link>
          <p className="text-xs text-end mb-4">{news.caption}</p>
          {news.newsType && (
            <p className="uppercase text-danger-400 text-sm">{news.newsType}</p>
          )}
          <Link href="#!" className="text-lg md:text-xl block mb-2 font-bold">
            {news.title}
          </Link>
          {news.description && (
            <p className="text-sm mb-2">{news.description}</p>
          )}
          {news.related && (
            <div className="border border-primary-300 rounded-md">
              <h5 className="text-sm font-medium px-3 py-2 border-b border-b-primary-300">
                Related
              </h5>
              {news.related.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  href={relatedItem.link}
                  className={twMerge(
                    'text-secondary-700 block font-semibold hover:text-secondary-900',
                    'px-3 py-2 border-b border-secondary-400 last:border-b-0'
                  )}
                >
                  {relatedItem.relatedStr}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
