
import {Todo} from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
};

const state = {

    todos: [
        new Todo('Emepzar el curso de VueJS.'),
        new Todo('Continuar con el curso de Python.')
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

const addTodo = (description) => {
    throw new Error('Not implemented');
};

const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
};

const deleteTodo = (todoId) => {
    throw new Error('Not implemented');
};

const deleteCompleted = () => {
    throw new Error('Not implemented');
};

const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented');
};

const getFilter = () => {
    throw new Error('Not implemented');
};

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
};