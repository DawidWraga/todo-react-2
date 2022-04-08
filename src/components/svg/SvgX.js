import React from 'react';

function SvgX({ className, onClick }) {
	return (
		<button className={`btn ${className}`} onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 inline-block hover:cursor-pointer"
				fill="none"
				viewBox="0 0 24 24"
				stroke="gray"
				strokeWidth={1.25}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	);
}

export default SvgX;

/* <SVG
					i="check"
					classes="relative hover:cursor-pointer transition-colors mr-2"
					color={todo.complete && 'green'}
				/> */
