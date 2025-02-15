import JavaScriptIcon from '@/assets/icons/JavaScript.svg';
import linuxIcon from '@/assets/icons/Linux.svg';
import PostgreSQLIcon from '@/assets/icons/PostgreSQL-Dark.svg';
import ReactIcon from '@/assets/icons/React-Dark.svg';
import TypeScriptIcon from '@/assets/icons/TypeScript.svg';
import gitIcon from '@/assets/icons/git.svg';

export const courseList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
    style: 'bg-foreground',
    link: '/javascript',
    isPublished: true
  },
  {
    name: 'TypeScript',
    icon: TypeScriptIcon,
    style: 'bg-brand-nuxt-green',
    link: '/typescript',
    isPublished: true
  },
  {
    name: 'React JS',
    icon: ReactIcon,
    style: 'bg-brand-nuxt-green',
    link: '/reactjs',
    isPublished: false
  },
  {
    name: 'SQL',
    icon: PostgreSQLIcon,
    style: 'bg-brand-nuxt-green',
    link: '/sql',
    isPublished: false
  },
  {
    name: 'Linux',
    icon: linuxIcon,
    style: 'bg-brand-nuxt-green',
    link: '/linux',
    isPublished: false
  },

  {
    name: ' Git',
    icon: gitIcon,
    style: 'bg-brand-nuxt-green',
    link: '/git',
    isPublished: false
  }
];
