<template>
  <div class="login-container">
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-width="100px"
      class="login-form"
      label-position="left"
    >
      <div>
        <h3>登录</h3>
      </div>
      <el-form-item label="账号" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm('form')" style="width: 30%"
        >立即创建</el-button
      >
    </el-form>
  </div>
</template>

<script>
import auth from "@/mock/auth";

export default {
  name: "login",
  components: {},
  data() {
    return {
      form: {
        userName: "admin",
        password: "123456",
      },
      redirect: undefined,
      rules: {
        name: [
          // { required: true, message: "请输入活动名称", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    JSON.parse(JSON.stringify(auth));
    // 将auth对象转换为JSON字符串，并将其存储在localStorage中
    localStorage.setItem("auth", JSON.stringify(auth));
  },
  watch: {
    handle: function (route) {
      this.redirect = route.query && route.query.redirect;
    },
    immediate: true,
  },
  methods: {
    // 登录
    submitForm() {
      console.log("登录", this.form);
      this.$router.push({ path: this.redirect || "/" });
    },
  },
};
</script>

<!-- <style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
 -->
<style scoped>
.login-container {
  width: 40%;
  display: inline-block;
  margin-top: 21%;
}
</style>
