import appendElement from './library';
import { displayProjects, loadProject } from './project';

appendElement('h1', 'content', 'To Do List');
appendElement('div', 'content', null, [['id', 'container'], ['class', 'container']]);
appendElement('div', 'container', null, [['id', 'project-container']]);
appendElement('div', 'container', null, [['id', 'todo-container']]);
displayProjects();
loadProject('Default');
