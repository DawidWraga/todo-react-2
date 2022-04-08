import React from 'react';

function ListFooter({ todos, setTodos }) {
	function clearHandler() {
		setTodos((prevTodos) => {
			return [...prevTodos].filter((todo) => !todo.complete);
		});
	}

	return (
		<div className="todosRow border-t flex justify-between text-sm text-slate-500 items-center">
			<p className="mx-1 mr-1 sm:mr-2">
				{todos.filter((todo) => !todo.complete).length} items left
			</p>
			<div className="">
				<button onClick={''} className="btn footer-btn">
					All
				</button>
				<button onClick={''} className="btn footer-btn">
					Active
				</button>
				<button onClick={''} className="btn footer-btn">
					Complete
				</button>
			</div>
			<button onClick={clearHandler} className="btn footer-btn">
				Clear complete
			</button>
		</div>
	);
}

export default ListFooter;
