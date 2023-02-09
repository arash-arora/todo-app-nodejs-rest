const baseUrl = "http://localhost:3000/v1/tasks/";
window.addEventListener("load", () => {
  listTodos();
});

async function fetchTodos() {
  try {
    const response = await fetch(`${baseUrl}`);
    return await response.json();
  } catch (err) {
    console.log("NO todos");
    return [];
  }
}

async function listTodos() {
  const data = await fetchTodos();

  console.log(data);

  if (data.length != 0) {
    createTemplate(data);
  } else {
    const todos_list = document.getElementById("todos_list");
    const h1 = document.createElement("h1");
    h1.innerText = "No todos, you're ahead of your timetable!🚀";
    todos_list.appendChild(h1);
  }
}

function createTemplate(data) {
  data.map((d) => {
    const todos_list = document.getElementById("todos_list");

    const main_div = document.createElement("div");
    main_div.classList.add("main__todo__container");

    const div = document.createElement("div");
    const a = document.createElement("a");
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
    a.classList.add("todo__link");

    a.href = window.location.origin + "/client/src/todo/?todo=" + d.slug;
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

    a.appendChild(h1);
    div.appendChild(a);
    div.appendChild(span);

    div1.appendChild(p);
    div1.appendChild(p1);

    main_div.appendChild(div);
    main_div.appendChild(div1);

    todos_list.appendChild(main_div);
  });
}
