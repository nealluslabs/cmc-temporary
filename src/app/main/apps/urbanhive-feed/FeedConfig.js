import { lazy } from 'react';

const ProfileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/feed',
      component: lazy(() => import('./FeedApp')),
    },
  ],
};

export default ProfileConfig;


