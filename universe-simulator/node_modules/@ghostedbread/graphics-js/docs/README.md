# graphics-js
```js
let graphics = require('@ghostedbread/graphicsjs')
graphics.ANSILabel("Hello, Node!")
```
Graphics For Node: https://www.npmjs.com/package/@ghostedbread/graphics-js
## Installation
`npm install @ghostedbread/graphics-js`
<b>OR</b>
`npm i @ghostedbread/graphics-js`
</br>
Either way it still downloads the library!
## Use
This is mainly used for console/terminal apps, and not intended for the front-end (eg. html, css, js in the browser). </br>
The Full Documentation Can Be Found Here: https://example.com (i haven't worked on it yet D:) </br>
Users can make ANSI Labels (eg. The Name Bar That Appears in `vim` when editing more than one file), but not exactly.</br>
Showcase:
```js
const graphics = require('@ghostedbread/graphics-js'); // Getting the library from node_modules
graphics.ANSILabel("Testing 123!"); // You don't need to use console.log()!
```
There is also the `ANSIColor()` function if a user wants to pick a specific color.
</br>