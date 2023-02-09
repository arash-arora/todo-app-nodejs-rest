const fs = require("fs");

const listTodos = async () => {
  const data = fs.readFileSync("tasks.json", "utf-8");
  return JSON.parse(data);
};

module.exports = { listTodos };
