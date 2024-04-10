<template>
  <el-container>
    <el-aside width="100" class="aside">
      <el-menu :default-active="'/' || activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-menu-item>
          <img src="../../assets/logo.png" width="34px" v-if="isCollapse" style="margin-left: -5px;">
          <span slot="title" class="logo">ZHIJIAO · 云课堂</span>
        </el-menu-item>
        <!-- <el-submenu index="/"> -->
        <el-menu-item index="/" @click="navTo('/')">
          <i :class="icon" style="color: #bfcbd9" aria-hidden="true"></i>
          <span slot="title"> {{ title }}</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i :class="icon" style="color: #bfcbd9" aria-hidden="true"></i>
            <span>教学管理</span>
          </template>

          <el-menu-item-group>
            <el-menu-item index="2-1" @click="navTo('/course')">课程</el-menu-item>
            <el-menu-item index="2-2">题库</el-menu-item>
            <el-menu-item index="2-3">答疑</el-menu-item>
            <el-menu-item index="2-4">课程分类</el-menu-item>
            <el-menu-item index="2-5">题目类型</el-menu-item>
            <el-menu-item index="2-6">测试</el-menu-item>
            <el-menu-item index="2-7">直播</el-menu-item>
            <el-menu-item index="2-8">视频管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <div v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {
      isCollapse: false,
      title: '',
      icon: '',
      activeIndex: '0-0',
      routers: [],
      menuItem: [],
    }
  },
  created() {
    this.$bus.$on('collapse', this.collapse);
  },
  mounted() {
    console.log('this.$route', this.$router.options.routes);
    this.$router.options.routes.forEach(item => {
      console.log(item);
      const { title, icon } = item.meta;
      this.routers.push({
        title: title,
        icon: icon,
        path: item.path,
        type: 1,
        parent: '',
        children: item.children
      })
      if (item.children && item.children.length > 0) {
        item.children.forEach(item1 => {
          this.menuItem.push({
            title: item1.meta.title,
            path: item1.path,
            type: 2,
            parent: '',
            children: item1.children
          })
        })
      }
    })
    console.log('routers', this.routers);
    console.log('menuItem', this.menuItem);

    if (this.$route) {
      const { title, icon } = this.$route.meta;
      this.title = title;
      this.icon = icon;
    }
  },
  beforeDestroy() {
    this.$bus.$off('collapse', this.collapse);
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log('打开折叠面板', key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log('关闭折叠面板', key, keyPath);
    },
    // 打开侧边栏
    collapse(data) {
      this.isCollapse = data;
    },
    // 点击侧边栏去往哪个页面
    navTo(path) {
      console.log(path, this, this.$router);
      this.$router.push(path)
    },
  },
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 200px;
}
</style>
<style>
.body {
  height: 100vh;
}

.el-aside {
  color: #333;
}

.el-menu::-webkit-scrollbar {
  width: 5px !important;
  height: 8px !important;
  background-color: #ebeef5 !important;
}

.el-menu::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
  background-color: rgb(250, 238, 238) !important;
  border-radius: 5px;
}

.el-menu::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
  border-radius: 3px !important;
  background: rgba(255, 255, 255, 1) !important;
}


.el-menu-vertical-demo {
  height: 100vh;
  background-color: #304156;
  overflow: auto;
}

.el-menu {
  color: #bfcbd9;
  background-color: #2c3e50 !important;
}

.el-menu .el-submenu__title {
  color: #bfcbd9;
}

.el-menu-item-group__title {
  background-color: #2c3e50;
}

.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #263445 !important;
}


.el-submenu__title:hover {
  background-color: #263445 !important;
}

.el-menu-item {
  color: rgb(191, 203, 217) !important;
  background-color: #2c3e50 !important;
  text-align: left;
}

.el-menu-item.is-active {
  color: #409EFF !important;
}

.el-submenu {
  text-align: left;
}


.el-breadcrumb {
  height: 20px;
  line-height: 36px;
  padding: 10px;
}

.logo {
  color: #fff;
  font-weight: 600;
  line-height: 50px;
  font-size: 20px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
  text-align: center;
}

.curr {
  cursor: pointer;
}

.curr1 {
  cursor: pointer;
  width: 30px;
}

.title {
  margin-right: 10px;
}
</style>