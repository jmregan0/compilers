/*

Taken an input mathematical expression and generate the token stream
Parse the token stream
Output the tree
Output the original expression from the tree
Output the expression in reverse Polish notation
Calculate the result of the expression

*/

function Calculator(str) {
    this.tokenTypes = [
        ["NUMBER", /^\d+/],
        ["ADD", /^\+/],
        ["SUB", /^\-/],
        ["MUL", /^\*/],
        ["DIV", /^\//],
        ["LPAREN", /^\(/],
        ["RPAREN", /^\)/]
    ];
    this.tokenStream = this.lexer(str);

}


Calculator.prototype.lexer = function(str) {
    var final = [];
    var unparsedStr = str;

    while (unparsedStr.length) {
        for (var i = 0; i < this.tokenTypes.length; i++) {
            var currentRegEx = this.tokenTypes[i][1];
            var regExName = this.tokenTypes[i][0];
            var fragment = unparsedStr.match(currentRegEx);

            if (fragment) {
                final.push({ name: regExName, value: fragment[0] });
                unparsedStr = unparsedStr.slice(fragment[0].length);
            }
        }
    }

    return final;
}

Calculator.prototype.peek = function() {


    return this.tokenStream[0] || null;


};

Calculator.prototype.get = function() {

    return this.tokenStream.shift();

};

Calculator.prototype.parseExpression = function() {
    //goal is to return a TreeNode

}


function TreeNode(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    this.name = name;
    this.children = args;


}
