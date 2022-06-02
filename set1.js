//set create new Set() constructor, add(),delete(),has(),values(),forEach()

const letters = new Set(['s','c','o','r','p','i','o','n']);
console.log(letters);

//const letter =['s','c','o','r','p','i','o','n']; //array

letters.add('i');
letters.add('s');

console.log(letters);

function myFunction(value,index){       //forEach in set
    console.log(`${index}: ${value}`);
}

letters.forEach(myFunction);