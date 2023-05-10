
import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input'
};

/**
 * 
 * @param {string} elementId 
 */
export const App = (elementId) => {

    const cargarTodos = () => {
        const todos = todoStore.getTodos(todoStore.getFilter());
        console.log(todos);
        renderTodos( ElementIds.TodoList, todos );
    };

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        cargarTodos();
    })();

    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);

    newDescriptionInput.addEventListener('keyup', (event) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;
        todoStore.addTodo(event.target.value);
        cargarTodos();
        event.target.value = '';
    });

}