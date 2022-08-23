import { List } from './element.js';

const createTodoList = (getId) => {
  const rowHTML = `
  <div class="left">
    <input type="checkbox" class="status" id = ${getId.index}  ${getId.completed ? 'checked' : ''
} />
    <p class="desc ${getId.completed ? 'strike-through' : ''}">${getId.description
}</p>
  </div>
 `;
  return rowHTML;
};

const whattodo = (getId) => {
  const listRow = document.createElement('div');
  listRow.classList.add('todo-list-row');
  const rowHTML = createTodoList(getId);
  listRow.innerHTML = rowHTML;
  List.appendChild(listRow);
};
export default whattodo;