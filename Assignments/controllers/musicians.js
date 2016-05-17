var mongoose = require('mongoose'),
Musician = mongoose.model('Musician');

exports.findAll = function(req, res){
  Musician.find({},function(err, results) {
    return res.send(results);
  });
};
exports.import = function(req, res){
  Musician.create(
    { "name": "Ben", "band": "DJ Code Red", "instrument": "Reason" },
    { "name": "Mike D.","band": "Kingston Kats", "instrument": "drums" },
    { "name": "Eric", "band": "Eric", "instrument": "piano" },
    { "name": "Paul", "band": "The Eyeliner", "instrument": "guitar" }
  , function (err, response) {
    console.log(response);
    if (err) return console.log(err);
    res.send(202);
  });
};

exports.findById = function() {};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};


exports.myMethod = function(req, res) {
  console.log("Inside myMethod...");
  return res.send(100);

};
