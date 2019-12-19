const getPageHeight = () => Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight,
);

let direction;
let scrollCurrent;
let scrollPrevious;
let scrollArea;

document.addEventListener('load', () => {
	scrollArea = getPageHeight() - document.documentElement.clientHeight;
});


export function scrolled(trigger = 1) {
	return window.scrollY > trigger;
}


export function scrollDirection() {
	if (scrollCurrent > scrollPrevious) {
		direction = 'down';
	} else {
		direction = 'up';
	}

	scrollPrevious = scrollCurrent;
	scrollCurrent = window.scrollY;

	return window.scrollY > 1 ? direction : 'start';
}


export function scrollPosition() {
	return scrollArea > 1 ? window.scrollY : undefined;
}


export function scrollPercentage() {
	return scrollArea > 1 ? Math.round((scrollPosition() * 100) / scrollArea) : undefined;
}
