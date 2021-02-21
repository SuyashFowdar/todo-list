import { el, nodeEl } from './library';

const projects = JSON.parse(localStorage.projects || '{ "Default": [] }');

let projectName;
let formDisplay = false;

class Todo {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }
}

const addTodo = (val, index) => {
  if (index || index === 0) {
    projects[projectName][index] = val;
  } else {
    projects[projectName].push(val);
  }
};

const submitTodoForm = (e, index) => {
  e.preventDefault();
  const { elements } = e.target;
  if (elements) {
    const val = new Todo(
      elements.title.value,
      elements.description.value,
      elements.priority.value,
      elements.date.value,
    );
    addTodo(val, index);
    localStorage.projects = JSON.stringify(projects);
    // eslint-disable-next-line no-use-before-define
    displayTodo(projectName);
  }
};

const deleteTodo = (index) => {
  projects[projectName].splice(index, 1);
};

const deleteButton = (index) => {
  deleteTodo(index);
  localStorage.projects = JSON.stringify(projects);
  // eslint-disable-next-line no-use-before-define
  displayTodo(projectName);
};

const loadTodoForm = (data, index) => {
  const form = document.getElementById('todo-form');
  if (form) form.remove();
  el('form', 'todo-container', null, [['id', 'todo-form'], ['class', 'todo-form']], (node) => {
    node.addEventListener('submit', (e) => { submitTodoForm(e, index); });
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
        node.addEventListener('click', () => { deleteButton(index); });
      });
    }
  }
};

const setProject = (name) => {
  projectName = name;
};

const displayTodo = (name) => {
  setProject(name);
  document.getElementById('todo-container').innerHTML = '';
  el('h2', 'todo-container', projectName);
  el('div', 'todo-container', null, null, (node) => {
    nodeEl(node, ['b', 'Priority']);
    nodeEl(node, ['b', 'Title']);
    nodeEl(node, ['b', 'Due Date']);
  });
  el('ul', 'todo-container', null, [['id', 'todo-list']]);
  for (let i = 0; i < projects[projectName].length; i += 1) {
    const todo = projects[projectName][i];
    el('li', 'todo-list', null, null, (node) => {
      nodeEl(node, ['span', todo.priority]);
      nodeEl(node, ['span', todo.title]);
      nodeEl(node, ['span', todo.date]);
      node.addEventListener('click', () => { loadTodoForm(todo, i); });
    });
  }
  el('button', 'todo-container', 'New Todo', null, (node) => {
    node.addEventListener('click', () => { loadTodoForm(); });
  });
};

export {
  displayTodo, projects, Todo, addTodo, setProject, deleteTodo,
};