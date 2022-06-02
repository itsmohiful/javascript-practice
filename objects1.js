const car = {
    name : "Fiat",
    model : 500,
    color : "white",
    start : function(){
        console.log("car hass started")
    },
};

console.log(car.name);
console.log(car['name']);
console.log(car.start());

console.log("2nd objects started - ")

const person = {
    firstName : "its",
    lastName : "mohiful",
    age : 21,
    mohiful : function(){
        return this.firstName + " " + this.lastName;
    }
    
};

console.log(person.mohiful());