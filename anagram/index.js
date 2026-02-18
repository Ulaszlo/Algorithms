// 6 kyu Arrh, grabscrab! https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript

/*
Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

    At long last, we need a way to unscramble what these pirates are saying.

    Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

    For example:

    grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

    Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

    Good luck!
 */

function grabscrab(anagram, dictionary) {
    const str = anagram.split('').sort().join("")
    let results = [];

    for (let i = 0; i < dictionary.length; i++) {
        if (str.length !== dictionary[i].length) continue;

        if (dictionary[i].split('').sort().join("") === str) {
            results.push(dictionary[i])
        }
    }
    console.log(results)
    return results
}

grabscrab("oolp", ["donkey", "pool", "horse", "loop"]);

// Оптимизированное решение

function grabscrab2(anagram, dictionary) {
    let str = anagram.split("").sort().join("")

    console.log(dictionary.filter((word) => word.length === str.length && word.split("").sort().join("") === str))
    return dictionary.filter((word) => word.length === str.length && word.split("").sort().join("") === str);
}

grabscrab2("oolp", ["donkey", "pool", "horse", "loop"]);
