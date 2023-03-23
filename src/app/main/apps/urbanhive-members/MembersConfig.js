import { lazy } from 'react';

const MembersConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/members',
      component: lazy(() => import('./MembersApp')),
    },
  ],
};

export default MembersConfig;


