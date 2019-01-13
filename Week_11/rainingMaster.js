// Object-builder function
// Not technically a constructor - you can use new with it
// but you don't need to.
// You cannot use "this" in the function itself, only in the
// functions attached to the object.
function Animal_Obj(raining, noise) {
    return {
        raining: raining,
        noise: noise,
        makeNoise: function(){
            if(this.raining){
                console.log(this.noise);
            }
        }
    }
}

// Constructor function
// Must be called with 'new' or it will end up making changes to
// the global object.
// You can use "this" in the function to refer to the object being
// created, just like we do in functions attached to the object.
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if(this.raining){
            console.log(this.noise);
        }
    }
}

let dogs = Animal_Obj(true, "Woof!");
dogs.makeNoise()

let cats = new Animal(false, "Meow!");
cats.raining = true;
cats.makeNoise();

function massHysteria (animal1, animal2) {
    if(animal1.raining && animal2.raining){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}

massHysteria(cats, dogs);
