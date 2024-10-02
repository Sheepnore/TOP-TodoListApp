const sidebarTabs = [
  {
    name:'Today',
    tasks: 0
  },
  {
    name:'Upcoming',
    tasks: 0,
  },
  {
    name:'Anytime',
    tasks: 0
  },
  {
    name: 'Someday',
    tasks: 0
  }
];

export default function renderSidebar(){

  function renderSidebarTabs(){
    const sidebar = document.querySelector('.sidebar');
    sidebarTabs.forEach(tab=>{
      const tabElement = document.createElement('button');
      tabElement.classList.add(tab.name.toLowerCase());
      tabElement.textContent = tab.name;
      sidebar.appendChild(tabElement);
    })
  }

  renderSidebarTabs();
}
