import express from "express";
import {createServer} from "node:http";

import { Server } from "socket.io";
import cors from "cors";
import mongoose, { set } from "mongoose";
import { connectToSocket} from "./controllers/socketManager.js"

import userRoutes from  "./routes/users.routes.js"






//connection between express and socket 

const app = express();
const server  = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))

//working on routes 
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb" , extended:true}));

app.use("/api/v1/users" , userRoutes);
// app.use("/api/v2/users" , newUserRoutes) //when updated version need to be installed 

// app.get("/home" ,(req,res)=>{
//     return res.json({"hello":"world"})
// });


const start = async ()=>{
app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://arpit_deshmukh:%4045Nokia@meetdb.gtglv.mongodb.net/")
   console.log(`MONGO connectes DB host :${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("listening on port 8000");
    });
}

start();