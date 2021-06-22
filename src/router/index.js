import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: import('../views/Front.vue'),
    children: [
      {
        path: '',
        component: import('../views/Index.vue')
      },
      {
        path: 'products',
        component: import('../views/Products.vue')
      },
      {
        path: 'cart',
        component: import('../views/Cart.vue')
      }]
  },
  {
    path: '/admin',
    component: import('../views/Dashborad.vue'),
    children: [{
      path: 'products',
      component: import('../views/admin/Products.vue')
    },
    {
      path: 'order',
      component: import('../views/admin/Order.vue')
    }
    ]
  },
  {
    path: '/login',
    component: import('../views/Login.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
