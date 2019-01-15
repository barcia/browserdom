# BrowserDOM
Return browser info and add it to the DOM.


## Installation

### Script
BrowserDOM can be used directly in the browser without the use of package managers/bundlers

<script src="./browserdom.min.js"></script>


### Modules

With npm do:

```shell
npm install browserdom
```


Import the module in your index.js

ES Modules:

```js
import * as BrowserDOM from 'browserdom'
```

CommonJS:

```js
var merge = require('browserdom')
```


## API

### `BrowserDOM.get().[KEY]`
`Browser.get()` returns a object with a set of BrowserDOM parameters:

- `os`: System Operating name
- `name`: Browser name
- `version`: Browser version
- `online`: True or false if navigator is online or not
- `lang`: The navigator language

Example:
```js
console.log( BrowserDOM.get().name );
// firefox
```

### `BrowserDOM.print([Options])`

Print in the `<html>` tag some data-attributes with BrowserDOM info.

Example:
```js
BrowserDOM.print()
```

Other example enabling more info:
```js
BrowserDOM.print({
    os: true,
    scrolled: true
})
```

#### Options
Default options:

```json
type: 'data-attr',
classPrefix: 'browser-',
os: false,
name: true,
version: true,
online: false,
lang: false,
scrolled: false,
scrollDir: false
```
