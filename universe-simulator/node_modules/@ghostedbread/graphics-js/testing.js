// do not modify the contents of this file
let graphics = require('./script.js')
graphics.ANSILabel("Hello, Node!")
graphics.ANSIError("Foo")
let customErrorData = {
    allowErrorCodes: false,
    ErrorCode: 404
}
graphics.ANSIError("error test", customErrorData)