import { Public_Sans, Rubik, Sriracha } from 'next/font/google';

export const sriracha = Sriracha({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin']
});

export const publicSans = Public_Sans({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export const rubik = Rubik({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});
