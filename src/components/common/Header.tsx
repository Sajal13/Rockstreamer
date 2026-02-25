'use client';

import { BsFillMoonFill } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import AnimateLink from '@/components/base/AnimateLink';
import Button from '@/components/base/Button';
import { headerMenu, subMenuItems } from '@/data/common';
import NavItem from './NavItem';
import SubmenuMenuItem from './SubmenuMenuItem';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <section className="bg-black sticky top-0 left-0 z-20">
      {/* Sub Menu */}
      <nav className="container py-2 hidden lg:block">
        <ul className="flex items-center">
          {subMenuItems.map((item) => (
            <SubmenuMenuItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>

      {/* Main Nav */}
      <header className="container flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl"
        >
          Bloomberg
        </Link>
        <div className="flex items-center gap-2">
          <Link href="#!">
            <Button color="white">Sign In</Button>
          </Link>
          <Button variant="filled" color="white">
            Subscribe
          </Button>
          <Button color="white" className=" p-0 text-2xl m-0.5">
            <IoSearchOutline />
          </Button>
          <Button
            color="white"
            className="text-2xl p-0 m-0.5"
            onClick={handleThemeToggle}
          >
            {theme == 'dark' ? <BsFillMoonFill /> : <MdOutlineWbSunny />}
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary-400 relative">
        <div className="container flex justify-between items-center gap-5">
          <ul className="flex items-center">
            <li>
              <Button color="danger">
                <FaCircle size={8} className="mr-2" />
                <span>Live TV</span>
              </Button>
            </li>
            {headerMenu.map((menuItem) => (
              <NavItem item={menuItem} key={menuItem.id} />
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
