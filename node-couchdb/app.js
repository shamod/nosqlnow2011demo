
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

var sessionController = require('./controllers/SessionController');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'NoSQLNow 2011!',
    sessions: sessionController.getSessions()
  });
});

app.post('/session', function(req, res) {
  var topic = req.body.topic,
      speaker = req.body.speaker,
      description = req.body.description;
  sessionController.create(topic, speaker, description); 
  res.redirect('/');   
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
