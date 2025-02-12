import { anekBangla, hindSiliguri } from '@/fonts/bengali.fonts';
import { publicSans, rubik } from '@/fonts/english.fonts';
import { getContributors } from '@/helpers';
import { contributorsList } from '@/types';
import { Github } from 'lucide-react';
import Image from 'next/image';

export async function Contributors() {
  const contributors = await getContributors();

  return (
    <section className="min-h-[70vh] overflow-hidden text-white">
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1
            className={`homepage-section bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text py-4 text-transparent ${hindSiliguri.className}`}
          >
            কন্ট্রিবিউটরগণ
          </h1>
          <p className={`homepage-section-desc ${anekBangla.className}`}>
            যাদের সহযোগিতায় সাইটি পূর্নতা পেয়েছে ।
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contributors?.map((contributor: contributorsList) => (
              <div
                key={contributor.id}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:transform hover:bg-white/10"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-4 h-24 w-24">
                    <Image
                      src={contributor.avatar_url || '/placeholder.svg'}
                      alt={`${contributor.login}'s avatar`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h2
                    className={`mb-2 text-xl font-medium ${publicSans.className}`}
                  >
                    {contributor.login}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm text-gray-400 ${rubik.className}`}
                    >
                      {contributor.contributions} contributions
                    </span>
                    <a
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 transition-colors hover:text-purple-400"
                      aria-label="github profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
