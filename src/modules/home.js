export function Createhome() {

    const content = document.querySelector('.content');
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const mainframe = document.createElement('div');
    mainframe.classList.add('mainframe');

    content.appendChild(sidebar);
    content.appendChild(mainframe);

    return Createhome; 
}