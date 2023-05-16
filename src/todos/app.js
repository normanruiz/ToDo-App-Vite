
import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    FiltersLi: '.filtro',
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
    const todoListUL = document.querySelector(ElementIds.TodoList);
    const clearCompleted = document.querySelector(ElementIds.ClearCompleted);
    const filtersLi = document.querySelectorAll(ElementIds.FiltersLi);

    newDescriptionInput.addEventListener('keyup', (event) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;
        todoStore.addTodo(event.target.value);
        cargarTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener( 'click', ( event ) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        cargarTodos();
    });

    todoListUL.addEventListener( 'click', ( event ) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if( isDestroyElement ){
            todoStore.deleteTodo(element.getAttribute('data-id'));
            cargarTodos();
        }
    });

    clearCompleted.addEventListener( 'click', () => {
        todoStore.deleteCompleted();
        cargarTodos();
    });

    filtersLi.forEach((element) => {
        element.addEventListener('click', (element) => {
            filtersLi.forEach( el => el.classList.remove( 'selected' ) );
            element.target.classList.add('selected');
            console.log( element.target.text );
            switch( element.target.text ) {
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending)
                break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                break;
            }
            cargarTodos();
        });
    });

}
