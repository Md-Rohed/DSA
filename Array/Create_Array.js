class demo {
  constructor() {
    this.length = 0;
    this.data = [1, 2, 3, 4];
  }
  get(index) {
    console.log(this.data[index]);
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    console.log(this.length);
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    console.log(lastItem);
  }
}
const newArray = new demo();

console.log(newArray.push("Rohed"));
console.log(newArray.push("Rohed2"));
console.log(newArray.push("Rohed deleted"));
console.log(newArray.pop());

console.log(newArray);
