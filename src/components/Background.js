import React from 'react';

function Background() {
	return (
		<>
			<div
				className="dark:bg-dark-bg-1
  dark:dark-bg-1-pos background-header bg-light-bg-1  light-bg-1-pos bg-cover bg-no-repeat h-[415px] w-screen fixed top-0 z-10"
			/>
			<div className="bg-slate-100 dark:bg-slate-800 h-screen w-screen fixed top-0 z-0" />
		</>
	);
}

export default Background;
