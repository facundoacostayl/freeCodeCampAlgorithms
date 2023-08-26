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
