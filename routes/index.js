
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.getuser = function(req,res){
   console.log(req.body.username);
   console.log(req.body.password);
  res.render('index', {title: req.body.username});
  res.writeHead(200);
   res.end();
  
  
};