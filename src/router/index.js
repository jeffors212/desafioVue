import { createRouter, createWebHistory } from 'vue-router';


import HomePage from '../views/HomePage.vue';
import ProductRegistration from '../views/ProductRegistration.vue';

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
  }

];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
