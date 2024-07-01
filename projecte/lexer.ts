export enum TokenType {
    Number,
    Identifier,
    Equals,
    VariableDeclarator
}
export interface Token {
    value: string,
    type: TokenType,
}
