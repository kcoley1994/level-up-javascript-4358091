// Write your code here
function coffeeDate(coffeeArr) {
  let coffeeSum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );
  return ` the total bill is $${coffeeSum * 1.25}`;
}

console.log(coffeeDate([2, 5, 8, 9]));
console.log(coffeeDate([2, 5, 8, 3]));