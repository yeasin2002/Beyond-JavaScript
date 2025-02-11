import { toTitleCase } from '@/utils/naming-convention';
import fs from 'node:fs';
import path from 'node:path';
import React, { PropsWithChildren } from 'react';
import { ContentSidebar } from './sidebar';

const JSInterviewQuestion = async ({
  children,
  params
}: PropsWithChildren<{ params: Promise<{ categoryId: string }> }>) => {
  const { categoryId } = await params;

  const categoryDir = path.join(process.cwd(), 'src', 'content', categoryId);

  const subcategories = fs.readdirSync(categoryDir).map(folder => ({
    id: folder,
    name: toTitleCase(folder),
    url: `/${categoryId}/${folder}`,
    contents: fs
      .readdirSync(path.join(categoryDir, folder))
      .filter(file =>
        fs.lstatSync(path.join(categoryDir, folder, file)).isFile()
      )
      .map(content => ({
        id: content,
        url: `/${categoryId}/${folder}/${content.replace('.mdx', '')}`,
        name: toTitleCase(content.replace('.mdx', ''))
      }))
  }));

  return <ContentSidebar menu={subcategories}>{children}</ContentSidebar>;
};

export default JSInterviewQuestion;
