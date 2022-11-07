import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Order from '@/pages/Oder';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/cart', component: Cart },
  { path: '/order', component: Order },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
