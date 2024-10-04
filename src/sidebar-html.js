import { getData } from "./tasks";
import generateTaskContent from "./task-content-html";

export const tasksData = getData();

export default function renderSidebar(){
  
  function renderSidebarTabs(){
    const sidebar = document.querySelector('.sidebar');
    tasksData.forEach(tab=>{
      const tabElement = document.createElement('button');
      tabElement.classList.add(tab.name.toLowerCase());
      tabElement.classList.add('sidebarTab');
      tabElement.textContent = tab.name;
      sidebar.appendChild(tabElement);
    })
  }

  function handleTabClick(){
    const sidebarTabElements = document.querySelectorAll('.sidebarTab');
    sidebarTabElements.forEach(tabElem=>{
      tasksData.forEach(tab=>{
        if (tabElem.textContent === tab.name){
          tabElem.addEventListener('click',()=>{
            generateTaskContent(tab);
          })
        }
      })
    })
  };

  renderSidebarTabs();
  handleTabClick();
}
