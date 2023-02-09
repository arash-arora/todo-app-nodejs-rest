const form = document.getElementById("form");

const baseUrl = `http://localhost:3000/v1/tasks`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("taskName");
  const desc = formData.get("taskDesc");
  const date = formData.get("dueDate");
  const status = formData.get("status");
  const slug = formData.get("slug");
  post_data(name, desc, date, status, slug);
});

const post_data = async (name, desc, date, status, slug) => {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      taskName: name,
      taskDesc: desc,
      dueDate: date,
      status: status,
      slug: slug,
    }),
  });
};
