function addKidany() {
    return this+" + kidany";
}

String.prototype.kidany = addKidany;

let text = "amelia";

console.log(text.kidany())

String.prototype.addCommas = function(){return this.split("").join()}

console.log(text.addCommas())