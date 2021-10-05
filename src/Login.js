// const Auth = require("./Auth")
// const signup = require("./signup");


  //   onsubmit=()=>{
  // Auth.register();
  //   }



function Login(){

  function onChanges(event){
    if(event.type==="email")
  event.target.value=log_user;
  else{
    event.target.value=log_pass;
  }
  }



    return(
        <>
        <label>Username</label>
        <input type="email" name="email"
        value={log_user}
        onChange={onChanges}></input>
        <label>Password</label>
        <input type="password" name="password"
        value={log_pass}
        onChange={onChanges}></input>
        <a href=""><button>Signn Up</button></a>
        </>
    )
}
export default Login;

// module.exports={
//     Login,
//     log_user,
//     log_pass
// }