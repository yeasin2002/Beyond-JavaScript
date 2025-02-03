'use client';

import { publicSans } from '@/fonts/English.fonts';
import { cn } from '@/utils';
import { Check, Copy, FileCode } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const getLanguageIcon = (language = 'typescript') => {
  switch (language.toLowerCase()) {
    case 'html':
      return '🌐';
    case 'css':
      return '🎨';
    case 'javascript':
    case 'js':
      return '🟨';
    case 'typescript':
    case 'ts':
      return '🔷';
    case 'python':
      return '🐍';
    case 'go':
      return '🐹';
    case 'rust':
      return '🦀';
    case 'vue':
      return '🟩';
    case 'react':
      return '⚛️';
    default:
      return '📄';
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
      <div className="flex items-center justify-between border-b border-gray-500 px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-[#565f89]">
          {filename ? (
            <>
              <FileCode className="h-4 w-4" />
              <span>{filename}</span>
            </>
          ) : (
            <>
              <span>{getLanguageIcon(language)}</span>
              <span>{language}</span>
            </>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="rounded-md p-1.5 transition-colors hover:bg-[#2a2b36]"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-[#565f89]" />
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
