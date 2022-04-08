import React from 'react';
import Backdrop from './Backdrop';

function DeleteModal({ setModalIsOpen, setTodos, targetTodoId }) {
	function deleteTodoHandler() {
		setTodos((prevTodos) => {
			return [...prevTodos].filter((todo) => todo.id !== targetTodoId);
		});
	}

	function hideModalHandler() {
		setModalIsOpen(false);
	}

	return (
		<>
			<div className="modal shadow p-5">
				<p className="text-xl my-4">are you sure?</p>
				<button
					className="mx-3 my-1 p-2 border-2 rounded-md text-white bg-red-500 hover:text-lg transition-all"
					onClick={deleteTodoHandler}
				>
					Delete
				</button>
				<button
					className="mx-3 my-1 p-2 border-2 rounded-md bg-gray-50 hover:text-lg transition-all"
					onClick={hideModalHandler}
				>
					Cancel
				</button>
			</div>
			<Backdrop onClick={hideModalHandler} />
		</>
	);
}

export default DeleteModal;
