// 1 - CONVERT CELSIUS TO FARENHEIT
function convertCtoF(celsius) {
  return celsius * (9 / 5) + 32;
}

convertCtoF(30);

// 2 - REVERSE A STRING
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// 3 - FACTORIALIZE A NUMBER
function factorialize(num) {
  let newNum = 1;
  for (let i = 1; i <= num; i++) {
    newNum *= i;
  }

  return newNum;
}

factorialize(5);

// 4 - FIND THE LONGEST WORD IN A STRING
function findLongestWordLength(str) {
  let longestWord = "";
  str.split(" ").forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");