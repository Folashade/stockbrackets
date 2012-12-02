var wordlist= [];
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

      UserSchema = new Schema({
         'username'   : String,
         'email'    : String,
         'password' : String,

     });

     SessionSchema = new Schema({
       'user': String,
       'user_id': mongoose.Schema.Types.ObjectId
       
     });

var User = mongoose.model('User', UserSchema);
var Session = mongoose.model('Session', SessionSchema);




exports.show = function(req, res){
  res.render('dashboard', { title: 'StockBracket', wordlist: wordlist });

};

 exports.doGet = function(req, res){
   res.render('dashboard', { title: 'StockBracket', wordlist: wordlist });
 };
 
 exports.doPut = function(req, res){
   wordlist.push(req.body.testString);
  
   console.log(wordlist);
   
   res.writeHead(200);
   res.end();
   
  
 };
 
 
 
 exports.getuserinfo = function(req, res){
   Session.findOne({'_id' : ObjectId(req.body.session_id) }, function(err,session){
      if(err)
      console.log(err);
      else{
        
        var user_session = session.user_id+"";
        console.log(user_session);
        User.findOne({'_id': ObjectId(user_session)}, function(err,person){
          
          res.writeHead(200);
          res.end(person.username);
          
        });
        
        
      }
        
   });
   
   
   console.log(req.body.session_id);
 };
 
 