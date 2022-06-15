const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const todoContainer = document.querySelector(".todo-container");

const addHTML = (todo) => {
    /* bu todo-container içerisinde olacak
                      <div class="todo">
                         <div class="todo-left">
                            <input type="checkbox" class="todo-cb">
                            <span class="todo-text">Markete Git</span>
                         </div>
                         <div class="todo-right">
                            <button class="todo-delete">Sil</button>
                            <button class="todo-edit">Edit</button>
                         </div>
                      </div>
                       */
    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = todo.text;
    //buraya yarattığımız todo objesinin text değerini yazdırıyoruz.
    const inputCB = document.createElement("input");
    inputCB.type = "checkbox";
    inputCB.classList.add("todo-cb");
    inputCB.checked = todo.isCompleted;
    //buraya yarattığımız todo objesinin isCompleted değerini yazdırıyoruz.
    const todoLeft = document.createElement("div");
    todoLeft.classList.add("todo-left");
    todoLeft.appendChild(inputCB);
    todoLeft.appendChild(span);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-delete");
    deleteButton.textContent = "Sil";
    const editButton = document.createElement("button");
    editButton.classList.add("todo-edit");
    editButton.textContent = "Edit";
    const todoRight = document.createElement("div");
    todoRight.classList.add("todo-right");
    todoRight.appendChild(deleteButton);
    todoRight.appendChild(editButton);
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.appendChild(todoLeft);
    todoDiv.appendChild(todoRight);
    todoContainer.appendChild(todoDiv);
};

const startConf = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
        localStorage.setItem("todos", JSON.stringify([]));
    } else {
        todos.forEach((todo) => {
            addHTML(todo);
        });
    }
};
startConf();
const addTodo = (e) => {
    todoText = input.value.trim();
    input.value = "";
    const todo = {
        text: todoText,
        isCompleted: false,
    };
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    addHTML(todo);
    e.preventDefault();
};
form.addEventListener("submit", addTodo);