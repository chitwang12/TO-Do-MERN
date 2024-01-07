const express = require('express');
const app = express();

app.use(express.json());

//body{
    //title:string,
    //description:string
// }

app.use("/todo",function(req,res){

})

app.use("/todos",function(req,res){

})


app.use("/completed",function(req,res){

})
