'use client';

import React, { useState, ChangeEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiCloseLargeFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/base/Button';

const Search = () => {
  const [focus, setFocus] = useState(false);
  const [formValue, setFormValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormValue(value);
  };

  const handleButtonClick = () => {
    setFormValue('');
    setFocus(false);
  };
  
  return (
    <div className="flex gap-2 px-3 my-4">
      <div className="relative grow">
        <input
          className={twMerge(
            'shadow-xl py-2 rounded-md ps-10 pe-4 w-full bg-primary-50/50 text-primary-900 border-0',
            'placeholder:text-primary-900/80 outline-0'
          )}
          placeholder="Search Bloomberg..."
          onFocus={() => setFocus(true)}
          value={formValue}
          onChange={handleChange}
        />
        <div className="absolute top-1/2 left-1 p-2 -translate-y-1/2">
          <BsSearch className="text-xl text-primary-900" />
        </div>
      </div>
      {focus && (
        <Button variant="filled" color="primary" onClick={handleButtonClick}>
          <RiCloseLargeFill />
        </Button>
      )}
    </div>
  );
};

export default Search;
