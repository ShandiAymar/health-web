import LoginForm from 'components/auth/LoginForm.vue';
import RegisterForm from 'components/auth/RegisterForm.vue';
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/iniciarsesion', component: LoginForm },
      { path: '/registro', component: RegisterForm },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
