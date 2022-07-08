
export const devServer = {
  proxy: {
    '/API': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
};