import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import { ClientTable } from 'vue-tables-2';
Vue.use(ClientTable);

Vue.use(axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
