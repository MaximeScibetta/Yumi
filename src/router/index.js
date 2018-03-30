import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/screens/Home'
import Kart from '@/components/screens/Kart'
import About from '@/components/screens/About'
import Faq from '@/components/screens/Faq'


Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/panier',
    name: 'Kart',
    component: Kart
  },
  {
    path: '/apropos',
    name: 'About',
    component: About
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },

];

const router =  new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

export default router