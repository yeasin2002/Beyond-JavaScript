import { CourseHero } from '@/components/shared';
import { categoriesById } from '@/data/categories';
import { notFound } from 'next/navigation';

const JavaScript = async ({
  params
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const category = categoriesById.get(categoryId);

  if (!category) notFound();

  return (
    <CourseHero
      heading={category.heading}
      desc={category.description}
      prominentList={category.contents}
    />
  );
};

export default JavaScript;
