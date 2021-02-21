import {
  projects, setProject, addTodo, Todo,
} from '../src/todo';
import { addProject } from '../src/project';

test('Retrieve default project list', () => {
  expect(projects).toEqual({ Default: [] });
});

test('Add new project', () => {
  addProject('New Project');
  expect(projects).toEqual({ Default: [], 'New Project': [] });
});

test('Retrieve Project todos', () => {
  setProject('New Project');
  const todo = new Todo(
    'Title',
    'Description',
    1,
    '2021-02-18',
  );
  addTodo(todo);
  expect(projects['New Project']).toEqual([todo]);
});
