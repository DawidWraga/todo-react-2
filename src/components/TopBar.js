import React, { useState, useEffect } from 'react';
import SvgTime from './svg/SvgTime.js';
import SvgTodo from './svg/SvgTodo';

function TopBar() {
	const LOCAL_STORAGE_KEY = 'todoApp.dark';

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [dark, setDark] = useState(prefersDark);

	useEffect(() => {
		const previous = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		setDark(previous);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dark));
		dark
			? document.body.classList.remove('dark')
			: document.body.classList.add('dark');
	}, [dark]);

	return (
		<div className="relative top-[-1rem] flex justify-between h-10">
			<SvgTodo />
			<SvgTime dark={dark} setDark={setDark} />
		</div>
	);
}

export default TopBar;
