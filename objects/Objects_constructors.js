function Person(first,last,age){ //costructor function, first letter should uppercase
    this.fname = first;
    this.lname = last;
    this.age = age;
    this.fullName = function(){
        return this.fname + " " + this.lname;
    }
}

const scorpion = new Person('scorpion','islam',21);
const rahim = new Person('rahim','abu',22);

console.log(scorpion.fullName());

//we can add property from its objects like scorpion / rahim
scorpion.country = "bangladesh";
console.log(scorpion.country);

//but we cannot add property from constructor (main function)
// like : person.country = "bangladesh"; its not possible

// but we can this from its prototype

Person.prototype.gander = "male";
console.log(scorpion.gander);