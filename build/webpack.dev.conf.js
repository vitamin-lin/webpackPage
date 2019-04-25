const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigDev = {
    mode: 'development', // 通过 mode 声明开发环境
    
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 打包多出口文件
        filename: './js/[name].bundle.js'
    },

    plugins: [
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
        })
    ],

    devtool: "source-map", // 开启调试模式

    devServer: {
        contentBase: path.join(__dirname, "../src"),
        publicPath: '/',
        host: "192.168.10.32", // 更换你对应的Wi-Fi域名
        port: "3000",
        overlay: true, // 浏览器页面上显示错误
        open: true, // 开启浏览器
        stats: "errors-only", //stats: "errors-only"表示只打印错误：
        hot: true, // 开启热更新
        //服务器代理配置项
        proxy: {
            '/api/*': {
                target: 'http://huggies-py.kmapp.cn',
                // secure: false,// 如果是https接口，需要配置这个参数
                changeOrigin: true,    
                pathRewrite: {
                    '^/api': ''
                }   
            }
        }
    },
}
module.exports = merge(webpackConfigBase, webpackConfigDev);