import express from "express";
import fs from "fs";

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 7000;

// make the server listen to requests
app.listen(PORT, () => console.log("App is Running in PORT :" + PORT));

app.get("/", (req, res) => {
  res.send("File System");
});
//data is file created date timestamp
let data = `${new Date()}`;

let filename = `${new Date().getUTCDate()}`;

// Creating files in File folder
app.get("/createfile", (request, response) => {
  //data of the file is when the file is created timestamp
  let data = new Date();
  data = data.toISOString().replace(/\:/g, "-");
  console.log(data);

  //Writefile in files Folder
  fs.writeFile(`Files/${data}.txt`, data, () => {
    console.log("File created in folder");
  });
  //send the response in window
  response.send({ msg: "File Created in Files Folder" });
});

// getting files in Files directory
app.get("/getfiles", (request, response) => {
    //read files directory
  fs.readdir("Files", (err, files) => {
    if (err) {
      console.log(err);
      return response.status(404).send(err);
    } else {
      return response.send(files);
    }
  });
});
