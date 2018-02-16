function braces(values) {
  const matchingPairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const result = [];

  function checkIfMatched(val) {
    const braceStack = [];
    for (let j = 0; j < val.length; j++) { //go through each char
      if (matchingPairs.hasOwnProperty(val[j])) { //if an opening brace, add to stack. else compare to stack pop
        braceStack.push(val[j]);
      } else {
        const poppedBrace = braceStack.pop();
        if (matchingPairs[poppedBrace] === val[j]) continue;
        else return false;
      }
    }
    if (braceStack.length) return false; //catch for leftover odd brace
    else return true;
  }

  for (let i = 0; i < values.length; i++) { //go through each input val
    const currVal = values[i].split('');
    const currResult = checkIfMatched(currVal);
    if (currResult) result.push('YES');
    else result.push('NO');
  }

  return result;
}

function numberOfPairs(a, k) {
  const arr = a.sort((i, j) => {
    if (i < j) return -1;
    if (i > j) return 1;
  });
  let counter = 0;
  let startI = 0;
  let endI = arr.length - 1;

  while (startI !== endI) {
    if (arr[startI] === arr[startI + 1] && arr[startI] + arr[startI + 1] !== k) { //only skip doubles if they don't add up to k
      startI++;
      continue;
    }
    if (arr[endI - 1] === arr[endI] && arr[endI] + arr[endI - 1] !== k) {  //only skip doubles if they don't add up to k
      endI--;
      continue;
    }

    const currSum = arr[startI] + arr[endI];
    if (currSum === k) {
      counter++;
      startI++;
    }
    else if (currSum < k) startI++;
    else if (currSum > k) endI--;
  }

  return counter;
}


// function zombieCluster(zombies) {
//   const clusters = {};
//   const result = [];

//   for (let i = 0; i < zombies.length; i++) {
//     const friends = zombies[i].split('');
//     clusters[i] = [];
//     for (let j = 0; j < i + 1; j++) {
//       console.log(i, j)
//       if (friends[j] === '1') {
//         if (clusters[j]) clusters[i].push(j);
//       }
//     }
//   }

//   for (cluster in clusters) {
//     result.push(...clusters[cluster])
//   }

//   // still needed to remove all result array elements that appeared in the result array > 1, but ran out of time.

//   return Object.keys(result).length;
// }

// console.log(zombieCluster(['1100', '1110', '0110', '0001']));
