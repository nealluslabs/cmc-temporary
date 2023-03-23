import { lazy } from 'react';

const SettingsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/settings',
      component: lazy(() => import('./SettingsApp')),
    },
  ],
};

export default SettingsConfig;


