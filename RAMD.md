
数据库组成：dataBase,集合(collection),文档(document,也就是一条信息)
基本命令
show dbs            查看有哪些数据库
show db             显示当前数据库
db.<collection_name> 创建集合
db.<collection_name>.find()
                    查看集合中所有文档

show tables          显示当前库所有集合   
use dbname           创建数据库名

db.collection.insertOne({x:1}) 创建一个集合并插入文档  
show collection       显示所有集合

CRVD(增删改查);     

向数据库插入文档没有集合会自动创建
db.集合(collection)名.insert({'name':'dfs'})

db.<collection>.find()  查看数据库所有集合
db.<collection>.find({xx}) 查看某一条

删除:
db.collection_name.remove({})
删除某一个字段
db.collection_name.Update({哪条},{'$unset':{xx:1or0}})



//连接数据库问题
node 在未来弃用现有监视器，采用新的服务器 在MongoClient.connect(url,collback)方式连接数据库服务器会报错，
必须要在**连接之前**采用 new MongoClient()构造函数 **传参数对象{ useUnifiedTopology: true }和url** 这是新启用的服务监视器
传参后连接方式.connect(collback) 里只接收一个回调函数 不在有url,