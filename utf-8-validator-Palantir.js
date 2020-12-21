//A character in UTF-8 encoding can be from 1 to 3 bytes long and it is subjected to the following rules
// For 1-byte character, the first bit is a 0, followed by its unicode code.
// For n-bytes character, the first n-bits of the first byte are all one's, the n+1 bit is 0.
// For example:
// $ : 00100100  - 1 byte character
// ñ : 11000010 10100010 - 2 bytes character
// 한 : 11101101 10010101 10011100 - 3 bytes character

//Given a string in binary representing a combination of characters write a function to determine if the input is valid UTF-8

//Input example: 001001001100001010100010 = $ñ should return true.

utf8Validator = (uftCode) =>{
    
}