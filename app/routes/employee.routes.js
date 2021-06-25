module.exports = app => {
  const employee = require("../controllers/employee.conroller");

  var router = require("express").Router();

  // Create a new Employee
  router.post("/", employee.create);

  // Retrieve all Employees
  router.get("/", employee.findAll);

  // Retrieve a single Employee with id
  router.get("/:id", employee.findOne);

  // Update a Employee with id
  router.put("/:id", employee.update);

  // Delete a Employee with id
  router.delete("/:id", employee.delete);

  // Delete all Employees
  router.delete("/", employee.deleteAll);

  app.use('/api/employee', router);
};