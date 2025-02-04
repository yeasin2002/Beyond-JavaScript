'use client';

import { HomepageFAQ_data } from '@/data/fqa.data';
import { anekBangla, hindSiliguri } from '@/fonts/Bengali.fonts';
import { cn } from '@/utils';
import { Github, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FAQItem } from './FAQ-item';

export function FrequentlyAskedQuestions() {
  return (
    <section className="bg-linear-to-b w-full from-transparent via-gray-50/50 to-transparent py-16 dark:from-transparent dark:via-white/[0.02] dark:to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2
            //  className="bg-linear-to-r mb-3 from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:via-gray-100 dark:to-white"
            className={`mb-3 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-white ${hindSiliguri.className}`}
          >
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${anekBangla.className}`}
          >
            আমাদের প্ল্যাটফর্ম সম্পর্কে আপনার যা জানা দরকার তা
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {HomepageFAQ_data.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              className={anekBangla.className}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            `mx-auto mt-12 flex max-w-md flex-col items-center justify-center rounded-lg p-6 ${anekBangla.className}`
          )}
        >
          <div className="mb-4 inline-flex items-center justify-center rounded-full p-1.5">
            <Mail className="h-4 w-4" />
          </div>
          <p className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
            এখনও প্রশ্ন আছে?
          </p>
          <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
            GitHub এর ডিসকাস করে জানতে পারেন ।
          </p>
          <Link
            target="_blank"
            href="https://github.com/yeasin2002/Stack-Unboxed/discussions"
            className={cn(
              'rounded-md px-4 py-2 text-sm',
              'bg-gray-900 text-white dark:bg-white dark:text-gray-900',
              'hover:bg-gray-800 dark:hover:bg-gray-100',
              'transition-colors duration-200',
              'font-medium',
              'flex items-center gap-x-2'
            )}
          >
            <Github />
            <span>GitHub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
