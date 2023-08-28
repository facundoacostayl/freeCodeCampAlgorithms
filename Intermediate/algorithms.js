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
