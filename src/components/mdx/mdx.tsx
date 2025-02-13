'use client';

import { CopyButton } from '@/components/mdx/copy-button';
import { Popout } from '@/components/mdx/popout';
import { ScrollArea, ScrollBar } from '@/components/ui/shadcn/scroll-area';
import { cn } from '@/utils';
import { cs } from '@/utils/cs';
import { Code2, Terminal } from 'lucide-react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { onlyText } from 'react-children-utilities';
import { JavascriptIcon, LinkArrowIcon, TypescriptIcon } from './icons';

interface ExtraProps {
  'data-language'?: string;
  'data-theme'?: string;
}

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h1
      className={cn(
        'font-display relative mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  ),

  h2: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h2
      className={cn(
        'font-display relative scroll-m-20 text-3xl font-semibold tracking-tight text-foreground first:mt-0 first:border-none first:pt-0',
        className
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h3
      className={cn(
        'font-display relative mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  ),

  h4: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h4
      className={cn(
        'font-display relative mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  ),

  h5: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h5
      className={cn(
        'font-display relative mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  ),

  h6: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h6
      className={cn(
        'font-display relative mt-8 scroll-m-20 text-base font-semibold tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  ),

  a: ({ className, href, children, ...props }: React.ComponentProps<'a'>) => {
    const _link = href ?? '#';

    const link = _link.replace(/(&|\?)_highlight$/, '');

    const spinner = _link.endsWith('_highlight') && (
      <LinkArrowIcon className="group-hover:text-link h-[0.875rem] w-[0.875rem] text-muted-foreground transition-all group-hover:rotate-45" />
    );

    const cns = cn(
      'font-medium text-foreground underline underline-offset-4 hover:text-link-muted inline-flex items-center group gap-[1px]',
      className
    );

    if (/^(http|https):\/\//.test(link)) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          href={link}
          className={cns}
        >
          {children}
          {spinner}
        </a>
      );
    }

    if (/^#/.test(link)) {
      return (
        <a {...props} href={link} className={cns}>
          {children}
          {spinner}
        </a>
      );
    }

    return (
      <Link href={{ pathname: link }} {...props} className={cns}>
        {children}
        {spinner}
      </Link>
    );
  },

  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'leading-7 text-foreground [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),

  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "my-6 list-none pl-3 [&>li>:is(ul,ol)]:my-3 [&>li]:relative [&>li]:px-3 [&>li]:before:absolute [&>li]:before:-ml-[1.375rem] [&>li]:before:-mt-[1px] [&>li]:before:font-mono [&>li]:before:text-muted-foreground [&>li]:before:content-['-']",
        className
      )}
      {...props}
    />
  ),

  ol: ({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        cs({
          variables: '[--base-space:0.75rem] [--space:var(--base-space)]',
          ul: 'my-6 list-none pl-[var(--space)]',
          nestedUl: '[&>li>:is(ul,ol)]:my-3',
          li: '[&>li]:relative [&>li]:pl-[var(--space)] [&>li]:pr-3',
          liCounter:
            "[counter-reset:list] [&>li]:before:content-[counter(list)_'.'] [&>li]:before:[counter-increment:list]",
          liBefore:
            '[&>li]:before:absolute [&>li]:before:ml-[calc(calc(calc(var(--space)+var(--base-space))-0.125rem)*-1)] [&>li]:before:font-mono [&>li]:before:text-foreground',
          liBeyond10:
            '[&>li:nth-child(n+10)]:[--space:calc(var(--base-space)*2)]',
          liBeyond100:
            '[&>li:nth-child(n+100)]:[--space:calc(var(--base-space)*3)]',
          liBeyond1000:
            '[&>li:nth-child(n+1000)]:[--space:calc(var(--base-space)*4)]',
          className
        })
      )}
      {...props}
    />
  ),

  li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={cn('mt-2 p-0 text-foreground', className)} {...props} />
  ),

  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-[0.25rem] border-accent pl-[1.375rem] italic text-muted-foreground [&_p]:text-muted-foreground',
        className
      )}
      {...props}
    />
  ),

  img: ({ className, alt, ...props }: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn('rounded-md border border-muted', className)}
      alt={`${alt}`}
      {...props}
    />
  ),

  hr: ({ ...props }) => <hr className="my-4 border-muted md:my-8" {...props} />,

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full text-foreground', className)} {...props} />
    </div>
  ),

  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 p-0 even:bg-muted', className)} {...props} />
  ),

  th: ({
    className,
    ...props
  }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border border-muted px-4 py-2 text-left font-bold text-foreground [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),

  td: ({
    className,
    ...props
  }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border border-muted px-4 py-2 text-left text-foreground [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),

  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn('font-bold text-foreground', className)} {...props} />
  ),

  pre: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & ExtraProps) => {
    const isTopBarRequired = !['list', 'text', 'shell-session'].includes(
      props['data-language'] ?? ''
    );

    function title() {
      switch (props['data-language']) {
        case 'tsx':
        case 'ts':
          return {
            icon: <TypescriptIcon className="h-4 w-4 rounded-[2px]" />,
            filename: `example.${props['data-language']}`
          };

        case 'json':
        case 'jsx':
        case 'js':
          return {
            icon: <JavascriptIcon className="h-4 w-4 rounded-[2px]" />,
            filename: `example.${props['data-language']}`
          };

        case 'shell':
        case 'bash':
        case 'zsh':
        case 'sh':
        case 'fish':
        case 'powershell':
        case 'sh-session':
        case 'shell-session':
        case 'ansi':
          return {
            icon: <Terminal className="h-4 w-4 text-muted-foreground" />,
            filename: 'Terminal'
          };

        case 'html':
          return {
            icon: <Code2 className="h-4 w-4 text-muted-foreground" />,
            filename: 'index.html'
          };

        case 'css':
        case 'scss':
        case 'less':
        case 'styl':
          return {
            icon: <Code2 className="h-4 w-4 text-muted-foreground" />,
            filename: `style.${props['data-language']}`
          };

        case 'yaml':
        case 'yml':
          return {
            icon: <Code2 className="h-4 w-4 text-muted-foreground" />,
            filename: `config.${props['data-language']}`
          };

        case 'md':
        case 'mdx':
          return {
            icon: <Code2 className="h-4 w-4 text-muted-foreground" />,
            filename: `readme.${props['data-language']}`
          };

        default:
          return {
            icon: <Code2 className="h-4 w-4 text-muted-foreground" />,
            filename: ''
          };
      }
    }

    const { icon, filename } = title();

    return (
      <div
        className="relative my-6 overflow-hidden rounded-md border border-muted-foreground/30"
        data-language={props['data-language']}
        data-theme={props['data-theme']}
        data-pre-block-wrapper-index
      >
        {isTopBarRequired && (
          <div className="flex h-12 items-center border-b border-muted-foreground/30 bg-background pl-[1.375rem] pr-3">
            <div className="m-0 mr-auto flex min-w-0 items-center gap-2 font-sans text-sm text-muted-foreground">
              <div>{icon}</div>
              <span data-pretty-code-file-name>{filename}</span>
            </div>
            <div>
              <CopyButton text={onlyText(props.children)} />
            </div>
          </div>
        )}

        <ScrollArea>
          <pre
            {...props}
            className={cn(
              'no-scrollbar overlay-right isolate my-0 rounded-none px-0 py-5 [--bg-color:var(--shiki-bg)] [--overlay-width:7%]',
              className
            )}
          />
          <ScrollBar
            orientation="horizontal"
            className="brightness-70 dark:brightness-150"
          />
        </ScrollArea>
      </div>
    );
  },

  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (
      <code
        className={cn(
          'relative rounded border bg-foreground/5 px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground',
          className
        )}
        {...props}
      />
    );
  },

  Image: ({ className, ...props }: React.ComponentProps<typeof Image>) => (
    <Image
      className={cn('rounded-md border border-muted', className)}
      {...props}
      alt={props.alt}
    />
  ),

  Popout
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
