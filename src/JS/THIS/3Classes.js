console.log("#################-3 Classes-#################");
class Dog {
    constructor(name) {
      this.name = name;
    }
  
    bark() {
      console.log(`${this.name} says woof!`);
    }
  }
  
  const myDog = new Dog('Rex');
  myDog.bark(); // Output: Rex says woof!
  console.log(myDog);