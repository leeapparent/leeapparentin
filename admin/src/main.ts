import Vue from "vue";
import App from "./App.vue";
import "./plugins/element";
import "./plugins/avue";
import router from "./router";
import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
