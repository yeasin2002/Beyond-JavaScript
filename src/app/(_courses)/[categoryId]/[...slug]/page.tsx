import { env } from '@/env';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';

export default async function Page({
  params
}: {
  params: Promise<{ slug: string[]; categoryId: string }>;
}) {
  const { slug, categoryId } = await params;

  const contentFilePath = path.join(
    env.SRC_FOLDER,
    `content/${categoryId}/${slug.join('/').replace(/\.mdx$/, '')}.mdx`
  );

  if (!fs.existsSync(contentFilePath)) {
    notFound();
  }

  const MDXContent = dynamic(
    () =>
      import(
        `@/content/${categoryId}/${slug.join('/').replace(/\.mdx$/, '')}.mdx`
      )
  );

  return <MDXContent />;
}

export async function generateStaticParams() {
  const categories = fs.readdirSync(path.join(env.SRC_FOLDER, 'content'));

  const paths: { categoryId: string; slug: string[] }[] = [];

  for (const category of categories) {
    const categoryPath = path.join(env.SRC_FOLDER, 'content', category);

    // Get all MDX files recursively
    function getAllMdxFiles(dir: string): string[] {
      const files: string[] = [];
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          files.push(...getAllMdxFiles(fullPath));
        } else if (item.endsWith('.mdx')) {
          files.push(fullPath);
        }
      }
      return files;
    }

    const mdxFiles = getAllMdxFiles(categoryPath);

    // Convert file paths to route parameters
    for (const file of mdxFiles) {
      const relativePath = path.relative(categoryPath, file);
      const slug = relativePath.replace(/\.mdx$/, '').split(path.sep);

      paths.push({
        categoryId: category,
        slug: slug
      });
    }
  }

  return paths;
}
