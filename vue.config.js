const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath:'/faucet/',
  //publicPath:'/',
  outputDir: 'dist',
  lintOnSave: true,
  pages: undefined,
  runtimeCompiler: false,
  productionSourceMap: false,
  // devServer: {
  //   port: 8080,
  //   host: 'localhost',
  //   https: false,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://35.75.90.2:8070',
  //       changeOrigin: true
  //     }
  //   } 
  // },
  configureWebpack:config =>{
    return {
        plugins:[
            new BundleAnalyzerPlugin()
        ]
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
      config.mode = 'production';
      config["performance"] = {//打包文件大小配置
      "maxEntrypointSize": 10000000,
      "maxAssetSize": 30000000
      }
    }
  },
  lintOnSave: false
}
