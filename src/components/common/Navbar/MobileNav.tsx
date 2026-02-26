import { useEffect, useState } from 'react';
import { FaChevronRight, FaCircle } from 'react-icons/fa';
import Link from 'next/link';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/base/Button';
import { headerMenu } from '@/data/common';
import { SubMenuItem } from '@/types/common';
import Region from './Region';
import Search from './Search';

interface MobileNavProps {
  showMobileNav: boolean;
}

const MobileNav = ({ showMobileNav }: MobileNavProps) => {
  
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileNav]);
  
  return (
    <nav
      className={twMerge(
        'fixed bg-primary-400 left-0 top-20 h-full max-h-[calc(100vh-80px)]',
        ' overflow-x-hidden overflow-y-auto pb-4',
        'transition-all duration-300',
        classNames({
          'w-full sm:w-90 md:w-120 translate-x-0': showMobileNav,
          'w-0 -translate-x-100': !showMobileNav
        })
      )}
    >
      <Region position="relative" className="bg-white/30" />
      <Search />
      <ul className="">
        <li>
          <Link href="#!">
            <Button
              color="danger"
              className="w-full py-4 justify-start text-xl rounded-none border-b border-b-white/20"
            >
              <FaCircle size={8} className="mr-2" />
              <span>Live TV</span>
            </Button>
          </Link>
        </li>
        {headerMenu.map((menuItem) => (
          <NavItem item={menuItem} key={menuItem.id} />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;

const NavItem = ({ item }: { item: SubMenuItem }) => {
  const [open, setOpen] = useState(false);
  const handleButtonClick = () => {
    if (!item.children) return;
    setOpen((prev) => !prev);
  };
  return (
    <li>
      <Link href={item.url ? item.url : '#!'}>
        <Button
          color="white"
          className="w-full text-xl py-4 justify-between border-b border-b-white/30 rounded-none"
          onClick={handleButtonClick}
        >
          <span>{item.label}</span>
          {item.children && item.children.length > 0 && (
            <FaChevronRight
              className={classNames('text-base transition-all duration-300', {
                'rotate-90': open,
                'rotate-0': !open
              })}
            />
          )}
        </Button>
      </Link>
      {item.children && open && (
        <div className={twMerge('relative px-6 bg-white/10')}>
          {item.children.map((child) => (
            <Link
              className="text-white text-xl block font-medium py-4 border-b border-b-white/20 last:border-0"
              href={child.url || '#!'}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
