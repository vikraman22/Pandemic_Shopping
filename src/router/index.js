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
   path: '/customer',
   name: 'Customerpage', 
   component: Customerhome,
   children:[
     
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../components/Profile.vue')
     },
     {
      path: '/CustomerHome',
      name: 'Chome',
      component: () => import('../components/Chome.vue')
     },
     {
      path: '/Customer/Notification',
      name: 'Notification',
      component: () => import('../components/Notification.vue')
     },
     {
      path: '/Customer/Yourorder',
      name: 'Yourorder',
      component: () => import('../components/Yourorder.vue')
     },
     {
      path: '/Nearbystore',
      name: 'Nearby',
      component: () => import('../components/Nearby.vue'),
     },
     {
      path: '/Additem',
      name: 'Additem',
      component: () => import('../components/Additem.vue'),
      props: true
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
        path: '/Store/Temporaryorder',
        name: 'Temporder',
        component: () => import('../components/Temporder.vue')
       },
        {
            path: '/Temporaryorder/minimum',
            name: 'Tmin',
            component: () => import('../components/Tmin.vue')
           },
           {
            path: '/Temporaryorder/maximum',
            name: 'Tmax',
            component: () => import('../components/Tmax.vue')
           },
        
      
       {
        path: '/Store/Confirmorder',
        name: 'Confirmorder',
        component: () => import('../components/Confirmorder.vue')
       },
       {
        path: '/Store/Confirmorder/minimum',
        name: 'Cmin',
        component: () => import('../components/Cmin.vue')
       },
       {
        path: '/Store/Confirmorder/maximum',
        name: 'Cmax',
        component: () => import('../components/Cmax.vue')
       },
       {
        path: '/Store/Vieworder',
        name: 'Vieworder',
        component: () => import('../components/Vieworder.vue'),
        props: true
       },
    ]
   },
      
  
      
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
