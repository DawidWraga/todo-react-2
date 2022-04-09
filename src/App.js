import React, { useState, useRef, useEffect } from 'react';
import Todolist from './components/Todolist';
import { v4 as uuidv4 } from 'uuid';
import ListFooter from './components/ListFooter';
import SvgTime from './components/svg/SvgTime.js';
import SvgTodo from './components/svg/SvgTodo';

//////////////////////TODO
/*
Make moon/ sun toggle between light/ dark mode
Make everything bigger (main should fit )
place | between "all, active, complete"
refactor code: dempose into components


maybe 
remove 7 items left and instead have a small circle next to [all active complete] (ie displayMode state)  with number insire

Reorder cards functionality



TODO: TECHNOLOGIES
Testing
typescript
redux 
UML syntax in VSCODE
*/

function App() {
	const LOCAL_STORAGE_KEY = 'todoApp.todos';

	const [todos, setTodos] = useState([]);
	const [allTodos, setAllTodos] = useState([]);
	const todoNameRef = useRef();

	// load todos from local storage on first render
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		storedTodos && setAllTodos(storedTodos);
	}, []);

	// save todos each time todos changes
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allTodos));
	}, [allTodos]);

	function addTodoHandler() {
		const name = todoNameRef.current.value;
		if (!name) return;
		setAllTodos((prevTodos) => {
			return [...prevTodos, { id: uuidv4(), name, complete: false }];
		});
		todoNameRef.current.value = null;
	}

	return (
		<>
			<div className="bg-img bg-mountains-space bg-cover bg-no-repeat h-[415px] w-screen fixed top-0 z-10" />
			<div className="bg-white h-[300px] w-screen fixed top-0 z-0" />

			<div className="w-11/12 sm:w-4/5 max-w-[600px] min-h-[400px] top-20 relative sm:top-40 m-auto z-10 opacity-[97%]">
				<div className="relative top-[-2rem] flex justify-between h-10">
					<SvgTodo />
					<SvgTime />
				</div>
				<div className="todosRow flex justify-between border rounded shadow-lg p-0 bg-white relative">
					<input
						className="w-full flex justify-between px-4 py-auto rounded  focus:ring-1 focus:ring-sky-500 break-words
						
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

				<div className="h-[73vh] sm:h-[calc(10*3.5rem)]  shadow-2xl mt-4 bg-white rounded">
					<Todolist
						todos={todos}
						setTodos={setTodos}
						setAllTodos={setAllTodos}
					/>
					<ListFooter
						todos={todos}
						setTodos={setTodos}
						allTodos={allTodos}
						setAllTodos={setAllTodos}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
