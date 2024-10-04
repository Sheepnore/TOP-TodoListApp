  const sidebarTabs = [
  {
    name:'Today',
    tasks: [],
  },
  {
    name:'Upcoming',
    tasks: [],
  },
  {
    name:'Anytime',
    tasks: [],
  },
  {
    name: 'Someday',
    tasks: [],
  }
];


export function saveToLocalStorage(data){
  localStorage.setItem('sidebarTabs',JSON.stringify(data));
}

export function getData(){
  const retrivedData = JSON.parse(localStorage.getItem('sidebarTabs'));
  return retrivedData;
}
