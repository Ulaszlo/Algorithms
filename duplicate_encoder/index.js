//6 kyu Duplicate Encoder https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

    Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word) {
    const arr = word.split("");
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            arr2.push("(")
        } else arr2.push(")")
    }

    return arr2.join("")
}

duplicateEncode("recede"); // '()()()'

// оптимизированное решение

function duplicateEncode2(word) {
    return word
        .toLowerCase()
        .split('')
        .map((char, _, arr) =>
            arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')'
        )
        .join('');
}

duplicateEncode2("recede"); // '()()()'
