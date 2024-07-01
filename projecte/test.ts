export enum TokenType {
    Number,
    Identifier
}
export interface Token {
    value: string,
    type: TokenType,
}

function NewToken(type: TokenType, value: string): Token {
    return {type, value} as Token;
}
console.log(NewToken(TokenType.Number, "1"))