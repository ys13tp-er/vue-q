// 原生模块，处理路径
const path = require('path');
// 导出模块
module.exports = {
    // 模式 开发者和生产模式
    // mode: 'development',
    // 开发前用development，发布用production
    mode: 'production',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 被绑好的bundle.js，定义输出的文件名为bundle.js
        filename: 'bundle.js',
        // 指定输出的路径
        path: path.resolve(__dirname, 'dist')
    }
};