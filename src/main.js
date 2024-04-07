import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import router from "./router";

// 引入element-ui 组件及样式
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
