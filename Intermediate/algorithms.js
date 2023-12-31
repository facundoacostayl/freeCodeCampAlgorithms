// 1 - SUM ALL NUMBERS IN A RANGE
function sumAll(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const greatestNum = sortedArray[sortedArray.length - 1];
  let startPoint = sortedArray[0];
  let temp = 0;
  for (let i = startPoint; i <= greatestNum; i++) {
    temp += i;
  }

  return temp;
}

sumAll([1, 4]);

// 2 - DIFF TWO ARRAYS
function diffArray(arr1, arr2) {
  const newArr = [];
  const longestArr = arr1.length > arr2.length ? arr1 : arr2;
  const shortestArr = arr1 == longestArr ? arr2 : arr1;

  for (let i = 0; i < longestArr.length; i++) {
    !shortestArr.includes(longestArr[i]) && newArr.push(longestArr[i]);
  }

  for (let i = 0; i < shortestArr.length; i++) {
    !longestArr.includes(shortestArr[i]) && newArr.push(shortestArr[i]);
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 3 - SEEK AND DESTROY
function destroyer(arr) {
  const newArr = [];
  const argsLength = arguments.length - 1;
  let flag = false;
  arr.forEach((val) => {
    for (let i = 1; i <= argsLength; i++) {
      if (val == arguments[i]) return;
      flag = true;
    }
    if (flag) newArr.push(val);
  });

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 5 - SPINAL TAP CASE
function spinalCase(str) {
  const splittedStr = str.split("");
  let spinalStr = "";

  //Logic

  splittedStr.unshift(splittedStr.shift().toLowerCase());

  splittedStr.forEach((letter) => {
    if (letter === "-" || letter === "_" || letter === " ") {
      letter = " ";
      spinalStr += letter;
      return;
    }

    if (
      letter === letter.toUpperCase() &&
      spinalStr[spinalStr.length - 1] != " "
    ) {
      spinalStr += " ";
    }

    spinalStr += letter.toLowerCase();
  });

  return spinalStr.split(" ").join("-");
}

spinalCase("This Is Spinal Tap");

// 6 - PIG LATIN
function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";
  const splittedNewStr = str.split("");

  vowels.forEach((letter) => {
    if (str[0] == letter) {
      newStr = str + "way";
    }
  });

  if (newStr != "") return newStr;

  let nextVowelIndex = str.length;

  vowels.forEach((letter) => {
    const splittedStr = str.split("");
    splittedStr.shift();
    const vowelIndex = splittedStr.findIndex((val) => val == letter);
    if (vowelIndex < nextVowelIndex && vowelIndex > -1) {
      nextVowelIndex = vowelIndex;
    }
  });

  const firstCluster = splittedNewStr.splice(0, nextVowelIndex + 1);
  splittedNewStr.push(...firstCluster);
  newStr = splittedNewStr.join("") + "ay";

  return newStr;
}

translatePigLatin("glove");

// 7 - SEARCH AND REPLACE
function myReplace(str, before, after) {
  const arrStr = str.split(" ");
  const bfIndex = arrStr.findIndex((value) => value === before);

  if (before[0] == before[0].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  arrStr.splice(bfIndex, 1, after);

  return arrStr.join(" ");
}

myReplace("Let us go to the store", "store", "mall");

// 8 - MISSING LETTERS
function fearNotLetter(str) {
  const arrStr = str.split("");
  let nextLetter = str[0];
  let focusIndex;
  let newStr = "";

  arrStr.forEach((val) => {
    if (val != nextLetter) {
      focusIndex = arrStr.indexOf(val);
      return;
    }

    nextLetter = String.fromCharCode(val.charCodeAt(0) + 1);
    if (nextLetter == "{") {
      nextLetter = undefined;
      return;
    }
  });

  return nextLetter;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
