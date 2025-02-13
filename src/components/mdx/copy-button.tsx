'use client';

import { Button } from '@/components/ui';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';

export function CopyButton({ text }: { text: string }) {
  const [clicked, setClick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setClick(false), 600);

    return () => clearTimeout(timer);
  }, [clicked]);

  async function copy() {
    if (text && navigator && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      setClick(true);
    }
  }

  return (
    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copy}>
      <p className="stack-content place-content-center">
        <svg
          fill="none"
          height={24}
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width={24}
          aria-hidden="true"
          style={{ color: 'currentcolor', width: 20, height: 20 }}
          className={cn('transition-transform duration-300', {
            'scale-0 opacity-0': !clicked,
            'scale-100 opacity-100': clicked
          })}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>

        <svg
          fill="none"
          height={24}
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width={24}
          aria-hidden="true"
          style={{ color: 'currentcolor', width: 20, height: 20 }}
          className={cn('transition-transform duration-300', {
            'scale-0 opacity-0': clicked,
            'scale-100 opacity-100': !clicked
          })}
        >
          <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z" />
        </svg>
      </p>
    </Button>
  );
}
