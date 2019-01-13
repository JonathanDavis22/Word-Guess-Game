let input = process.argv[2];

// function Animal(raining, noise) {
//     return {
//         raining: raining,
//         noise: noise,
//         makeNoise: function(){
//             if(this.raining){
//                 console.log(this.noise);
//             }
//         }
//     }
// }


function Animal(raining, noise) {
    this.raining = raining,
    this.noise = noise,
    this.makeNoise = function(){
        if(this.raining){
            console.log(this.noise);
        }
    }
}


let dogs = new Animal(true, "Woof!")
dogs.makeNoise();

let cats = new Animal(false, "Meow!")
cats.raining = true;
cats.makeNoise();

// let dogs = {
//     raining: true,
//     noise: "Woof!",
//     makeNoise: function(){
//         if(this.raining){
//             console.log(this.noise);
//         }
//     }
// };

// dogs.makeNoise();

// let cats = {
//     raining: false,
//     noise: "Meow!",
//     makeNoise: function(){
//         if(this.raining !== false){
//             console.log(this.noise);
//         }
//     }
// };

// cats.raining = true;
// cats.makeNoise();


function massHysteria (animal1, animal2) {
if(animal1.raining && animal2.raining) {
    console.log("Mass hysteria!")
    }
};

massHysteria (cats, dogs);