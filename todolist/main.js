document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#todo"); // id 중 todo불러오기
  const addButton = document.querySelector("#add-button");
  const todoList = document.querySelector("#todo-list");
  const alert = document.querySelector("span");
  const allRemoveButton = document.querySelector("#removeAllchild");

  // '+' 버튼 익명 화살표 함수
  const addTodo = () => {
    if (input.value !== "") {
      const item = document.createElement("div");
      // 체크박스
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      // text
      const text = document.createElement("span");
      // 제거하기 버튼
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";

      const allRemoveButton = document.getElementById("removeAllchild");

      text.textContent = input.value;
      input.value = "";

      item.appendChild(checkbox);
      item.appendChild(text);
      item.appendChild(deleteButton);
      todoList.appendChild(item);

      // 체크박스 이벤트 리스너
      checkbox.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
          text.style.textDecoration = "line-through";
        } else {
          text.style.textDecoration = "none";
        }
      });

      // 제거하기 버튼 클릭 이벤트 리스너
      deleteButton.addEventListener("click", (event) => {
        console.log("deleteButton", event.currentTarget.parentNode);

        todoList.removeChild(event.currentTarget.parentNode);
      });

      allRemoveButton.addEventListener("click", (event) => {
        while (todoList.firstChild) {
          // 첫번째가 있는지 확인
          todoList.removeChild(todoList.firstChild);
        }
      });

      input.value = "";
      alert.textContent = "";
    } else alert.textContent = "할일을 입력하세요!";
  };

  addButton.addEventListener("click", addTodo);

  // 할 일 입력창에서 enter key가 눌렸을 때
  input.addEventListener("keypress", (event) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) addTodo();
  });
});
