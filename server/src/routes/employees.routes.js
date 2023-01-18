const { Router } = require("express");
const employeesCtrl = require("../controllers/employeesCtrl");

const router = Router();
router.get("/all", employeesCtrl.getEmployees);
router.get("/:id", employeesCtrl.getEmployee);
router.post("/", employeesCtrl.createEmployee);
router.put("/:id", employeesCtrl.editEmployee);
router.delete("/:id", employeesCtrl.deleteEmployee);

module.exports = router;
