/**
 * Regex Package Manager
 * @version 1.0.0
 * @lisence MIT
 */
const fs = require('fs');
const path = require('path');
const graphics = require('@ghostedbread/graphics-js');
const fetch = require('node-fetch')
/**
 * args[0] First Argument
 * args[1] Second Argument
 * Continue in order.
 */
let args = process.argv.slice(2) // Gets arguments
if (args[0] == "install") {
    if (!args[1]) {
        if (!fs.existsSync("regex.json")) {
            console.log("No regexr.json found")
        } else {
            let rawjson = fs.readFileSync("regex.json", "utf8");
            let json = JSON.parse(rawjson);
            console.log(json)
            for (let i = 0; i < json.packages.length; i++) {
                console.log(json.packages[i])
            }
        }
    }
    if (args[1]) {
        console.log(`📦Finding ${graphics.CYAN_T}${args[1]}${graphics.RESETTEXT_} in our package index...📦`)
        fetch('https://regexpackages.w3spaces.com/packages.json')
        .then(res => res.json())
        .then(json => {
            for (const key in json.packages) {
                if (args[1] == key) {
                    console.log("Package Found!")
                    console.log(`Downloading ${key}...`)
                    fs.mkdirSync("regex-modules")
                    fs.mkdirSync(`regex-modules/${key}`)
                }
            }
        })
    }
}
if (args[0] == "help") {
    console.log("Commands Are:  ")
    console.log(`   ${graphics.GREEN_T}install${graphics.RESETTEXT_}: Installs packages`)
    console.log(`   ${graphics.MAGENTA_T}help${graphics.RESETTEXT_}: Provides help`)
    console.log(`   ${graphics.RED_T}uninstall${graphics.RESETTEXT_}: Uninstalls packages`)
}
