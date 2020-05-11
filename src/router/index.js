import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Tour from '../views/Tour.vue'

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    name: 'root',
    redirect: '/tour'
  },
  {
    path: '/tour',
    name: 'tour',
    component: Tour
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('../views/Other.vue')
  },
  {
    path: '/cooking',
    name: 'cooking',
    component: () => import('../views/Cooking.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
