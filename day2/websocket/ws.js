const WebSocket = require('ws');
// 创建了一个websocket的服务器
const wss = new WebSocket.Server({
    port: 8080
});
// 与客户端进行连接
wss.on('connection', function (client) {
    // 当连接成功client对象会有很多个方法
    // let i = 0;
    // setInterval(() => {
    //     // 向客户端发送数据
    //     client.send(++i);
    // }, 1000);
    client.on('message', (message) => {
        console.log(message);
        // client.send(message);
        // 广播所有信息给客户顿
        wss.clients.forEach((client) => {
            client.send(message);
        })
    })

})
// 获取所有的客户端 它里面存着所有的客户端
wss.clients
// 
console.log("启动websocket服务器");