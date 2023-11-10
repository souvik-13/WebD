import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const Port = process.env.PORT || 5000;



app.get('/',(req,res)=>{
    res.send("Hello");
})


app.listen(Port, ()=>{console.log(`Server started at port ${Port}`); })