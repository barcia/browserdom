# BrowserDOM
Get browser environment info and add it in the DOM.

![Version](https://img.shields.io/github/package-json/v/barcia/browserdom.svg)
![License](https://img.shields.io/github/license/barcia/browserdom.svg)
![Size](https://img.shields.io/bundlephobia/minzip/browserdom.svg)


## Getting Started

### Installation

* **Method 1:** [Download](https://github.com/barcia/browserdom/releases/latest) the script and add it to the *head*
```html
<script src="./browserdom.min.js"></script>
```

* **Method 2:** Get it from a CDN
```html
<script src="https://unpkg.com/browserdom"></script>
```

* **Method 3:** Install it with NPM and import in your JS file
```sh
npm install --save-dev browserdom
````

### Create a new instance
* Import it if you use the Method 3:
```js
import BrowserDOM from 'browserdom';
```

* Create a new instance passing your required [options](#options):
```js
const myBrowserDOM = new BrowserDOM();
```

### Print the data in the `<html>` tag

This code add the **default** BrowserDOM info as `data-attributes` in the `<html>` tag and update it on scrolling.

```js
window.addEventListener("load", () => {
  myBrowserDOM.print();
})

window.addEventListener("scroll", () => {
   myBrowserDOM.print();
})
```


## Methods

### ***print***
With ***print()*** method you add all your enabled [options](#options) as a **data-attribute** in the `<html>` tag.

#### **Example**:
* index.js
```js
const myBrowserDOM = new BrowserDOM({
  browser: {
    name: true,
    version: {
      short: true,
      full: false,
    },
    online: false,
    language: true,
  },
});

window.addEventListener("load", () => {
  myBrowserDOM.print();
})

window.addEventListener("scroll", () => {
   myBrowserDOM.print();
})
```
* Output HTML
```html
<html data-browsername="chrome" data-browserversionshort="79" data-browserlanguage="gl-ES">
  <head></head>
  <body></body>
</html>
```


### ***get***
With ***get()*** method you can get all the BrowserDOM object.

#### Example:
* index.js
```js
const myBrowserDOM = new BrowserDOM();

window.addEventListener("load", function() {
  console.log( myBrowserDOM.get() );
})
```
* Output JSON
```js
{
  "browser": {
    "name":"chrome", // The name of the browser
    "version": {
      "short": 79, // Short name of the version. Normally the major release.
      "full": "79.0.3945.88" // Full number of the version
    },
    "online": true, // If the navigator is online
    "language": "gl-ES" // The main language of the navigator
  },
  "os": {
    "name": "macos" // The name of de operating system
  },
  "scroll": {
    "scrolled": true, // If the page is scrolled
    "direction": "down", // The last scroll direction
    "position": 157, // The current scroll position in px
    "percentage": 12 // The current scroll position in %
  }
}
```


## Returned values
These are all possible returned values.

* browser.name: `chrome`| `safari` | `firefox` | `edge` | `ie` | `undefined`
* browser.version.short: `{integer}`
* browser.version.full: `{float}`
* browser.online: `{boolean}`
* browser.language: `{lang ISO code}`
* os.name: `macos` | `linux` | `windows` | `ios` | `android`
* scroll.scrolled: `{boolean}`
* scroll.direction: `start`| `down`| `up`
* scroll.position: `{number}`
* scroll.percentage: `{number}`


## Options

These are all parameters with their default values. The parameters with `true` will be added to the DOM with the `print()`method. (Remember that `get()`method always return a object with all all parameters).
```js
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
```


### Sass mixins
With the JS is distributed a `scss` file with some util Sass mixins You can **view all avaiable mixins in the [_mixins.scss](https://github.com/barcia/browserdom/blob/master/dist/_mixins.scss) file.**

### Import

You should have configurated Sass to import files from `node_modules` with the [includePaths](https://github.com/sass/node-sass#includepaths) option.

It should be something like that:
```json
// .sassrc
{
  "includePaths": [
    "./node_modules"
  ]
}
```

* You can add it to your code with:
```scss
@import "browserdom/dist/mixins";

.Navbar {
  background-color: transparent;

  @include scrolled {
    background-color: white;
  }
}
```

* Or with the new Sass syntax:
```scss
@use "browserdom/dist/mixins" as browserdom;

.Navbar {
  background-color: transparent;

  @include browserdom.scrolled {
    background-color: white;
  }
}
````

* Other example:
```scss
@use "browserdom/dist/mixins" as browserdom;

.Navbar {
  position: fixed;
  height: 60px;
  top: 0;

  @include browserdom.scroll(down) {
    top: -60px;
  }
}
```


## Changelog
See [releases page](https://github.com/barcia/browserdom/releases).


## Credits
Developed by Iván Barcia
* [barcia.dev](https://barcia.dev)
* [Twitter](http://www.twitter.com/bartzia)
* [GitHub](http://www.github.com/barcia)

Project tested on [BrowserStack](https://www.browserstack.com/)



## License
This project is under [MIT License](https://github.com/barcia/bramework/blob/master/LICENSE)
