function addKidany() {
    return this+" + kidany";
}

String.prototype.kidany = addKidany;

let text = "amelia";

console.log(text.kidany())


