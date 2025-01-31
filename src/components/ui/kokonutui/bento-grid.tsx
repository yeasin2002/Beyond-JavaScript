'use client';

import { cn } from '@/utils';
import {
  CheckCircle,
  Clock,
  Globe,
  Star,
  TrendingUp,
  Video
} from 'lucide-react';

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

const itemsSample: BentoItem[] = [
  {
    title: 'Analytics Dashboard',
    meta: 'v2.4.1',
    description:
      'Real-time metrics with AI-powered insights and predictive analytics',
    icon: <TrendingUp className="h-4 w-4 text-blue-500" />,
    status: 'Live',
    tags: ['Statistics', 'Reports', 'AI'],
    colSpan: 2,
    hasPersistentHover: true
  },
  {
    title: 'Task Manager',
    meta: '84 completed',
    description: 'Automated workflow management with priority scheduling',
    icon: <CheckCircle className="h-4 w-4 text-emerald-500" />,
    status: 'Updated',
    tags: ['Productivity', 'Automation']
  },
  {
    title: 'Media Library',
    meta: '12GB used',
    description: 'Cloud storage with intelligent content processing',
    icon: <Video className="h-4 w-4 text-purple-500" />,
    tags: ['Storage', 'CDN'],
    colSpan: 2
  },
  {
    title: 'Global Network',
    meta: '6 regions',
    description: 'Multi-region deployment with edge computing',
    icon: <Globe className="h-4 w-4 text-sky-500" />,
    status: 'Beta',
    tags: ['Infrastructure', 'Edge']
  }
];

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 p-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'group relative overflow-hidden rounded-xl p-4 transition-all duration-300',
            'border border-gray-100/80 bg-white dark:border-white/10 dark:bg-black',
            'hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]',
            'will-change-transform hover:-translate-y-0.5',
            item.colSpan || 'col-span-1',
            item.colSpan === 2 ? 'md:col-span-2' : '',
            {
              '-translate-y-0.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]':
                item.hasPersistentHover,
              'dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]':
                item.hasPersistentHover
            }
          )}
        >
          <div
            className={`absolute inset-0 ${
              item.hasPersistentHover
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            } transition-opacity duration-300`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="group-hover:bg-linear-to-br flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 transition-all duration-300 dark:bg-white/10">
                {item.icon}
              </div>
              <span
                className={cn(
                  'backdrop-blur-xs rounded-lg px-2 py-1 text-xs font-medium',
                  'bg-black/5 text-gray-600 dark:bg-white/10 dark:text-gray-300',
                  'transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20'
                )}
              >
                {item.status || 'Active'}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-[15px] font-medium tracking-tight text-gray-900 dark:text-gray-100">
                {item.title}
                <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                  {item.meta}
                </span>
              </h3>
              <p className="text-sm font-[425] leading-snug text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="backdrop-blur-xs rounded-md bg-black/5 px-2 py-1 transition-all duration-200 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-400">
                {item.cta || 'Explore →'}
              </span>
            </div>
          </div>

          <div
            className={`bg-linear-to-br absolute inset-0 -z-10 rounded-xl from-transparent via-gray-100/50 to-transparent p-px dark:via-white/10 ${
              item.hasPersistentHover
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            } transition-opacity duration-300`}
          />
        </div>
      ))}
    </div>
  );
}
