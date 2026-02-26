'use client';

import { ChangeEvent, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
import AnimateLink from '@/components/base/AnimateLink';
import Select from '@/components/base/Select';
import { allCategories, recentItems } from '@/data/news';

const Latest = () => {
  const [category, setCategory] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setCategory(value);
  };

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center gap-2 mb-4 md:mb-6">
        <h5 className="font-bold text-danger-600 text-lg md:text-xl">Latest</h5>
        <Select
          options={allCategories}
          value={category}
          onChange={handleChange}
        />
      </div>

      <div>
        {recentItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 pb-4 mb-4 border-b border-primary-300 last:border-b-0 last::mb-10"
          >
            <p className="text-sm">{item.duration}</p>
            <Link
              href={`/news/video/${item.id}`}
              className="block text-secondary-500 hover:text-secondary-900 font-semibold"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-">
        <AnimateLink href="#!" color="primary">
          <div className="flex items-center gap-2">
            <span>See all latest</span>
            <BsChevronRight />
          </div>
        </AnimateLink>
      </div>
    </div>
  );
};

export default Latest;
