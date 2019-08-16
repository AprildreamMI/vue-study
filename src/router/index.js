import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import transition from '@/components/transition'
import vuecomments from '../components/vueComments'
import todo from '../components/todo'
import timer from '../components/timer'
import WebApp from '../components/WebApp'
import modelFrom from '../components/ModelFrom'
// import vuexGetters from '../components/vuex-getter'


//WbpApp 的子组件
import onePage from '../components/WebApp/subCom/onePage.vue'
import twoPage from '../components/WebApp/subCom/twoPage.vue'
import threePage from '../components/WebApp/subCom/threePage.vue'

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
    },
    {
      path: '/timer',
      name: 'timer',
      component: timer
    },
    {
      path: '/webApp',
      name: 'webApp',
      component: WebApp,
      children: [
        {
          path:'onePage',
          component: onePage
        },
        {
          path:'twoPage',
          component: twoPage
        },
        {
          path:'threePage',
          component: threePage
        }
      ]
    },
    {
      path: '/modelFrom',
      name: 'modelFrom',
      component: modelFrom
    },
    {
      path: '/vuex/getters',
      name: 'getters',
      component: () => import('../components/vuex-getter')
    },
    {
      path: '/vuex/mutations',
      name: 'gettersmutions',
      component: () => import('../components/vuex-getter/setCount.vue')
    },
    {
      path: '/element',
      name: 'elmenet',
      component: () => import('../components/elementDemo')
    },
    {
      path: '/element/demoInput',
      name: 'elmenet2',
      component: () => import('../components/elementDemo/demoInput2.vue')
    },
    {
      path: '/element/demo3',
      name: 'demo3',
      component: () => import('../components/elementDemo/demo3.vue')
    },
    {
      path: '/element/demo4',
      name: 'demo4',
      component: () => import('../components/elementDemo/demo4.vue')
    },
    {
      path: '/element/demo5',
      name: 'demo5',
      component: () => import('../components/elementDemo/demo5.vue')
    },
		{
      path: '/scrollLoding',
      name: 'scrollLoding',
      component: () => import('../components/scroll-loading')
    },
		{
      path: '/click-away',
      name: '/click-away',
      component: () => import('../components/click-away')
    },
    {
      path: '/vue-waypoint',
      name: '/vue-waypoint',
      component: () => import('../components/vue-waypoint')
    },
    {
      path: '/vue-waypoint-test02',
      name: '/vue-waypoint-test02',
      component: () => import('../components/vue-waypoint/test02.vue')
    },
    {
      path: '/bus',
      name: '/bus',
      component: () => import('../view/bus/index')
    },
    {
      path: '/books',
      name: '/books',
      component: () => import('../view/scope-solt/index')
    },
    {
      path: '/slots',
      name: '/slots',
      component: () => import('../view/slots/index.vue')
    },
    {
      path: '/components',
      name: '/components',
      component: () => import('../view/componentIs/index.vue')
    },
    {
      path: '/nextTick',
      name: '/nextTick',
      component: () => import('../view/newxtTick/index.vue')
    }
  ]
})
