const express = require('express');
const app = express();
const port = 3000;


// Otherwise req.body will be undefined
app.use(express.json());

let tasks = [];

// add The Employee Stage and Status
app.post('/assign',(req,res)=>{
     
    const { emp , task } = req.body; // ❌

    tasks.push({
         id : tasks.length + 1 ,
         status : "pending",
         task ,
         emp
    });
    res.send("Task Added Properly");
})

// get All Employee 
app.get('/Tasks',(req,res)=>{
      res.json(tasks);
});



// Update Status :
app.put('/assign/:id',(req,res)=>{
   
    const id = parseInt(req.params.id);

    const Task =  tasks.find( t => t.id === id );

    if(Task){
        Task.status = req.body.status; //❌
         res.send("Task Completed"); 
    }else{
         res.send("Task Not Found");
    }
});



app.listen(port,(req,res)=>{
    console.log("Server is Running");
});
