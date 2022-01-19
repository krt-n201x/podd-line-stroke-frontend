import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer' // Optional
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'primeflex/primeflex.css'
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(PrimeVue);
Vue.component('InputMask', InputMask);
Vue.component('InputText', InputText);
Vue.component('Button', Button);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
