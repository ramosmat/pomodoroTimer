const newTaskInput = document.getElementById("new-task"); //input
const taskList = document.getElementById("tasks"); //ol
const addTaskButton = document.getElementById("add-task"); //button

//Função que irá salvar tarefas no armazenamento local
function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.children).map((task) => task.innerText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskText = newTaskInput.value.trim();

  //Se o input não estiver vazio, ele irá criar a tag "li" dentro do "ol"
  if (taskText != "") {
    const taskItem = document.createElement("li"); //Cria tag "li"
    taskItem.className = "flex items-center gap-1 mt-2"; //Adicionando estilizações na "li" criada

    taskItem.innerText = taskText; //Coloca o que estiver no input dentro da tag "li" criada

    //Adicionando div
    const taskSeparator = document.createElement("div");
    taskSeparator.className =
      "block w-11/12 mt-1 border border-solid border-slate-400 delete-task";

    //Adicionando imagem da lixeira
    const trashIcon = document.createElement("img"); //Criando tag "img"
    trashIcon.src = "./img/trash.svg";
    trashIcon.alt = "Excluir";
    trashIcon.className =
      "inline-block w-[15px] h-[15px] delete-task delete-icon gap-1 cursor-pointer";
    taskItem.appendChild(trashIcon); //Insere icone de lixeira dentro da tag "li"
    taskItem.appendChild(taskSeparator); //Insere "div" separadora dentro da tag "li"

    taskList.appendChild(taskItem); //Insere tarefa criada na tag "ol"

    newTaskInput.value = "";

    //Salvando tarefas no armazenamento local
    saveTasksToLocalStorage();
  }
}

//Função para deletar uma task
function deleteTask(event) {
  if (event.target.classList.contains("delete-task")) {
    event.target.parentElement.remove();

    //Salvando tarefas no armazenamento local
    saveTasksToLocalStorage();
  }
}

//Evento para inserir tarefa
addTaskButton.addEventListener("click", addTask);

//Evento para deletar tarefa
taskList.addEventListener("click", deleteTask);

//Carregando tarefas do armazenamento local ao carregar a página
window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  savedTasks.forEach((taskText) => {
    const taskItem = document.createElement("li"); //Cria tag "li"
    taskItem.className = "flex items-center gap-1 mt-2"; //Adicionando estilizações na "li" criada

    taskItem.innerText = taskText;

    //Adicionando div
    const taskSeparator = document.createElement("div");
    taskSeparator.className =
      "w-11/12 mt-1 border border-solid border-slate-400 delete-task";

    //Adicionando imagem da lixeira
    const trashIcon = document.createElement("img"); //Criando tag "img"
    trashIcon.src = "./img/trash.svg";
    trashIcon.alt = "Excluir";
    trashIcon.className =
      "inline-block w-[15px] h-[15px] delete-task delete-icon gap-1 cursor-pointer";
    taskItem.appendChild(trashIcon); //Insere icone de lixeira dentro da tag "li"
    taskItem.appendChild(taskSeparator); //Insere "div" separadora dentro da tag "li"

    taskList.appendChild(taskItem); //Insere tarefa criada na tag "ol"
  });
});
