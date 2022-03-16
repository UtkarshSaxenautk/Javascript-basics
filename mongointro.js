const mongodb = require('mongodb').MongoClient;

const url = "mongodb+srv://username<password>./nodejs?retryWrites=true&w=majority"
const { Console } = require('console');
var obj = require('./insert.js');
// mongodb.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("nodejs");
//     dbo.createCollection("learning" , (err , res)=> {
//         if(err){
//             throw err ;
//         }
//         console.log("collection created");
//         db.close();
//     })
//     console.log("Database created!");
   
//   });

mongodb.connect(url , (err , db)=> {
   if(err){
       throw err ;

   }
   var dbo = db.db("nodejs");
//    dbo.collection("learning").insertOne(obj , (err , res)=> {
//        if(err){
//            throw err ;
//        }
//        console.log("1 object inserted");
//        db.close();
//    });
 dbo.collection("learning").insertMany(obj.manyobj , (err , res)=> {
     if(err) {
         throw err ;
     }
     console.log("Number of documnets inserted : " +
     
     res.insertedCount);
     console.log(res);
     db.close();
 })
});
