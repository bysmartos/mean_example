const Employee = require("../models/Employee");

const employeesCtrl = {
  getEmployees: async (req, res) => {
     const employees = await Employee.find();
     res.json(employees)
  },
  createEmployee: async (req, res) => {
    console.log(req.body)
    const employee = new Employee({
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    });
    await employee.save();
    res.json({ status: "Employee created" });
  },
  getEmployee: async (req, res) => {
     const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
  },
  editEmployee: async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Employee Updated" });
  },
  deleteEmployee:  async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: "Employee Deleted" });
  },
};

module.exports = employeesCtrl;
