import { BentoCard } from '@/components/cards';
import { jsProminent } from '@/data/prominent';
import { anekBangla, hindSiliguri } from '@/fonts';
import { Star } from 'lucide-react';

import React from 'react';

const JavaScript = () => {
  return (
    <div className="w-full">
      <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
        <h1
          className={`mb-4 flex bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-2 pb-2 text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl ${anekBangla.className}`}
        >
          জাভাস্ক্রিপ্ট
        </h1>
        <p
          className={`mx-auto mb-6 max-w-2xl text-base text-gray-400 ${hindSiliguri.className}`}
        >
          JavaScript, যা EcmaScript নামেও পরিচিত, একটি প্রোগ্রামিং ভাষা। এটি
          একটি সিঙ্গেল-থ্রেডেড, ডায়নামিক, উইকলি টাইপড, প্রোটোটাইপ-ভিত্তিক, এবং
          মাল্টি-প্যারাডাইম ভাষা, যার ডায়নামিক টাইপিং রয়েছে।
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {jsProminent.map(item => {
          return (
            <BentoCard
              title={item.label}
              description={item.desc}
              icon={<Star />}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JavaScript;
