
class Lexer {
    constructor(rules) {
      this.rules = rules;
    }
  
    lex(input) {
      const tokens = [];
      let position = 0;
      while (position < input.length) {
        let match = null;
        for (const tokenName in this.rules) {
          const pattern = `^${this.rules[tokenName]}`;
          const regex = new RegExp(pattern);
          match = input.slice(position).match(regex);
          if (match) {
            const tokenValue = match[0];
            const token = [tokenName, tokenValue];
            tokens.push(token);
            position += tokenValue.length;
            break;
          }
        }
        if (!match) {
          throw new Error(`Unexpected character at position ${position}`);
        }
      }
      return tokens;
    }
  }

let lexer1 = new Lexer({
    
})