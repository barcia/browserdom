import {scrolled, scrollDirection, scrollPosition, scrollPercentage} from './_scroll';
import getOS from './_os';
import getNavigator from './_navigator';
import touchDevice from './_touchDevice';

export default function(customConfig) {

	const html = document.documentElement;

	// Config
	let defaultConfig = {
		os: false,
		browser: false,
		version: false,
		online: false,
		lang: false,
		touchDevice: false,
		scrolled: false,
		scrolledTrigger: 1,
		scrollDirection: false,
		scrollPosition: false,
		scrollPercentage: false
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
	window.addEventListener('load', scrollData, false);
	window.addEventListener('scroll', scrollData, false);
	window.addEventListener('resize', scrollData, false);

	function scrollData() {
		if (config.scrolled) {data.scrolled = scrolled(config.scrolledTrigger);}
		if (config.scrollDirection) {data.scrollDirection = scrollDirection();}
		if (config.scrollPosition) {data.scrollPosition = scrollPosition();}
		if (config.scrollPercentage) {data.scrollPercentage = scrollPercentage(scrollPosition());}
	}



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
			if (data.scrollDirection!=undefined) html.dataset.scrolldirection = data.scrollDirection;
			if (data.scrollPosition!=undefined) html.dataset.scrollposition = data.scrollPosition;
			if (data.scrollPercentage!=undefined) html.dataset.scrollpercentage = data.scrollPercentage;
		}
	}
}
