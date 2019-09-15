// 原生模块，处理路径
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 导出模块
module.exports = {
    // watch: true,
    // 模式
    // mode: 'development',
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 加载器
    module: {
        rules: [{
                // 匹配后缀为css的文件
                test: /\.css$/,
                // 用两个加载器style-loader和css-loader
                use: ['style-loader', 'css-loader']
            },
            {
                // 匹配后缀为css的文件
                test: /\.html|htm$/,
                // 用两个加载器style-loader和css-loader
                use: ['html-loader']
            },
            {
                // 处理vue单文件组件
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // 插件
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
        // new UglifyJsPlugin()
    ]
};