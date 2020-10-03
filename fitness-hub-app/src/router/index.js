import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../layouts/LayoutLandingPage'),
    children: [
      {
        path: '',
        name: 'LandingPage',
        component: () => import('../views/LandingPage')
      }
    ]
  },
  {
    path: '/userHome',
    component: () => import('../layouts/LayoutDefault'),
    children: [
      {
        path: '',
        name: 'UserHome',
        component: () => import('../views/UserHome')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    component: () => import('../layouts/LayoutLandingPage'),
    children: [
      {
        path: '',
        name: 'PageNotFound',
        component: () => import('../views/Error404.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
