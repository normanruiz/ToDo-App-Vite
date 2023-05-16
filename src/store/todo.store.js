
import {Todo} from '../todos/models/todo.model';

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
};

const state = {

    todos: [
        new Todo('Empezar el curso de VueJS.'),
        new Todo('Continuar con el curso de Python.'),
        new Todo('Continuar con este curso.'),
        new Todo('Terminar de leer el libro de Ruby On Rails.'),
        new Todo('Continuar con el libro de fxRuby.'),
        new Todo('Empezar con el libro de Python.')
    ],
    filter: Filters.All

};

const initStore = () => {
    console.log('Inicio Store...');
    loadStore();
};

const loadStore = () => {
    if (localStorage.getItem('state')){
        const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem( 'state' ) );
        state.todos = todos;
        state.filter = filter;
    }
};

const saveStore = () => {
    localStorage.setItem( 'state', JSON.stringify(state) );
};

const getTodos = (filter = Filters.All) => {
    switch( filter ){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done );
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done );
        default:
            throw new Error(`Option ${ filter } is not valid.`);
    }
};

const addTodo = (description) => {
    if (!description) throw new Error('description is required');
    state.todos.push(new Todo(description));
    saveStore();

};

const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStore();
};

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStore();
};

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
    saveStore();
};

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStore();
};

const getFilter = () => {
    return state.filter;
};

export default {
    initStore,
    loadStore,
    saveStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getFilter
};