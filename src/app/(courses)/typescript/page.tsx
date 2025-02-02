import { CourseHero } from '@/components/shared';
import { typeScriptProminent } from '@/data/prominent';
import React from 'react';

const TypeScript = () => {
  return (
    <>
      <CourseHero
        heading="টাইস্ক্রিপ্ট "
        desc="TypeScript JavaScript-এর ওপর ভিত্তি করে তৈরি হওয়া একটি সুপারসেট, যা উন্নত টাইপ সেফটি ও বড় স্কেল অ্যাপ ডেভেলপমেন্টের জন্য উপযোগী। 🚀"
        prominentList={typeScriptProminent}
      />
    </>
  );
};

export default TypeScript;
