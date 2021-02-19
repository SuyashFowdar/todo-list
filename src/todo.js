import { el, nodeEl } from './library';

const projects = JSON.parse(localStorage.projects || '{ "Default": [] }');

let project;
let projectName;
let formDisplay = false;

const loadProject = (project) => {
  document.getElementById('todo-container').innerHTML = '';
  // eslint-disable-next-line no-use-before-define
  displayTodo(project, projects[project]);
};

class Todo {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }
}

const addTodo = (e, index) => {
  e.preventDefault();
  const { elements } = e.target;
  const val = new Todo(
    elements.title.value,
    elements.description.value,
    elements.priority.value,
    elements.date.value,
  );
  if (elements) {
    if (index || index === 0) {
      project[index] = val;
    } else {
      project.push(val);
    }
    projects[projectName] = project;
    localStorage.projects = JSON.stringify(projects);
    loadProject(projectName);
  }
};

const deleteTodo = (index) => {
  project.splice(index, 1);
  projects[projectName] = project;
  localStorage.projects = JSON.stringify(projects);
  loadProject(projectName);
};

const loadTodoForm = (data, index) => {
  const form = document.getElementById('todo-form');
  if (form) form.remove();
  el('form', 'todo-container', null, [['id', 'todo-form'], ['class', 'todo-form']], (node) => {
    node.addEventListener('submit', (e) => { addTodo(e, index); });
  });
  if (data) {
    formDisplay = true;
  } else {
    formDisplay = !formDisplay;
  }
  if (formDisplay) {
    el('h2', 'todo-form', data ? data.title : 'New ToDo');
    el('input', 'todo-form', null, [['type', 'text'], ['name', 'title'], ['placeholder', 'Enter todo item title'], ['value', data ? data.title : ''], ['required', true]]);
    el('input', 'todo-form', null, [['type', 'text'], ['name', 'description'], ['placeholder', 'Enter todo item desciption'], ['value', data ? data.description : ''], ['required', true]]);
    el('input', 'todo-form', null, [['type', 'number'], ['name', 'priority'], ['placeholder', 'Enter todo item priority'], ['value', data ? data.priority : ''], ['required', true]]);
    el('input', 'todo-form', null, [['type', 'date'], ['name', 'date'], ['placeholder', 'Enter todo due date'], ['value', data ? data.date : ''], ['required', true]]);
    el('input', 'todo-form', null, [['type', 'submit'], ['value', data ? 'Update Todo' : 'Add Todo']]);
    if (data) {
      el('button', 'todo-form', 'Delete Todo Item', [['type', 'button']], (node) => {
        node.addEventListener('click', () => { deleteTodo(index); });
      });
    }
  }
};

const displayTodo = (name, list) => {
  project = list;
  projectName = name;
  el('h2', 'todo-container', projectName);
  el('div', 'todo-container', null, null, (node) => {
    nodeEl(node, ['b', 'Priority']);
    nodeEl(node, ['b', 'Title']);
    nodeEl(node, ['b', 'Due Date']);
  });
  el('ul', 'todo-container', null, [['id', 'todo-list']]);
  for (let i = 0; i < list.length; i += 1) {
    el('li', 'todo-list', null, null, (node) => {
      nodeEl(node, ['span', list[i].priority]);
      nodeEl(node, ['span', list[i].title]);
      nodeEl(node, ['span', list[i].date]);
      node.addEventListener('click', () => { loadTodoForm(list[i], i); });
    });
  }
  el('button', 'todo-container', 'New Todo', null, (node) => {
    node.addEventListener('click', () => { loadTodoForm(); });
  });
};

export { loadProject, displayTodo, projects };