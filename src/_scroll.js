export function scrolled() {
    // Set if the window is scrolled
    return window.scrollY > 1 ? true : false;
}


let dir = undefined;
let scrollCurrent;
let scrollPrevious;

export function scrollDir() {
    // Set if the window scroll up or down
    scrollCurrent > scrollPrevious ? dir = 'down' : dir = 'up';

    // Update the scroll position
    scrollPrevious = scrollCurrent;
    scrollCurrent = window.scrollY;

    return dir;
}
