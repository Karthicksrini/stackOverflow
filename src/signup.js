//const Auth = require("./Auth");
import React, {useState} from "react";
import { Redirect } from 'react-router-dom';
import login from "./Login"
import "./css/signup.css";

var user1 = "";
var password1="";

function SignUp(){

   let [user, setuser]=useState("");
   let [password,setpass]= useState("");
  

  const handleChange=(event)=>{
  
     if(event.target.type==="email"){
      setuser(event.target.value);
      user1=user;

     }
   else if(event.target.type==="password"){
    setpass(event.target.value);
     password1=password;
   }
  }
  const onsubmit=(e)=>{
  //  Auth.register();
    console.log("submitted");
    e.preventDefault();
//   Auth.register();
    setuser("");
    setpass("");
    return<Redirect to="/Login/"/>
  }

 

  return(
    <>
    <form className="form">
    <label>Username</label>
    <input type="email" name="email"
    value={user} 
    onChange={handleChange}></input>
    <label>Password</label>
    <input type="password" name="password"
    value={password}
    onChange={handleChange}></input>
    <div>
      </div>
    

    <button onClick={onsubmit}>Sign Up</button>
    </form>
    </>
)

}
export default SignUp;

