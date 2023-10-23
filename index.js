import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app=express();
const port=3004;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});
const tasks=[];
app.post("/submit",(req,res)=>{

    const newTask = req.body.task;
    const stmt="ENTER SOME TASKS";
    
    
      tasks.push(newTask);

  
//   res.json({ tasks });
res.render("index.ejs",{  tasks: tasks,newtask: newTask });
});

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});
