var cradle = require('cradle');
var db = new(cradle.Connection)().database('nosqlnow');

exports.insert = function(doc, callback) {
  db.save(doc, function(err, res) {                  
    if(err) {     
      callback(err, null);
    }
    else {
      callback(err, res);
    }     
  });
};

exports.getAll = function(callback) {
  db.all(function(err, res){
    if(err) {     
      callback(err, null);
    }
    else {
      callback(err, res);
    }
  });
};

exports.find = function(id, callback) {
  db.get(id, function(err, doc) {                          	     
    if(err)
    {      
      callback(err, null);
    }
    else {                     
      callback(err, doc);
    }
 });
}