import React from 'react';
import Todo from './Todo.js';

function Todolist({ todos, setTodos }) {
	return (
		<div className="todoList shadow-lg mt-2 bg-white">
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} setTodos={setTodos} />;
			})}
		</div>
	);
}

export default Todolist;
