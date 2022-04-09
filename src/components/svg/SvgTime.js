import React from 'react';

function SvgDay() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="80"
			height="80"
			fill="white"
			className="bi bi-brightness-alt-low-fill "
			viewBox="0 5 16 16"
		>
			<path
				className="sunsvg"
				d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z"
			/>
		</svg>
	);
}

function SvgNight() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			fill="white"
			className="bi bi-moon-fill"
			viewBox="0 0 16 16"
		>
			<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
		</svg>
	);
}

function SvgTime() {
	const time = new Date().toLocaleString().split(', ')[1].slice(0, 2);
	console.log(time);

	const isDay = time > 3 && time < 18;

	if (isDay) return <SvgDay />;
	else return <SvgNight />;
	// return (
	// 	<>
	// 		<SvgDay />
	// 		<SvgNight />
	// 	</>
	// );

	// return <div className="rounded bg-white w-5 h-5"></div>;
}

export default SvgTime;
