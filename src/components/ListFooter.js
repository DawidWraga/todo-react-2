import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../contexts/app-context';

function ListFooter() {
	const { setTodos, allTodos, setAllTodos } = useContext(AppContext);
	const [displayMode, setDisplayMode] = useState('all');

	function clearHandler() {
		setAllTodos((prevTodos) => {
			return [...prevTodos].filter((todo) => !todo.complete);
		});
	}

	useEffect(() => {
		switch (displayMode) {
			case 'complete':
				setTodos(allTodos.filter((todo) => todo.complete));
				break;
			case 'active':
				setTodos(allTodos.filter((todo) => !todo.complete));
				break;
			case 'all':
				setTodos(allTodos);
				break;
			default:
				console.log('error invalid display mode');
				break;
		}
	}, [displayMode, allTodos, setTodos]);

	return (
		<div className="todosRow border-t flex justify-evenly xs:justify-between text-xs xs:text-sm p-0 xs:p-3 text-slate-500 items-center text-center">
			<p className="mx-1 mr-1 sm:mr-2 text-sm xs:text-lg ">
				{allTodos.filter((todo) => !todo.complete).length} items left
			</p>
			<div className="w-1/3 xs:w-1/2">
				<button
					onClick={() => setDisplayMode('all')}
					className={`btn footer-btn ${displayMode === 'all' && 'active'}`}
				>
					All
				</button>
				<button
					onClick={() => setDisplayMode('active')}
					className={`btn footer-btn ${displayMode === 'active' && 'active'}`}
				>
					Active
				</button>
				<button
					onClick={() => setDisplayMode('complete')}
					className={`btn footer-btn ${displayMode === 'complete' && 'active'}`}
				>
					Complete
				</button>
			</div>
			<button
				onClick={clearHandler}
				className="btn footer-btn xs:p-0 dark:text-white"
			>
				Clear complete
			</button>
		</div>
	);
}

export default ListFooter;
