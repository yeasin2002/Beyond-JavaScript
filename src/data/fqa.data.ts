interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const HomepageFAQ_data: Omit<FAQItemProps, 'index'>[] = [
  {
    question: 'এই সাইটের মূল মোটিভ কী?',
    answer:
      'মূলত নিজেদের নোট শেয়ার ও কমিউনিটি করাই একটা উদেশ্য, বাংলায় রিসোর্স ক্রিয়েট করা যাতে সবাই উপকৃত হয়। '
  },
  {
    question: 'এই প্রজেক্ট কি রেগুলার মেইন্টেইন করা হবে?',
    answer: 'অবশ্যই প্রতিনিয়র আপডেট করা হবে, .'
  },
  {
    question: 'আমি কিভাবে কন্ট্রিবিউট করতে পারি?',
    answer:
      'GitHub এর থেকে রিপো ফর্ক করে নিয়ে আপনার লেখা বা কন্ট্রিবিউশনের টপিক শেয়ার করে পুল রিকুয়েস্ট দিতে পারে। '
  },
  {
    question: 'এখানে কি কি টপিক কভার করা হবে?',
    answer:
      'আপদাতো JavaScript, TypeScript নিয়ে রেগুলার কাজ হচ্ছে, পরবর্তী সময়ে React/Next ,vue/Nuxt, SQL সহ  অন্যান্য টপিক কভার করা হবে'
  }
];
