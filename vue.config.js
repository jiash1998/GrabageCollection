module.exports = {
<<<<<<< HEAD
  //防止打包之后无法访问
=======
>>>>>>> 4f25e7f036344c5ea638416a832575428ce819a5
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
