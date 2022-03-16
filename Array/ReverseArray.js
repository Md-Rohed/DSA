const name = "Rohed";
function reverse(str) {
  const lastitem = str.length - 1;
  for (i = lastitem; i >= 0; i--) {
    console.log(str[i]);
  }
}
reverse("Rohed");

//solution 2

function reverse2(str) {
  console.log(str.split("").reverse().join(""));
}

reverse2("HELLO");

//solution 3 ES6
const reverse3 = (str) => console.log(str.split("").reverse().join(""));
reverse3("DEMO");
