const { writeFile } = require("../utils/write-file.util");

const deleteTask = async (todo) => {
  await writeFile(todo);
};
module.exports = { deleteTask };
