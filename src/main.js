import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./requireAllComp";

// 引入element-ui 组件及样式
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入全局组件

Vue.config.productionTip = false;

// Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
