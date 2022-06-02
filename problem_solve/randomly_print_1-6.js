//print randomly 1 to 6 like ludo

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


console.log(getRandomNumber(1,6));