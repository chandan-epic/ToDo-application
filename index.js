import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app=express();
const port=3004;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
const tasks=[];
app.get("/",(req,res)=>{
  const daytime=[];
  let date = new Date().toDateString();
     res.render("index.ejs",{DATE:date,taskss:tasks});
    //  tasks=[];
});

app.post("/complete-task", (req, res) => {
  const { index } = req.body; // Get the index of the completed task
  if (index >= 0 && index < tasks.length) {
      // Remove the completed task from the tasks array
      tasks.splice(index, 1);
  }
  res.redirect("/");
});

// Handle clearing all tasks
app.get("/clear-tasks", (req, res) => {
  tasks.length = 0; // Clear all tasks in the array
  res.redirect("/");
});

app.post("/",(req,res)=>{
   let con=req.body.inputcontent;
   tasks.push(con);
   res.redirect("/");
});

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});
