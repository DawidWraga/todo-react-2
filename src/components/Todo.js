import React, { useState, useRef } from 'react';
import DeleteModal from './DeleteModal.js';
import SVG from './SVG.js';

function Todo({ todo, setTodos }) {
	const crossIcon = useRef();
	const targetTodoId = todo.id;
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function toggleTodo() {
		setTodos((prevTodos) => {
			const newTodos = [...prevTodos];
			const todo = newTodos.find((todo) => todo.id === targetTodoId);
			todo.complete = !todo.complete;
			return newTodos;
		});
	}

	function showDeleteModal() {
		setModalIsOpen(true);
	}

	return (
		<div
			className="p-2 border-y flex justify-between transition-all"
			onMouseEnter={() => {
				crossIcon.current.classList.remove('hidden');
			}}
			onMouseLeave={() => {
				crossIcon.current.classList.add('hidden');
			}}
		>
			<label>
				<SVG
					i="check"
					classes="relative hover:cursor-pointer transition-colors mr-2"
					color={todo.complete && 'green'}
				/>
				<input
					className="absolute opacity-0 "
					type="checkbox"
					onChange={toggleTodo}
				></input>
				{todo.name}
			</label>
			<button ref={crossIcon} className="hidden" onClick={showDeleteModal}>
				<SVG i="X" />
			</button>

			{modalIsOpen && (
				<DeleteModal
					setModalIsOpen={setModalIsOpen}
					setTodos={setTodos}
					targetTodoId={targetTodoId}
				/>
			)}
		</div>
	);
}

export default Todo;
