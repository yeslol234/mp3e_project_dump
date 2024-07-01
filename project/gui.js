const jsTokens = require("js-tokens");

const jsString = 'show.window(\"damn\")';
let objects = 'showwosh'
let arr = Array.from(jsTokens(jsString), (token) => token.value).join("|").split("|")
arr.forEach((str) => {
    console.log(str)
})