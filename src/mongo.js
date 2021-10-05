const {MongoClient} = require("mongodb");

const MONGODB_URL = 
"mongodb+srv://guvi:guvi123@cluster0.4fx3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// "mongodb://localhost:27017";


const MONGODB_NAME = "post_app1";

const client = new MongoClient(MONGODB_URL);

module.exports = {
//Full connection
    db: null,

    //Connection specific to collections
    posts:null,
    
    users:null,
    

    async connect(){
      //Connecting to database  
      await client.connect();
      console.log("Connected to mongo")

      //Selecting the Database
      this.db= client.db(MONGODB_NAME);
      console.log("Selected Database:", MONGODB_NAME)
      this.posts= this.db.collection("posts");
      this.users= this.db.collection("users");
    }
}