const getOSName = () => {
	if (navigator.appVersion.indexOf('Macintosh') !== -1) return 'macos';
	if (navigator.appVersion.indexOf('X11') !== -1) return 'linux';
	if (navigator.appVersion.indexOf('Windows') !== -1) return 'windows';
	if (navigator.appVersion.indexOf('iPhone') !== -1) return 'ios';
	if (navigator.appVersion.indexOf('iPad') !== -1) return 'ios';
	if (navigator.appVersion.indexOf('Android') !== -1) return 'android';
	return undefined;
};

export default {
	name: getOSName(),
};
