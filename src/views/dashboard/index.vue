<template>
  <div class="dashboard">
    <div class="head">欢迎使用云课堂管理平台，我们致力于打造一个优质的服务平台。</div>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style>
.dashboard {
  height: 100%;
  width: 100%;
  background-image: url(../../assets/welcome.gif);
  background-size: cover;
}

.head {
  text-align: center;
  color: yellowgreen;
  font-size: 40px;
  font-weight: bold;
  padding-top: 100px;
}
</style>
