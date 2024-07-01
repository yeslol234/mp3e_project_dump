class Token {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    // Determines equality of Tokens
    equals(otherToken) {
        return this.getValue() === otherToken.getValue();
    }
}
class Lexer {
    constructor(regexOptions, src) {
        this.regexOptions = regexOptions
        this.src = src
    }
    nextToken() {
        let tokens = []
        let tokenType;
        // go forward in the src
        while (this.currentChar !== null && !isWhitespaceCharacter(this.currentChar)) {
            if (!tokenType) {
                for (let i = 0; i < this.regexOptions.length; i++) {
                    const regexOption = this.regexOptions[i];
                    const match = regexOption.matchRegex.exec(this.src);
                    if (match) {
                        // print to table and add to tokens
                        
                        tokenType = regexOption.type;
                        
                        break;
                    }
                }
            } else {
                break;
            }
        }
        }
        lex() {
            // go through the text the most efficent way possible, and lex it using the regex (hold accountability for over lapping regexes, and syntax error handling.)
            let result = []
            while (this.src[0]) {
                const token = this.nextToken()
                if (!token) break;
                result.push(token);
            }
            return result;
        }
    }