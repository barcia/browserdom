export default function(customConfig) {
	const defaultConfig = {
		os: true,
		name: true,
		version: true,
		online: false,
		lang: false
	};
	const config = mergeConfig(defaultConfig, customConfig);

	// Browser object
	const browser = {};
	if(config.os) browser.os = operatingSystemInfo();
	if(config.name) browser.name = navigatorInfo().name;
	if(config.version) browser.version = navigatorInfo().version;
	if(config.online) browser.online = navigator.onLine;
	if(config.lang) browser.lang = navigator.language;


	// Print function
	browser.print = function(customPrintConfig) {

		const defaultPrintConfig = {
			type: 'data',
			classPrefix: 'browser-'
		};

		const printConfig = mergeConfig(defaultPrintConfig, customPrintConfig);
		// const printConfig = Object.assign(defaultPrintConfig, customPrintConfig);

		document.addEventListener('DOMContentLoaded', function() {
			if (printConfig.type == 'data') {
				if (config.os && browser.os!=undefined) document.documentElement.dataset.os = browser.os;
				if (config.name && browser.name!=undefined) document.documentElement.dataset.browser = browser.name;
				if (config.version && browser.version!=undefined) document.documentElement.dataset.browserversion = browser.version;
				if (config.online && browser.online!=undefined) document.documentElement.dataset.online = browser.online;
				if (config.lang && browser.lang!=undefined) document.documentElement.dataset.browserlang = browser.lang;
			}

			if(printConfig.type == 'class') {
				if (config.os && browser.os!=undefined) document.documentElement.classList.add(printConfig.classPrefix+'os'+'-'+browser.os);
				if (config.name && browser.name!=undefined) document.documentElement.classList.add(printConfig.classPrefix+'name'+'-'+browser.name);
				if (config.version && browser.version!=undefined) document.documentElement.classList.add(printConfig.classPrefix+'version'+'-'+browser.version);
				if (config.online && browser.online!=undefined) document.documentElement.classList.add(printConfig.classPrefix+'online'+'-'+browser.online);
				if (config.lang && browser.lang!=undefined) document.documentElement.classList.add(printConfig.classPrefix+'lang'+'-'+browser.lang);
			}
		});
	}

	// Return
	return browser;
}



// Get the OS info
function operatingSystemInfo() {
	if (navigator.appVersion.indexOf('Macintosh')!=-1) return 'macos';
	if (navigator.appVersion.indexOf('X11')!=-1) return 'gnulinux';
	if (navigator.appVersion.indexOf('Windows')!=-1) return 'windows';
	if (navigator.appVersion.indexOf('iPhone')!=-1) return 'ios';
	if (navigator.appVersion.indexOf('iPad')!=-1) return 'ios';
	if (navigator.appVersion.indexOf('Android')!=-1) return 'android';
}

// Get the navigator info
function navigatorInfo() {
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
		return {name: browserName, version: browserVersion};
	}
}

// Merge configurations
function mergeConfig(config1, config2){
	let configMerged = {};
	for (let attrname in config1) { configMerged[attrname] = config1[attrname]; }
	for (let attrname in config2) { configMerged[attrname] = config2[attrname]; }
	return configMerged;
}
