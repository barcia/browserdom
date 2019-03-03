// Get the device type

export default function() {
	const touchscreen = ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
	return touchscreen ? true : false;
}
