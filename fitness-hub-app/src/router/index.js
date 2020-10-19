import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../layouts/LayoutLandingPage'),
    children: [
      {
        meta: {requiresUnauth: true},
        path: '',
        name: 'LandingPage',
        component: () => import('../views/LandingPage')
      },
      {
        meta: {requiresUnauth: true},
        path: 'verifyAccount',
        name: 'VerifyAccount',
        component: () => import('../views/VerifyAccount')
      },
    ]
  },
  {
    path: '/home',
    component: () => import('../layouts/LayoutDefault'),
    children: [
      {
        meta: {requiresAuth: true},
        path: '',
        name: 'Home',
        component: () => import('../views/Home')
      },
      {
        meta: {requiresAuth: true},
        path: 'createRoutine',
        name: 'CreateRoutine',
        component: () => import('../views/CreateRoutine')
      },
      {
        meta: {requiresAuth: true},
        path: 'communityWorkouts',
        name: 'CommunityWorkouts',
        component: () => import('../views/CommunityWorkouts')
      },
      {
        meta: {requiresAuth: true},
        path: 'myRoutines',
        name: 'MyRoutines',
        component: () => import('../views/MyRoutines')
      },
      {
        meta: {requiresAuth: true},
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/Profile')
      },
      {
        meta: {requiresAuth: true},
        path: 'routine',
        name: 'Routine',
        component: () => import('../views/Routine')
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

store.dispatch('tryLogin').catch((e)=>{
  console.log(e);
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.get('isAuthenticated')) {
    next('/');
  } else if (to.meta.requiresUnauth && store.get('isAuthenticated')) {
    next('/home');
  } else {
    next();
  }
});

export default router
