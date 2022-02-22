const Demo = [1, 2, 3, 4, 5];
function logallpair(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; i++) {
      console.log(arr[i], arr[j]);
    }
  }
}
logallpair(Demo);
// trick: when we see nested loop we use * instead of addition
// so big O of this program is O(n*n)> O(n^2)
