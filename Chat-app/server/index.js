// import https from 'https';
// import fs from 'fs';
// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// import bodyParser from 'body-parser';


// const app = express();
// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(bodyParser.json()); 
// const Port = process.env.PORT || 5000;

// const options = { 
//     key: fs.readFileSync("server.key"), 
//     cert: fs.readFileSync("server.cert"), 
// };


// app.get('/',(req,res)=>{
//     res.send("Hello");
// })

// app.get('/users',(req,res)=>{
//     res.send("Hello");
// })

// app.post('/users',(req,res)=>{
//     console.log(req.body);
//     res.send("Hello");
// });



// // https.createServer(options, app).listen(Port, () => {
// //     console.log(`Server is running on port ${Port}`);
// // });

// app.listen(Port, () => {
//     console.log(`Server is running on port ${Port}`);
// });

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("What is socket: ", socket);
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("Souvik", (msg) => {
    console.log("message: " + msg);
    io.emit("Souvik", msg);
  });

});

httpServer.listen(3000, () => console.log("listening on *:3000"));
