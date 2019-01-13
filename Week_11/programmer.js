function Programmer(name, job, age, language) {
    this.name = name,
    this.job = job,
    this.age = age,
    this.language = language
}

Programmer.prototype.printInfo = function() {
    console.log(`Name: ${this.name} \nPosition: ${this.job} \nAge: ${this.age} \nFav. Language: ${this.language}`)
};

var Paulie = new Programmer("Paulie", "Web Vato", 22, "JavaKing");
var Mac = new Programmer("Mac", "Hacker", 24, "Any, dog");

Paulie.printInfo();
Mac.printInfo();