// 原生模块，处理路径
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 导出模块
module.exports = {
    // 模式
    // mode: 'development',
    mode: 'production',
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
                test: /\.js$/,
                // 除了node_modules和bower_components之外
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
            // {
            //     // 匹配后缀为css的文件
            //     test: /\.lin$/,
            //     // 用两个加载器style-loader和css-loader
            //     use: ['eno-loader']
            // }
        ]
    },
    // 插件
    plugins: [
        // new UglifyJsPlugin()
    ]
};