var mongosee_emp = require('mongoose');
Schema = mongosee_emp.Schema;

var EmployeeSchema = new Schema({
  name: String,
  id: String,
  position: String
});

mongosee_emp.model('Employee', EmployeeSchema);