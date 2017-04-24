# 						nodejs简单操作mongodb

node连接mongodb

通过node连接mongodb数据库，进行增删改查操作

1.引入模块

    npm install mongodb
  
2.链接

    var mongodb=require('mongodb');    // 导入nodejs的mongodb模块
    var server=new mongodb.Server('localhost',27017,{auto_reconnect:true});  // 链接本地数据库，mongo默认端口为27017
    var db=new mongodb.Db('db_test',server,{safe:true});            
    db.open(function(err,db){
      if(!err){
        console.log('connect');
      }else{
        console.log(err);
      }
    });
  
3.查询数据(find)

    db.collection('col',function(err,col){
      col.find().toArray(function(err,docs){
        console.log(docs);
      })
    })
  
4.新增数据(insert插入)

    db.collection('col',function(err,col){
      col.insert({name:'bestvist',age:20},function(err,docs){
         console.log(docs);  
      })  
    })
  
5.修改数据(update更新)

    db.collection('col',function(err,col){
      col.update({name:'bestvist'},{$set:{age:24}},function(err,docs){
        console.log(docs);
      });  
    })
  
6.删除数据(remove)

    db.collection('col',fnction(err,col){
      col.remove({name:'bestvist'},function(err,docs){
        console.log(docs);
      });  
    })
    
7.断开连接

    db.close();
