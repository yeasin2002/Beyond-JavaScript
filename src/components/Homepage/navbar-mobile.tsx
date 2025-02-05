'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/shadcn/dropdown-menu';
import { courseList } from '@/data';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const NavbarMobile = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel> Courses </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {courseList.map(course => (
          <DropdownMenuItem
            key={course.name}
            onClick={() => router.push(course.link as any)}
          >
            {course.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
