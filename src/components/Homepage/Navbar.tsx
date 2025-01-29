import { DarkModeToggle } from '@/components/ui';
import { navigation } from '@/data';
import { Github } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-2 z-50 mx-auto w-9/12 rounded-xl border-b border-gray-800 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5z"
              />
            </svg>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* <SearchContent /> */}

          <DarkModeToggle />
          <Link
            href={'https://github.com/yeasin2002/Beyond-JavaScript'}
            target="_blank"
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
