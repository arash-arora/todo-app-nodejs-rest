const { getOneTask } = require("../app/services/get-one-task.service");

test("Getting a todo from json", async () => {
  expect(await getOneTask("test")).toEqual([
    {
      dueDate: "2023-02-14",
      id: expect.any(String),
      slug: "test",
      status: "yet to be assigned",
      taskDesc: "test description",
      taskName: "test",
    },
  ]);
});
