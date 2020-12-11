var reverseString = function (s) {
    let rString = '';
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(s[i])
        rString += s[i];
    }
    return rString;
    //return s.reverse().join('');
};

let text = "hello";
//console.log(reverseString("hello"))
console.log(reverseString(text.split('')))