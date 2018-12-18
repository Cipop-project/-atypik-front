module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // TODO
    proxy: process.env.mode === 'standalone' ? 'http://www.ftl-oms.com' : 'http://localhost:8080', // string | Object
    before: app => {
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  lintOnSave: false
}
