import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/index"),
    meta: { title: "首页", menuOrder: 1 },
  },
]; 
console.log("asdasd", routes);
*/
/* 
  来源：渡一前端必修课 222集，
  时间：20240406 
*/
/*
 获取目录结构的时态，只有在编译时态才可以读取到源代码
 涉及到工程化，该工程是用什么搭建的？
 vue-cli搭建，该工程用到的是webpack，它可以支持编译时态对目录结构的读取
 通过 require.context
 */
// 读取view页面下所有的page.js
// const pages = require.context("../views/**/page.js");
// const pages = require.context("../views", true, /\/page\.js$/);
// console.log("pages", pages);

const pagesContext = require.context("../views", true, /\/page\.js$/);

// const comps = require.context("../views", true, /\/index\.vue$/);

// console.log("asdasdasdasd", comps);
// console.log("asdasdasdasd", comps);
// 获取匹配的模块路径数组
const matchedPaths = pagesContext.keys();

// 遍历匹配的路径数组
const routes = [];
matchedPaths.forEach((path) => {
  // 获取相对路径
  const relativePath = path.slice(2); // 去除 './' 前缀
  // 加载模块
  const pageModule = pagesContext(path);
  // 获取导出结果
  const exports = pageModule.default || pageModule; // 如果使用了ES6的export default，则取default属性
  // 输出相对路径和导出结果
  console.log("相对路径:", relativePath);
  console.log("导出结果:", exports);

  // 去掉路径的前后的数据 || 如果出现为空的情况就给予 '/'
  path = path.replace(".", "").replace("/page.js", "") || "/";
  const name = path.split("/").filter(Boolean).join("-") || "index";
  routes.push({
    path,
    name,
    component: () => import(`../views/${relativePath}`),
  });
  // return {
  //   path,
  //   name,
  //   component: () => import(`../views/${relativePath}`),
  // };
});
console.log("routes", routes);

export const router = new Router({
  routes: routes,
});

// export default router;
