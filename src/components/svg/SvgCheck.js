import React from 'react';

function SvgCheck({ className, complete, onClick }) {
	return (
		<button
			className={`inline-block btn h-6 w-6 ${className}`}
			onClick={onClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="overflow-visible checked-svg"
				fill={complete ? 'rgb(14 165 233)' : 'gray'}
				viewBox="0 0 16 16"
				stroke={complete ? 'rgb(14 165 233)' : 'gray'}
				strokeWidth="0.7"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{' '}
				<path
					className={`tick ${complete ? 'checked-yes' : 'unchecked-no'}`}
					d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
				/>
			</svg>
		</button>
	);
}

export default SvgCheck;
