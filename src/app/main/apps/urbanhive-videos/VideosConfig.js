import { lazy } from 'react';

const ProfileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/videos',
      component: lazy(() => import('./VideosApp')),
    },
  ],
};

export default ProfileConfig;


