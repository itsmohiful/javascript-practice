// getter
const personGetter = {
    firstName: "John",
    lastName: "Doe",
    language : "English",
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(personGetter.fullName);


//setter

const personSetter = {
    firstName: "John",
    lastName: "Doe",
    language : "English",
    set lang(lang){
        this.language = lang;
    }
};

personSetter.lang = "Bangla";
console.log(personSetter.language);