var StringCalculator;

StringCalculator = {
   Add: function(input) {
       const REGEX = /[,\n]/;
       const MAXIMUM_VALUE = 1000;
       const MINIMUM_VALUE = 0;
       const DELIMITER_PREFIX = "//";
       const DELIMITER_TERMINATOR = "\n";
       var result = 0;
       var regex = REGEX;
       if (input != '') {
           if (input.slice(0,2) === DELIMITER_PREFIX) {
               var newline = input.indexOf(DELIMITER_TERMINATOR);
               regex = new RegExp(input.slice(2,newline),"g");
               input = input.slice(newline + 1);
           }
           var values = input.split(regex);
           for (var i=0; i<values.length; ++i) {
               var value = parseInt(values[i]);
               if (value < MINIMUM_VALUE) {
                   throw "negatives not allowed";
               }
               if (value <= MAXIMUM_VALUE) {
                   result += value;
               }
           }
       }
       return result;
   }
};

module.exports = StringCalculator;
