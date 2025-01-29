import {
  Anek_Bangla,
  Hind_Siliguri,
  Kurale,
  Mina,
  Sriracha
} from 'next/font/google';

export const hindSiliguri = Hind_Siliguri({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali']
});

export const anekBangla = Anek_Bangla({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali']
});

export const mina = Mina({
  display: 'swap',
  weight: '400',
  subsets: ['latin']
});

export const sriracha = Sriracha({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin']
});

export const kurale = Kurale({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin']
});
