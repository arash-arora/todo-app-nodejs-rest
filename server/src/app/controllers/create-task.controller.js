const { addTask } = require("../services/add-task.service");

const createTask = async (req, res) => {
  try {
    const { taskName, taskDesc, dueDate, status, slug } = req.body;
    const task = await addTask(taskName, taskDesc, dueDate, status, slug);
    res.send(task);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createTask,
};
