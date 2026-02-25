import news_1 from 'assets/images/news/news_1.webp';
import news_2 from 'assets/images/news/news_2.webp';
import news_3 from 'assets/images/news/news_3.webp';
import { NewsItem, TodayItem } from '@/types/news';

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
    image: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 2,
    title: `Deutsche's Saravelos to 'Keep Writing' After US Ire`,
    duration: '2:14',
    image: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 3,
    title: `Virginia's Spanberger Delivers Democratic Rebuttal`,
    duration: '3:16',
    image: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 4,
    title: `Harvard's Real Estate Headache`,
    duration: '2:14',
    image: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 5,
    title: `Merz Calls for Patience After His First Meeting With China’s Xi`,
    duration: '60:00',
    image: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  },
  {
    id: 6,
    title: `Stocks Climb as Traders Look to Nvidia for AI News`,
    duration: '3:00',
    image: 'https://img.rockstreamer.com/1920xauto/images/GXElKcC5MzqHdnuaLCBM.png'
  }
]