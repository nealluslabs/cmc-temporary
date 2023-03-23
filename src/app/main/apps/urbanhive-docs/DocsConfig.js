import { lazy } from 'react';

const DocsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/docs',
      component: lazy(() => import('./DocsApp')),
    },
  ],
};

export default DocsConfig;


