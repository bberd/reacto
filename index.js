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

//1.5
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
