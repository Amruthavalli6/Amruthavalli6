var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name=req.body.name;
    var mobileno=req.body.mobileno;
    var email=req.body.email;
    var password=req.body.password;
    var confirmpassword=req.body.confirmpassword;

    var data={
        "name":name,
        "mobileno":mobileno,
        "email":email,
        "password":password,
        "confirmpassword":confirmpassword
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('login.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
  });
const User = mongoose.model('users', UserSchema);
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {

      const user = await User.findOne({ name: username });
      if (!user) {
          return res.status(401).send("<script>alert('Invalid username'); window.location.href = '/login.html';</script>");
      }

      if (user.password !== password) {
          return res.status(401).send("<script>alert('Invalid password'); window.location.href = '/login.html';</script>");
      }
      return res.send("<script>alert('Logged in successfully!'); window.location.href = '/code.html';</script>");
  } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
  }
});

console.log("Listening on PORT 3000");