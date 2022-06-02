const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName());

console.log("-------");

//explicit function
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  console.log("explicit : ",person1.fullName.call(person2));