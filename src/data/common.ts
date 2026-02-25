import icon1 from 'assets/images/icons/AdChoices.svg';
import icon2 from 'assets/images/icons/monitors.png';
import { FooterItem, SubMenuItem } from '@/types/common';

export const footerLeftItems: FooterItem[] = [
  {
    id: 1,
    label: 'Terms of Service',
    url: '#!'
  },
  {
    id: 2,
    label: 'Do Not Sell or Share My Personal Information',
    url: '#!'
  },
  {
    id: 3,
    label: 'Trademarks',
    url: '#!'
  },
  {
    id: 4,
    label: 'Privacy Policy',
    url: '#!'
  }
];

export const footerRightItems: FooterItem[] = [
  {
    id: 1,
    label: 'Careers',
    url: '#!'
  },
  {
    id: 2,
    label: 'Advertise',
    url: '#!'
  },
  {
    id: 3,
    label: 'Ad Choices',
    url: '#!',
    icon: icon1
  },
  {
    id: 4,
    label: 'Privacy Policy',
    url: '#!'
  }
];

export const subMenuItems: SubMenuItem[] = [
  {
    id: 1,
    label: 'Bloomberg the Company & Its Products',
    children: [
      {
        id: 22,
        label: 'About',
        url: '#!'
      },
      {
        id: 23,
        label: 'Contact',
        url: '#!'
      }
    ]
  },
  {
    id: 2,
    label: 'Bloomberg Terminal Demo Request',
    url: '#!'
  },
  {
    id: 3,
    label: 'Bloomberg Anywhere Remote Login',
    url: '#!',
    className: 'text-warning-500',
    icon: icon2.src
  },
  {
    id: 4,
    label: 'Bloomberg Customer Support',
    url: '#!'
  }
];


export const headerMenu: SubMenuItem[] = [
  {
    id: 1,
    label: "Markets",
    children: [
      { id: 201, label: "Stocks", url: "#!" },
      { id: 202, label: "Commodities", url: "#!" },
      { id: 203, label: "Currencies", url: "#!" },
      { id: 204, label: "Bonds", url: "#!" },
    ],
  },
  {
    id: 2,
    label: "Economics",
    url: '#!'
  },
  {
    id: 3,
    label: "Industries",
    url: '#!'
  },
  {
    id: 4,
    label: "Tech",
    url: "#!",
  },
  {
    id: 5,
    label: "Politics",
    url: "#!",
  },
  {
    id: 6,
    label: "Businessweek",
    url: "#!",
  },
  {
    id: 7,
    label: "Opinion",
    url: "#!",
  },
  {
    id: 8,
    label: "Video",
    url: "#!",
  },
  {
    id: 9,
    label: "More",
    children: [
      { id: 1001, label: "Podcasts", url: "#!" },
      { id: 1002, label: "Graphics", url: "!" },
      { id: 1003, label: "Investigations", url: "#!" },
    ],
  }
];