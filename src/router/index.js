import Vue from 'vue'
import VueRouter from 'vue-router'

import Navbar from '../components/Navbar'
import TodoApp from '../components/TodoApp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/todoApp',
    name: 'todoApp',
    component: TodoApp
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
