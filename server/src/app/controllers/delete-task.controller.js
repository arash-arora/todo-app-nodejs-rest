const { getRemainingTasks } = require("../services/get-remaining.service");

const deleteOneTask = async (req, res) => {
  try {
    const tasks = await getRemainingTasks(req.params.slug);
    res.send(tasks);
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { deleteOneTask };
