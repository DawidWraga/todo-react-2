import React from 'react';
import Backdrop from './Backdrop';

function DeleteModal({ setModalIsOpen, setAllTodos, targetTodoId }) {
	function deleteTodoHandler() {
		setAllTodos((prevTodos) => {
			return [...prevTodos].filter((todo) => todo.id !== targetTodoId);
		});
	}

	function hideModalHandler() {
		setModalIsOpen(false);
	}

	return (
		<>
			<div className="modal bg-white dark:bg-slate-800 shadow p-5">
				<p className="text-xl my-4">are you sure?</p>
				<button
					className="btn btn-md text-white bg-red-500 "
					onClick={() => {
						deleteTodoHandler();
						hideModalHandler();
					}}
				>
					Delete
				</button>
				<button
					className="btn btn-md bg-gray-50 dark:text-black"
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
