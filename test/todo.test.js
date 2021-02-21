import {
  projects, Todo, addTodo, setProject, deleteTodo,
} from '../src/todo';

test('Retrieve Todos', () => {
  setProject('Default');
  expect(projects.Default).toEqual([]);
});

test('Create new Todo', () => {
  const todo = new Todo(
    'Title',
    'Description',
    1,
    '2021-02-18',
  );
  addTodo(todo);
  expect(projects.Default[0]).toEqual(todo);
});

test('Update Todo', () => {
  const todo = new Todo(
    'Title 1',
    'Description 1',
    1,
    '2021-02-19',
  );
  addTodo(todo, 0);
  expect(projects.Default[0]).toEqual(todo);
});

test('Delete Todo', () => {
  deleteTodo(0);
  expect(projects.Default).toEqual([]);
});
