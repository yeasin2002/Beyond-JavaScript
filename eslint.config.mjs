import { FlatCompat } from '@eslint/eslintrc';
import unicorn from 'eslint-plugin-unicorn';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      unicorn
    },
    rules: {
      'unicorn/prefer-module': 'error',
      'unicorn/filename-case': [
        'error',
        { case: 'kebabCase', ignore: ['^README\\.md$', '.*\\.config\\.js$'] }
      ],
      'unicorn/no-useless-spread': 'error'
    }
  }
];

export default eslintConfig;
