var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee');

exports.findAll = function(req, res) {
    Employee.find({}, function(err, results) {
        return res.send(results);
    });
};
exports.empimport = function(req, res) {
    Employee.create(
      { "name": "Mugdha", "id": "702", "position": "Software Developer" }, 
      { "name": "Yuvraj", "id": "703", "position": "Web ui developer" }, 
      { "name": "Sagar", "id": "704", "position": "Software Developer" }, 
      { "name": "Satish", "id": "705", "position": "Web ui developer" }, 
      function(err) {
        if (err) return console.log(err);
        return res.send(202);
    });
};

exports.findById = function() {
    console.log("called findbymethod");
};
exports.add = function() {
    console.log("Employee added");

};
exports.update = function() {
    console.log("Employee updated");
};
exports.delete_emp = function(req,res) {
    console.log("Employee deleted");
    console.log(req.params.id);
    Employee.find({_id:req.params.id}).remove().exec();
    return res.send(202);

};
exports.myMethod = function(req, res) {
    console.log("Inside myMethod...");
    return res.send(100);

};
