const { updateTask } = require("../services/update-task.service");

const updateOneTask = async (req, res) => {
  try {
    const { taskName, taskDesc, dueDate, status, slug } = req.body;
    const task = await updateTask(
      taskName,
      taskDesc,
      dueDate,
      status,
      slug,
      req.params.slug
    );

    res.send(task);
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { updateOneTask };
