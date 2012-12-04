var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

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



exports.show = function(req, res){
  res.render('bracket', { title: 'StockBracket' });
};


exports.postbracket = function(req, res){
  console.log(req.body.round1);
  console.log(req.body.round2);
  console.log(req.body.session_id); 
  var rounds = {"round1":req.body.round1, "round2":req.body.round2};
  
  Session.findOne({'_id' : ObjectId(req.body.session_id) }, function(err,session){
     if(err)
     console.log(err);
     else{
   
       var user_session = session.user_id+"";
       User.findOne({'_id': ObjectId(session.user_id+"")}, function(err,person){

         console.log(rounds)
         person.brackets.push(rounds);
         person.save();
         res.writeHead(200);
         res.end();
         
      });
       
       
     }
       
  });
  
  
};