function demo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("hello");
  }
}
demo([1, 2, 3, 4, 5]);

//space complexity of this function is O(1)

function demo2(n) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = "hello rohed";
  }
  console.log(arr);
}
demo2(6);

//space complexity of this function is O(n)

/* 
-What causes Space complexity?-
Variables
Data Structures 
Function Call
Allocations
*/
