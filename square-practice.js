// You’re writing part of the code for an online card game.
// In the game, players pass cards right and left around a table.
// In your online version, you want to allow users to set up a game with some number of human players and some number of “bot” (automated) players.
// In order to be fair, you want to spread out the bots as evenly as possible around the table; for example, 
// if there are 9 total players and 3 are bots, every third seat should be a bot, and the rest should be humans.

// Example
// Players: 6 humans, 3 bots
// Seating: human, human, bot, human, human, bot, human, human, bot

// Goal
// Write a function which takes the number of human players and the number of bot players, and returns a seating arrangement which satisfies our requirements.
// To start with, assume that the number of humans is evenly divisible by the number of bots, like in the example(6 is divisible by 3).

// Part 2
// Now either edit your function or write a new one to handle the rest of the possible inputs.
// Remember that we want to spread out the bots as evenly as possible! 
// So in the below example, the longer sequences of humans should be spaced out rather than adjacent to each other.

// Example for 6 humans(h), 4 bots(B)
// Invalid: h h B h h B h B h B
// Valid:   h h B h B h h B h B

// Similar problems
// https://leetcode.com/problems/maximize-distance-to-closest-person/

var maxDistToClosest = function (seats) {
    let left = -1, maxDist = 0;
    for (let i = 0; i < seats.length; ++i) {
        if (seats[i] == 1) {
            if (left != -1) {
                maxDist = Math.max(maxDist, Math.floor((i - left) / 2)); //Get middle point between two taken seats
            }
            else {
                maxDist = i; //Get distance between index 0 to first taken seat, since left = -1, we need to make distance here -1 also.
            }
            left = i;
        }
        else if (i == seats.length - 1) {
            maxDist = Math.max(maxDist, i - left); //Get distance between last taken seat to index n - 1
        }
    }
    return maxDist;
};

// var maxDistToClosest = function(seats) {
//   const zeros = seats.join('').split('1');
//   return Math.max(
//     zeros.shift().length,
//     zeros.pop().length,
//     ...zeros.map(i => i.length > 0 ? Math.floor((i.length + 1) / 2) : 0)
//   );
// };

// https://leetcode.com/problems/exam-room/
//
//----------
// Problem Solution
function startGame(numPlayers, numBots){
    //happy path 6 players 3 bots
    let tableSetup = "";

    if(numPlayers%numBots == 0){
        for(let i=1; i<=numPlayers+numBots; i++){
            if(i%numBots == 0){
                tableSetup+="b";
            }
            else{
                tableSetup+="h";
            }
        }  
    }
    return tableSetup;
}

//console.log(startGame(6, 4))
//console.log([2,4,7,83,21,1].sort((a,b)=>a-b))

//
// const cache = {}
// function store(binNum, cardType, cardName, trustScore){
//     if(cache.hasOwnProperty(binNum)){
//         if (cache[binNum].trustScore < trustScore){
//             cache[binNum] = { cardType, cardName, trustScore }
//         }
//     }
//     else
//         cache[binNum] = { cardType, cardName, trustScore }
// }
// function lookup(binNum){
//     return [cache[binNum].cardType, cache[binNum].cardName]
// }

const cache = {}
class CreditCard {    
    constructor(binNum, cardType, cardName, trustScore){
        this.binNum = binNum;
        this.cardType = cardType;
        this.cardName = cardName;
        this.trustScore = trustScore;
    }
    getBin(){
        return this.binNum;
    }

    store(binNum, cardType, cardName, trustScore) {
        if (cache.hasOwnProperty(binNum)) {
            if (cache[binNum].trustScore < trustScore) {
                cache[binNum] = { cardType, cardName, trustScore }
            }
        }
        else
            cache[binNum] = { cardType, cardName, trustScore }
    }

    lookup(binNum) {
        return {
            "cardType": cache[binNum].cardType, 
            "cardName" : cache[binNum].cardName
        }
    }
}

function CreditCard2(binNum, cardType, cardName, trustScore){
    let __binNum = binNum;
    let __cardType = cardType;
    let __cardName = cardName;
    let __trustScore = trustScore;

    return {
        getBin(){
            return __binNum;
        },
        getCardType(){
            return __cardType;
        },
        getCardName() {
            return __cardName;
        },
        store(){
            if (cache.hasOwnProperty(__binNum)) {
                if (cache[__binNum].trustScore < __trustScore) {
                    cache[__binNum] = { __cardType, __cardName, __trustScore }
                }
            }
            else
                cache[__binNum] = { __cardType, __cardName, __trustScore }
        },

        lookup(binNum){
            return {
                "cardType": cache[binNum].getCardType(),
                "cardName": cache[binNum].getCardName()
            }
        }
    }
}

let cc = new CreditCard(123, "Visa", "Chase", 90);
// cache[cc.getBin()] = cc;
// console.log(cache)
// console.log(cc.lookup(123))


//Pagination Question - for better solution use two pointers
/**
 * For this pagination function we want to centralize the selected page number as much as possible
 * The output of this function shold be something like this <2, 3, 4, 5* 6, 7, 8> where 5 is the current page, pages = 10, and show = 7 
 * Note we want to have the current page as centered as possible
 * @param {*} total - represent the total num of pages
 * @param {*} show - the number of page numbers to display in the pagination selector
 * @param {*} current - the current selected page
 * @return - String representing the pagination UI
 */
//<4, 5, 6, 7, 8*, 9, 10>
//<1, 2*, 3, 4, 5, 6, 7>
//total = 10, show = 7, current=8
function pagination1(total, show, current){
   let toAppend = Math.floor(show/2) 
    let startIdx = current - toAppend; 
    let endIdx = current + toAppend; 
    let leftPadding = 0;
    let rightPadding = 0;
    let result ="<";

    // check boundaries
    if(endIdx > total){
        leftPadding = endIdx - total;
    }
    if(startIdx < 1){
        rightPadding = toAppend - (current - 1);
    }

    let start = startIdx - leftPadding + rightPadding;
    let end = endIdx - leftPadding + rightPadding;

    for(let i=start; i<=end; i++){
        result += i;
        if(i == current){
            result+="*";
        }
        if(i != end){
            result+=","
        }
    }
    return result+=">"
}

function pagination (total, show, current){
    let result = current + "*";
    let left = current -1;
    let right = current +1;

    while (show > 0){
        if(left >= 1){
            result = `${left}, ${result}`;
            left--;
            show--;  
        }

        if(right <= total){
            result = `${result}, ${right}`;
            right++;
            show--;  
        }              
    }

    return `<${result}>`
}


console.log(pagination(10,7,8))
console.log(pagination(10, 7, 2))
