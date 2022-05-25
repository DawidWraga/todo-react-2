import React from 'react';
import Todolist from './components/Todolist';
import ListFooter from './components/ListFooter';
import TopBar from './components/TopBar';
import InputBar from './components/InputBar';
import Background from './components/Background';
import AppContextProvider from './contexts/AppContextProvider';

function App() {
	return (
		<div>
			<Background />
			<AppContextProvider>
				<main className="main">
					<TopBar />
					<InputBar />

					<div className="list-and-footer">
						<Todolist />
						<ListFooter />
					</div>
				</main>
			</AppContextProvider>
		</div>
	);
}

export default App;
