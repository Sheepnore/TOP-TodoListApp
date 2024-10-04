import { saveToLocalStorage } from "./tasks";
import { tasksData } from "./sidebar-html";
export default function generateTaskContent(tab){
  const mainContent = document.querySelector('.main-content');
  // clear previous html
  mainContent.innerHTML = '';
  
  function renderHeaderSectionHtml(){
    const headerSection = document.createElement('div');
    headerSection.classList.add('headerSection');
    const header = document.createElement('h1');
    const headerDescription = document.createElement('p');
    header.textContent = tab.name;
    headerDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
    // DOM
    mainContent.appendChild(headerSection);
    headerSection.appendChild(header);
    headerSection.appendChild(headerDescription);    
  }

  function renderTaskSectionHtml(){
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasksContainer');
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('addTaskButton');
    addTaskButton.textContent = '+';

    // DOM
    mainContent.appendChild(tasksContainer);
    tasksContainer.appendChild(addTaskButton);
  }

  const dialog = document.querySelector('dialog');

  function handleAddTaskButtonClick(){
    const showDialog = document.querySelector('.addTaskButton');
    showDialog.addEventListener('click',()=>{
      dialog.showModal();
    });
    handleDialogClose();
    addTaskToList();
  }

  function handleDialogClose(){
    const closeDialog = document.getElementById('closeDialog');
    closeDialog.addEventListener('click',()=>{
      dialog.close();
    });
  }

  function addTaskToList(){
    const addTask = document.querySelector('#addTask');
    const tasks = tab.tasks;
    addTask.addEventListener('click',()=>{
      const inputTask = document.querySelector('#task');
      const taskName = inputTask.value;
      tasks.push(taskName);
      inputTask.value = '';
      saveToLocalStorage(tasksData);
      console.log(tasksData);
      dialog.close();

    });
  }

  function renderTodoTask(){
    const tasks = tab.tasks;
    const tasksContainer = document.querySelector('.tasksContainer');
    const tasksListHtml = document.createElement('div')
    tasksListHtml.classList.add('tasksList');
    tasksContainer.appendChild(tasksListHtml);
    tasks.forEach(task=>{
      const taskHtml = document.createElement('div');
      taskHtml.classList.add('task');
      taskHtml.textContent = task;
      tasksListHtml.appendChild(taskHtml); 
    }) 
  }

  renderHeaderSectionHtml();
  renderTaskSectionHtml();
  handleAddTaskButtonClick();
  renderTodoTask();
}