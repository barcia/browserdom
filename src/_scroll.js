export function scrolled(trigger) {
	// Set if the window is scrolled
	return window.scrollY > trigger ? true : false;
}


let dir = undefined;
let scrollCurrent;
let scrollPrevious;

export function scrollDirection() {
    // Set if the window scroll up or down
    scrollCurrent > scrollPrevious ? dir = 'down' : dir = 'up';

    // Update the scroll position
    scrollPrevious = scrollCurrent;
    scrollCurrent = window.scrollY;

		return window.scrollY > 1 ? dir : 'stop';
}


export function scrollPosition() {
	const scrollArea = pageHeight() - document.documentElement.clientHeight;

	if (scrollArea > 1) {
		return window.scrollY;
	} else {
		return undefined;
	}
}


export function scrollPercentage(currentScrollPosition) {
	const scrollArea = pageHeight() - document.documentElement.clientHeight;

	if (scrollArea > 1) {
		const scrollPercentage = currentScrollPosition * 100 / scrollArea;
		return Math.round(scrollPercentage)
	} else {
		return undefined;
	}
}


function pageHeight() {
	return Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
}
