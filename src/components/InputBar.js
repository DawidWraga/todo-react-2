import React, { useContext, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../contexts/app-context';

function InputBar() {
	const { setAllTodos } = useContext(AppContext);
	const todoNameRef = useRef();

	function addTodoHandler() {
		const name = todoNameRef.current.value;
		if (!name) return;
		setAllTodos((prevTodos) => {
			return [...prevTodos, { id: uuidv4(), name, complete: false }];
		});
		todoNameRef.current.value = null;
	}

	return (
		<div className="todosRow flex justify-between border rounded shadow-lg p-0  relative">
			<input
				className="w-full flex justify-between px-4 py-auto rounded  focus:ring-1 focus:ring-sky-500 break-words dark:bg-slate-700
      
      "
				ref={todoNameRef}
				type="text"
				onKeyPress={(ev) => {
					ev.key === 'Enter' && addTodoHandler();
				}}
			></input>
			<button
				class="btn absolute bottom-3 right-4 opacity-50"
				onClick={addTodoHandler}
			>
				Add
			</button>
		</div>
	);
}

export default InputBar;
