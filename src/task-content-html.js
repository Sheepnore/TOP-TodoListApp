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
    addTaskButton.textContent = '+'

    // DOM
    mainContent.appendChild(tasksContainer);
    tasksContainer.appendChild(addTaskButton);
  }


  renderHeaderSectionHtml();
  renderTaskSectionHtml();
}