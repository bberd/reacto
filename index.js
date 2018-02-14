// //pre
// function perm(string) {
//   const allPerms = [];
//   const strArr = string.split('');
//   allPermsArr.push(strArr.pop());
//   while (strArr.length > 0) {
//     const currChar = strArr.pop();
//     for (const lastPerms of allPermsArr[allPermsArr.length - 1]) { // lastPerms = ab
//       const temp = [];
//       lastPermsArr = lastPerms.split('')
//       for (let charIdx = 0; charIdx <= lastPermsArr.length; charIdx++) {
//         const newPerm = lastPermsArr.splice(charIdx, 0, currChar);
//         temp.push(newPerm)
//       }
//       allPerms.push(temp);
//     }
//   }
//   return allPerms;
// }


// console.log(perm('abcd'));

//1.3
function removingSpaces(string) {
  const stringArr = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (stringArr[i] === ' ') {
      if (stringArr[i - 1] !== '%20') {
        stringArr[i] = '%20';
      } else {
        stringArr.splice(i, 1)
        i--;
      }
    }
  }
  if (stringArr[stringArr.length - 1] === '%20') stringArr.pop();
  return stringArr.join('');
}


//1.5
function oneAway(str1, str2) {
  let didMod = false;
  const len1 = str1.length;
  const len2 = str2.length;
  let longer = len1 > len2 ? str1 : str2;
  const shorter = len1 < len2 ? str1 : str2;
  if (len1 === len2) {
    for (let i = 0; i < len1; i++) {
      console.log(str1[i], str2[i], didMod)
      if (str1[i] !== str2[i]) {
        if (didMod === true) return false;
        didMod = true;
      }
    }
  } else {
    for (let i = 0; i < longer.length; i++) {
      console.log(i, longer[i], shorter[i], didMod)
      if (longer[i] !== shorter[i]) {
        if (didMod === true) return false;
        longer = longer.slice(0, i-1) + longer.slice(i)
        didMod = true;
        i--;
      }
    }
  }
  return true;
}


// 1.8
function zeroMatrix(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  let rowIs = [];
  let colIs = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (arr[r][c] === 0) {
        rowIs.push(r);
        colIs.push(c);
      }
    }
  }

  for (let i = 0; i < rowIs.length; i++) {
    arr[rowIs[i]].fill(0);
    for (let j = 0; j < cols; j++) {
      arr[j][colIs[i]] = 0;
    }
  }

  return arr;
}

// 1.6
function compress(str) {
  str = str.split('');
  let currLetter = str[0];
  let result = '';
  let letterCount = 0;

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (currLetter === str[i]) {
      letterCount++;
      if (i === str.length - 1) {
        result += currLetter + letterCount;
      }
    } else {
        result += currLetter + letterCount;
        currLetter = str[i];
        letterCount = 1;
        if (i === str.length - 1) {
          result += currLetter + letterCount;
        }
    }
  }

  for (let i = 1; i < result.length; i += 2) {
    if (result[i] > 1) return result;
  }
  return str.join('');
}

