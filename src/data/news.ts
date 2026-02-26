import news_1 from 'assets/images/news/news_1.webp';
import news_2 from 'assets/images/news/news_2.webp';
import news_3 from 'assets/images/news/news_3.webp';
import { Category, NewsItem, TodayItem } from '@/types/news';

export const newItems: NewsItem[] = [
  {
    id: 1,
    image: {
      src: news_1.src,
      height: 200,
      width: 300
    },
    caption: 'Andrew Caballero-Reynolds/AFP/Getty Images',
    title: 'Xi Gains Upper Hand Before Trump Summit After US Tariff Reversal',
    related: [
      {
        id: 44,
        relatedStr: `What to Know About the Supreme Court Ruling Against Trump's Tariffs`,
        link: '#!'
      },
      {
        id: 45,
        relatedStr: `Tracking Every Trump Tariff and Its Economic Effect`,
        link: '#!'
      },
      {
        id: 46,
        relatedStr: `World Leaders Scope Out US's Next Steps After Tariff Ruling`,
        link: '#!'
      }
    ]
  },
  {
    id: 2,
    image: {
      src: news_2.src,
      width: 300,
      height: 300
    },
    caption: 'Ethan Swope/Bloomberg',
    newsType: 'exclusive',
    title: `DOJ Probes Netflix's Power Over Filmmakers in Warner Deal`,
    description: `The Justice Department's investigation of Netflix's proposed takeover of 
    Warner Bros. Discovery includes scrutiny of the streaming giant's behavior and whether it wields anticompetitive leverage over creators.`,
    related: [
      {
        id: 55,
        relatedStr: `Hollywood Merger Threatens Movie Theaters Just as They Recover`,
        link: '#!'
      },
      {
        id: 56,
        relatedStr: `Trump Threatens Netflix With 'Consequences' Over Rice Board`,
        link: '#!'
      }
    ]
  },
  {
    id: 3,
    image: {
      src: news_3.src,
      height: 600,
      width: 300
    },
    caption: 'Kanishka Sonthalia/Bloomberg',
    title: 'Noel Tata’s Tough Stance on IPO Stalled Chairman’s Reappointment',
    className: 'md:col-span-2',
    related: [
      {
        id: 66,
        relatedStr: `Tata Defers Call on Chairman’s Term, Signaling New Power Tussle`,
        link: '#!'
      },
      {
        id: 67,
        relatedStr: `Anthropic Drops Hallmark Safety Pledge in Race With AI Peers`,
        link: '#!'
      }
    ]
  }
];

export const todayItems: TodayItem[] = [
  {
    id: 1,
    title: 'US Trade Representative Greer on 15% Tariff, USMCA, EU Trade Deal',
    duration: '13:16',
    image:
      'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 2,
    title: `Deutsche's Saravelos to 'Keep Writing' After US Ire`,
    duration: '2:14',
    image:
      'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 3,
    title: `Virginia's Spanberger Delivers Democratic Rebuttal`,
    duration: '3:16',
    image:
      'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 4,
    title: `Harvard's Real Estate Headache`,
    duration: '2:14',
    image:
      'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 5,
    title: `Merz Calls for Patience After His First Meeting With China’s Xi`,
    duration: '60:00',
    image:
      'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 6,
    title: `Stocks Climb as Traders Look to Nvidia for AI News`,
    duration: '3:00',
    image:
      'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  }
];

export const recentItems: NewsItem[] = [
  {
    id: 1,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 400,
      width: 600
    },
    caption: 'Michael Nagle/Bloomberg',
    title: 'Global Markets Rally as Fed Signals Rate Stability',
    newsType: 'breaking',
    description:
      'Stocks surged worldwide after the Federal Reserve hinted at a pause in interest rate hikes, easing investor concerns.',
    duration: '4:30',
    uploadedDate: '2026-02-04',
    related: [
      {
        id: 101,
        relatedStr: 'Wall Street Closes at Record High',
        link: '#!'
      },
      {
        id: 102,
        relatedStr: 'Investors Rebalance Portfolios Amid Optimism',
        link: '#!'
      }
    ]
  },
  {
    id: 2,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 300,
      width: 300
    },
    caption: 'Sarah Silbiger/Getty Images',
    title: 'Tech Giants Expand AI Investments in 2026',
    newsType: 'exclusive',
    duration: '6:30',
    uploadedDate: '2026-01-25',
    related: [
      {
        id: 103,
        relatedStr: 'AI Regulation Talks Intensify in Washington',
        link: '#!'
      }
    ]
  },
  {
    id: 3,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 500,
      width: 700
    },
    caption: 'David Paul Morris/Bloomberg',
    title: 'Oil Prices Dip as Supply Chain Pressures Ease',
    description:
      'Energy markets saw a decline in crude prices following improved shipping logistics and easing geopolitical tensions.',
    className: 'lg:col-span-2',
    duration: '5:20',
    uploadedDate: '2026-02-24'
  },
  {
    id: 4,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 350,
      width: 500
    },
    caption: 'Bloomberg Creative',
    title: 'Startup Funding Rebounds in Southeast Asia',
    duration: '3:59',
    uploadedDate: '2026-02-23',
    related: [
      {
        id: 104,
        relatedStr: 'Venture Capital Firms Raise Record Funds',
        link: '#!'
      }
    ]
  },
  {
    id: 5,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 600,
      width: 800
    },
    caption: 'Jason Alden/Bloomberg',
    title: 'Climate Summit 2026: Key Agreements Reached',
    newsType: 'featured',
    description:
      'World leaders concluded climate talks with new commitments targeting carbon neutrality by 2040.',
    duration: '7:59',
    uploadedDate: '2026-02-22'
  },
  {
    id: 6,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 300,
      width: 400
    },
    caption: 'Reuters',
    title: 'Cryptocurrency Market Shows Signs of Recovery',
    duration: '44:30',
    uploadedDate: '2026-02-21',
    related: [
      {
        id: 105,
        relatedStr: 'Bitcoin Crosses $70,000 Mark',
        link: '#!'
      },
      {
        id: 106,
        relatedStr: 'Regulators Eye Stablecoin Expansion',
        link: '#!'
      }
    ]
  },
  {
    id: 7,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 450,
      width: 650
    },
    caption: 'AFP/Getty Images',
    title: 'Global Supply Chains Stabilize After Two Years',
    description:
      'Manufacturers report improved delivery timelines as shipping bottlenecks finally ease.',
    duration: '25:00',
    uploadedDate: '2026-02-21'
  },
  {
    id: 8,
    image: {
      src: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png',
      height: 380,
      width: 500
    },
    caption: 'Bloomberg Opinion',
    title: 'The Future of Remote Work in 2026',
    newsType: 'analysis',
    description:
      'Companies worldwide are reshaping policies as hybrid work becomes the new global standard.',
    className: 'md:col-span-2',
    duration: '68:39',
    uploadedDate: '2026-02-19',
    related: [
      {
        id: 107,
        relatedStr: 'Hybrid Work Models Gain Popularity',
        link: '#!'
      }
    ]
  }
];


export const allCategories: Category[] = [
  {
    id: 1,
    label: "All categories",
    value: ''
  },
  {
    id: 2,
    label: "Markets",
    value: 'markets'
  },
  {
    id: 3,
    label: "Economics",
    value: 'economics'
  },
  {
    id: 4,
    label: "Technology",
    value: 'technology'
  },
  {
    id: 5,
    label: "AI",
    value: 'ai'
  }
]