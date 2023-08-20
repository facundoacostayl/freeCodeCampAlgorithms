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

// 11 - TITLE CASE A SENTENCE
function titleCase(str) {
  const lowerStr = str.toLowerCase();
  const splittedLowerStr = lowerStr.split(" ");
  const newStrArr = splittedLowerStr.map((word) => {
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
  });
  const newStr = newStrArr.join(" ");
  return newStr;
}

titleCase("I'm a little tea pot");

// 12 - SLICE AND SPLICE
function frankenSplice(arr1, arr2, n) {
  const newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  const newSet = new Set(newArr);
  return [...newSet];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 13 - FALSY BOUNCER
function bouncer(arr) {
  return arr.filter((val) => !!val);
}

bouncer([7, "ate", "", false, 9]);

// 14 - WHERE DO I BELONG
function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  const theIndex = sortedArr.indexOf(sortedArr.find((val) => val >= num));
  if (theIndex === -1) {
    return sortedArr.length;
  }
  return theIndex;
}

getIndexToIns([2, 5, 10], 15);
