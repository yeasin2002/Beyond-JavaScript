import { SidebarContentType } from '@/types';

export const typeScriptContent: SidebarContentType[] = [
  {
    name: 'Fundamentals',
    baseUrl: '/typescript/introduction',
    content: [{ name: 'introduction', url: '/introduction' }]
  },
  {
    name: 'OOP',
    baseUrl: '/typescript/oop',
    content: [
      { name: 'Introduction', url: '/introduction' },
      { name: 'Basic syntax', url: '/syntax' },
      { name: 'Access Modifiers', url: '/access-modifiers' },
      { name: 'Setters Getter', url: '/setters-getter' },
      { name: 'pillars Of  OOP ', url: '/pillars' },
      {
        name: 'practical: datetime-helper ',
        url: '/practical-datetime-helper'
      },
      { name: 'practical: chalk ', url: '/practical-chalk' }
    ]
  }
];
