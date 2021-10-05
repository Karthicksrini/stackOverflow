const bcrypt = require("bcrypt");
const db = require("../mongo");
const {ObjectId} = require("mongodb")
const jwt = require("jsonwebtoken");
const signup = require("./signup")
const service={

  async register  (req,res){
    try{
      
        //check email exists
        const user = await db.users.findOne({email:signup.user1});
        
        if(user)return res.status(400).send({error:"User already exists"});

        //Generate Salt & hash
        const salt = await bcrypt.genSalt();
        signup.password = await bcrypt.hash(signup.password1, salt);

        //Insert User
        await db.users.insertOne(signup.user1,signup.password1);
        res.send({message:"User registered successfully;"})

    }
      catch(err){
        console.log("Error Registering User-", err)
        res.sendStatus(500);
      }
  },

   async login(req,res){
    try{
      //Data Validation



      //Check Email exists
      const user = await db.users.findOne({email:signup.user1});
      if(!user)return res.status(400).send({error:"User does notn exists"});

      //Check password
      const isValid = await bcrypt.compare(signup.password1,user.password);
      if(!isValid)return res.status(403).send({error:"Wrong Password..."});
      

      //Generate Token
      const authToken = jwt.sign(
        {userId:user._id, email: user.email},
        "guvi@123");
        
      res.send({authToken})



     }
     catch(err){
         console.log("Error Login User - ", err)
       res.sendStatus(500);
     }
  }
}


module.exports= service;