const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { writeFile } = require("../utils/write-file.util");

const createTask = async (task) => {
  let todos = [];
  task.id = uuidv4();
  await fs.readFile("tasks.json", "utf-8", async (err, data) => {
    todos = data ? JSON.parse(data) : [];
    todos.push(task);
    await writeFile(todos);
  });
  return task;
};

module.exports = { createTask };
