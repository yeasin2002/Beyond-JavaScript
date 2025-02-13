import { categoriesById } from '@/data/categories';
import { toTitleCase } from '@/utils/naming-convention';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import { CourseNavbar } from './course-nav';
import { ContentSidebar } from './sidebar';

const JSInterviewQuestion = async ({
  children,
  params
}: PropsWithChildren<{ params: Promise<{ categoryId: string }> }>) => {
  const { categoryId } = await params;

  if (!categoriesById.get(categoryId)) notFound();

  const categories = allBlogs.reduce(
    (acc, blog) => {
      const [cat, sub] = blog._raw.sourceFileDir.split('/');
      const sourceFile = blog._raw.sourceFileName.replace('.mdx', '');
      const sourceFilePath = '/' + blog._raw.sourceFilePath.replace('.mdx', '');

      if (!acc[cat]) {
        acc[cat] = [];
      }

      const ext = acc[cat].find(item => item.id === sub);

      if (!ext) {
        acc[cat].push({
          id: sub,
          name: toTitleCase(sub),
          url: '/' + blog._raw.sourceFileDir,
          contents: [
            {
              id: sourceFile,
              name: toTitleCase(sourceFile),
              url: sourceFilePath
            }
          ]
        });
      } else {
        ext.contents.push({
          id: sourceFile,
          name: toTitleCase(sourceFile),
          url: sourceFilePath
        });
      }

      return acc;
    },
    {} as Record<
      string,
      Array<{
        id: string;
        name: string;
        url: string;
        contents: { id: string; name: string; url: string }[];
      }>
    >
  );

  const subcategories = categories[categoryId]! ?? [];

  const willHideSidebar =
    Array.isArray(subcategories) && subcategories.length === 0;

  return (
    <>
      <CourseNavbar />
      <ContentSidebar menu={subcategories} hideSidebar={willHideSidebar}>
        {children}
      </ContentSidebar>
    </>
  );
};

export default JSInterviewQuestion;
