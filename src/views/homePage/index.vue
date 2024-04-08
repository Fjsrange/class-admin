<template>
  <div>{{ msg }}
    <el-button type="success" @click="handleBtn">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {
    handleBtn() {
      if (this.$route) {
        this.$router.push('teachManage')
      }
    },
  },
};
</script>

<style scoped></style>
