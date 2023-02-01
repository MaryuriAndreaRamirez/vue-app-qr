import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:id',
    name: 'appQr',
    component: () => import(/* webpackChunkName: "appQr" */ '../views/AppQrLayout.vue'),
    // props: ( route ) => {
    //   return {
    //     id: route.params.id
    //   }
    // }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
