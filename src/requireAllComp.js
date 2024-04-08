import Vue from "vue";

const componentsContext = require.context("./components", true, /\.vue$/);

componentsContext.keys().forEach((path) => {
  const componentConfig = componentsContext(path).default;
  Vue.component(componentConfig.name, componentConfig);
});
