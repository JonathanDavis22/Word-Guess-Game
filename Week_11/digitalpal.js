function digitalPal() {
    return {
        hungry: false,
        sleepy: false,
        bored: true,
        age: 0,
        feed: function() {
            if (hungry = true) {
                console.log("That was yummy!")
                hungry = false;
            }
        },
        sleepy: function() {
            if (sleepy = true) {
                console.log("Zzzzzz")
                sleepy = false;
                bored = true;
                this.increaseAge();
            } else if (sleepy = false) {
                console.log("No way! I'm not tired.")
            }
        },
        play: function() {
            if (bored = true) {
                console.log("Yay! Let's play!")
                bored = false;
                hungry = true;
            } else if (bored = false) {
                console.log("Not right now. Maybe later.")
            }
        },
        increaseAge: function() {
            this.age++;
            console.log("Happy Birthday to me! I am "+this.age+" days old!")
        }
    }
}

let dog = new digitalPal;

dog.outside = false;
dog.bark = function() {
    console.log("Woof! Woof!")
}
dog.goOutside = function() {
    if (outside = false) {
        console.log("Yay! I love the outdoors!");
        outside = true;
        this.bark();
    } else if (outside = true) {
        console.log("We're already outside, though...")
    }
}
dog.goInside = function() {
    if (outside = true) {
        console.log("Do we have to? Fine...");
        outside = false;
    } else if (outside = false) {
        console.log("I'm already inside...")
    }
}

let cat = new digitalPal;

cat.houseCondition = 100;

cat.meow = function() {
    console.log("Meow! Meow!");
}

cat.destroyFurniture = function() {
    if (this.houseCondition === 0) {
        return;
    }
    this.houseCondition -= 10;
    console.log("Muahaha! Take that, furniture!");
    bored = false;
    sleepy = true;
}

cat.buyNewFurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

dog.feed();
dog.sleepy();
dog.play();
dog.increaseAge();
dog.bark();
dog.goOutside();
dog.goInside();
cat.meow();
cat.destroyFurniture();
cat.buyNewFurniture();