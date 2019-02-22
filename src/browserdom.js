import {scrolled, scrollDir} from './_scroll';
import getOS from './_os';
import getNavigator from './_navigator';



// Browser object
const browser = {
	os: getOS().name,
	name: getNavigator().name,
	version: getNavigator().version,
	online: navigator.onLine,
	lang: navigator.language
};



export function get() {
	return browser
}



export function print(customConfig) {

	let defaultConfig = {
		type: 'data-attr',
		classPrefix: 'browser-',
		os: false,
		name: true,
		version: true,
		online: false,
		lang: false,
		scrolled: false,
		scrollDir: false
	};
	// const config = mergeConfig(defaultConfig, customConfig);
	const config = Object.assign(defaultConfig, customConfig);


	document.addEventListener('DOMContentLoaded', function() {
		if (config.type == 'data-attr') {
			if (config.os && browser.os!=undefined) document.documentElement.dataset.os = browser.os;
			if (config.name && browser.name!=undefined) document.documentElement.dataset.browser = browser.name;
			if (config.version && browser.version!=undefined) document.documentElement.dataset.browserversion = browser.version;
			if (config.online && browser.online!=undefined) document.documentElement.dataset.online = browser.online;
			if (config.lang && browser.lang!=undefined) document.documentElement.dataset.browserlang = browser.lang;
			if (config.scrolled && scrolled()!=undefined) document.documentElement.dataset.scrolled = scrolled();
		}

		if(config.type == 'class') {
			if (config.os && browser.os!=undefined) document.documentElement.classList.add(config.classPrefix+'os'+'-'+browser.os);
			if (config.name && browser.name!=undefined) document.documentElement.classList.add(config.classPrefix+'name'+'-'+browser.name);
			if (config.version && browser.version!=undefined) document.documentElement.classList.add(config.classPrefix+'version'+'-'+browser.version);
			if (config.online && browser.online!=undefined) document.documentElement.classList.add(config.classPrefix+'online'+'-'+browser.online);
			if (config.lang && browser.lang!=undefined) document.documentElement.classList.add(config.classPrefix+'lang'+'-'+browser.lang);
			if (scrolled()) {
				document.documentElement.classList.add(config.classPrefix+'scrolled-true');
				document.documentElement.classList.remove(config.classPrefix+'scrolled-false');
			} else {
				document.documentElement.classList.add(config.classPrefix+'scrolled-false');
				document.documentElement.classList.remove(config.classPrefix+'scrolled-true');
			}
		}
	});


	window.addEventListener('scroll', function() {
		if (config.type == 'data-attr') {
			if (config.scrolled && scrolled()!=undefined) document.documentElement.dataset.scrolled = scrolled();
			if (config.scrollDir && scrollDir()!=undefined) document.documentElement.dataset.scrolldir = scrollDir();
		}

		if(config.type == 'class') {
			if (config.scrolled && scrolled()!=undefined) {
				if (scrolled()) {
					document.documentElement.classList.add(config.classPrefix+'scrolled-true');
					document.documentElement.classList.remove(config.classPrefix+'scrolled-false');
				} else {
					document.documentElement.classList.add(config.classPrefix+'scrolled-false');
					document.documentElement.classList.remove(config.classPrefix+'scrolled-true');
				}
			};

			if (config.scrollDir && scrollDir()!=undefined) {
				if (scrollDir() == 'up') {
					document.documentElement.classList.add(config.classPrefix+'scrolldir-up');
					document.documentElement.classList.remove(config.classPrefix+'scrolldir-down');
				} else {
					document.documentElement.classList.add(config.classPrefix+'scrolldir-down');
					document.documentElement.classList.remove(config.classPrefix+'scrolldir-up');
				}
			}
		}
	});
}
