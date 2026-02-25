'use client';

import { useLayoutEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/base/Button';
import { regionItems } from '@/data/common';
import { RegionKey } from '@/types/common';

interface RegionProps {
  position?: 'absolute' | 'relative';
  className?: string;
}

const Region = ({ position = 'absolute', className }: RegionProps) => {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState<RegionKey>('Asia');

  const handleRegionClick = (key: RegionKey) => {
    setRegion(key);
    localStorage.setItem('region', key);
  };

  const handleButtonClick = () => {
    if (window.innerWidth < 1024) {
      setOpen((prev) => !prev);
    }
  };

  const dropdownClass = twMerge(
    'transition-all duration-300 ease-linear overflow-hidden',
    className,
    classNames({
      'absolute rounded-md right-0 shadow-xl top-10 w-60 min-h-30 hidden group-hover:block bg-primary-400':
        position === 'absolute',
      'h-47': position === 'relative' && open,
      'h-0': position === 'relative' && !open,
    })
  );

  useLayoutEffect(() => {
    const key = localStorage.getItem('region') as RegionKey;
    if (key) setRegion(key);
  }, []);
  return (
    <div className="relative group py-1">
      <Button
        color="white"
        className="capitalize gap-2 w-full justify-start"
        onClick={handleButtonClick}
      >
        <span>{region} Edition</span>
        <BsChevronDown
          className={classNames(
            'text-base transition-all duration-300 ease-linear group-hover:rotate-180',
            {
              'rotate-180': open,
              'rotate-0': !open
            }
          )}
        />
      </Button>
      <div className={dropdownClass}>
        {regionItems.map((item) => (
          <Button
            color="white"
            key={item.id}
            onClick={() => handleRegionClick(item.region)}
            className="hover:bg-white/20 px-6 w-full rounded-none first:rounded-t-md last:rounded-b-md justify-between"
          >
            <span>{item.region}</span>
            {region && item.region.toLowerCase() === region.toLowerCase() && (
              <FaCheck />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Region;
