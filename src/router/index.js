import { createRouter, createWebHistory } from 'vue-router';



import HomePage from '../views/HomePage.vue';
import ProductRegistration from '../views/ProductRegistration.vue';
import ClientRegistration from '../views/ClientRegistration.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register-product',
    name: 'RegisterProduct',
    component: ProductRegistration
  },
  {
    path: '/register-client',
    name: 'RegisterClient',
    component: ClientRegistration
  }

];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
