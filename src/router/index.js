import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import PostIdPage from '../views/PostIdPage.vue'
import VuexPage from '../views/VuexPage.vue'
import PostIdPageStore from '@/views/PostIdPageStore.vue'
import HooksPage from '@/views/HooksPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: AboutView,
    },
    {
      path: '/posts/:id',
      name: 'открыть',
      component: PostIdPage,
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: VuexPage,
    },
    {
      path: '/vuex/:id',
      component: PostIdPageStore,
    },
    {
      path: '/hooks',
      component: HooksPage,
    },
  ],
})

export default router
