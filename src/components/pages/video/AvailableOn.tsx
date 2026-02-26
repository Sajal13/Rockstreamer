import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';
import Button from '@/components/base/Button';
import { availableOn } from '@/data/video';

const AvailableOn = () => {
  return (
    <>
      <div className="py-6 md:py-8 border-b border-primary-300 flex items-center gap-4">
        <p className="font-medium text-nowrap">Available on:</p>
        <div className="flex flex-wrap items-center gap-2">
          {availableOn.map((item) => (
            <Link href={item.link} key={item.id}>
              <Button variant="outlined" pill className="min-w-37.5">
                {item.icon && <item.icon className="me-1.5 text-xl" />}
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-6 md:py-8 flex items-center gap-4">
        <p className="font-medium text-nowrap">Watch BTV in your area: </p>
        <Link href="#!">
          <Button variant="outlined" pill className="min-w-37.5">
            Channel Finder
            <GoArrowRight className="ms-1.5 text-xl" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default AvailableOn;
