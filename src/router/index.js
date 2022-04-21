import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: () => import('../views/TopView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue')
  },{
    path: '/mydata',
    name: 'mydata',
    component: () => import('../views/MyView.vue')
  },{
    path: '/game',
    name: 'game',
    component: () => import('../views/GameView.vue')
  },{
    path: '/more',
    name: 'more',
    component: () => import('../views/MoreView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
