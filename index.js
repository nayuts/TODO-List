// // 1.  テキストボックスDOM要素を取得し、console.logで表示
// const inputElement = document.getElementById("add-input");
// console.log(inputElement);

// const { createElement } = require("react");

// // 2. ボタンDOM要素を取得し、console.logで表示
// const addBottom = document.getElementById("add-btn");
// console.log(addBottom);

// addBottom.addEventListener("click", () => {
//     alert("ボタンが押されたよ");
//     alert(inputElement.value);
//     const li = document.createElement("li");
//     todoList.appendChild(li);
//     li.innerHTML = "ほげほげ";
//     li.className = "todo-li";
// })

// const inputElement = document.getElementById("add-input");
// const addButton = document.getElementById("add-btn");
// const todoList = document.getElementById("todo-list");

// const addTodo = () => {
//   const li = document.createElement("li");
//   todoList.appendChild(li);
//   li.innerHTML = "ほげほげ";
//   li.className = "todo-li";
// };


const inputElement = document.getElementById("add-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

const addTodo = () => {
  const li = document.createElement("li");
  todoList.appendChild(li);
//   li.innerHTML =inputElement.value + "<button>DELETE</button>";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "DELETE";

  li.appendChild = inputElement.value;
  li.appendChild(deleteButton);
  li.className = "todo-li";
};
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});

addButton.addEventListener("click", addTodo);
