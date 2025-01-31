'use client';

import { ElegantShape } from '@/components/shared';
import { anekBangla, hindSiliguri } from '@/fonts';
import { cn } from '@/utils';
import { motion } from 'motion/react';

import Image from 'next/image';
import Link from 'next/link';
export default function RooNotFound() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-12"
          >
            <Image
              src="https://kokonutui.com/logo.svg"
              alt="Kokonut UI"
              width={20}
              height={20}
            />
            <span className="text-sm tracking-wide text-white/60">
              Kokonut UI
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1
              className={`mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl ${hindSiliguri.className}`}
            >
              <span
                className={`bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent`}
              >
                আপনি যে পেজটি খুঁজছেন,
              </span>
              <br />
              <span
                className={cn(
                  'bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent'
                )}
              >
                তা পাওয়া যায়নি
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              className={`mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-white/40 sm:text-lg md:text-xl ${anekBangla}`}
            >
              আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি বিদ্যমান নেই বা সরানো হয়েছে৷ URL
              চেক করুন বা{' '}
              <Link href="/" className="underline decoration-dotted">
                home
              </Link>{' '}
              ফিরে যান.
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
    </div>
  );
}
