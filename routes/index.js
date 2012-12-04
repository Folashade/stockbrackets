
/*
 * GET home page.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;
var wordlist = [];

      UserSchema = new Schema({
          'username'   : String,
          'email'    : String,
          'password' : String,
          'stocks' : [String],
          'brackets': [ {round1:[String], round2:[String]} ]

      });

     SessionSchema = new Schema({
       'user': String,
       'user_id': mongoose.Schema.Types.ObjectId
       
     });

var User = mongoose.model('User', UserSchema);
var Session = mongoose.model('Session', SessionSchema);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.getuser = function(req,res){
  console.log(req.body.username);
  
   User.findOne({'username' : req.body.username, 'password' : req.body.password }, {"_id":1}, function(err,person){
     if(err){
     console.log(err)
       // res.writeHead(200, {'Content-Type': 'text/plain' });
      //  res.end('fail');
   }else{
     console.log(person)
     if (person != null)
     {
     new Session({
        'user' : person.username,
        'user_id': person._id
       

      }).save( function( err, session, count ){
       // console.log("here");
         res.writeHead(200, {'Content-Type': 'text/plain' });
         res.end(session.id);
      });
      }  else{
        
        res.writeHead(200);
        res.end("error");
      } 
   
    ///
  }
   
   });
  //res.render('dashboard', {title: req.body.username, wordlist:wordlist});
  //res.render('index', {title: req.body.username});
  
  
};