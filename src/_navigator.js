// Get the navigator info
export default function() {
	let versionInit;
	let browserName;
	let browserVersion;

	// Google Chrome
	if ((navigator.vendor.indexOf('Google')!=-1) && (navigator.appVersion.indexOf('Chrome')!=-1)) {
		versionInit = navigator.appVersion.indexOf('Chrome') + 7;
		browserName ='chrome';
		browserVersion = navigator.appVersion.substring(versionInit, versionInit+2);
		return {name: browserName, version: browserVersion};
	}

	// Safari
	if ((navigator.vendor.indexOf('Apple')!=-1) && (navigator.appVersion.indexOf('Safari')!=-1)) {
		versionInit = navigator.appVersion.indexOf('Version') + 8;
		browserName ='safari';
		browserVersion = navigator.appVersion.substring(versionInit, versionInit+2);
		return {name: browserName, version: browserVersion};
	}

	// Mozilla Firefox
	if ((navigator.appCodeName == 'Mozilla') && (navigator.userAgent.indexOf('Firefox')!=-1)) {
		versionInit = navigator.userAgent.indexOf('Firefox') + 8;
		browserName ='firefox';
		browserVersion = navigator.userAgent.substring(versionInit, versionInit+2);
		return {name: browserName, version: browserVersion};
	}

	// Edge
	if (navigator.appVersion.indexOf('Edge')!=-1) {
		versionInit = navigator.appVersion.indexOf('Edge') + 5;
		browserName ='edge';
		browserVersion = navigator.appVersion.substring(versionInit, versionInit+2);
		return {name: browserName, version: browserVersion};
	}

	// IE
	if (navigator.appVersion.indexOf('Trident')!=-1) {
		browserName ='ie';
		versionInit = navigator.appVersion.indexOf('Trident') + 8;
		let tridentVersion = navigator.appVersion.substring(versionInit, versionInit+1);
		if (tridentVersion == 7) {browserVersion = 11};
		if (tridentVersion == 6) {browserVersion = 10};
		if (tridentVersion == 5) {browserVersion = 9};
		return {
			name: browserName,
			version: browserVersion
		};
	}
}
