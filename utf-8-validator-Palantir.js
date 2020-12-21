//A character in UTF-8 encoding can be from 1 to 3 bytes long and it is subjected to the following rules
// For 1-byte character, the first bit is a 0, followed by its unicode code.
// For n-bytes character, the first n-bits of the first byte are all one's, the n+1 bit is 0.
// For example:
// $ : 00100100  - 1 byte character
// ñ : 11000010 10100010 - 2 bytes character
// 한 : 11101101 10010101 10011100 - 3 bytes character

//Given a string in binary representing a combination of characters write a function to determine if the input is valid UTF-8

//Input example: 001001001100001010100010 = $ñ should return true.

//O(n^2) = O(i*j)
utf8Validator = (uftCode) => {
    let utfCharBytes = [];
    //Get the bytes from the string
    for (let i = 0; i < uftCode.length; i++) {
        if (i % 8 == 0) {
            utfCharBytes.push(uftCode.substring(i, i + 8));
        }
    }

    let bytesToValidate = 0;
    //Validate each byte
    for (let i = 0; i < utfCharBytes.length; i++) {
        let utfByte = utfCharBytes[i];
        if (bytesToValidate == 0) {
            //cases 2-3 bytes
            //Get the number of 1 bits, for each 1 bit increment the bytesToCheck variable
            for (let j = 0; j < utfByte.length; j++) {
                let charBit = utfByte[j];
                //When we find a 0 there's no need to check any further
                if (charBit == '0') {
                    break;
                }
                bytesToValidate += 1;
            }
            /// VALIDATION Edge cases ///
            //case of 1 byte char
            if (bytesToValidate == 0) {
                continue;
            }
            //can't be greater than 3 bytes and bytes to check can't be one
            if (bytesToValidate > 3 || bytesToValidate == 1) {
                return false;
            }
        }
        else {
            if (!(utfByte.charAt(0) == 1 && utfByte.charAt(1) == 0)) {
                return false
            }
        }
        //Now we can determine the number of bytes to validate based on the # of 1's we found
        //minus 1 because the first byte is not a following byte
        //then every time we validate a byte we need to reduce the number
        bytesToValidate-=1;
    }
    //If we still have a bytes to validate at the end of the For then 
    //we retrun false because we don't have enough bytes 
    return bytesToValidate == 0;
}
console.log(utf8Validator("001001001100001010100010"));


//O(n) 
utf8Validator2 = (uftCode) => {
    let utfCharBytes = [];
    //Get the bytes from the string
    for (let i = 0; i < uftCode.length; i++) {
        if (i % 8 == 0) {
            utfCharBytes.push(uftCode.substring(i, i + 8));
        }
    }
    //Validate each byte
    for (let i = 0; i < utfCharBytes.length; i++) {
        let utfByte = utfCharBytes[i];
        //edge cases
        if (isNextByte(utfCharBytes[0])) return false;
        if(utfByte.length < 8) return false;
        
        let byteSub = utfByte.substring(0, 3);
        if (utfByte[0]=='0') continue;
        if (byteSub == '110') {
            //check the next byte
            if (!utfCharBytes[i + 1] || !isNextByte(utfCharBytes[i + 1])){
                return false;
            }
        }
        else if (byteSub == '111') {
            //check the next 2 bytes
            if (!utfCharBytes[i + 1] || !isNextByte(utfCharBytes[i + 1])) {
                return false;
            }
            if (!utfCharBytes[i + 2] || !isNextByte(utfCharBytes[i + 2])) {
                return false;
            }
        }
    }
    return true;    
}

isNextByte = (utfByte)=>{
    return utfByte.substring(0, 2) == '10';
}

console.log(utf8Validator2("001001001100001010100010"));