import { categoriesById } from '@/data/categories';
import { env } from '@/env';
import { existReadDirSync } from '@/utils/file-system';
import { toTitleCase } from '@/utils/naming-convention';
import fs from 'fs';
import { notFound } from 'next/navigation';
import path from 'path';
import React, { PropsWithChildren } from 'react';
import { CourseNavbar } from './course-nav';
import { ContentSidebar } from './sidebar';

export function generateStaticParams() {
  return Object.values(categoriesById).map(category => ({
    params: { categoryId: category.id }
  }));
}

const JSInterviewQuestion = async ({
  children,
  params
}: PropsWithChildren<{ params: Promise<{ categoryId: string }> }>) => {
  const { categoryId } = await params;

  if (!categoriesById.get(categoryId)) notFound();

  const categoryDir = path.join(env.SRC_FOLDER, 'content', categoryId);

  const subcategories = existReadDirSync(categoryDir)
    .map(folder => ({
      id: folder,
      name: toTitleCase(folder),
      url: `/${categoryId}/${folder}`,
      createdAt: fs.statSync(path.join(categoryDir, folder)).birthtime,
      contents: existReadDirSync(path.join(categoryDir, folder))
        .filter(file =>
          fs.lstatSync(path.join(categoryDir, folder, file)).isFile()
        )
        .map(content => ({
          id: content,
          url: `/${categoryId}/${folder}/${content.replace('.mdx', '')}`,
          name: toTitleCase(content.replace('.mdx', '')),
          createdAt: fs.statSync(path.join(categoryDir, folder, content))
            .birthtime
        }))
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    }))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

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
