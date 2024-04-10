<template>
  <el-container>
    <!-- 左侧导航栏 -->
    <el-aside width="100" class="aside">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
      <el-menu default-active="1-3-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-menu-item index="2">
          <img src="../assets/logo.png" width="34px" v-if="isCollapse" style="margin-left: -5px;">
          <span slot="title" class="logo">ZHIJIAO · 云课堂</span>
        </el-menu-item>
        <el-menu-item index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ title }}</span>
          </template>
        </el-menu-item>
        <!-- <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group> -->
        <el-submenu index="2">
          <template slot="title">
            <!-- <i class="el-icon-menu"></i> -->
            <span slot="title">导航二</span>
          </template>

          <el-menu-item-group>
            <el-menu-item index="2-1" @click="navTo('course')">课程</el-menu-item>
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
      </el-menu>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <el-header>
        <el-row>
          <el-col class="curr" :span="1">
            <i @click="collapse" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
          </el-col>
          <el-col :span="16">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="7" style="display: flex; justify-content: right; align-items: center;">
            <i class="el-icon-full-screen curr1"></i>
            <el-avatar icon="el-icon-user-solid avatarUser"></el-avatar>
            <span class="title">王小虎</span>
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>

      </el-header>

      <el-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      isCollapse: false,
      title: '',
    }
  },
  mounted() {
    console.log(this.$route);
    if (this.$route) {
      this.title = this.$route.meta.title;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 打开侧边栏
    collapse() {
      this.isCollapse = !this.isCollapse
    },
    // 点击侧边栏去往哪个页面
    navTo(aa) {
      console.log(aa);
      this.$router.push(aa)

    },
  },
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 200px;
  /* min-height: 400px; */
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
}

.el-submenu__title {
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
  color: rgb(191, 203, 217);
  background-color: #2c3e50;
  text-align: left;
}

.el-submenu {
  text-align: left;
}

.el-header {
  height: 56px;
  line-height: 56px;
  font-size: 24px;
  color: #000;
  background-color: white;
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


.avatarUser {
  margin: 0 10px;
}

.title {
  margin-right: 10px;
}
</style>
