<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <Sidebar />
    </div>
    <!-- 顶部导航 + 内容-->
    <div class="right">
      <div class="header">
        <Header />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import AppMain from './AppMain';
import Header from './Header';
import Sidebar from './Sidebar';

export default {
  name: 'layout',
  components: { AppMain, Header, Sidebar },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style  scoped>
.layout {
  display: flex;
}

.right {
  flex: 1;
}
</style>
