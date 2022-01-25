import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import inspectorEdit from '../components/inspectorEdit.vue'
import inspectorForm from '../components/inspectorForm.vue'
import inspectorView from '../components/inspectorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/inspectoredit',
    name: 'inspectorEdit',
    component: inspectorEdit
  },
  {
    path: '/inspectorform',
    name: 'inspectorForm',
    component: inspectorForm
  },
  {
    path: '/inspectorview',
    name: 'inspectorView',
    component: inspectorView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
