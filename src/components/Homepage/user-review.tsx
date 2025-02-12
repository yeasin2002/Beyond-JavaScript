import { Marquee } from '@/components/ui/custom/marque';
import { anekBangla, hindSiliguri } from '@/fonts/bengali.fonts';
import { GlassCard } from '../cards/glass-card';

export const userReview = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack'
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill'
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john'
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane'
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny'
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james'
  }
];

const firstRow = userReview.slice(0, userReview.length / 2);
const secondRow = userReview.slice(userReview.length / 2);

export const UserReview = () => {
  return (
    <div className="py-20">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map(review => (
            <GlassCard key={review.username} review={review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map(review => (
            <GlassCard key={review.username} review={review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>

      <div
        className={`mt-6 flex flex-col items-center justify-center text-center text-xs text-zinc-500 md:text-base`}
      >
        <h2 className={`${hindSiliguri.className} `}>
          আমরা আপনাদের Review কালেক্ট করছি, পরবর্তীতে এখানে শো করার জন্য ।
        </h2>
        <div className={`flex gap-x-4 ${anekBangla.className}`}>
          <p> সাইটটির সম্পর্কে আপনার রিভিউ লিখতে চান? </p>
          <button className="underline"> রিভিউ লিখুন </button>
        </div>
      </div>
    </div>
  );
};
