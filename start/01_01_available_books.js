// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return 'Out of stock';
//   } else if (this.numCopies < 10) {
//     return 'Low stock';
//   }
//   return 'In stock'
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// }

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability(){
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0){
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return " In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  resock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }

}

const SucceedAsBadToBreath = new Book ("As Bad To Breath", "Eric Thomas", 123456, 5);
console.log(SucceedAsBadToBreath.getAvailability());

SucceedAsBadToBreath.restock(12);
console.log(SucceedAsBadToBreath.getAvailability());

SucceedAsBadToBreath.sell(17);
console.log(SucceedAsBadToBreath.getAvailability());