const express =require ('express');
const app = express();
const userDetails = require("./Schema/Schema.js")
const user = require("./config/db.js");
const cors = require('cors');


user();
app.use(express.json());
app.use(cors());

app.get('/',async(req,res)=>{
    const details = await userDetails.find()
res.send(details)

})




app.post('/post',async(req,res)=>{
const name = req.body.name;
const description = req.body.description;
const img = req.body.img;
const link = req.body.link
    try{
        const userExists =  userDetails.findOne({email,description,img,link});
        console.log(" user Exist")
    } catch {
        console.log("error")
    }
       const userData = await  userDetails({name,description,img,link})
       userData.save()
       res.send(req.body)
}); 



app.listen(4000,()=>{
    console.log('server is running')
});



