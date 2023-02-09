const { writeFile } = require("../utils/write-file.util");

const updateTaskRepo = async (todo) => {
  await writeFile(todo);
};
module.exports = { updateTaskRepo };
