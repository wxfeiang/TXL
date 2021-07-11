const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  outputDir: 'dist', // 构建输出目录
  // assetsPublicPath: '/',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度

  configureWebpack: (config) => {
    // 开启分离js
    config.optimization = {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            },
          },
        },
      },
    }
    // 取消webpack警告的性能提示
    config.performance = {
      hints: 'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      },
    }
  },

  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: {
    // 第三方插件配置
  },

  pwa: {
    // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {
    open: true,
    // host: 'localhost',
    port: 8090,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://work.yogoo.net/weworkapi/api/',
        ws: true,
        changOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '',
        },
      },
      '/jsonplace': {
        target: 'http://jsonplaceholder.typicode.com/users',
        ws: true,
        changOrigin: true, // 是否跨域
        pathRewrite: {
          '^/jsonplace': '',
        },
      },
    },
    before: (app) => {},
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    modules: false, // 启用 CSS modules for all css / pre-processor files.
  },
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          // 要公用的scss的路径
          resources: './src/assets/style/gloab.scss',
        })
        .end()
    })
  },
}
