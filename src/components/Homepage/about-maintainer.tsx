import { Card, CardContent } from '@/components/ui/shadcn/card';
import { hindSiliguri } from '@/fonts';
import { Headphones, Music } from 'lucide-react';
import Image from 'next/image';

import imam_maintainer from '@/assets/maintainers/al-imam.jpg';
import yeasin_maintainer from '@/assets/maintainers/yeasin.jpg';

export function AboutMaintainer() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* image of maintainers */}
          <div className="container mx-auto px-4 py-16">
            <h1 className="mb-12 text-center text-3xl font-bold">
              Overlapping Image Gallery
            </h1>
            <div className="relative mx-auto h-[500px] w-full max-w-3xl sm:h-[600px]">
              <div className="absolute left-0 top-0 h-3/4 w-3/4 transition-transform duration-300 hover:translate-x-4 hover:translate-y-4 hover:rotate-2">
                <Image
                  src={imam_maintainer}
                  alt="First Image"
                  fill
                  className="rounded-lg border-4 border-background object-cover shadow-xl"
                  sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-3/4 w-3/4 transition-transform duration-300 hover:-translate-x-4 hover:-translate-y-4 hover:-rotate-2">
                <Image
                  src={yeasin_maintainer}
                  alt="Second Image"
                  fill
                  className="rounded-lg border-4 border-background object-cover shadow-xl"
                  sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Right column with content */}
          <div className="space-y-8">
            <h2
              //  className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
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
