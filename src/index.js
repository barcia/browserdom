import os from './modules/os';
import browser from './modules/browser';
import { scrollPosition, scrollPercentage, scrollDirection, scrolled } from './modules/scroll';


const getData = () => {
	return {
		browser: {
			name: browser.name,
			version: {
				short: browser.version.short,
				full: browser.version.full,
			},
			online: browser.online,
			language: browser.language,
		},
		os: {
			name: os.name,
		},
		scroll: {
			scrolled: scrolled(),
			direction: scrollDirection(),
			position: scrollPosition(),
			percentage: scrollPercentage(),
		},
	};
};


const defaultConfig = {
	node: document.documentElement,
	browser: {
		name: false,
		version: {
			short: false,
			full: false,
		},
		online: false,
		language: false,
	},
	os: {
		name: false,
	},
	scroll: {
		scrolled: true,
		direction: true,
		position: false,
		percentage: false,
	},
};


export default class {
	constructor(customConfig) {
		this.options = Object.assign(defaultConfig, customConfig);
	}


	get() {
		return getData();
	}

	print() {
		const data = getData();
		if (this.options.browser.name) this.options.node.dataset.browsername = data.browser.name;
		if (this.options.browser.version.short) this.options.node.dataset.browserversionshort = data.browser.version.short;
		if (this.options.browser.version.full) this.options.node.dataset.browserversionfull = data.browser.version.full;
		if (this.options.browser.online) this.options.node.dataset.browseronline = data.browser.online;
		if (this.options.browser.language) this.options.node.dataset.browserlanguage = data.browser.language;
		if (this.options.os.name) this.options.node.dataset.osname = data.os.name;
		if (this.options.scroll.scrolled) this.options.node.dataset.scrolled = data.scroll.scrolled;
		if (this.options.scroll.direction) this.options.node.dataset.scrolldirection = data.scroll.direction;
		if (this.options.scroll.position) this.options.node.dataset.scrollposition = data.scroll.position;
		if (this.options.scroll.percentage) this.options.node.dataset.scrollpercentage = data.scroll.percentage;
	}
}
