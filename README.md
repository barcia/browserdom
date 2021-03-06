# BrowserDOM
Get browser environment info and print it in the DOM.

![Version](https://img.shields.io/github/package-json/v/barcia/browserdom.svg)
![License](https://img.shields.io/github/license/barcia/browserdom.svg)
![Size](https://img.shields.io/bundlephobia/minzip/browserdom.svg)



## Getting Started
### Installation
* [Download](https://github.com/barcia/browserdom/releases/latest) the script and add it to the *head*
```html
<script src="./browserdom.min.js"></script>
```

* Get it from a CDN
```html
<script src="https://unpkg.com/browserdom"></script>
```

* Install it with NPM and import in your JS file
```sh
npm install --save-dev browserdom
````



### Create a new instance
* Import it:
```js
import BrowserDOM from 'browserdom';
```

* Create a new instance passing your required [options](#options):
```js
const myBrowserDOM = new BrowserDOM({
		browser: true,
		scrollPercentage: true
});
```

### Print the data in the `<html>` tag, or get the info to use it in your JS

```js
document.addEventListener("DOMContentLoaded", function() {
  myBrowserDOM.print();
})
```

```js
window.addEventListener("scroll", function() {
  console.log(myBrowserDOM.get("scrollPercentage"));
})
```


## Methods

### ***print***
With ***print()*** method you write all your enabled [options](#options) as a **data-attribute** in the `<html>` tag.

#### **Example**:
* index.js
```js
const myBrowserDOM = new BrowserDOM({
  browser: true,
  touchDevice: true
});

document.addEventListener("DOMContentLoaded", function() {
  myBrowserDOM.print();
})
```
* Output HTML
```html
<html data-browser="chrome" data-touchdevice="false">
  <head></head>
  <body></body>
</html>
```


### ***get***
With ***get()*** method you can get all the BrowserDOM object or pass one [option](#options) as argument to retrieve it.

#### Example 1:
* index.js
```js
const myBrowserDOM = new BrowserDOM({
  browser: true,
  touchDevice: true
});

document.addEventListener("DOMContentLoaded", function() {
  console.log(myBrowserDOM.get());
})
```
* Output JSON
```js
{
  browser: chrome,
  touchDevice: false
}
```

#### Example 2:
* index.js
```js
const myBrowserDOM = new BrowserDOM({
  browser: true,
  touchDevice: true
});

document.addEventListener("DOMContentLoaded", function() {
  console.log(myBrowserDOM.get("browser"));
})
```
* Output
```js
chrome
```



## Options
These are all options with their default values
* `os`: {boolean} The operating system [*false*]
* `browser`: {boolean} The browser name [*true*]
* `version`: {boolean} The browser version [*false*]
* `online`: {boolean} If the browser is online [*false*]
* `lang`: {boolean} The browser language [*false*]
* `touchDevice`: {boolean} If is a touch device [*true*]
* `scrolled`: {boolean} If is scrolled below from the `scrolledTrigger` number [*false*]
* `scrolledTrigger`: {number} The scroll position where `scrolled` change to `true` [*1*]
* `scrollDirection`: {string} If last scroll is to `down` or to `up` [*false*]. If is on top show `stop`.
* `scrollPosition`: {boolean} The scroll position [*false*]
* `scrollPercentage`: {boolean} The page scroll percentage [*false*]

## Returned values
These are all returned values if the option is enables
* os: `macos` | `linux` | `windows` | `ios` | `android`
* browser: `chrome`| `safari` | `firefox` | `edge` | `ie`
* version: `{number}`
* online: `{boolean}`
* lang: `{lang ISO code}`
* touchDevice: `{boolean}`
* scrolled: `{boolean}`
* scrollDirection: `down`| `up`| `top`
* scrollPosition: `{number}`
* scrollPercentage: `{number}`



## Changelog
See [CHANGELOG.md](https://github.com/barcia/browserdom/blob/master/CHANGELOG.md)


## Credits
Developed by Iván Barcia
* [barcia.dev](https://barcia.dev)
* [Twitter](http://www.twitter.com/bartzia)
* [GitHub](http://www.github.com/barcia)

Project tested on [BrowserStack](https://www.browserstack.com/)



## License
This project is under [MIT License](https://github.com/barcia/bramework/blob/master/LICENSE)
