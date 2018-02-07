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
