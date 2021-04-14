import { ADD_TODO, REMOVE_TODO } from './action.js';

export const addTodo = () => {
	return {
		type: ADD_TODO,
		todo: 'love this',
	};
};
export const removeTodo = () => {
	return {
		type: REMOVE_TODO,
	};
};
