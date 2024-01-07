const express = require('express');
const {createPayload ,updatePayload} = require("./types"); 
const app = express();

app.use(express.json());

//body{
    //title:string,
    //description:string
// }

app.use("/todo",function(req,res){
    const createPayload = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayload);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
        }
        //put it in mongo
    })

    
app.use("/todos",function(req,res){

})


app.use("/completed",function(req,res){
const updatePayload = req.body;
const parsedPayLoad = updateTodo.safeParse(updatePayload);
if(!parsedPayLoad.sucess){
    res.status(411).json({
        msg:"You sent the wrong inputs",
    })
    return;
}
})
