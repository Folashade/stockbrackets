
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , get = require('./routes/dashboard_route')
  , put = require('./routes/dashboard_route')
  , bracket_route = require('./routes/bracket_route')
  , stock = require('./routes/stock')
  , dashboard_route = require('./routes/dashboard_route')
  , http = require('http')
  , signup = require('./routes/signup')
  , path = require('path');

var app = express();
require('/models/user.js')



app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/routes/bracket_route', bracket_route.show)
app.get('/routes/dashboard_route', dashboard_route.show)
app.get('/routes/stock', stock.show)
app.get('/routes/signup', signup.show)
app.get('/users', user.list);
app.get('/request', get.doGet);	// example handling of a GET request 
app.put('/request', put.doPut);			// example handling of a PUT request

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
