const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err, db) {  
    if (err) throw err;  
    var myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" };  
    db.collection("employees").insertOne(myobj, function(err, res) {  
    if (err) throw err;  
    console.log("1 record inserted");  
    db.close();  
    });  
    });  
