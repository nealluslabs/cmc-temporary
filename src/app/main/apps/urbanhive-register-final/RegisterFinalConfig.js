import { authRoles } from 'app/auth';
import RegisterFinal from './RegisterFinal';

const RegisterFinalConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: '/register-final',
      component: RegisterFinal,
    },
  ],
};

export default RegisterFinalConfig;
