import { lazy } from 'react';

const InboxsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/inboxs',
      component: lazy(() => import('./InboxsApp')),
    },
  ],
};

export default InboxsConfig;


