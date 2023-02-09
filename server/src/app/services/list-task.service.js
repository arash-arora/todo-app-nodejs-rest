const { listTodos } = require("../repositories/list-task.repo");

const listTask = () => {
  return listTodos();
};

module.exports = { listTask };
