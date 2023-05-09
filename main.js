import './style.css';
import {App} from './src/todos/app';
import store from './src/store/todo.store';

console.log('To Do App Vite run...');
App('#app');
store.initStore();