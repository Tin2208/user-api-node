const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const projectRoutes = require("./project.routes");

// Gắn route con vào route tổng
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);

module.exports = router;
