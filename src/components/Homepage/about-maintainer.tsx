'use client';

import { Card, CardContent } from '@/components/ui/shadcn/card';
import { hindSiliguri } from '@/fonts';
import { Headphones, Music } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import imam_maintainer from '@/assets/maintainers/al-imam.jpeg';
import yeasin_maintainer from '@/assets/maintainers/yeasin.jpg';
const images = [yeasin_maintainer, imam_maintainer];

export function AboutMaintainer() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Right column maintainer images */}
          <div className="flex items-center justify-center">
            {images.map((image, idx) => (
              <motion.div
                key={'images' + idx}
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
            ))}
          </div>

          {/* Right column with content */}
          <div className="space-y-8">
            <h2
              className={`homepage-section bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text py-4 text-transparent ${hindSiliguri.className}`}
            >
              প্রজেক্ট মেইন্টাইনার
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                drannel is not just a beat maker; he&apos;s a sonic architect
                crafting the soundscapes of tomorrow. With a decade of
                experience and an ear for innovation, drannel pushes the
                boundaries of what&apos;s possible in music production.
              </p>
              <p className="text-lg text-gray-300">
                From chart-topping hits to underground anthems, drannel&apos;s
                versatile style and meticulous attention to detail ensure that
                each beat is not just a track, but a journey waiting to be
                explored by the right artist.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-0 bg-zinc-900">
                <CardContent className="flex items-center gap-4 p-6">
                  <Headphones className="h-8 w-8 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-sm text-gray-400">
                      Years of Experience
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-zinc-900">
                <CardContent className="flex items-center gap-4 p-6">
                  <Music className="h-8 w-8 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-gray-400">Tracks Produced</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
