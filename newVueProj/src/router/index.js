import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nerd from '@/components/Nerd'
import Champions from '@/components/Champions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Nerd',
      name: 'Nerd',
      component: Nerd
    },
    {
      path: '/champions',
      name: 'Champions',
      component: Champions
    }
  ]
})
