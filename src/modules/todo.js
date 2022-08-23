import { desc, List } from './element.js';
import whattodo from './whattodo.js';

class Todo {
  constructor() {
    this.index = 0;
    this.completed = false;
    this.description = '';
    this.tObject = [];
  }

  addTodo() {
    this.tObject = this.readTodo();
    this.description = desc.value;
    this.index = this.tObject.length;
    this.tObject.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    this.storeTodo();
    whattodo({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    window.location.reload();
    return this.tObject;
  }

  readTodo() {
    const TObject = JSON.parse(localStorage.getItem('tObject'));
    if (TObject) {
      this.tObject = TObject;
    } else {
      this.tObject = [];
    }
    return this.tObject;
  }

  clearCompleted() {
    this.tObject = this.readTodo();
    this.tObject = this.tObject.filter((todo) => todo.completed !== true);
    this.arrangeIndex();
    this.storeTodo();
    window.location.reload();
  }

  removeTodo(id) {
    this.tObject = this.readTodo();
    this.tObject = this.tObject.filter((todo) => todo.index !== Number(id));
    this.arrangeIndex();
    this.storeTodo();
    return this.tObject;
  }

  storeTodo() {
    localStorage.setItem('tObject', JSON.stringify(this.tObject));
  }

  arrangeIndex() {
    this.tObject.forEach((todo, index) => {
      todo.index = index;
    });
  }

  changeStatus(id, status) {
    this.tObject = this.readTodo();
    this.tObject[Number(id)].completed = status;
    this.storeTodo();
  }

  renderPage() {
    List.innerHTML = '';
    this.tObject = this.readTodo();
    this.tObject.forEach((task) => whattodo(task));
  }

  updateDescription(val, id) {
    this.tObject = this.readTodo();
    this.tObject[Number(id)].description = val;
    this.storeTodo();
  }
}

export default Todo;