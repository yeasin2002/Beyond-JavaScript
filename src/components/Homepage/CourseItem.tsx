import { courseList } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  course: (typeof courseList)[number];
};

export const CourseItem = ({ course }: Props) => {
  return (
    <Link
      key={course.name}
      href={{ pathname: course.link }}
      className="flex items-center justify-center gap-x-2 rounded-lg bg-foreground px-8 py-2.5 font-medium text-background transition-colors hover:bg-foreground/90"
    >
      <Image
        src={course.icon}
        alt={course.name}
        className="size-6"
        width={40}
        height={40}
      />
      {course.name}
    </Link>
  );
};
