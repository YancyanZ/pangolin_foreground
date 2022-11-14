const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars:{
          //   'primary-color': '#f6ab39', // 全局主色
          // },
          javascriptEnabled: true,
        },
      },
    },
  },
  // 跨域处理
  devServer: {
    // development server port 8000
    port: 80,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/api': {
        target: `http://127.0.0.1:8080`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
});
