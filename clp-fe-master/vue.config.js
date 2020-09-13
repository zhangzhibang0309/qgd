module.exports = {
  devServer: {
    proxy: {
      "/user": {
        target: "http://localhost:10086",
        changeOrigin: true
      }
    }
  }
};
