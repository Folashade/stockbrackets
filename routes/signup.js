
var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
     
     
 UserSchema = new Schema({
    'username'   : String,
    'email'    : String,
    'password' : String,
    
});
 
var User = mongoose.model( 'User', UserSchema );


exports.show = function(req, res){
  res.render('signup', { title: 'StockBracket'});

};

exports.create = function ( req, res ){
  console.log(req.body.username);
  new User({
    username : req.body.username,
    password : req.body.password,
    email : req.body.email
    
  }).save( function( err, todo, count ){
    console.log("here");
    res.writeHead(200);
     res.end();
   
  });
};

