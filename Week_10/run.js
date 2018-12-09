let bandList = require("./bands.js")

for (let key in bandList) {
    console.log("A " + key + " band is " + bandList[key] + ".");
}