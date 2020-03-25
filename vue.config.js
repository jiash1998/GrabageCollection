module.exports = {
  //打包后 设置路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    port: 8081,
    open: true,
    proxy: {
      "/": {
        target: "http://118.31.12.146:8080",
        ws: true,
        changeOrigin: true //创建一个虚拟服务器，
        // pathRewrite: {
        //   "^/api": "" //通配符
        // }
      }
    }
  }
};
