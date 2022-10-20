// POST API With URL Query:-

const express=require('express');
app=express();

app.post("/home",function(req,res){

      let companyName=req.query.companyName;
      let founderName=req.query.founderName;
      let foundingYear=req.query.foundingYear;
      let turnOver=req.query.turnOver;

      res.send(companyName+" is founded by "+founderName+" in "+foundingYear+".This companies annual turnover is "+turnOver+".")

})


app.listen(5050,function(){
  console.log("Server Run Success!");
})

//QuerySting:http://localhost:5050/home?companyName=Apple&founderName=Steve Jobs&foundingYear=1976&turnOver=336.56B USD


//______________________________////

//POST API With BODY Properties:-


const express=require('express');
const bodyParser=require('body-parser');


app=express();
app.use(bodyParser.json());


app.post("/home",function(req,res){

        let jsonData=req.body;

        let name=jsonData['name'];
        let address=jsonData['address'];
        let college=jsonData['college'];
        let sub=jsonData['sub'];
        let roll=jsonData['roll'];


        res.send("My name is "+name+"I am from "+address+"I am a student of "+college+" My course name is "+sub+roll+" is my roll number.");

});

//json data
// {
//   "name":"Kazi Ashek.",
//   "address":"Chatkhil,Noakhali.",
//   "college":"Noakhali Government College.",
//   "sub":"BSC (pass course).",
//   "roll":"4145"
// }


app.listen(5050,function(){
  console.log("Server Run Success!");
})


//_____________________________________/////



//POST API With Headers Properties:-

const express=require('express');
app=express();

app.post("/home",function(req,res){

      let companyName=req.header("companyName");
      let founderName=req.header("founderName");
      let foundingYear=req.header("foundingYear");
      let turnOver=req.header("turnOver");

      res.send(companyName+" is founded by "+founderName+" in "+foundingYear+".This companies annual turnover is "+turnOver+".")

})


app.listen(4050,function(){
  console.log("Server Run Success!");
})


