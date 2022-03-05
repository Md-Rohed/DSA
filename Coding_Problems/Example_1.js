// Given 2 array , create a function that let's a user know (true/false) whether these two arrays contain any common items

/*const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x", "u"];
function commonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log("true");
      }
    }
  }
}

commonItem(array1, array2);
time complexity O(n^2)
*/

/*Solution 1

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x", "u"];

function commonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

commonItem2(array1, array2);
time complexity O(a+b)
*/

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x", "u"];

function commonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
