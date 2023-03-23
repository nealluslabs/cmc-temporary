import { lazy } from 'react';

const VideoDetailsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/video-details',
      component: lazy(() => import('./VideoDetailsApp')),
    },
  ],
};

export default VideoDetailsConfig;


