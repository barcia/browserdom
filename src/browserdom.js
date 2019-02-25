import {scrolled, scrollDir, scrollPos, scrollPer} from './_scroll';
import getOS from './_os';
import getNavigator from './_navigator';
import touchDevice from './_touchDevice';

export default function(customConfig) {

	const html = document.documentElement;

	// Config
	let defaultConfig = {
		os: false,
		browser: true,
		version: true,
		online: false,
		lang: false,
		touchDevice: true,
		scrolled: true,
		scrolledTrigger: 1,
		scrollDir: false,
		scrollPos: false,
		scrollPer: true
	};

	const config = buildConfig(customConfig);

	function buildConfig(custom) {
		return Object.assign(defaultConfig, custom)
	}


	// Browser object
	let data = {};

	// Get OS, Device and Browser data
	(function staticData() {
		if (config.os) {data.os = getOS().name; }
		if (config.browser) {data.browser = getNavigator().name; }
		if (config.version) {data.version = getNavigator().version; }
		if (config.online) {data.online = navigator.onLine; }
		if (config.lang) {data.lang = navigator.language; }
		if (config.touchDevice) {data.touchDevice = touchDevice(); }
	}());


	// Get scroll info
	function scrollData() {
		if (config.scrolled) {data.scrolled = scrolled(config.scrolledTrigger);}
		if (config.scrollDir) {data.scrollDir = scrollDir();}
		if (config.scrollPos) {data.scrollPos = scrollPos();}
		if (config.scrollPer) {data.scrollPer = scrollPer(scrollPos());}
	}

	window.addEventListener('load', scrollData, false);
	window.addEventListener('scroll', scrollData, false);
	window.addEventListener('resize', scrollData, false);





	// Get function
	this.get = function(prop) {
		return prop ? data[prop] : data;
	}


// Print function
	this.print = function() {
		if (data.os!=undefined) html.dataset.os = data.os;
		if (data.browser!=undefined) html.dataset.browser = data.browser;
		if (data.version!=undefined) html.dataset.browserversion = data.version;
		if (data.online!=undefined) html.dataset.online = data.online;
		if (data.lang!=undefined) html.dataset.browserlang = data.lang;
		if (data.touchDevice!=undefined) html.dataset.touchdevice = data.touchDevice;

		window.addEventListener('load', updateScroll, false);
		window.addEventListener('scroll', updateScroll, false);
		window.addEventListener('resize', updateScroll, false);

		function updateScroll() {
			if (data.scrolled!=undefined) html.dataset.scrolled = data.scrolled;
			if (data.scrollDir!=undefined) html.dataset.scrollDir = data.scrollDir;
			if (data.scrollPos!=undefined) html.dataset.scrollPos = data.scrollPos;
			if (data.scrollPer!=undefined) html.dataset.scrollPer = data.scrollPer;
		}
	}
}
