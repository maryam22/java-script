const express = require('express')
const app = express()
const cors = require('cors');
const fs = require('fs')
const users = `${__dirname}/users.json`


//ITS For SECURITY IF WE DONT USE CORS SERVER WILL NOT ALLOW REMOTE CLIENT TO SEND REQUEST
//first install cors package 

var corsOption = {
    origion:'*',
    optionSuccessStatus:200 // For legavey browser support
}

app.use(cors(corsOption));
app.use(express.json())



app.get('/', function (req, res) {
  
  fs.readFile(users,'utf-8',function(err,data){
    if(err){
        console.log(err)
    }else {
        console.log(typeof data)
        console.log(__dirname)
    }
})
res.send('You are succes fully logged in')
})



app.post('/users',(req, res) => {
  console.log(req.body)
    fs.readFile(users,'utf-8',(err,data) => {
      // data begin
      let currentTemp = JSON.parse(data);
      console.log(typeof currentTemp)
     if(err){
         console.log(err);
     }

     currentTemp.push(req.body)
     
    
     console.log(currentTemp)
     fs.writeFile(users,JSON.stringify(currentTemp),(err)=>{
       if(err){
         console.log(err)
       }
       res.send('it is done')
     });

   // end of data
    });
    
  });



 
app.listen(5000)