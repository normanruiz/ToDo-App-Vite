
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
}

export default {
    initStore
};