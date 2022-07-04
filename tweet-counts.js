// Given 2 methods and an enum,

// public void recordTweet(String tweetName, long time);

// public long[] getTweetCountsPerFrequency(Frequency freq, String tweetName, long startTime, long endTime);

// enum Frequency {
//     MINUTE,
//     HOUR,
//     DAY
// }
// recordTweet("tweet1", 3498264982(time in millis)) method is called multiple times for different tweetNames and times that records the time at which the tweet occurred.

class TweetCounts{
    constructor(){
        this.tweetsMap = new Map();
        this.enum = {
            MINUTE:"minute",
            HOUR:"hour",
            DAY:"day"
        }
    }

    recordTweet(tweetName, time){
        if(this.tweetsMap.has(tweetName)){
            this.tweetsMap.get(tweetName).push(time);
        }
        else{
            this.tweetsMap.set(tweetName, [time]);
        }
    }

    getTweetCountsPerFrequency(freq, tweetName, startTime, endTime){
        //edge case
        if(!this.tweetsMap.has(tweetName)) return [];
        if(freq == this.enum.MINUTE){
            return this.solveCount(60, tweetName, startTime, endTime);
        }
        else if(freq == this.enum.HOUR){
            return this.solveCount(3600 , tweetName, startTime, endTime);
        } // Day
        else{
            return this.solveCount(24 * 3600, tweetName, startTime, endTime);
        }
    }

    solveCount(offset, tweetName, start, end){
        let result = [];
        const records = this.tweetsMap.get(tweetName);
        const recordsSize = records.length;
        ///      0s              120s 2min    [10s, 120s 130s] 
        for(let i = start; i <= end; i += offset+1){ //60
            let rangeResult = [];            
            for (let j = 0; j < recordsSize; j++){                
                if (i <= records[j] && records[j] <= Math.min(end,  i + offset)){
                    rangeResult.push(records[j]);
                }
            }
            result.push(rangeResult.length);
        }
        return result;
    }
}

//Test 1
// [0, 60, 3600]

let tweetCount = new TweetCounts();
tweetCount.recordTweet('tweet1', 0);
tweetCount.recordTweet('tweet1', 10);
tweetCount.recordTweet('tweet1', 60);
tweetCount.recordTweet('tweet1', 61);
tweetCount.recordTweet('tweet1', 62);
tweetCount.recordTweet('tweet1', 3599);
tweetCount.recordTweet('tweet1', 3600);
tweetCount.recordTweet('tweet1', 24 * 3599);
tweetCount.recordTweet('tweet1', 24 * 3600);

console.log(tweetCount.getTweetCountsPerFrequency(tweetCount.enum.MINUTE, 'tweet1', 0, 61));
console.log(tweetCount.getTweetCountsPerFrequency(tweetCount.enum.HOUR, 'tweet1', 0, 3600));
console.log(tweetCount.getTweetCountsPerFrequency(tweetCount.enum.DAY, 'tweet1', 0, 24 * 3600));