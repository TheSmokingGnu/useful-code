module.exports = {
    interpretFormula: function(input) {
        var equation = this.equationSplitter(input);
        var math_it_up = {
            '+': function(x, y) {
                return x + y
            },
            '*': function(x, y) {
                return x * y
            }
        }
        return math_it_up[equation.operator](Number(equation.lhs1), Number(equation.lhs2));
    },


    equationSplitter: function(equation) {
        var equalsPos = equation.indexOf('=');
        var lhs = equation.substring(0, equalsPos);
        var plusPos = lhs.indexOf('+');
        var multPos = lhs.indexOf('*');
        var operatorPos = Math.max(plusPos, multPos);
        var returnObject = {
            lhs1: lhs.substring(0, operatorPos),
            operator: lhs.charAt(operatorPos),
            lhs2: lhs.substring(operatorPos + 1),
            rhs: equation.substring(equalsPos + 1)
        };
        console.log(returnObject);
        return returnObject;
    }
}
