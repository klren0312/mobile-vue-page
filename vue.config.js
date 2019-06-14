const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
const path = require('path')

module.exports = {
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, './shell'), // 用来存储 shell 文件的地址
        staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
        routes: ['/'], // 将需要生成骨架屏的路由添加到数组中
        port: '9999',
        excludes: ['.van-nav-bar', '.van-tabbar'],  // 需要忽略的css选择器
        text: {
          color: '#EEEEEE'
        },
        image: {
          shape: 'rect', // `rect` | `circle`
          color: '#EFEFEF',
          shapeOpposite: []
        },
        button: {
          color: '#EFEFEF',
          excludes: [] 
        },
        svg: {
          color: '#EFEFEF',
          shape: 'circle', // circle | rect
          shapeOpposite: []
        },
        pseudo: {
          color: '#EFEFEF', // or transparent
          shape: 'circle' // circle | rect
        },
        device: 'iPhone 6 Plus',
        debug: false,
        minify: {
          minifyCSS: { level: 2 },
          removeComments: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: false
        },
        defer: 5000,
        remove: [],
        hide: [],
        grayBlock: [],
        cssUnit: 'rem',
        decimal: 4,
        logLevel: 'info',
        quiet: false,
        noInfo: false,
        logTime: true
      })
    ],
  },
  chainWebpack: (config) => {   // 解决vue-cli3脚手架创建的项目压缩html 干掉<!-- shell -->导致骨架屏不生效
    if (process.env.NODE_ENV !== 'development') {
      config.plugin('html').tap(opts => {
        opts[0].minify.removeComments = false
        return opts
      })
    }
  }
}
