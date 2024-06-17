import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Theology from '../views/Theology.vue'
import Life from '../views/Life.vue'
import Confession from '../views/Confession.vue'
import Heresy from '../views/Heresy.vue'
import Introduce from '../views/menu/Introduce.vue'
import PastorIntroduce from "@/views/menu/PastorIntroduce.vue";
import Vision from "@/views/menu/Vision.vue";
import ServePerson from "@/views/menu/ServePerson.vue";
import Worship from '../views/menu/Worship.vue'
import Map from '../views/menu/Map.vue'
import AnnualEvent from '../views/menu/AnnualEvent.vue'

import SundaySchool from "@/views/menu/SundaySchool.vue";
import RaonStudents from "@/views/menu/RaonStudents.vue";
import WeareYouth from "@/views/menu/WeareYouth.vue";

import Feed from "@/views/menu/Feed.vue";
import Consulting from "@/views/menu/Consulting.vue";

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
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },,
    {
      path: '/pastorIntroduce',
      name: 'pastorIntroduce',
      component: PastorIntroduce
    },
    {
      path: '/vision',
      name: 'vision',
      component: Vision
    },
    {
      path: '/servePerson',
      name: 'servePerson',
      component: ServePerson
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/worship',
      name: 'worship',
      component: Worship
    },
    {
      path: '/annualEvent',
      name: 'annualEvent',
      component: AnnualEvent
    },
    {
      path: '/sundaySchool',
      name: 'sundaySchool',
      component: SundaySchool
    },
    {
      path: '/raonStudents',
      name: 'raonStudents',
      component: RaonStudents
    },
    {
      path: '/weareYoute',
      name: 'weareYoute',
      component : WeareYouth
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/consulting',
      name: 'consulting',
      component: Consulting
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

export default router
