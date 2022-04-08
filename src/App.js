import React, { useState, useRef, useEffect } from 'react';
import Todolist from './components/Todolist';
import { v4 as uuidv4 } from 'uuid';
import ListFooter from './components/ListFooter';

function App() {
	const [todos, setTodos] = useState([]);
	const todoNameRef = useRef();
	const LOCAL_STORAGE_KEY = 'todoApp.todos';

	// load todos from local storage on first render
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		storedTodos && setTodos(storedTodos);
	}, []);

	// save todos each time todos changes
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	function addTodoHandler() {
		const name = todoNameRef.current.value;
		if (!name) return;
		setTodos((prevTodos) => {
			return [...prevTodos, { id: uuidv4(), name, complete: false }];
		});
		todoNameRef.current.value = null;
	}

	return (
		<>
			<div className="bg-blue-600 h-[305px] w-screen fixed top-0 z-10" />
			<div className="bg-white h-[300px] w-screen fixed top-0 z-0" />

			<div className="w-11/12 sm:w-4/5 max-w-[550px] min-h-[400px] relative top-40 m-auto z-10">
				<div className="todosRow flex justify-between border rounded py-1 px-3 shadow-lg bg-white">
					<input
						className="w-10/12 flex justify-between p-2"
						ref={todoNameRef}
						type="text"
						onKeyPress={(ev) => {
							ev.key === 'Enter' && addTodoHandler();
						}}
					></input>
					<button class="btn w-2/12 opacity-50" onClick={addTodoHandler}>
						Add
					</button>
				</div>

				<div className="h-[504px]  shadow-2xl mt-4 bg-white rounded">
					<Todolist todos={todos} setTodos={setTodos} />
					<ListFooter todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</>
	);
}

export default App;
