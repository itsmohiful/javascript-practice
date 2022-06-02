const person = {
    fname : "scorpion",
    lname : "islam",
    fullName : function(){
        return this.fname + " " + this.lname ;
    }
};

console.log(person.fullName());