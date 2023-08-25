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
