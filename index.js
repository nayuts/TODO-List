// 1.  テキストボックスDOM要素を取得し、cosole.logで表示
const inputElement = document.getElementById("add-input");
console.log(inputElement);

// 2. ボタンDOM要素を取得し、console.logで表示
const addBottom = document.getElementById("add-btn");
console.log(addBottom);

const inputElement = document.getElementById("add-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list"); // ul要素も取得しておく

// 3. ボタンが押されたときの処理を作成していく
addButton.addEventListener("click", () => {
  // a. ボタンが押されたか確認する
  alert("ボタンが押されたよ");

  // b. テキストボックスの中身を表示させるように変更する
  alert(inputElement.value);

  // c. <li>要素を新しく作成する
  const li = document.createElement("li");

  // d. <ul>要素の中に、作成した<li>を追加する
  todoList.appendChild(li);

  // e. <li>の中にテキストを入れる
  li.innerHTML = "ほげほげ";

  // f. <li>にCSSを当てるために className を設定する
  li.className = "todo-li";
});