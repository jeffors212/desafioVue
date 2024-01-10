import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes de página aqui
import HomePage from '../views/HomePage.vue';
import ProductRegistration from '../views/ProductRegistration.vue';

// Defina as rotas
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
  // Adicione mais rotas conforme necessário
];

// Crie e exporte o roteador
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
