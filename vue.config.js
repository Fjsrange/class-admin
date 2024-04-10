const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 配置开发服务器
    https: true, // 启用 HTTPS
  },
  lintOnSave: false,
});
