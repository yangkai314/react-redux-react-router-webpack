let webpack=require('webpack');
let config=require('./webpack.config');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

config.module.loaders[1].loader=ExtractTextPlugin.extract(
  { fallback: 'style-loader', use: 'css-loader?minimize!sass-loader?sourceMap' }
);
config.plugins=config.plugins.concat(
  [
    new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    }), //最小化一切
    new webpack.optimize.AggressiveMergingPlugin()//合并块
  ]
);

console.log(config.plugins);

function callback(err, stats) {
  if (err) {
    console.log(err);
  } else {
    console.log(stats.toString({
      colors: true,
      chunks: false,
      children: false,
    }));
  }
}
var compiler = webpack(config);
compiler.run(callback);