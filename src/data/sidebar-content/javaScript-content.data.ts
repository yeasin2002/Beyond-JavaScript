import { SidebarContentType } from '@/types';

export const javaScriptContent: SidebarContentType[] = [
  {
    name: 'Fundamentals',
    content: [
      { name: 'Pure Functions', url: '/javascript/pure-functions' },
      {
        name: 'Shallow  and Deep Copy',
        url: '/javascript/shallow-and-deep-copy'
      },
      {
        name: 'Event Propagation and Event delegation',
        url: '/javascript/event-propagation-and-event-delegation'
      }
    ]
  },
  {
    name: 'Browser API',
    content: [
      { name: 'storage and cookies', url: '/javascript/storage-and-cookies' }
    ]
  },
  {
    name: 'OOP',
    content: [{ name: 'Introduction', url: '/javascript/introduction' }]
  }
];
