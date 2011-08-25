var session = require('../models/session');
var dao = require('./dao');



// function to create conference session object
exports.create = function(topic, speaker, description) {
  // create session object
  var sessionObj = new session.createSessionObj(topic, speaker, description);
  // call dao insert to insert session object in couchdb
  dao.insert(sessionObj, function(err, res) {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

// function to get all conference sessions
exports.getSessions = function(callback) {
  var arrSession = []; //store all session object from datastore  
  dao.getAll(function(err, res) {
    if(err) {
      console.log(err);
    } else { 
      if(res.length > 0) {     
        for(var i = 0; i < res.length; i++) {
          dao.find(res[i].id, function(err, doc) {        
            arrSession.push(doc);       
            if(i === (res.length - 1)) {
              callback(arrSession);
            }
          });
        };
      } else {
        callback(arrSession);
      }
    }
  });
};