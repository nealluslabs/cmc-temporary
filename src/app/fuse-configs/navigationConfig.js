import { authRoles } from 'app/auth';
import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const user = 'admin';

const navigationConfig = [
   {
     id: 'dasboard',
     title: 'Dashboard',
     type: 'group',
     icon: 'home',
     url: '/apps/sessions',
   },
   {
    id: 'feed',
    title: 'Feed',
    type: 'group',
    icon: 'book',
    url: '/apps/feed',
  },
 
  {
    id: 'incubator',
    title: 'Incubator',
    type: 'group',
    icon: 'tree',
    children: [
      {
        id: 'sessions',
        title: 'Videos',
        type: 'item',
        icon: 'photo',
        url: '/apps/videos',
        // url: '/apps/coming-soon2',
      },
      {
        id: 'book-dev',
        title: 'Docs',
        type: 'item',
        icon: 'event_available',
        url: '/apps/docs',
        // url: '/apps/coming-soon3',
      },
      
    ],
  },
  {
    id: 'jobs',
    title: 'Jobs',
    type: 'group',
    icon: 'person',
    url: '/apps/members',
  },
  {
    id: 'settings',
    title: 'Settings',
    type: 'group',
    icon: 'settings',
    url: '/apps/settings',
  },
  /*{
    id: 'admin',
    title: 'Admin',
    type: 'group',
    icon: 'web',
    children: [
      {
        id: 'create-developer',
        title: 'Create Developer',
        type: 'item',
        icon: 'photo',
        url: '/apps/admin/createdeveloper',
        // url: '/apps/coming-soon2',
      },
      {
        id: 'developer-list',
        title: 'Developer List',
        type: 'item',
        icon: 'event_available',
       // url: '/apps/bookdev',
         url: '/apps/admin/developerlist',
      },
      {
        id: 'booked-classes',
        title: 'Booked Classes',
        type: 'item',
        icon: 'event_available',
       // url: '/apps/bookdev',
        url: '/apps/admin/assignedbookings',
      },
      {
        id: 'registered-users',
        title: 'Registered Users',
        type: 'item',
        icon: 'event_available',
       // url: '/apps/bookdev',
        url: '/apps/admin/registeredUsers',
      },
    ]
  }*/
];

export default navigationConfig;
