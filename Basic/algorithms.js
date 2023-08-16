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

// 5 - RETURN THE LARGEST NUMBERS IN ARRAYS
function largestOfFour(arr) {
  const newArr = [];

  arr.forEach((subArr) => {
    let maxNum = 0;
    let flag = false;

    subArr.forEach((val) => {
      if (val < 0 && flag === false) {
        maxNum = val;
        flag = true;
      }

      if (val > maxNum) {
        maxNum = val;
      }
    });

    newArr.push(maxNum);
  });

  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// 6 - CONFIRM THE ENDING
function confirmEnding(str, target) {
  return target === str.substring(str.length - target.length);
}

confirmEnding("Bastian", "n");

// 7 - REPEAT A STRING REPEAT A STRING
function repeatStringNumTimes(str, num) {
  if (num < 0) return "";

  let newArr = "";
  for (let i = 1; i <= num; i++) {
    newArr += str;
  }

  return newArr;
}

repeatStringNumTimes("abc", 3);

// 8 - TRUNCATE A STRING
function truncateString(str, num) {
  return str.length <= num ? str : str.substring(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 9 - FINDERS KEEPERS
function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// 10 - BOO WHO
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
