//Given an array of integers representing a number e.g. [1,2,3,4] = 1234 add 1 to the number

//Guide to solving interview questions
//Step 1: Clarifying questions
// Are we adding 1 to the last digit such that the numberical operation is 1234 + 1 and not to each individual digit?
// Could this array be empty and if so how should I handle the scenario?
// Can we always assume that each integers in the array is always an integer between 0-9?

//Step 2: High level discussion
// Discuss edge cases
//Example:
// this problem is easy if the last digit is not 9 because then we can just add 1 to the last digit
// However if we do have 9 then we need to change that digit to 0 and carry a 1 to the left
// The most difficult case is when we have all 9's example [9,9,9], in this case we need to create a new Array with a bigger size

//Step 3: List out your solutions
// Once you have enough information, explain what your approach will be
// You can say that; 1) we can do iteration or 2) recursion 
// It is important to list out the solutions because it will be hard to get to the optimal solution with your first idea

//Step 4: Start coding
// pick the approach and ask if you should start coding with that solution
// explain the input and outputs of your function


addOne = (givenArray) =>{
    //lets return a new array since for the edge case we will need to create a new anyway
    let resultArray = [...givenArray];
    //if its empty
    let arrayLength = resultArray.length;
    if(arrayLength == 0){ return [1];}

    if(resultArray[arrayLength-1] < 9){
        resultArray[arrayLength-1]+=1;
        return resultArray;
    }
    else{
        //evaluate when 9
        let carryOver = 0;
        for(let i = arrayLength-1; i>=0 ; i--){
            if(resultArray[i] == 9){
                carryOver = 1;
                resultArray[i] = 0;
            }
            else{
                resultArray[i]+=1;
                carryOver = 0;
            }
        }
        //all numbers were 9; increment array size
        if (carryOver == 1){
            resultArray = [1, ...resultArray];
        }
        return resultArray;
    }
}

console.log(addOne([1, 2, 3, 4]));
console.log(addOne([9, 9, 9, 9]));
console.log(addOne([1, 9, 9, 9]));
console.log(addOne([0]));
console.log(addOne([]));