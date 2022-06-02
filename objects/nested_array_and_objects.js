//Nested Objects and Nested Array-objects

//nested objects
const myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

console.log("Nested Obj: ");
console.log(myObj.cars.car2);
console.log(myObj.cars["car3"]);
console.log(myObj["cars"]["car1"]);

console.log("============= \n");




  //nestd array-objects
const carObj = {
    fname : "Jhon",
    lname : "Doe",
    cars : [
        {name : "BMW" , model : ["Feista","Focuse"]},
        {name : "Ford", model : ["329", "x3"]}
    ]
};

console.log("Nested Array-Objects: ");
for(let i in carObj.cars){
    console.log(carObj.cars[i].name,carObj.cars[i].model);
}