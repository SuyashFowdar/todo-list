import { el } from './library';
import { displayProjects, loadProject } from './project';

el('h1', 'content', 'To Do List');
el('div', 'content', null, [['id', 'container'], ['class', 'container']]);
el('div', 'container', null, [['id', 'project-container']]);
el('div', 'container', null, [['id', 'todo-container']]);
displayProjects();
loadProject('Default');
