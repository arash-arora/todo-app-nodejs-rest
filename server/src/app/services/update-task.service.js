const { updateTaskRepo } = require("../repositories/update-task.repo");
const { getOneTask } = require("./get-one-task.service");
const { getRemainingTasks } = require("./get-remaining.service");

const updateTask = async (
  taskName,
  taskDesc,
  dueDate,
  status,
  slug,
  searchedSlug
) => {
  const task = await getOneTask(searchedSlug);
  const tasks = await getRemainingTasks(searchedSlug);
  task[0].taskName = taskName;
  task[0].taskDesc = taskDesc;
  task[0].dueDate = dueDate;
  task[0].status = status;
  task[0].slug = slug;

  tasks.push(task[0]);

  updateTaskRepo(tasks);

  return task;
};

module.exports = { updateTask };
