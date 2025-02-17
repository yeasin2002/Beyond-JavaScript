import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import crypto from 'crypto';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

function generateSlugId(slug) {
  return crypto.createHash('sha256').update(slug).digest('hex');
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  path: {
    type: 'string',
    resolve: doc => `/${doc._raw.flattenedPath}`
  },

  slug: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').join('/')
  },

  id: {
    type: 'string',
    resolve: doc => generateSlugId(doc._raw.flattenedPath)
  }
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',

  fields: {
    lesson: { type: 'number', required: true }
  },

  computedFields
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Blog],
  onExtraFieldData: 'ignore',

  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'min-dark',
            light: 'min-light'
          },

          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },

          onVisitTitle(node) {
            if (Array.isArray(node.properties.className)) {
              return node.properties.className.push(
                'file-name-holder',
                'hidden'
              );
            }

            node.properties.className = ['file-name-holder', 'hidden'];
          },

          onVisitCaption(node) {
            if (Array.isArray(node.properties.className)) {
              return node.properties.className.push(
                'file-description',
                'hidden'
              );
            }

            node.properties.className = ['file-description', 'hidden'];
          },

          onVisitHighlightedLine(node) {
            if (Array.isArray(node.properties.className)) {
              return node.properties.className.push('line--highlighted');
            }

            node.properties.className = ['line--highlighted'];
          },

          onVisitHighlightedChars(node) {
            if (Array.isArray(node.properties.className)) {
              return node.properties.className.push('word--highlighted');
            }

            node.properties.className = ['word--highlighted'];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
});
