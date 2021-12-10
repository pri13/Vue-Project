import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueResource from 'vue-resource'
import JQuery from 'jquery'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

window.$ = window.jQuery = JQuery;

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/popover.js';





Vue.config.productionTip = false
Vue.use(VueResource);







new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
