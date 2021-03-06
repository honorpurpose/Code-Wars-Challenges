// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// #Examples:

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"


function printerError(s) {
    return `${s.split('').reduce((t, e) => { e > 'm' ? t += 1 : null; return t }, 0)}/${s.length}`
}

// best answer

function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

// info on .match()

// note: the '^' expression used in the above best answer will 
// create an array of everything outside of a-m. The expression 
// /^m-z/g would likewise return an array including anything in 
// the string ranging from a-l. 

// note**: to chain multiple filtering conditionals, the proper syntax is
// /[^A-I] [^m-z]/g

var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]