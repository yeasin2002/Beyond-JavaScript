'use client';

import { publicSans } from '@/fonts/English.fonts';
import { cn } from '@/utils';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

// language or framework icons
import css from '@/assets/icons/CSS.svg';
import html from '@/assets/icons/HTML.svg';
import js from '@/assets/icons/JavaScript.svg';
import pg from '@/assets/icons/PostgreSQL-Dark.svg';
import react from '@/assets/icons/React-Dark.svg';
import rust from '@/assets/icons/Rust.svg';
import ts from '@/assets/icons/TypeScript.svg';
import { language } from '@/types';
import Image from 'next/image';

interface CodeBlockProps {
  code: string;
  language: language;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const getLanguageIcon = (language: language = 'typescript') => {
  switch (language.toLowerCase()) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return js;
    case 'database':
      return pg;
    case 'react':
      return react;
    case 'rust':
      return rust;
    case 'typescript':
      return ts;
  }
};

export function CodeBlock({
  code,
  language,
  filename,
  showLineNumbers = true,
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        `overflow-hidden rounded-lg bg-[#282C35]`,
        publicSans.className,
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-500 px-4">
        <div className="flex items-center gap-2 text-sm text-[#565f89]">
          <Image
            src={getLanguageIcon(language)}
            alt="language icon"
            className="size-5"
          />
          <span>{filename || language}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="rounded-md p-1.5 transition-colors hover:bg-[#2a2b36]"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="size-4 text-green-500" />
          ) : (
            <Copy className="size-4 text-[#565f89]" />
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language.toLowerCase()}
        style={syntaxStyle}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
