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
     
       IdeaSchema = new Schema({
          'title': String,
          'body' : String,
          'user_id': mongoose.Schema.Types.ObjectId,
          'user_name': String,
          'date' : { type: Date, default: Date.now }

        });

var User = mongoose.model('User', UserSchema);
var Session = mongoose.model('Session', SessionSchema);
var Idea = mongoose.model('Idea', IdeaSchema);

exports.loadideas = function(req, res){
  
  
  console.log("ideas");
  Idea.find(function(err,idea){
    if(idea != null){
    res.writeHead(200);
  
    res.end(JSON.stringify(idea));
    console.log(idea);
  }
  
    
  });
   
  
};


exports.show = function(req, res){
  
   
  
   res.render('idea', { title: 'Express' });
};

exports.postidea = function(req, res){
   console.log(req.body.title);
   console.log(req.body.body);
   console.log(req.body.sessionid);
   Session.findOne({'_id' : ObjectId(req.body.sessionid) }, function(err,session){
       if(err)
       console.log(err);
       else{

         var user_session = session.user_id+"";
         
         User.findOne({'_id': ObjectId(user_session)}, function(err,person){
           new Idea({
              title : req.body.title,
              body : req.body.body,
              user_id : user_session,
              user_name : person.username
            }).save( function( err, idea, count ){
              
              res.writeHead(200);
               res.end();
            });

            

         });
         
         

       }

    });
   
   
   
};