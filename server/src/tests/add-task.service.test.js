const { addTask } = require("../app/services/add-task.service");

test("Adding data to json", async () => {
  expect(
    await addTask("Walk", "Go for a walk", "2023-02-10", "not started", "walk")
  ).toEqual({
    dueDate: "2023-02-10",
    id: expect.any(String),
    taskDesc: "Go for a walk",
    taskName: "Walk",
    slug: "walk",
    status: "not started",
  });
});
