import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
    meta: { title: "登录" },
  },
  {
    path: "/",
    // name: Layout,
    component: Layout,
    redirect: "/dashboard",
    meta: { title: "首页", icon: "el-icon-s-home" },
    // component: () => import("@/layout/index"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard"),
        meta: { title: "首页", icon: "el-icon-s-home" },
      },
    ],
  },
  {
    path: "/teachManage",
    component: Layout,
    name: "TeachManage",
    meta: { title: "教学管理", icon: "el-icon-s-goods" },
    children: [
      {
        path: "/course",
        name: "Course",
        component: () => import("@/views/teachManage/course"),
        meta: { title: "课程" },
      },
      {
        path: "/questionBank",
        name: "QuestionBank",
        component: () => import("@/views/teachManage/questionBank"),
        meta: { title: "题库" },
      },
      {
        path: "/answering",
        name: "Answering",
        component: () => import("@/views/teachManage/answering"),
        meta: { title: "答疑" },
      },
      {
        path: "/courseCategory",
        name: "courseCategory",
        component: () => import("@/views/teachManage/courseCategory"),
        meta: { title: "课程分类" },
      },
      {
        path: "/subjectCategory",
        name: "subjectCategory",
        component: () => import("@/views/teachManage/subjectCategory"),
        meta: { title: "题目类型" },
      },
      {
        path: "/test",
        name: "test",
        component: () => import("@/views/teachManage/test"),
        meta: { title: "测试" },
      },
      {
        path: "/live",
        name: "live",
        component: () => import("@/views/teachManage/live"),
        meta: { title: "直播" },
      },
      {
        path: "/video",
        name: "video",
        component: () => import("@/views/teachManage/video"),
        meta: { title: "视频管理" },
      },
    ],
  },
  // {
  //   path: "/",
  //   component: Layout,
  //   redirect: "/",
  //   children: [
  //     {
  //       path: "/",
  //       name: "home",
  //       component: () => import("@/views/index"),
  //       meta: { title: "首页", icon: "el-icon-s-home" },
  //     },
  //   ],
  // },
  // {
  //   path: "/teachManage",
  //   name: "teachManage",
  //   meta: { title: "教学管理" },
  //   children: [
  //     {
  //       path: "/course",
  //       name: "courseIndex",
  //       component: () => import("@/views/teachManage/course"),
  //       meta: { title: "课程" },
  //     },
  //   ],
  // },
  /* {
    path: "/",
    name: "homeIndex",
    component: () => import("@/views/index"),
    meta: { title: "首页" },
    children: [
      {
        path: "/",
        name: "dashboardHome",
        component: () => import("@/views/dashboard"),
        meta: { title: "首页", icon: "el-icon-s-home" },
      },
    ],
  },
  {
    path: "/teachManage",
    name: "teachManage",
    meta: { title: "教学管理" },
    children: [
      {
        path: "/course",
        name: "courseIndex",
        component: () => import("@/views/teachManage/course"),
        meta: { title: "课程" },
      },
    ],
  },
   */
];

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

/* const pagesContext = require.context("../views", true, /\/page\.js$/);
const comps = require.context("../views", true, /\/index\.vue$/);

comps.keys().forEach((path) => {
  const compConfig = comps(path).default;
  // 全局注册
  Vue.component(compConfig.name, compConfig);
});

// console.log("comps", comps);
const pageComps = comps.keys();
const fileComps = pageComps.map((path) => "../view/" + path.slice(2));
// console.log("fileComps", fileComps);
const fileCompsObject = fileComps.reduce((acc, filePath) => {
  acc[filePath] = true; // 你也可以将值设置为其他你想要的内容，这里我简单设置为 true
  // acc[filePath] = console.log("accacc", acc);

  return acc;
}, {});

console.log("fileCompsObject", fileCompsObject);

// 遍历匹配的路径数组
let routes = [];
// 获取匹配的模块路径数组
pagesContext.keys().forEach((path) => {
  // 获取相对路径
  const relativePath = path.slice(2); // 去除 './' 前缀
  // 加载模块
  const pageModule = pagesContext(path);
  // 获取导出结果
  const exports = pageModule.default || pageModule; // 如果使用了ES6的export default，则取default属性
  // 输出相对路径和导出结果
  // console.log("相对路径:", relativePath);
  // console.log("导出结果:", exports);
  const pages = [];
  pages[`../views/${relativePath}`] = exports;
  routes = Object.entries(pages).map(([path, meta]) => {
    const pageJsPath = path;
    // 去掉路径的前后的数据 || 如果出现为空的情况就给予 '/'
    path = path.replace("../views", "").replace("/page.js", "") || "/";
    const name = path.split("/").filter(Boolean).join("-") || "index";
    const compPath = pageJsPath.replace("page.js", "index.vue");
    // console.log("pageComps[comPath]", fileCompsObject);
    console.log("pageComps[comPath]", compPath);
    // console.log("pageComps[compPath]", fileCompsObject[compPath]);

    return {
      path,
      name,
      // component: () => import("../views/homePage/index.vue"), //这里有问题
      // component: fileCompsObject[compPath],
      meta,
    };
  });
  console.log("routes:", routes);
});
// console.log("matchedPaths", matchedPaths);

console.log("routes666", routes); */

const router = new Router({
  routes: routes,
});

export default router;
