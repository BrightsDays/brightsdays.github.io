import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/PageContent.vue')
  },
  {
    path: '/articles/os-mtg-kak-nachaty-igrat',
    name: 'Old School MTG: Как начать играть?',
    component: () => import('../views/articles/os-mtg-kak-nachaty-igrat.vue')
  },
  {
    path: '/articles/old-school-deck-dead-guy-ale',
    name: 'Old School Deck: Dead Guy Ale',
    component: () => import('../views/articles/old-school-deck-dead-guy-ale.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
