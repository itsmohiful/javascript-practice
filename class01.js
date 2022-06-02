class Car{
    constructor(name,year){
        this.carName = name;
        this.releaseYear = year;
    }
    drive(){
        console.log(`${this.carName} is driving..`);
    }
}

const car1 = new Car("Toyota",2022);    //create actual objects
const car2 = new Car("BMW",2020);

car1.drive();


class Player{
    constructor(name,age){
        this.playerName = name;
        this.playerAge = age;
    }

    play(status){
        console.log(`${this.playerName} is playing ${status}`);
    }
}


const player1 = new Player("Sakib", 35);
const player2 = new Player("Tamim",36);

player1.play("very well");

player2.play("well");