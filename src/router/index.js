import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue';
import Dispatcher from '../views/DispatcherView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dispatcher',
    name: 'Dispatcher',
    component: Dispatcher
  }
]

const router = new VueRouter({
  routes
})

export default router
