const fs = require("fs");
async function writeFile(todos) {
  console.log(todos);
  await fs.writeFile("tasks.json", JSON.stringify(todos), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Written Successfully!");
    }
  });
  return todos;
}

module.exports = { writeFile };
