import type { Metadata, ResolvingMetadata } from 'next';
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
    process.cwd(),
    'src',
    `content/${categoryId}/${slug.join('/')}.mdx`
  );

  if (!fs.existsSync(contentFilePath)) {
    notFound();
  }

  const MDXContent = dynamic(
    () => import(`@/content/${categoryId}/${slug.join('/')}.mdx`)
  );

  return <MDXContent />;
}
