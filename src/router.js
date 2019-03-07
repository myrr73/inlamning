import Vue from 'vue'
import Router from 'vue-router'
// import Hem from './views/Hem.vue'
// import OmOss from './views/OmOss.vue'
// import Butik from './views/Butik.vue'
// import Kundvagn from './views/Kundvagn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Hem.vue')
    },
    {
      path: '/OmOss',
      name: 'info',
      component: () => import('./views/OmOss.vue')
    },
    {
      path: '/Butik',
      name: 'Shop',
      component: () => import('./views/Butik.vue')
    },
    
    {
      path: '/Kundvagn',
      name: 'Kundvagn',
      component: () => import('./views/Kundvagn.vue')
    },
  ]
})
