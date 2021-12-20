import express from "express";
import fs  from 'fs';

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 9000;

// make the server listen to requests
app.listen(PORT,()=>console.log("App is Running in PORT :" + PORT));


app.get("/",(req,res)=>{
    res.send("File System")
})
//data is file created date timestamp
let data = `${new Date()}`;

let filename = `${new Date().getUTCDate()}`

//creating files in files folder
for(let i=0;i<5;i++){
    fs.writeFile(`./files/${filename}.txt`,data,(err)=>{
        console.log(`writing file successfully ${i}`)
    })
}
//read all the text files in that particular folder
fs.readdir("./files",(err,files)=>{
    console.log(files);
})

//read data from created file
for(let i=0;i<5;i++){
fs.readFile(`./${filename}.txt`,"utf-8",(err)=>{
    console.log(data);
})}


