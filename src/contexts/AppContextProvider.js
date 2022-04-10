import React, { useState, useEffect } from 'react';
import { AppContext } from './app-context';

function AppContextProvider({ children }) {
	const LOCAL_STORAGE_KEY = 'todoApp.todos';

	const [todos, setTodos] = useState([]);
	const [allTodos, setAllTodos] = useState([]);

	//FIRST RENDER: get todos from local storage
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		storedTodos && setAllTodos(storedTodos);
	}, []);

	//ALLTODOS CHANGES: save to local storage
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allTodos));
	}, [allTodos]);

	return (
		<AppContext.Provider value={{ todos, setTodos, allTodos, setAllTodos }}>
			{children}
		</AppContext.Provider>
	);
}

export default AppContextProvider;
