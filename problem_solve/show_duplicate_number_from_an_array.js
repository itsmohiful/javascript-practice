const numbers = [1,3,5,23,5,2,7,4,98,436,3,22,5,436];

const duplicate = numbers.filter(function(value,index,array){
    return array.indexOf(value) !== index 
});

console.log(duplicate);