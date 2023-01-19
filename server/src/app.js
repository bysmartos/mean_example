const express = require("express");
const morgan = require("morgan");
const employeesRoutes = require("./routes/employees.routes");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employee", employeesRoutes);

module.exports = app;
