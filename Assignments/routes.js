module.exports = function(app){
    var musicians = require('./controllers/musicians');
    app.get('/musicians', musicians.findAll);
    app.get('/musicians/:id', musicians.findById);
    app.post('/musicians', musicians.add);
    app.put('/musicians/:id', musicians.update);
    app.delete('/musicians/:id', musicians.delete);
    app.get('/import', musicians.import);
    app.get('/myMethod123', musicians.myMethod);

    var employee = require('./controllers/employee');
    app.get('/employee', employee.findAll);
    // app.get('/employee/:id', employee.findById);
    // app.post('/employee', employee.add);
    // app.put('/employee/:id', employee.update);
    app.get('/employee/:id', employee.delete_emp);
    app.get('/empimport', employee.empimport);
    // app.get('/myMethod1234', employee.myMethod);
}
