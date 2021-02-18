import appendElement from './library';

const projects = JSON.parse(localStorage.projects || '{ "Default": [] }');

let project;
let projectName;
let formDisplay = false;

function loadProject(project) {
  document.getElementById('todo-container').innerHTML = '';
  // eslint-disable-next-line no-use-before-define
  displayTodo(project, projects[project]);
}

function Todo(title, description, priority, date) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.date = date;
}

function addTodo(e, index) {
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
}

function deleteTodo(index) {
  project.splice(index, 1);
  projects[projectName] = project;
  localStorage.projects = JSON.stringify(projects);
  loadProject(projectName);
}

function loadTodoForm(data, index) {
  const form = document.getElementById('todo-form');
  if (form) form.remove();
  appendElement('form', 'todo-container', null, [['id', 'todo-form'], ['class', 'todo-form']], (node) => {
    node.addEventListener('submit', (e) => { addTodo(e, index); });
  });
  if (data) {
    formDisplay = true;
  } else {
    formDisplay = !formDisplay;
  }
  if (formDisplay) {
    appendElement('h2', 'todo-form', data ? data.title : 'New ToDo');
    appendElement('input', 'todo-form', null, [['type', 'text'], ['name', 'title'], ['placeholder', 'Enter todo item title'], ['value', data ? data.title : ''], ['required', true]]);
    appendElement('input', 'todo-form', null, [['type', 'text'], ['name', 'description'], ['placeholder', 'Enter todo item desciption'], ['value', data ? data.description : ''], ['required', true]]);
    appendElement('input', 'todo-form', null, [['type', 'number'], ['name', 'priority'], ['placeholder', 'Enter todo item priority'], ['value', data ? data.priority : ''], ['required', true]]);
    appendElement('input', 'todo-form', null, [['type', 'date'], ['name', 'date'], ['placeholder', 'Enter todo due date'], ['value', data ? data.date : ''], ['required', true]]);
    appendElement('input', 'todo-form', null, [['type', 'submit'], ['value', data ? 'Update Todo' : 'Add Todo']]);
    if (data) {
      appendElement('button', 'todo-form', 'Delete Todo Item', [['type', 'button']], (node) => {
        node.addEventListener('click', () => { deleteTodo(index); });
      });
    }
  }
}

function displayTodo(name, list) {
  project = list;
  projectName = name;
  appendElement('h2', 'todo-container', projectName);
  appendElement('ul', 'todo-container', null, [['id', 'todo-list']]);
  for (let i = 0; i < list.length; i += 1) {
    appendElement('li', 'todo-list', `#${list[i].priority} - ${list[i].title} ==> ${list[i].date}`, null, (node) => {
      node.addEventListener('click', () => { loadTodoForm(list[i], i); });
    });
  }
  appendElement('button', 'todo-container', 'New Todo', null, (node) => {
    node.addEventListener('click', () => { loadTodoForm(); });
  });
}

export { loadProject, displayTodo, projects };