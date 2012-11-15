exports.show = function(req, res){
  console.log(req.query);
  res.render('stock', { stock: req.query["stockname"] });
};