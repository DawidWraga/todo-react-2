import React from 'react';

const icons = {
	X: (
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	),
	check: (
		<>
			<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
			<path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
		</>
	),
};

function SVG({ i, w, h, color, classes }) {
	const classInput = `h-6 w-6 inline-block ${classes}`;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={classInput}
			fill="none"
			viewBox="0 0 20 20"
			stroke={color || 'currentColor'}
			strokeWidth={1.25}
		>
			{icons[i]}
		</svg>
	);
}

export default SVG;
