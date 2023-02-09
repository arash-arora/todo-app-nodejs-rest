const express = require("express");
const { createTask } = require("../controllers/create-task.controller");
const { getAllTasks } = require("../controllers/get-all-tasks.controller");
const { listOneTask } = require("../controllers/get-one-task.controller");
const { deleteOneTask } = require("../controllers/delete-task.controller");
const { updateOneTask } = require("../controllers/update-task.controller");
const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:slug", listOneTask);

router.post("/tasks", createTask);

router.delete("/tasks/:slug", deleteOneTask);

router.put("/tasks/:slug", updateOneTask);

module.exports = router;
