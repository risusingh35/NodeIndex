// Example in Object Literals----------------
var obj = {
    get name() {
        return this._name_;
    },
    set name(value) {
        this._name_ = value;
    }
};

obj.name = 'Risu Singh';
console.log(obj.name);

  console.log('-------------Example Using Object.defineProperty------------');

  //Example Using Object.defineProperty---------
  var person1 = {
    firstName: "abc",
    lastName: "xyz"
  };
  
  Object.defineProperty(person1, 'fullName', {
    // Define the getter
    get: function() {
      return this.firstName + " " + this.lastName;
    },
    
    // Define the setter
    set: function(name) {
      var parts = name.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
    
    // Configure property characteristics
    enumerable: true,
    configurable: true
  });
  
  console.log(person1.fullName); // John Doe
  
  person1.fullName = "Jane Smith";
  console.log(person1.firstName); // Jane
  console.log(person1.lastName); // Smith
  console.log(person1.fullName); // Jane Smith
  