'use client';

/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { userReview } from '../Homepage';

export function GlassCard({ review }: { review: (typeof userReview)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl border border-black border-opacity-20 bg-white/40 bg-opacity-40 px-4 py-4 backdrop-blur-md dark:border-white/40 dark:bg-black dark:bg-opacity-40"
    >
      <div className="absolute left-0 top-0 h-1 w-full" />
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <img
              src={review.img}
              alt="review image"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold dark:text-white">
                {review.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {review.username}
              </p>
            </div>
          </div>
          {/* <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent">
            {review.rating}
          </span> */}
        </div>
        <p className="text-gray-800 dark:text-gray-200">{review.body}</p>
        <div className="mt-4 flex items-center justify-between">
          {/* <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900 dark:text-purple-200">
            {review.category}
          </span> */}
          {/* <span className="text-sm text-gray-500 dark:text-gray-400">
            {review.date}
          </span> */}
        </div>
      </div>
    </motion.div>
  );
}
