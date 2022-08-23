import './style.css';
import Todo from './modules/todo.js';
import {
  desc,
  clear,
  statusIn,
  form,
  refresh,
} from './modules/element.js';

const todo1 = new Todo();

todo1.renderPage();

desc.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && desc.value !== '') {
    todo1.addTodo();
    e.preventDefault();
    form.reset();
  }
});

const load = () => window.location.reload();

refresh.addEventListener('click', load);
clear.addEventListener('click', () => {
  todo1.clearCompleted();
});

for (let i = 0; i < statusIn.length; i += 1) {
  statusIn[i].addEventListener('change', (ev) => {
    todo1.changeStatus(ev.target.id, ev.target.checked);
    const { parentNode } = ev.target;
    parentNode.querySelector('.desc').classList.toggle('strike-through');
  });
}

// https://pbphpsolutions.com/php-notification-alert-when-a-new-record-is-inserted-using-ajax.html