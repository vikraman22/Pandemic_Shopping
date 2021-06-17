import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Customerhome from '../views/Customerhome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
   path: '/customerhome',
   name: 'Customerhome', 
   component: Customerhome,
   children:[
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../components/Profile.vue')
     },
     {
      path: '/Home',
      name: 'Chome',
      component: () => import('../components/Chome.vue')
     },
     {
      path: '/Nearbystore',
      name: 'Nearby',
      component: () => import('../components/Nearby.vue'),
     },
     {
      path: '/Additem',
      name: 'Additem',
      component: () => import('../components/Additem.vue')
     },
  
   ]
  },
//storepage
  {
    path: '/Store',
    name: 'Storepage',
    component: () => import('../views/Storepage.vue'),
    children:[
      {
        path: '/Store/StoreProfile',
        name: 'Storeprofile',
        component: () => import('../components/Storeprofile.vue')
       },

       {
        path: '/Storehome',
        name: 'Storehome',
        component: () => import('../components/Shome.vue')
       },
       {
        path: '/Store/Temporaryorder',
        name: 'Temporder',
        component: () => import('../components/Temporder.vue')
       },
       {
        path: '/Store/Confirmorder',
        name: 'Confirmorder',
        component: () => import('../components/Confirmorder.vue')
       },
    ]
   },
      
  
      
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
