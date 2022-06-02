const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());     //sorting array

console.log(fruits.reverse());      //reverse an array

const points = [40, 100, 1, 5, 25, 10];
console.log("incorrect sort: ",points.sort());     //in number sort() produce incorrect result cz it treat them as letter

points.sort(function(a,b){      //by using function, it produce correct sorting
    return a - b;       // a - b accending order, b - a decending order
});

console.log("correct sort: ",points);

//max sorting effecient way

function itsArrayMax(arr){
    return Math.max.apply(null,arr);
}

console.log("find max number using math.max.apply method: ",itsArrayMax(points));


//min sorting effecient way

function itsArrayMin(arr){
    return Math.min.apply(null,arr);
}

console.log("find min number using math.max.apply method: ",itsArrayMin(points));