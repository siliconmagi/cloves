import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard/'
import Post from '../views/Post/'
import About from '../views/About/'
import Vuex from '../views/Vuex/'
import Numer from '../views/Numer/'

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
}, {
  path: '/numer',
  component: Numer,
  meta: {
    title: 'Numer'
  }
}]
export const router = new Router({
  mode: 'hash',
  routes
})
