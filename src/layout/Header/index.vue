<template>
  <div class="header">

    <!-- <el-container> -->
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
          <el-avatar icon="el-icon-user-solid" class="avatarUser"></el-avatar>
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
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      isCollapse: true,
    }
  },
  methods: {
    // 打开侧边栏
    collapse() {
      this.isCollapse = !this.isCollapse
      this.$bus.$emit('collapse', this.isCollapse)
    },
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 56px;
  line-height: 56px;
  font-size: 24px;
  color: #000;
  background-color: white;
}

.curr {
  cursor: pointer;
}

.el-breadcrumb {
  height: 20px;
  line-height: 36px;
  padding: 10px;
}

.curr1 {
  cursor: pointer;
  width: 30px;
}

.avatarUser {
  width: 37px;
  height: 37px;
  margin: 0 10px;
}

.title {
  font-size: 14px;
}
</style>
