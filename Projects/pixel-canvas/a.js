// WGDK (node version) 1.0
let express = require('express')
let fs = require('fs') // here we can use fs
let port;
function Initialize(options) {
  // TODO: Provide functionality for the rest of the functions.
  if (!options) {
      // Reads the json
      fs.readFile('WDGK.json', 'utf8', function (err, data) {
            if (err) throw err
            options = JSON.parse(data) // sets the options to the data.
            // using if else code because switch just doesn't work here :/
            if (options.hasOwnProperty('port')) {
                port = options.port
            }
            else {
                port = 3000 // default port
            } if (options.hasOwnProperty('canvas')) {
                
            }
        }
 }