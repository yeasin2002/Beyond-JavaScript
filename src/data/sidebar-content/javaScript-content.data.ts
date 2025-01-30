import { SidebarContentType } from '@/types';

export const javaScriptContent: SidebarContentType[] = [
  {
    name: 'Basic',
    url: '/javascript'
  },
  {
    name: 'Advance',
    url: '/javascript',
    content: [
      {
        name: 'Array',
        url: '/javascript/array'
      },
      {
        name: 'Object',
        url: '/javascript/object'
      }
    ]
  }
];
