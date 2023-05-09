
import {Todo} from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
};

const state = {

    todos: [
        new Todo('Emepzar el curso de VueJS.'),
        new Todo('Continuar con el curso de Python.'),
        new Todo('Continuar con este curso.'),
        new Todo('Terminar de leer el libro de Ruby Onm Rails.'),
        new Todo('Continuar con el libro de fxRuby.'),
        new Todo('Emepzar con el libro de Python.')
    ],
    filter: Filters.All

};

const initStore = () => {
    console.log('Inicio Store...');
    console.log(state);
};

const loadStore = () => {
    throw new Error('Not implemented');
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
};

const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });
};

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
};

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
};

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
};

const getFilter = () => {
    return state.filter;
};

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getFilter
};