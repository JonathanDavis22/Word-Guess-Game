function character(name, occupation, gender, age, strength, hitPoints) {
    this.name = name,
    this.occupation = occupation,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hitPoints = hitPoints,

    // method which prints all of the stats for each character
    this.printStats = function(){
        console.log('Name: ' + this.name);
        console.log('Occupation: ' + this.occupation);
        console.log('Gender: ' + this.gender);
        console.log('Age: ' + this.age);
        console.log('Strength: ' + this.strength);
        console.log('HP: ' + this.hitPoints);
    }
    this.isAlive = function() {
        if (this.hitPoints > 0) {
        console.log(this.name + " is alive!")
        return true;
        }
        console.log(this.name + " has died!")
    }
    this.attack = function(opponent) {
        opponent.hitPoints -= this.strength;
    }
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
    }
}

let BroccoliHead = new character("Broccoli Head", "Vegetable Superhero", "Male", 34, 100, 750)
let lardMan = new character ("Lard Man", "Villain", "Male", 55, 130, 500)

BroccoliHead.printStats();
lardMan.printStats();

function fight (characterA, characterB) {
    while(characterA.isAlive() && characterB.isAlive()) {
        characterA.attack(characterB);
        characterB.attack(characterA);
    }
}

fight (BroccoliHead, lardMan);