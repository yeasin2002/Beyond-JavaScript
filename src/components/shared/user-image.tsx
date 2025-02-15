'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  index: number;
  image: string | StaticImageData;
};

export const UserImage = ({ index, image }: Props) => {
  return (
    <div>
      <motion.div
        key={'images' + index}
        style={{
          rotate: Math.random() * 20 - 10
        }}
        whileHover={{
          scale: 1.1,
          rotate: 0,
          zIndex: 100
        }}
        whileTap={{
          scale: 1.1,
          rotate: 0,
          zIndex: 100
        }}
        className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <Image
          src={image}
          alt="maintainers  images"
          width={1200}
          height={1200}
          className="size-32 flex-shrink-0 rounded-lg object-cover md:size-60"
        />
      </motion.div>
    </div>
  );
};
