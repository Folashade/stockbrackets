var wordlist = getuserstocks();
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

function getuserstocks(){
  var stocklist = [];
  stocklist.push("AAPL");
  return stocklist;
  
}


exports.show = function(req, res){
  
   console.log(req.body.username+"I GOT IT");
res.render('dashboard', { title: 'StockBracket', wordlist: [],name:"hey" });

};

 exports.doGet = function(req, res){
   res.render('dashboard', { title: 'StockBracket', wordlist: wordlist });
 };
 
 exports.doPut = function(req, res){
   wordlist.push();
   
   var session_id = req.body.sessionid;
   var stock = req.body.testString; 
   //console.log(session_id);
   
   //
   Session.findOne({'_id' : ObjectId(req.body.sessionid) }, function(err,session){
      if(err)
      console.log(err);
      else{
    
        var user_session = session.user_id+"";
        User.findOne({'_id': ObjectId(session.user_id+"")}, function(err,person){
          console.log(stock);
          
          person.stocks.push(stock);
          person.save();
          res.writeHead(200);
          res.end(person.username);
          
       });
        
        
      }
        
   });
   
   
   
   
  
 };
 
 
 
 exports.getuserinfo = function(req, res){
   Session.findOne({'_id' : ObjectId(req.body.session_id) }, function(err,session){
      if(err)
      console.log(err);
      else{
        
        var user_session = session.user_id+"";
        //console.log(user_session);
        User.findOne({'_id': ObjectId(user_session)}, function(err,person){
          
          
           res.writeHead(200,'text/html');
           // res.render('dashboard', { title: 'StockBracket', wordlist: ['AAPL', 'GOOG'],name:"hey" });
           var ob = {"username":person.username, "stocks":person.stocks,"brackets":person.brackets}; 
           res.write(JSON.stringify(ob));
          res.end();
          
        });
        
        
      }
        
   });
   
   
   console.log(req.body.session_id);
 };
 
 