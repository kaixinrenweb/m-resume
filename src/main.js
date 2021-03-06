import Vue from 'vue'
import Layout from './components/m-layout'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

let Mazey = new Vue({
  el: '#mazey',
  router,
  template: '<Layout/>',
  components: {
    Layout
  },
  data: {
    eventHub: new Vue()
  }
})

Vue.use(Mazey)
