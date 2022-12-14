var fs = require('fs'); 
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');  
// var MongoClient = require('mongodb').MongoClient;
var bodyParser = require("body-parser");
var app = express();


app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


mongoose.connect("mongodb://127.0.0.1:27017/Scholarship", async function(err,res){
    if(err) throw err;
    else{
        console.log("Database Connected Successfully");
    }
  });

app.get('/', function (req, res) {  
    
});



app.get('/booking.html',async function(req,res){
    res.sendFile(__dirname+'/'+"angular_booking.html" );
})

app.post('/book.html',async function(req,res){



  const bookingschema = {
    AppointmentId:{type:Number},
    Fullname : {type:String},
    Email : {type:String},
    Number : {type:Number},
    Date : {type:String},
    Country : {type:String},
    State : {type:String},
    City :{type:String},
    Slot : {type:String},
    Gender: {type:String},

  };
  var bookingdetails;
  if (mongoose.models.booking) {
    bookingdetails = mongoose.model('booking');
  } else {
    bookingdetails = mongoose.model('booking', bookingschema);
  }
  


  var bookingids = await bookingdetails.find({});
  
  if(bookingids[bookingids.length-1] == undefined){
    var bookingid = 1;
  }
  else{
    var bookingid = bookingids[bookingids.length-1].AppointmentId;
    bookingid = bookingid+1;
  }
  
  var bookingdata = new bookingdetails(
    {
    AppointmentId:bookingid,
    Fullname : req.body.full_name,
    Email : req.body.email,
    Number : req.body.number,
    Date : req.body.Date,
    Country : req.body.Country,
    State : req.body.State,
    City : req.body.City,
    Slot : req.body.Slot,
    Gender: req.body.gender
  }
    );
  // console.log("Hotelname",req.body.hotelname)

  bookingdata.save(async function(err,res){
      if(err) throw err;
      else{
          console.log("Document Related to Booking Inserted Successfully");
      }
  });

  res.redirect('/appointment_admin');



  



  

});

app.post('/addhotel',async function(req,res){

  
});

app.get('/appointment_admin',async function(req,res){



  const bookingschema = {
    AppointmentId:{type:Number},
    Fullname : {type:String},
    Email : {type:String},
    Number : {type:Number},
    Date : {type:String},
    Country : {type:String},
    State : {type:String},
    City :{type:String},
    Slot : {type:String},
    Gender: {type:String},

  };
  var bookingdetails;
  if (mongoose.models.booking) {
    bookingdetails = mongoose.model('booking');
  } else {
    bookingdetails = mongoose.model('booking', bookingschema);
  }
 

  await bookingdetails.find({},async function(err,data){
    if(err) throw err;
    else{
      res.render('table',{data});
    }

  }).clone().catch(function(err){ console.log(err)});



});


app.post('/deletebooking',async function(req,res){

  const bookingschema = {
    AppointmentId:{type:Number},
    Fullname : {type:String},
    Email : {type:String},
    Number : {type:Number},
    Date : {type:String},
    Country : {type:String},
    State : {type:String},
    City :{type:String},
    Slot : {type:String},
    Gender: {type:String},

  };
  var bookingdetails;
  if (mongoose.models.booking) {
    bookingdetails = mongoose.model('booking');
  } else {
    bookingdetails = mongoose.model('booking', bookingschema);
  }

  await bookingdetails.deleteOne({AppointmentId: req.body.bid},async function(err,data){
    if(err){
      throw err;
    }
    else{
      console.log("Document Related to booking Deleted Successfully");
     
      
    }

  }).clone().catch(function(err){ console.log(err)});;

  res.redirect('/appointment_admin');

  
  

});


app.post('/updatebooking',async function(req,res){

  var data={
    AppointmentId:req.body.bid,
    Fullname : req.body.Fullname1,
    Email : req.body.Email1,
    Number : req.body.Number1,
    Date : req.body.Date1,
    Country : req.body.Country1,
    State : req.body.State1,  
    City : req.body.City1,
    Slot : req.body.Slot1,
    Gender: req.body.Gender1

  };


  res.render('modify_appointment',{data});

});

app.post('/modifybooking',async function(req,res){

  const bookingschema = {
    AppointmentId:{type:Number},
    Fullname : {type:String},
    Email : {type:String},
    Number : {type:Number},
    Date : {type:String},
    Country : {type:String},
    State : {type:String},
    City :{type:String},
    Slot : {type:String},
    Gender: {type:String},

  };
  var bookingdetails;
  if (mongoose.models.booking) {
    bookingdetails = mongoose.model('booking');
  } else {
    bookingdetails = mongoose.model('booking', bookingschema);
  }


  var query = {'AppointmentId':req.body.bid};

  var booking_updated = 
    {
      AppointmentId:req.body.bid,
      Fullname : req.body.full_name,
      Email : req.body.email,
      Number : req.body.number,
      Date : req.body.Date,
      Country : req.body.Country,
      State : req.body.State,
      City : req.body.City,
      Slot : req.body.Slot,
      Gender: req.body.gender

    };
  

  bookingdetails.findOneAndUpdate(query,booking_updated, {upsert: true}, async function(err, doc) {
    if (err) return res.send(500, {error: err});
    else{
      console.log('Document Updated Successfully');
    }
});



res.redirect('/appointment_admin');







});


app.post('/searchbooking',async function(req,res){
  var query={AppointmentId:req.body.bid1};
  const bookingschema = {
    AppointmentId:{type:Number},
    Fullname : {type:String},
    Email : {type:String},
    Number : {type:Number},
    Date : {type:String},
    Country : {type:String},
    State : {type:String},
    City :{type:String},
    Slot : {type:String},
    Gender: {type:String},

  };
  var bookingdetails;
  if (mongoose.models.booking) {
    bookingdetails = mongoose.model('booking');
  } else {
    bookingdetails = mongoose.model('booking', bookingschema);
  }
 

  await bookingdetails.find(query,async function(err,data){
    if(err){
      console.log(err);
    }
    else{
      res.render('table',{data});
    }

  }).clone().catch(function(err){ console.log(err)});


  

});


var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://localhost:%s', port);  
});  





