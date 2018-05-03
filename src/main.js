import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import * as VueGoogleMaps from "vue2-google-maps";

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyA6NowcQ6nIdfpcHFZtWiDmUc8HHurQpzI",
//     libraries: ['places']
//   }
// });

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
