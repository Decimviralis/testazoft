import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyAwiHkNvJxvyN1-D7borUuh840yjHIOP3c",
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
