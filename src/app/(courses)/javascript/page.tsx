import { CourseHero } from '@/components/shared';
import { jsProminent } from '@/data/prominent';

const JavaScript = () => {
  return (
    <CourseHero
      heading="জাভাস্ক্রিপ্ট "
      desc="JavaScript, যা EcmaScript নামেও পরিচিত, একটি প্রোগ্রামিং ভাষা। এটি
          একটি সিঙ্গেল-থ্রেডেড, ডায়নামিক, উইকলি টাইপড, প্রোটোটাইপ-ভিত্তিক, এবং
          মাল্টি-প্যারাডাইম ভাষা, যার ডায়নামিক টাইপিং রয়েছে।
    "
      prominentList={jsProminent}
    />
  );
};

export default JavaScript;
