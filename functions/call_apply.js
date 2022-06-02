//call()
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
  
console.log("using call()",person.fullName.call(person1, "Oslo", "Norway"));


  //apply()
const personApply = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person1Apply = {
    firstName:"Maria",
    lastName: "Doe"
}

console.log("using apply()",personApply.fullName.apply(person1Apply, ["Oslo", "Norway"]));