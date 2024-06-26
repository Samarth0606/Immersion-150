const express = require('express');
const app = express();
const zod = require('zod');

// console.log(zod)
app.use(express.json())

const mySchema = zod.array(zod.number());


const userSchema  = zod.object({
    email: zod.string().email() , 
    password: zod.string().min(6) , 
    country : zod.literal("IN").or(zod.literal('US'))
})

app.post('/vishnu' , (req,res)=>{
    let user = req.body.user;
    let resp = userSchema.safeParse(user);
    if(!resp.success){
        res.status(411).json({msg:resp.error.issues[0].message})
    }else{
        res.status(200).json({msg:resp.data})
    }
})




app.post('/sam' , (req,res)=>{
    let samarth = req.body.samarth;
    let resp = mySchema.safeParse(samarth);

    if(!resp.success){
        res.status(411).json({msg:resp.error.issues[0].message})
    }else{
        res.status(200).json({msg:resp.data})
    }
})



app.listen(5050 , ()=>{
    console.log(`server connected at port 5050`)
})