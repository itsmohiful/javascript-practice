//text to json
let text ='{ "employees" : [' +
'{"firstName":"Jhon", "lastName" : "Doe"}, ' +
'{ "firstName": "Emma", "lastName": "Stone"} ]}';

const obj = JSON.parse(text); //text to json

console.log(obj);

console.log(obj.employees[0].firstName);


//objects to convert text
const person = {
    firstName : "scorpion",
    lastName : "islam"
}

let convertText = JSON.stringify(person);
console.log(convertText);