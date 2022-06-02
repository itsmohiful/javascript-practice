class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    present(){
        return "i have a " + this.name;
    }
}

// const carBm = new Car('BMW',2000);
// console.log(carBm.present());


class Model extends Car{
    constructor(name,mod){
        super (name);
        this.model = mod;
    }

    show(){
        return this.present() + " which model is " + this.model;
    }
}

const carf = new Model('fedora','v44');
console.log(carf.show());