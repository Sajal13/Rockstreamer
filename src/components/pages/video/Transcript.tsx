'use client';

import { transcript } from '@/data/video';
import { CgNotes } from "react-icons/cg";

const Transcript = () => {
  return (
    <div>
      <div className='flex items-center gap-2 py-2 border-b border-primary-300 mb-4'>
        <CgNotes className='text-xl' />
        <p className='font-semibold '>Transcript</p>
      </div>
      <div className="space-y-3">
        {transcript.map((item) => (
          <div key={item.time} className="flex gap-3">
            <span className="font-medium">{item.time}</span>
            <p className="text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcript;
