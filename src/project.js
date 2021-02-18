import appendElement from './library';
import { loadProject, projects } from './todo';

function addProject(e) {
  e.preventDefault();
  const val = e.target.elements['project-name'].value;
  if (val) {
    projects[val] = [];
    appendElement('li', 'project-list', val, null, (node) => {
      node.addEventListener('click', () => { loadProject(val); });
    });
    localStorage.projects = JSON.stringify(projects);
    e.target.elements['project-name'].value = '';
  }
}

function displayProjects() {
  appendElement('h2', 'project-container', 'Project List');
  appendElement('ul', 'project-container', null, [['id', 'project-list']]);

  for (let i = 0, keys = Object.keys(projects); i < keys.length; i += 1) {
    appendElement('li', 'project-list', keys[i], [['style', 'cursor: pointer;']], (node) => {
      node.addEventListener('click', () => { loadProject(keys[i]); });
    });
  }

  appendElement('form', 'project-container', null, [['id', 'new-project-form']], (node) => {
    node.addEventListener('submit', (e) => { addProject(e); });
  });
  appendElement('input', 'new-project-form', null, [['type', 'text'], ['name', 'project-name'], ['placeholder', 'Type new project name and press Enter']]);
}

export { loadProject, displayProjects };