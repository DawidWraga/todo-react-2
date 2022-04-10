import React, { useContext } from 'react';
import { AppContext } from '../contexts/app-context.js';
import Todo from './Todo.js';

function Todolist() {
	const { todos } = useContext(AppContext);

	return (
		<div className="overflow-y-auto h-[calc(73vh-3.5rem)] sm:h-[calc(9*3.5rem)]">
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} />;
			})}
		</div>
	);
}

export default Todolist;
