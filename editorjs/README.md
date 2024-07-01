# GraphicsJS
###### Graphics For Node
```javascript
let graphics = require('@ghostedbread/graphicsjs')
graphics.ANSILabel("Hello, Node!")
```
### Methods
`ANSILabel(text, bgcode, fgcode)`
</br>
Creates a Label using ANSI (\033)
`text`: Text for the label.
</br>
`bgcode`: Asks for an ANSI Color within the range of 40 - 49.
</br>
`fgcode`: Asks for an ANSI Color within the range of 30 - 39.
</br>
`ANSIColor(code)`
</br>
Shows specific ANSI Color, (any allowed).
</br>
`code`: Allows Any Range Of ANSI Colors, if doing bg, add ;1m.
</br>
### Variables
