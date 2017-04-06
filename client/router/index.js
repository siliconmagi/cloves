import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard/'
import Post from '../views/Post/'
import About from '../views/About/'
import Vuex from '../views/Vuex/'

Vue.use(Router)

export const routes = [{
  path: '/',
  component: Dashboard,
  meta: {
    title: 'Nightshell'
  }
}, {
  path: '/post/:id',
  component: Post,
  meta: {
    title: 'Post'
  }
}, {
  path: '/about',
  component: About,
  meta: {
    title: 'About'
  }
}, {
  path: '/vuex',
  component: Vuex,
  meta: {
    title: 'Vuex'
  }
}]
export const router = new Router({
  mode: 'hash',
  routes
})
