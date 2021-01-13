function encoding(string) {
    //edge case, check for null and empty string
    if (!string) return "";
    let encodedString = "";
    let charCount = 1;
    for (let i = 0; i < string.length; i++) {        
        if (i < string.length-1 && string.charAt(i) == string.charAt(i + 1)) {
            charCount++;
        }
        else {
            encodedString += `${charCount}${string.charAt(i)}`;
            charCount = 1;
        }
    }
    return encodedString;
}

console.log(encoding("aaaaabbbccd"));
console.log(encoding(""));
console.log(encoding(null));