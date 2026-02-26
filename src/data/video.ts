import { AvailableOn, TranscriptItem } from "@/types/video";
import { FaApple } from "react-icons/fa";


export const CUSTOM_BUTTONS = [
  {
    name: 'TranscriptButton',
    tooltip: 'Transcript',
    svgIcon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="0" fill="#ffffff" stroke="#000000" stroke-width="1"/>
      <line x1="7" y1="8" x2="17" y2="8" stroke="#000000" stroke-width="1" stroke-linecap="round"/>
      <line x1="7" y1="12" x2="17" y2="12" stroke="#000000" stroke-width="1" stroke-linecap="round"/>
      <line x1="7" y1="16" x2="12" y2="16" stroke="#000000" stroke-width="1" stroke-linecap="round"/>
    </svg>`
  },
  {
    name: 'ShareButton',
    tooltip: 'Share',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="24px" height="24px" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`
  },
  {
    name: 'PlaylistButton',
    tooltip: 'Playlist',
    svgIcon: `<svg fill="#fff" width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M-1152 0H128v800h-1280z"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><path d="M50.008 56H14.019a5.997 5.997 0 0 1-5.995-5.995V13.994a6 6 0 0 1 5.995-5.995h35.989a6 6 0 0 1 5.995 5.995v36.011A5.997 5.997 0 0 1 50.008 56m-25.984-4.001V12h-9.012a2.99 2.99 0 0 0-2.989 2.989V49.01a2.99 2.99 0 0 0 2.989 2.989zM49.015 12H28.024v39.999h20.991a2.99 2.99 0 0 0 2.989-2.989V14.989A2.99 2.99 0 0 0 49.015 12"/><path d="m16.024 38.774 6.828-6.828-6.828-6.829-2.829 2.829 4 4-4 4z"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`
  }
] as const;


export const transcript:TranscriptItem[] = [
  {
    time: '0:00',
    text:
      '[CC may contain inaccuracies] Can you walk us through that timeline a little more,'
  },
  {
    time: '0:03',
    text:
      'and how realistic is it that this could actually happen? The timeline we'
  },
  {
    time: '0:07',
    text:
      'outlined was intentionally set far enough out to allow for preparation,'
  },
  {
    time: '0:11',
    text:
      'but close enough to create urgency. The goal isn’t to predict an exact date,'
  },
  {
    time: '0:15',
    text:
      'but to encourage action before challenges become unavoidable.'
  },
  {
    time: '0:19',
    text:
      'We believe there’s a moderate probability if no corrective steps are taken,'
  },
  {
    time: '0:23',
    text:
      'which is exactly why these conversations matter right now.'
  },
  {
    time: '0:27',
    text:
      'If stakeholders act early and stay aligned, the outcome can shift'
  },
  {
    time: '0:30',
    text:
      'in a much more positive direction.'
  }
];


export const availableOn: AvailableOn[] = [
  {
    id: 1,
    link: '#!',
    label: 'Apple TV',
    icon: FaApple
  },
  {
    id: 2,
    link: '#!',
    label: 'Roku'
  },
  {
    id: 3,
    link: '#!',
    label: 'Samsung TV'
  },
  {
    id: 4,
    link: '#!',
    label: 'Fire TV'
  },
  {
    id: 5,
    link: '#!',
    label: 'Android TV'
  },
  {
    id: 6,
    link: '#!',
    label: 'Rakuten TV'
  },
  {
    id: 7,
    link: '#!',
    label: 'Haystack News'
  },
]