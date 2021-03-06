var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
var APP_DIR = path.resolve(__dirname, 'src/frontend/app');
var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
          {    test: /\.js$/,
               include:APP_DIR,
               loader: "babel-loader",
               query: {
              presets: ["react", "es2015"]
           }
         },
         {
   test: /\.css$/,
   use: [
     {
       loader: 'style-loader'
     },
     {
       loader: 'css-loader',
       options: {
         modules: true,
         camelCase: true,
         sourceMap: true
       }
     }
   ]
 },
 {
  test: /\.(png|jpg)$/,
   loader: 'url-loader?limit=8192'
  }

     ]
   },
};
module.exports = config;
