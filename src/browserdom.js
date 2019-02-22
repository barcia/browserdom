import {scrolled, scrollDir} from './_scroll';
import getOS from './_os';
import getNavigator from './_navigator';
import touchDevice from './_touchDevice';



// Browser object
const data = {
	os: getOS().name,
	name: getNavigator().name,
	version: getNavigator().version,
	online: navigator.onLine,
	lang: navigator.language,
	touchDevice: touchDevice()
};

const html = document.documentElement;


export function get(prop) {
	return prop ? data[prop] : data;
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
		touchDevice: true,
		scrolled: false,
		scrolledTrigger: 1,
		scrollDir: false
	};

	const config = Object.assign(defaultConfig, customConfig);


	document.addEventListener('DOMContentLoaded', function() {
		if (config.type == 'data-attr') {

			// Data
			if (config.os && data.os!=undefined) html.dataset.os = data.os;
			if (config.name && data.name!=undefined) html.dataset.browser = data.name;
			if (config.version && data.version!=undefined) html.dataset.browserversion = data.version;
			if (config.online && data.online!=undefined) html.dataset.online = data.online;
			if (config.lang && data.lang!=undefined) html.dataset.browserlang = data.lang;
			if (config.touchDevice && data.touchDevice!=undefined) html.dataset.touchdevice = data.touchDevice;

			// Scroll
			if (config.scrolled && scrolled(config.scrolledTrigger)!=undefined) html.dataset.scrolled = scrolled(config.scrolledTrigger);
		}



		if(config.type == 'class') {

			// Data
			if (config.os && data.os!=undefined) html.classList.add(config.classPrefix+'os'+'-'+data.os);
			if (config.name && data.name!=undefined) html.classList.add(config.classPrefix+'name'+'-'+data.name);
			if (config.version && data.version!=undefined) html.classList.add(config.classPrefix+'version'+'-'+data.version);
			if (config.online && data.online!=undefined) html.classList.add(config.classPrefix+'online'+'-'+data.online);
			if (config.lang && data.lang!=undefined) html.classList.add(config.classPrefix+'lang'+'-'+data.lang);
			if (config.touchDevice && data.touchDevice!=undefined) html.classList.add(config.classPrefix+'touchDevice'+'-'+data.touchDevice);

			// Scroll
			if (config.scrolled && scrolled()!=undefined) {
				if (scrolled()) {
					html.classList.add(config.classPrefix+'scrolled-true');
					html.classList.remove(config.classPrefix+'scrolled-false');
				} else {
					html.classList.add(config.classPrefix+'scrolled-false');
					html.classList.remove(config.classPrefix+'scrolled-true');
				}
			}
		}
	});


	window.addEventListener('scroll', function() {
		if (config.type == 'data-attr') {
			if (config.scrolled && scrolled(config.scrolledTrigger)!=undefined) html.dataset.scrolled = scrolled(config.scrolledTrigger);
			if (config.scrollDir && scrollDir()!=undefined) html.dataset.scrolldir = scrollDir();
		}

		if(config.type == 'class') {
			if (config.scrolled && scrolled(config.scrolledTrigger)!=undefined) {
				if (scrolled(config.scrolledTrigger)) {
					html.classList.add(config.classPrefix+'scrolled-true');
					html.classList.remove(config.classPrefix+'scrolled-false');
				} else {
					html.classList.add(config.classPrefix+'scrolled-false');
					html.classList.remove(config.classPrefix+'scrolled-true');
				}
			};

			if (config.scrollDir && scrollDir()!=undefined) {
				if (scrollDir() == 'up') {
					html.classList.add(config.classPrefix+'scrolldir-up');
					html.classList.remove(config.classPrefix+'scrolldir-down');
				} else {
					html.classList.add(config.classPrefix+'scrolldir-down');
					html.classList.remove(config.classPrefix+'scrolldir-up');
				}
			}
		}
	});
}
