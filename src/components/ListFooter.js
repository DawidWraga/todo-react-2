import React, { useState, useEffect } from 'react';

function ListFooter({ setTodos, allTodos, setAllTodos }) {
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
	}, [displayMode, allTodos]);

	return (
		<div className="todosRow border-t flex justify-between text-xs xs:text-sm p-0 xs:p-3 text-slate-500 items-center flex-shrink">
			<p className="mx-1 mr-1 sm:mr-2">
				{allTodos.filter((todo) => !todo.complete).length} items left
			</p>
			<div className="">
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
			<button onClick={clearHandler} className="btn footer-btn">
				Clear complete
			</button>
		</div>
	);
}

export default ListFooter;
