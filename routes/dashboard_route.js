var wordlist= [];

exports.show = function(req, res){
  res.render('dashboard', { title: 'StockBracket', wordlist: wordlist });

};

 exports.doGet = function(req, res){
   res.render('dashboard', { title: 'StockBracket', wordlist: wordlist });
 };
 
 exports.doPut = function(req, res){
   wordlist.push(req.body.testString);
   res.render('dashboard', { title: 'StockBracket', wordlist: wordlist });
   console.log(wordlist);
   
   res.writeHead(200);
   res.end();
   
  
 };