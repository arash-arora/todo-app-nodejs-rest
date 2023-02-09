const { listTodos } = require("../repositories/list-task.repo");
const { deleteTask } = require("../repositories/delete-task.repo");

const getRemainingTasks = async (slug) => {
  const todos = await listTodos();
  let todo = todos.filter((todo) => todo.slug != slug);
  await deleteTask(todo);
  return todo;
};

module.exports = { getRemainingTasks };
