import { CourseHero } from '@/components/shared';
import { sqlProminent } from '@/data/prominent';
import React from 'react';

const TypeScript = () => {
  return (
    <>
      <CourseHero
        heading="SQL"
        desc={`  SQL (Structured Query Language) হলো রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS) পরিচালনার জন্য ব্যবহৃত ভাষা। এটি MySQL, PostgreSQL, MS SQL, Oracle, SQLite ইত্যাদি ডাটাবেস সাপোর্ট করে। ACID কমপ্লায়েন্স, ট্রাঞ্জ্যাকশন সাপোর্ট, এবং ডাটা কনসিস্টেন্সি নিশ্চিত করার জন্য এটি এন্টারপ্রাইজ-লেভেলে জনপ্রিয়। `}
        prominentList={sqlProminent}
      />
    </>
  );
};

export default TypeScript;
