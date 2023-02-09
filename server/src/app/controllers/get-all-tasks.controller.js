const { listTask } = require("../services/list-task.service");

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await listTask();
    res.json(tasksList);
  } catch (e) {
    res.status(500).send([]);
  }
};

module.exports = { getAllTasks };
