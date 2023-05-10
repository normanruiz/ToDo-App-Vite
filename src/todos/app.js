
import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIds = {
    TodoList: '.todo-list'
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

}