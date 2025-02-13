import { FileNames, Mdx } from '@/components/mdx';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

export default async function Page({
  params
}: {
  params: Promise<{ slug: string[]; categoryId: string }>;
}) {
  const { slug: slugs } = await params;

  const slug = slugs.join('/');

  const blog = allBlogs.find(blog => blog.slug === slug.replace('.mdx', ''));

  if (!blog) notFound();

  return (
    <Fragment>
      <Mdx code={blog.body.code} />
      <FileNames />
    </Fragment>
  );
}
