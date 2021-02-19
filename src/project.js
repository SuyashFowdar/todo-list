import { el } from './library';
import { loadProject, projects } from './todo';

const addProject = (e) => {
  e.preventDefault();
  const val = e.target.elements['project-name'].value;
  if (val) {
    projects[val] = [];
    el('li', 'project-list', val, null, (node) => {
      node.addEventListener('click', () => { loadProject(val); });
    });
    localStorage.projects = JSON.stringify(projects);
    e.target.elements['project-name'].value = '';
  }
};

const displayProjects = () => {
  el('h2', 'project-container', 'Project List');
  el('ul', 'project-container', null, [['id', 'project-list']]);

  for (let i = 0, keys = Object.keys(projects); i < keys.length; i += 1) {
    el('li', 'project-list', keys[i], [['style', 'cursor: pointer;']], (node) => {
      node.addEventListener('click', () => { loadProject(keys[i]); });
    });
  }

  el('form', 'project-container', null, [['id', 'new-project-form']], (node) => {
    node.addEventListener('submit', (e) => { addProject(e); });
  });
  el('input', 'new-project-form', null, [['type', 'text'], ['name', 'project-name'], ['placeholder', 'Type new project name and press Enter'], ['required', true]]);
};

export { loadProject, displayProjects };