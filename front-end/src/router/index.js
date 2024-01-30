// Purpose: Handle routing for the application.
import { createRouter, createWebHistory } from 'vue-router'

// Create a new router instance.
const router = createRouter({

   // Use HTML5 history mode for cleaner URLs.
  history: createWebHistory(),

  // Define routes.
  routes:[
    { path: '/Login', component:  () => import('../views/LoginPage.vue') },
    { path: '/', component: () => import('../views/HomePage.vue')},
    { path: '/user', component: () => import('../views/UserPage.vue')},
    { path: '/aboutus', component: () => import('../views/AboutUsPage.vue')}
  ]
})

export default router
