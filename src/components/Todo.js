import React, { useContext, useState } from 'react';
import DeleteModal from './DeleteModal.js';
import SvgX from './svg/SvgX.js';
import SvgCheck from './svg/SvgCheck.js';
import { AppContext } from '../contexts/app-context.js';

function Todo({ todo }) {
	const { setAllTodos } = useContext(AppContext);
	const { id, name, complete } = todo;
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function toggleTodo() {
		setAllTodos((prevTodos) => {
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
		<div className="todosRow border-b flex justify-between group ">
			<div className="flex items-center">
				<SvgCheck className="mr-2" complete={complete} onClick={toggleTodo} />
				<p className="inline-block  mx-1">{name}</p>
			</div>

			<SvgX
				className="invisible group-hover:visible"
				onClick={showDeleteModal}
			/>

			{modalIsOpen && (
				<DeleteModal
					setModalIsOpen={setModalIsOpen}
					setAllTodos={setAllTodos}
					targetTodoId={id}
				/>
			)}
		</div>
	);
}

export default Todo;
