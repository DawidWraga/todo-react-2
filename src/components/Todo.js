import React, { useState } from 'react';
import DeleteModal from './DeleteModal.js';
import SvgX from './svg/SvgX.js';
import SvgCheck from './svg/SvgCheck.js';

function Todo({ todo, setTodos }) {
	const { id, name, complete } = todo;
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function toggleTodo() {
		setTodos((prevTodos) => {
			const newTodos = [...prevTodos];
			const todo = newTodos.find((newTodo) => newTodo.id === id);
			todo.complete = !todo.complete;
			return newTodos;
		});
	}

	function showDeleteModal() {
		setModalIsOpen(true);
	}

	return (
		<div
			key={id}
			className="todosRow border-b flex justify-between transition-all duration-200 group "
		>
			<div className="flex items-center">
				<SvgCheck className="mr-1" complete={complete} onClick={toggleTodo} />
				<p className="inline-block mx-1">{name}</p>
			</div>

			<SvgX
				className="invisible group-hover:visible"
				onClick={showDeleteModal}
			/>

			{modalIsOpen && (
				<DeleteModal
					setModalIsOpen={setModalIsOpen}
					setTodos={setTodos}
					targetTodoId={id}
				/>
			)}
		</div>
	);
}

export default Todo;
