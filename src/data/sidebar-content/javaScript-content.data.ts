import { SidebarContentType } from '@/types';

export const javaScriptContent: SidebarContentType[] = [
  {
    name: 'Fundamentals',
    baseUrl: '/javascript/fundamentals',
    content: [
      {
        name: 'Pure Functions',
        url: '/pure-functions'
      },
      {
        name: 'Shallow  and Deep Copy',
        url: '/shallow-and-deep-copy'
      },
      {
        name: 'Event Propagation and Event delegation',
        url: '/event-propagation-and-event-delegation'
      }
    ]
  },
  {
    name: 'Browser API',
    baseUrl: '/javascript/browser-api',
    content: [{ name: 'storage and cookies', url: '/storage-and-cookies' }]
  },
  {
    name: 'OOP',
    baseUrl: '/javascript/oop',
    content: [{ name: 'Introduction', url: '/introduction' }]
  }
];
