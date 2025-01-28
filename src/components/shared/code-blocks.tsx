'use client';

import { cn } from '@/lib/utils';
import { Check, Copy, FileCode } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

// Custom theme that adapts based on the language
// const customTheme = {
//   'code[class*="language-"]': {
//     color: "#e3e6ee",
//     background: "none",
//     fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
//     textAlign: "left",
//     whiteSpace: "pre",
//     wordSpacing: "normal",
//     wordBreak: "normal",
//     wordWrap: "normal",
//     lineHeight: "1.5",
//     fontSize: "14px",
//     tabSize: 2,
//     hyphens: "none",
//   },
//   'pre[class*="language-"]': {
//     color: "#e3e6ee",
//     background: "#1a1b26",
//     padding: "1em",
//     margin: "0",
//     overflow: "auto",
//   },
//   comment: { color: "#565f89" },
//   punctuation: { color: "#565f89" },
//   property: { color: "#7aa2f7" },
//   tag: { color: "#f7768e" },
//   boolean: { color: "#ff9e64" },
//   number: { color: "#ff9e64" },
//   constant: { color: "#ff9e64" },
//   symbol: { color: "#73daca" },
//   selector: { color: "#9ece6a" },
//   "attr-name": { color: "#7aa2f7" },
//   string: { color: "#9ece6a" },
//   char: { color: "#9ece6a" },
//   builtin: { color: "#7aa2f7" },
//   inserted: { color: "#9ece6a" },
//   operator: { color: "#89ddff" },
//   entity: { color: "#7aa2f7", cursor: "help" },
//   url: { color: "#7aa2f7" },
//   variable: { color: "#bb9af7" },
//   atrule: { color: "#bb9af7" },
//   "attr-value": { color: "#9ece6a" },
//   function: { color: "#7aa2f7" },
//   regex: { color: "#89ddff" },
//   important: { color: "#bb9af7", fontWeight: "bold" },
//   bold: { fontWeight: "bold" },
//   italic: { fontStyle: "italic" },
//   "class-name": { color: "#7aa2f7" },
//   keyword: { color: "#bb9af7" },
// }

const getLanguageIcon = (language: string) => {
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
    <div className={cn('overflow-hidden rounded-lg bg-[#1a1b26]', className)}>
      <div className="flex items-center justify-between border-b border-[#2a2b36] px-4 py-2">
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
        // style={customTheme}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          background: '#1a1b26',
          fontSize: '14px'
        }}
        lineNumberStyle={{
          color: '#565f89',
          opacity: 0.5
        }}
        codeTagProps={{
          style: {
            fontSize: 'inherit',
            lineHeight: '1.5'
          }
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
