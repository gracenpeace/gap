import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Theology from '../views/Theology.vue'
import Life from '../views/Life.vue'
import Confession from '../views/Confession.vue'
import Heresy from '../views/Heresy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/theology',
      name: 'theology',
      component: Theology
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')

    },
    {
      path: '/life',
      name: 'life',
      component: Life
    },
    {
      path: '/confession',
      name: 'confession',
      component: Confession
    },
    {
      path: '/heresy',
      name: 'heresy',
      component: Heresy
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

export default router
