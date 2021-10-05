
import "./App.css";
import Header from "./header";
import QuestionsPage from "./Questions";
 const express = require("express");
 const app= express();
 const mongo = require("./mongo")

 loadApp =async()=>{
  try{
//Mongodb Connect
await mongo.connect();


//parse request body into JSON format
app.use(express.json())

//Common Middleware is called
app.use((rq,res,next)=>{
console.log("Middleware 1 called!!")

next();
});
  
//Server Start
app.listen(3010,()=>{
  console.log(`Connected to Mongo - 27107 `)
});
  }catch(err){
      console.log("Error starting server", err);
  }
}

function App(){
  loadApp();
  return (
   <div>
     
     <Header />
     <QuestionsPage/>

   </div>
    
  );
}

export default App;
