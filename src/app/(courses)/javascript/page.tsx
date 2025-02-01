import { anekBangla, hindSiliguri } from '@/fonts';

import React from 'react';

const JavaScript = () => {
  return (
    <div className="relative mx-auto w-full px-4 py-32 text-center">
      <div>
        <h1
          className={`mb-4 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-2 pb-2 text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl ${anekBangla.className}`}
        >
          জাভাস্ক্রিপ্ট
        </h1>
        <h2
          className={`mx-auto mb-6 max-w-2xl text-lg text-gray-400 ${hindSiliguri.className}`}
        >
          JavaScript, যা EcmaScript নামেও পরিচিত, একটি প্রোগ্রামিং ভাষা। এটি
          একটি সিঙ্গেল-থ্রেডেড, ডায়নামিক, উইকলি টাইপড, প্রোটোটাইপ-ভিত্তিক, এবং
          মাল্টি-প্যারাডাইম ভাষা, যার ডায়নামিক টাইপিং রয়েছে।
        </h2>
      </div>
    </div>
  );
};

export default JavaScript;
