const baseUrl = "http://localhost:3000/v1/tasks/";

function getParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}

let slug = getParams().get("todo");

console.log(slug);

async function getOneTodo() {
  try {
    const response = await fetch(`${baseUrl}${slug ? slug : ""}`);
    console.log(slug);
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function listTodos(slug) {
  const data = await getOneTodo(slug);

  if (data.length != 0) {
    createTemplate(data);
  } else {
    const todos_list = document.getElementById("todos_list");
    const h1 = document.createElement("h1");
    h1.innerText = "No todo found!🤞";
    todos_list.appendChild(h1);
  }
}

function createTemplate(data) {
  data.map((d) => {
    const todos_list = document.getElementById("todos_list");

    const main_div = document.createElement("div");
    main_div.classList.add("main__todo__container");

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const span = document.createElement("span");
    const div1 = document.createElement("div");
    const p = document.createElement("p");
    const p1 = document.createElement("p");

    div.classList.add("task__content");
    h1.classList.add("task__title");
    span.classList.add("task__date");
    div1.classList.add("task__stats");
    p.classList.add("task__desc");
    p1.classList.add("task__status");

    h1.innerText = d.taskName;
    span.innerText = d.dueDate;
    p.innerText = d.taskDesc;
    p1.innerText = d.status;

    if (d.status.includes("not")) {
      p1.style.background = "#FF8E9E";
    } else if (d.status.includes("completed")) {
      p1.style.background = "#68B984";
    } else {
      p1.style.background = "#FFED00";
    }

    div.appendChild(h1);
    div.appendChild(span);

    div1.appendChild(p);
    div1.appendChild(p1);

    main_div.appendChild(div);
    main_div.appendChild(div1);

    todos_list.appendChild(main_div);
  });
}
listTodos(slug);

//Delete a todo
const delTodo = document.querySelector(".delete__task");
delTodo.addEventListener("click", () => {
  console.log("hi");
  fetch(`${baseUrl}${slug}`, { method: "DELETE" });
  window.location.replace("http://127.0.0.1:5500/client/src");
});

//update a todo
const updateTodo = document.querySelector(".update__form");
const updateBtn = document.querySelector(".update__task");
updateBtn.addEventListener("click", () => {
  updateTodo.classList.toggle("hide");
});

updateTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("taskName");
  const desc = formData.get("taskDesc");
  const date = formData.get("dueDate");
  const status = formData.get("status");
  const newslug = formData.get("slug");

  post_data(name, desc, date, status, newslug);
});

const post_data = async (name, desc, date, status, newslug) => {
  console.log(`${baseUrl}${slug}`);
  await fetch(`${baseUrl}${slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      taskName: name,
      taskDesc: desc,
      dueDate: date,
      status: status,
      slug: newslug,
    }),
  });
};
