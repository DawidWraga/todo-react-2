import React from 'react';
import Todo from './Todo.js';

function Todolist({ todos, setTodos }) {
	return (
		<div className="overflow-y-auto h-[448px]">
			{todos.map((todo) => {
				return <Todo todo={todo} setTodos={setTodos} />;
			})}
		</div>
	);
}

export default Todolist;
