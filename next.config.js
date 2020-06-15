const withStyles = require('@webdeb/next-styles')
const withImages = require('next-images')
// next-styles
// 支持less和scss的next插件 老外写的
// 这个插件支持create-react-app的样式写法支持
// 自动识别module.(scss|sass|less)为模块化样式
// xxx.scss为全局样式
module.exports = withImages(withStyles({
  modules: true,
  sass: true, // use .scss files
  cssLoaderOptions: {
    importLoaders: 2,
  },
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["./src"], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
    },
  },
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(jpeg|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
}))
