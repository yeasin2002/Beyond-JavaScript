'use client';

import { cn } from '@/utils';
import { Star, TrendingUp } from 'lucide-react';
import type React from 'react';

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  meta?: string;
  status?: string;
  tags?: string[];
  hasPersistentHover?: boolean;
  className?: string;
}

export function ProminentCard({
  title = 'Analytics Dashboard',
  description = 'Real-time metrics with AI-powered insights and predictive analytics',
  icon = <Star className="h-4 w-4" />,
  status,
  tags = [],
  hasPersistentHover = true,
  className
}: BentoCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl p-4 transition-all duration-300',
        'border border-gray-100/80 bg-white dark:border-white/10 dark:bg-black',
        'hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]',
        'will-change-transform hover:-translate-y-0.5',
        {
          '-translate-y-0.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]':
            hasPersistentHover,
          'dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]': hasPersistentHover
        },
        className
      )}
    >
      <div
        className={`absolute inset-0 ${
          hasPersistentHover
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100'
        } transition-opacity duration-300`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </div>

      <div className="relative flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="group-hover:bg-linear-to-br flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 transition-all duration-300 dark:bg-white/10">
            {icon}
          </div>

          {status && (
            <span
              className={cn(
                'backdrop-blur-xs rounded-lg px-2 py-1 text-xs font-medium',
                'bg-black/5 text-gray-600 dark:bg-white/10 dark:text-gray-300',
                'transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20'
              )}
            >
              {status}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-[15px] font-medium tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm font-[425] leading-snug text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="backdrop-blur-xs rounded-md bg-black/5 px-2 py-1 transition-all duration-200 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* <span className="text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-400">
            Explore →
          </span> */}
        </div>
      </div>

      <div
        className={`bg-linear-to-br absolute inset-0 -z-10 rounded-xl from-transparent via-gray-100/50 to-transparent p-px dark:via-white/10 ${
          hasPersistentHover
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100'
        } transition-opacity duration-300`}
      />
    </div>
  );
}
