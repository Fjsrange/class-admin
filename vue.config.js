const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 配置开发服务器
    https: true, // 启用 HTTPS
    proxy: {
      // 配置代理
      "/api": {
        target: "http://localhost:3000", // 目标服务器地址
        changeOrigin: true,
      },
    },
  },
  lintOnSave: false,
});
