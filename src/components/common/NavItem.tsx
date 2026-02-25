import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { SubMenuItem } from '@/types/common';
import AnimateLink from '../base/AnimateLink';

interface NavItemProps {
  item: SubMenuItem;
}

const NavItem = ({ item }: NavItemProps) => {
  return (
    <li className="py-3 px-3 group">
      <AnimateLink color="white" href={item.url ? item.url : '#'}>
        <div className="flex items-center gap-1">
          <span>{item.label}</span>
          {item.children && item.children.length > 0 && (
            <FaChevronDown
              size={12}
              className="group-hover:rotate-180 transition-all duration-200 ease-linear"
            />
          )}
        </div>
      </AnimateLink>

      {item.children && item.children.length > 0 && (
        <div
          className={`absolute left-0 top-full w-full min-h-60 z-30 bg-primary-400 shadow-md hidden group-hover:block
          before:content-[''] before:h-5 before:bg-transparent before:-z-10 before:absolute before:-top-6 
          before:left-0 before:w-16
        `}
        >
          <div className='container'>
            {item.children.map((child) => (
              <Link
                key={child.id}
                href={child.url || '#!'}
                className={twMerge(
                  'text-white text-sm font-semibold py-3 px-4 block hover:bg-primary-200 hover:text-black transition duration-300 cursor-pointer',
                  child.className
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;
