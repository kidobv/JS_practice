/**
 * Spotify Interview experience
 * 
 * System Design:
 * Design the full system, front to back to caching to db and all that, 
 * For a feature that shows what songs your friends have most recently listened to. 
 * It should always show 20 songs, even if you have less than 20 friends.
 * 
 * UI: 
 * Make a UI traffic light that a user can click a button to flip between random lights being on. Raw html, css, javascript
 * 
 * Coding: 
 * Parse a string that has information on a user, what song they've listened to, 
 * and the time they listened to it. You'll keep answering more parsing questions 
 * to do things like find the most popular song, figure out what "sequence" of songs were played the most , etc
 * 
 * Values: 
 * Talk about a time when you had a disagreement with a coworker, Learned something new, etc.
 */


const data = [
    "matt", "Shape Of You", "2022, 11, 17, 5, 24, 0",
    "Drew", "Promiscuous", "2022, 11, 17, 3, 24, 0",
    "matt", "Being Me To Life", "2022, 11, 17, 3, 10, 0",
    "matt", "Shape Of You", "2022, 11, 17, 3, 24, 0",
    "Drew", "Crawling", "2022, 11, 17, 8, 29, 0",
    "matt", "Being Me To Life", "2022, 11, 17, 5, 29, 0",
    "matt", "Shape Of You", "2022, 11, 18, 3, 24, 0",
    "Alex", "Promiscuous", "2022, 11, 18, 3, 24, 0",
    "Alex", "Being Me To Life", "2022, 11, 23, 4, 24, 0",
    "Alex", "Shape Of You", "2022, 11, 26, 18, 5, 0",
    "Holy", "Being Me To Life", "2022, 11, 16, 4, 24, 0", 
    "Holy", "Shape Of You", "2022, 11, 16, 8, 14, 0",
    "Kidany", "Promiscuous", "2022, 12, 16, 7, 14, 0",
    "Kidany", "Crawling", "2022, 12, 16, 8, 14, 0",
]

//find the most popular song, figure out what "sequence" of songs were played the most, also longest sequence , etc

const parsedData = [];
for(let idx=3; idx <= data.length; idx+=3) {    
        let logObj = {
            "user": data[idx - 3],
            "song": data[idx - 2],
            "timestamp": new Date(...data[idx - 1].split(','))
        }
        parsedData.push(logObj);
}

//console.log(parsedData) 

function getTopKSong(data, k = 1){
    const songsMap = new Map();
    let top = null;
    const result = [];
    
    data.forEach(({song}) => {      
        if (top == null){
            top = song;
        }  
        if (songsMap.get(song)){
            songsMap.set(song, songsMap.get(song) + 1);
            // update top result
            if (songsMap.get(song) > songsMap.get(top))
                top = song;
        }
        else {
            songsMap.set(song, 1);
        }
    });        

    // O(n) because of bucket sort - not the best solution in this case since frequency can be a million making the array of that size
    // let bucket = [];
    // for (const [song, frequency] of [...songsMap.entries()]) {
    //     if (bucket[frequency] == null) {
    //         bucket[frequency] = new Array();
    //     }
    //     bucket[frequency].push([song, frequency]);
    // }

    // bucket = bucket.flat();
    // for(let i=bucket.length-1; i > 0 && k > 0; i--, k--){
    //     if (bucket[i])
    //         result.push(bucket[i]);
    // }

    //  O(n) regular quick sort
    bucket = [...songsMap.entries()].sort((a, b) => b[1] - a[1]);
    //console.log("bucket", bucket);
    for(let i=0; i < bucket.length && k > 0; i++, k--){
        if (bucket[i])
            result.push(bucket[i]);
    }
    
    return result;
}

function findLongestSequence(data){
   const seqMap = getSortedSequence(data);

   let max = [];
   for([user, seq] of [...seqMap.entries()]){
    max = seq.length > max.length ? seq : max;
   }
    return max.reduce((acc, item) => { 
        acc.push(item.song);
        return acc;
    }, []);
}

// sorting and grouping by user
function getSortedSequence(data){
    //make a map with the user's name as the key
    const seqMap = new Map();
    data.forEach(log => {
        const { user, ...songLog } = log;
        const userLog = seqMap.get(log.user);
        if (userLog) {
            userLog.push(songLog)
        }
        else {
            seqMap.set(log.user, [songLog]);
        }
    });

    for([key, value] of seqMap.entries()){
        const sorted = value.sort((a, b) => a["timestamp"] - b["timestamp"])
        seqMap.set(key, sorted);
    }
    return seqMap;
}

function getMostFrequentSeq(data, size){
    const userSeqMap = getSortedSequence(data);
    const seqSum = new Map();
    let result = [];
    for ([user, songList] of userSeqMap.entries()){     
        //console.log(songList)   
        const uniqueSeq = new Set();
        for (let l = 0; l <= songList.length-size; l++){ 
            let seq = `${songList[l]["song"]}`;
            for(let r=l+1; r < l+size; r++){ 
                seq += `, ${songList[r]["song"]}`;
                //console.log("seq", seq)
            }
            if (!uniqueSeq.has(seq)){
                // update the Set
                uniqueSeq.add(seq);

                // initial result update
                if(result.length == 0){
                    result[0] = seq;
                    result[1] = 1;
                }

                //update the seq sum map and potentially update result
                if(seqSum.get(seq)){
                    seqSum.set(seq, seqSum.get(seq) + 1);
                    if (result[1] < seqSum.get(seq)){
                        result[0] = seq;
                        result[1] = seqSum.get(seq);
                    }
                }
                else {
                    seqSum.set(seq, 1);
                }                
            }            
        }
    }
    console.log(seqSum);
    return result;
}

console.log(getTopKSong(parsedData, 3))
console.log(findLongestSequence(parsedData))
console.log(getMostFrequentSeq(parsedData, 2))