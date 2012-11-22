var mongoose = require('mongoose');

var User = mongoose.model( 'User', User );

exports.show = function(req, res){
  res.render('signup', { title: 'StockBracket'});

};

exports.create = function ( req, res ){
  new User({
    username : req.body.username,
    password : req.body.password,
    email : req.body.email
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};