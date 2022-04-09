import React from 'react';
import Todo from './Todo.js';

function Todolist({ todos, setAllTodos }) {
	return (
		<div className="overflow-y-auto h-[calc(73vh-56px)] sm:h-[448px]">
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} setAllTodos={setAllTodos} />;
			})}
		</div>
	);
}

export default Todolist;
