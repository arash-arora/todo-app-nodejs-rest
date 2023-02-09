const { getOneTask } = require("../services/get-one-task.service");

const listOneTask = async (req, res) => {
  try {
    const task = await getOneTask(req.params.slug);
    res.send(task);
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { listOneTask };
