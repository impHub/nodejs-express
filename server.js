const http = require('http')

const hostname = 'localhost'

const port = 3000;
// createServer创建HTTP服务器
// req请求对象 res响应对象
const server = http.createServer((req,res)=>{
    // 状态码
    res.statusCode = 200
    // 类型为HTML文档
    res.setHeader('Content-type', 'text/html')
    // 输出内容
    res.end('hello World\n')
})

server.listen(port, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})