var mongoose = require('mongoose');
 var Schema = mongoose.Schema,
     ObjectId = Schema.ObjectId;
     
 User = new Schema({
    'username'   : String,
    'email'    : String,
    'password' : String,
    'user_id': ObjectId
});
 
mongoose.model( 'User', User );
 
mongoose.connect( 'mongodb://localhost/stockbrackets' );