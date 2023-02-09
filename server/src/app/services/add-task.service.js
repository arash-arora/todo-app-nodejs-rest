const { createTask } = require("../repositories/create-task.repo");

const addTask = async (taskName, taskDesc, dueDate, status, slug) => {
  return await createTask({ taskName, taskDesc, dueDate, status, slug });
};

module.exports = { addTask };
