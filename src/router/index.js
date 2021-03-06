import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import auth from './modules/auth'
import dashboard from './modules/dashboard'

Vue.use(VueRouter)

const routes = [
  {
    // will match everything
    path: '*',
    template:"<template><div>404</div></template>"
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...auth,
  ...dashboard
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
