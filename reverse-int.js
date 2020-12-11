var reverse = function (x) {
    let rString = '';
    let isNegative = false;
    //check for sign
    x = x.toString();
    if (x.includes('-')) {
        x = x.substring(1, x.length);
        isNegative = true;
    }
    x.split('').forEach(n => { rString = n + rString });  
    if (isNegative) rString = '-' + rString
    return parseInt(rString)
};

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

//console.log(reverse(-120))
console.log(reverseInt(-120))