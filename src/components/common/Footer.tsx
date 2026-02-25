import Image from 'next/image';
import Link from 'next/link';
import AnimateLink from '@/components/base/AnimateLink';
import { footerLeftItems, footerRightItems } from '@/data/common';
import { FooterItem } from '@/types/common';
import { getFullYear } from '@/utils/dateGenerator';

const Footer = () => {
  return (
    <footer className="bg-primary-400">
      <div className="container">
        <div className="py-4 border-b border-b-gray-500">
          <Link
            href="/"
            className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            Bloomberg
          </Link>
        </div>
        <div className="flex flex-col md:flex-row border-x border-x-gray-500">
          <div className="px-3 lg:px-6 py-4 max-md:border-b border-b-gray-400 md:border-e md:border-e-gray-500 flex flex-wrap gap-4 lg:max-w-138">
            {footerLeftItems.map((item) => (
              <FooterNavLink item={item} key={item.id} />
            ))}
          </div>
          <div className="px-3 lg:px-6 py-4">
            <div className="flex flex-wrap gap-4 mb-4">
              {footerRightItems.map((item) => (
                <FooterNavLink item={item} key={item.id} />
              ))}
            </div>
            <p className="text-white font-medium">
              &copy;{getFullYear} Bloomberg L.P. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterNavLink = ({ item }: { item: FooterItem }) => {
  return (
    <AnimateLink color="white" className="text-sm" href={item.url}>
      <div className="flex gap-1 items-center">
        <p>{item.label}</p>
        {item.icon && (
          <div className="relative w-3 h-3 overflow-hidden">
            <Image src={item.icon} alt="icon" fill className="object-contain" />
          </div>
        )}
      </div>
    </AnimateLink>
  );
};
