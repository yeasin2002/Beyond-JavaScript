import { jsProminent } from './prominent';

export const categories = [
  {
    id: 'jsx',
    heading: 'জাভাস্ক্রিপ্ট',
    description:
      'JavaScript, যা EcmaScript নামেও পরিচিত, একটি প্রোগ্রামিং ভাষা। এটি একটি সিঙ্গেল-থ্রেডেড, ডায়নামিক, উইকলি টাইপড, প্রোটোটাইপ-ভিত্তিক, এবং মাল্টি-প্যারাডাইম ভাষা, যার ডায়নামিক টাইপিং রয়েছে।',
    contents: jsProminent
  }
];

export const categoriesById = new Map(
  categories.map(category => [category.id, category])
);
