import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home'
import login from '@/components/LoginLayout'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'appHome',
        component: home,
      },
      {
        path: '/login',
        name: 'login',
        component: login,
      },


    ]
})

export default router