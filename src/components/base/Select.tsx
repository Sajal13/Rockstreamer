import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Category } from '@/types/news';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Category[];
  label?: string;
}

const Select = ({ options, className = '', ...props }: SelectProps) => {
  return (
    <div className="relative inline-block">
      <select
        {...props}
        className={twMerge(
          'appearance-none rounded-full border border-gray-300',
          'bg-primary-50 px-4 py-2 pr-10 text-sm font-medium',
          'focus:outline-none focus:ring-1 focus:ring-primary-300',
          className
        )}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="h-4 w-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
