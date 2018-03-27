import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/screens/Home'
import Kart from '@/components/screens/Kart'
import About from '@/components/screens/About'
import Faq from '@/components/screens/Faq'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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

  ]
})
