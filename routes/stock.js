var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'Z5HTJQKCPRywfFkF20mQVg',
  consumer_secret: 'lbvtQcE2KpRsBaZ0invqyogEapEmKSANOyrmo7fQeMM',
  access_token_key: '221954850-VvfqkBzQuHKQFvSWTfoURG0hN3OlgY4SG4v3rkTF',
  access_token_secret: 'xH6UrRxZO2gqZX6dFyodRmhevUoQGUUaobgOKAzj8'
});

//twit.search('$AAPL', function(err, data) {
//  if (err) {
//    console.log('Twitter search failed!');
//  }
//  else {
//    console.log('Search results:');
//    for(var x = 0 ; x< 5; x++ ){
//    console.dir(data.results[x].text);
//  }
//  }
//});

twit.stream('statuses/filter', { track: ['$AAPL','$GOOG'] }, function(stream) {
  stream.on('data', function (data) {
    console.log(data.text);
  });
});

exports.show = function(req, res){
  console.log(req.query);
  res.render('stock', { stock: req.query["stockname"] });
};

exports.twitstock = function(req, res){
  console.log(req.body.stockname);
  var call_letter = "$"+req.body.stockname;
  twit.search(call_letter, function(err, data) {
    if (err) {
      console.log('Twitter search failed!');
    }
    else {
     // console.log('Search results:');
      //for(var x = 0 ; x< 5; x++ ){
      //console.dir(data.results);
      res.writeHead(200,'text/html');
      res.write(JSON.stringify(data));
      res.end();
    }
    
  });
  
  
};
