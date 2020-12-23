// Reverse words in a scentence
 reverseWords = (sentence) =>{
     let reversedWords = "";
     wordsArray = sentence.split(" ");
     wordsArray.forEach((word)=>{
         reversedWords += word.split("").reverse().join("") + " ";
     });
     return reversedWords;
 }

 console.log(reverseWords("Hello World!"));

 reversedSentence = (sentence) =>{
     let reversedSentence = "";
     wordsArray = sentence.split(" ");
     for(let i = wordsArray.length-1; i >=0; i--){
         //first word
         if (!reversedSentence){
            reversedSentence = wordsArray[i];
         }
         //following words
         else{
            reversedSentence += ` ${wordsArray[i]}`;
         }
     }
     return reversedSentence;
 }
console.log(reversedSentence("Hello World!"));
