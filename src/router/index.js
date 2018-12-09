import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import transition from '@/components/transition'
import vuecomments from '../components/vueComments'
import todo from '../components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/transition',
      name: 'transition',
      component: transition
    },
    {
      path: '/vuecomments',
      name: 'vuecomments',
      component: vuecomments
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    }
  ]
})
