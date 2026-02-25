import { FaCaretDown } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { SubMenuItem } from '@/types/common';

interface SubmenuMenuItemProps {
  item: SubMenuItem;
}

const SubmenuMenuItem = ({ item }: SubmenuMenuItemProps) => {
  return (
    <li
      className={twMerge(
        'group relative py-1 px-3 text-xs font-semibold first:ps-0',
        'border-e border-e-white/90 last:border-0 text-white',
        item.className
      )}
    >
      <Link
        href={item.url ? item.url : '#'}
        className="flex gap-1 items-center"
      >
        {item.icon && (
          <Image
            src={item.icon}
            alt="icon"
            width={16}
            height={16}
            className="object-contain"
          />
        )}
        <span>{item.label}</span>
        {item.children && item.children.length > 0 && (
          <FaCaretDown
            size={12}
            className="group-hover:rotate-180 transition-all duration-200 ease-linear"
          />
        )}
      </Link>
      {item.children && item.children.length > 0 && (
        <div
          className={twMerge(
            'absolute rounded-md left-0 top-6 z-30 bg-primary-400 shadow-md',
            'hidden group-hover:block min-w-60 min-h-60',
            "before:content-[''] before:h-5 before:bg-transparent before:-z-10",
            'before:absolute before:-top-6 before:left-0 before:w-full'
          )}
        >
          {item.children.map((child) => (
            <Link
              key={child.id}
              href={child.url || '#!'}
              className={twMerge(
                'text-white first:rounded-t-md last:rounded-b-md',
                'text-sm font-semibold py-3 px-4 block',
                'hover:bg-primary-200 hover:text-black transition',
                'duration-300 cursor-pointer',
                child.className
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default SubmenuMenuItem;
