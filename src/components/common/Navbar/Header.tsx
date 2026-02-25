'use client';

import { useEffect, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Button from '@/components/base/Button';
import MobileNav from '@/components/common/Navbar/MobileNav';
import NavItem from '@/components/common/Navbar/NavItem';
import Region from '@/components/common/Navbar/Region';
import SubmenuMenuItem from '@/components/common/Navbar/SubmenuMenuItem';
import { headerMenu, subMenuItems } from '@/data/common';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const resizer = () => {
      if (window.innerWidth > 1024) {
        setShowMobileNav(false);
      }
    };
    window.addEventListener('resize', resizer);

    return () => {
      window.addEventListener('resize', resizer);
    };
  }, []);
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
      <header className="container flex justify-between items-center py-4 h-20">
        <Link
          href="/"
          className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl"
        >
          Bloomberg
        </Link>
        <div className="flex items-center gap-2">
          <Link href="#!" className="max-lg:hidden">
            <Button color="white">Sign In</Button>
          </Link>
          <Button variant="filled" color="white">
            Subscribe
          </Button>
          <Button color="white" className=" p-0 text-2xl m-0.5 max-lg:hidden">
            <IoSearchOutline />
          </Button>
          <Button
            color="white"
            className="text-2xl p-0 m-0.5"
            onClick={handleThemeToggle}
          >
            {theme == 'dark' ? <BsFillMoonFill /> : <MdOutlineWbSunny />}
          </Button>
          <Button
            onClick={() => setShowMobileNav((prev) => !prev)}
            color="white"
            className=" p-0 text-2xl m-0.5 lg:hidden"
          >
            {showMobileNav ? <RxCross1 /> : <RxHamburgerMenu />}
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary-400 relative max-lg:hidden">
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
          <Region />
        </div>
      </nav>

      {/* Mobile Nav */}

      <MobileNav showMobileNav={showMobileNav} />
    </section>
  );
};

export default Header;
