const MongoClient = require('mongodb').MongoClient; //引入mongodb数据库模块调用客户端client
const assert = require('assert'); //断言库，判断程序 是否有error，有结束程序报出错误
const url = 'mongodb://127.0.0.1:27017';     //mongodb服务器ip+端口

var dbs=  ()=>{
    const client = new MongoClient(url, { useUnifiedTopology: true }) //在调用mongoClient.propet.db 之前必胜要先连接到数据库服务器上（url）

 const dbname = 'yibai';  //数据库名

    //客户端连接数据库
    client.connect(function (error) {  //无论成功与否都会执行此回调函数，先执行error 函数 
        //再执行client函数 得到client 对象来操作数据库
        assert.equal(null, error)     //断言判断error函数里是否有错存在？有就报错打印结束程序 无错就执行下面语句
        //执行回调函数 client  
        console.log('连接到数据库');
        client.db(dbname)    //客户端打开数据库 操作它

        client.close()      //关闭数据库

    })


}

module.exports = dbs