import { CourseHero } from '@/components/shared';
import { reactProminent } from '@/data/prominent';
import React from 'react';

const TypeScript = () => {
  return (
    <>
      <CourseHero
        heading="রিয়েক্ট"
        desc={`  React.js হলো একটি JavaScript লাইব্রেরি, যা কম্পোনেন্ট-বেইজড UI তৈরি করতে ব্যবহৃত হয়। এর ভার্চুয়াল DOM ও ওয়ান-ওয়ে ডাটা ফ্লো পারফরম্যান্স বাড়ায়। এটি SPA ও SSR সাপোর্ট করে এবং React Native দিয়ে মোবাইল অ্যাপ তৈরি করা যায়। 🚀 `}
        prominentList={reactProminent}
      />
    </>
  );
};

export default TypeScript;
