import LoginForm from 'components/auth/LoginForm.vue';
import RegisterForm from 'components/auth/RegisterForm.vue';
import ForgotPassword from 'components/auth/ForgotPassword.vue';
import CameraForm from 'components/utils/CameraForm.vue';
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/iniciarsesion', component: LoginForm },
      { path: '/registro', component: RegisterForm },
      { path: '/recuperarcontraseña', component: ForgotPassword },
      { path: '/detectorimagenes', component: CameraForm },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
