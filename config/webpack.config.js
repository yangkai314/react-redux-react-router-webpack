/**
 * Created by dell on 2017/3/7.
 */
let webpack = require('webpack');
let path = require('path');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname, '../');
//生产目录
const SRC_PATH=ROOT_PATH+'/src';
//产出目录
const DIST_PATH=ROOT_PATH+'/dist';
// node_modules
var NODE_MODULES_PATH =  ROOT_PATH + '/node_modules';

let config = {
  entry : {
    app : [SRC_PATH+'/index.js'],
    lib : [
      'react', 'react-dom' , 'react-router' , 'react-router-scroll' , 'redux' ,'react-redux'
    ]
  },
  output : {
    path : DIST_PATH,
    publicPath : '/',
    filename : 'js/[name].js',
    chunkFilename : 'js/[name].js'
  },
  // 开启sourcemap
  devtool: 'cheap-module-source-map',
  module : {
    loaders : [
      {//es6
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {//sass
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!sass-loader?sourceMap' })
      },
      {//图片处理，小于8k使用base64
        test: /\.(jpg|gif|png|svg)$/,
        loader: 'url-loader?limit=8192&name=img/[name].[ext]'
      }
    ]
  },
  plugins : [
    //css文件单独产出
    new ExtractTextPlugin('css/[name].css'),
    //html
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:SRC_PATH+'/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: ['lib','manifest']})
  ]
};


module.exports = config;