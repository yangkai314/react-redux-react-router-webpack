/**
 * Created by dell on 2017/3/7.
 */
let webpack=require('webpack');
let config=require('./webpack.config');
let WebpackDevServer = require('webpack-dev-server');

const PORT=8000;
const HOST='0.0.0.0';

// 本地环境静态资源路径
let localPublicPath = 'http://'+HOST+':' + PORT + '/';

// config.output.publicPath = localPublicPath;
config.entry.app.unshift('webpack-dev-server/client?' + localPublicPath);

let args = process.argv;
let hot = args.indexOf('--hot') > -1;

// 开启热替换相关设置
if (hot === true) {
  config.entry.app.unshift('webpack/hot/only-dev-server');
  // 注意这里 loaders[0] 是处理 .js 文件的 loader
  config.module.loaders[0].loader.unshift('react-hot-loader');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}


new WebpackDevServer(webpack(config), {
  hot: hot,
  inline: true,
  compress: true,
  stats: {
    chunks: false,
    children: false,
    colors: true
  },
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,
}).listen(PORT, HOST, function() {
  console.log(localPublicPath);
});