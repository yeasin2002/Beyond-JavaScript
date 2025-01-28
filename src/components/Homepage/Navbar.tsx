import { Github, Moon, Search } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-background/80 fixed top-0 z-50 w-full border-b border-gray-800 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <svg className="text-primary h-8 w-8" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5z"
              />
            </svg>
            <span className="text-xl font-bold text-white">Nuxt UI</span>
            <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-white">
              v2.21.0
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/docs"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Docs
            </Link>
            <Link
              href="/pro"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Pro
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/templates"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Templates
            </Link>
            <Link
              href="/releases"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Releases
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white">
            <Moon className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white">
            <Github className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
