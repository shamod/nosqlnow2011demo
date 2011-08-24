
var UUID = require('../lib/uuid');

/**
 * function to reject sesssion object type
 *
 */
exports.createSessionObj = function(topic, speaker, description) {
  return {
    "_id":  UUID.uuid(),
    "topic": topic,
    "speaker": speaker,
    "description": description
  };
};