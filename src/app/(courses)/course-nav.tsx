import { DarkModeToggle } from '@/components/ui';
import { courseList } from '@/data';
import { Github } from 'lucide-react';
import Link from 'next/link';

export function CourseNavbar() {
  return (
    <nav className="z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
            {courseList.map(course => (
              <Link
                key={course.name}
                href={{ pathname: course.link }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {course.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <Link
            href={'https://github.com/yeasin2002/Stack-Unboxed'}
            target="_blank"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
