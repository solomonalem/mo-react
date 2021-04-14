import { addTodo, removeTodo } from './actionCreators';

const initialState = {
	todos: [
		{
			id: 1,
			content: 'lomi',
		},
		{
			id: 2,
			content: 'Jemira ',
		},
		{
			id: 3,
			content: ' interview ',
		},
	],
};

const  reducer = (state = initialState, action) => {
	switch (action.type) {
		case addTodo:
			return {
				...state,
				todos: [...state.todos, action.todo],
			};
	}
};

export default reducer;