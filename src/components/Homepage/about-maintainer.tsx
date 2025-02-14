'use client';

import { Card, CardContent } from '@/components/ui/shadcn/card';
import { hindSiliguri } from '@/fonts';
import { anekBangla } from '@/fonts/bengali.fonts';
import { motion } from 'motion/react';
import Image from 'next/image';

import imam_maintainer from '@/assets/maintainers/al-imam.jpg';
import yeasin_maintainer from '@/assets/maintainers/yeasin.jpg';
import { maintainersInfo } from '@/data/maintainers-info';
import Link from 'next/link';
const images = [yeasin_maintainer, imam_maintainer];

export function AboutMaintainer() {
  return (
    <div className="min-h-[70vh] p-6 md:p-12">
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
          <div className={`space-y-8 ${anekBangla.className}`}>
            <h2
              className={`homepage-section bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text py-4 text-transparent ${hindSiliguri.className}`}
            >
              প্রজেক্ট মেইন্টাইনার
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                বর্তমানে Stack Unbox প্রজেক্টে Yeasin ও Imam ২ জন আমরা এক্টিভলি
                মেন্টেইন করছি। আর্টিকেল লেখা , প্রজেক্ট আপডেট ও মেন্টেইন করার
                জন্য আমরা কাজ করি ।
              </p>
            </div>

            <div>
              <p className="mb-2">মেইন্টাইনারগণদের সাথে যোগাযোগঃ </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {maintainersInfo.map(info => {
                  return (
                    <Card className="border-0 bg-zinc-900" key={info.name}>
                      <CardContent className="gap-4 space-y-4 p-6">
                        <p> {info.name} </p>
                        <div>
                          <div className="flex gap-4">
                            {info?.contact?.map(social => (
                              <Link
                                key={social.name}
                                href={{ pathname: social.link }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`rounded-lg border border-white/10 bg-white/5 p-2 transition-colors duration-200 hover:bg-white/10 hover:text-purple-400`}
                              >
                                <social.icon className="h-5 w-5" />
                                <span className="sr-only">{social.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
