console.log("#################-2ConstructorFunctions-#################");
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  const myCar = new Car('Toyota', 'Corolla');
  console.log(myCar.make); // Output: Toyota
  console.log(myCar.model); // Output: Corolla
  console.log(myCar); 
  const myCar1 = new Car('TATA', 'Swift');
  console.log(myCar1); 
  