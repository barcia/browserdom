const getBrowserInfo = () => {
	// Google Chrome
	if ((navigator.vendor.indexOf('Google') !== -1) && (navigator.userAgent.indexOf('Chrome') !== -1)) {
		return ['chrome', navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome/') + 7).split(' ')[0]];
	}

	// Safari
	if ((navigator.vendor.indexOf('Apple') !== -1) && (navigator.appVersion.indexOf('Safari') !== -1)) {
		return ['safari', navigator.userAgent.substring(navigator.userAgent.indexOf('Version/') + 8).split(' ')[0]];
	}

	// Mozilla Firefox
	if ((navigator.appCodeName === 'Mozilla') && (navigator.userAgent.indexOf('Firefox') !== -1)) {
		return ['firefox', navigator.userAgent.slice(navigator.userAgent.indexOf('Firefox/') + 8)];
	}

	// Microsoft Edge
	if (navigator.userAgent.indexOf('Edge') !== -1) {
		return ['edge', navigator.userAgent.slice(navigator.userAgent.indexOf('Edge/') + 5)];
	}

	// Internet Explorer
	if (navigator.appVersion.indexOf('Trident') !== -1) {
		const tridentVersion = navigator.appVersion.substring(navigator.appVersion.indexOf('Trident/') + 8).split(';')[0];
		return ['ie', parseInt(tridentVersion, 10) + 4];
	}

	// Undefined
	return [undefined, undefined];
};


export default {
	name: getBrowserInfo()[0],
	version: {
		short: getBrowserInfo()[1] !== undefined ? parseInt(getBrowserInfo()[1], 10) : undefined,
		full: getBrowserInfo()[1],
	},
	online: navigator.onLine,
	language: navigator.language,
};
