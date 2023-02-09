const { listTodos } = require("../repositories/list-task.repo");

const getOneTask = async (slug) => {
  const todos = await listTodos();
  let todo = todos.filter((todo) => todo.slug == slug);
  return todo;
};

module.exports = { getOneTask };
