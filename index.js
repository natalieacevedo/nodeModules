const information= require('./information.js');
const cowsay = require("cowsay");


// console.log(information);


// console.log(cowsay.say({information}));
//console.log(cowsay.say(information));
console.log(cowsay.say({
    text : ` Hello I am ${information.name} from ${information.campus}`,
    e : "oO",
    T : "U "
}));


