//User active minutes problem

// We want to measure a metric called User Active Minutes(UAM).User active minutes for a given user is defined as the count of the number of distinct minutes in which the user takes some action on Twitter.Multiple actions in the same minute are only counted as one minute.We would like a histogram of the number of users who spend X minutes on Twitter, for different values ​​of X, given 30 days of raw logs and an interval size in minutes.

// The raw logs are in the format: [user_id, epoch timestamp].Each row represents an action a user took on Twitter.The logs are ordered chronologically.Duplicates are possible.

// Write code to compute the histogram of UAMs across our user base.

// Example:
// Raw logs

// """
// [[1, 1518290973],
// [2, 1518291032],
// [3, 1518291095],
// [1, 1518291096],
// [4, 1518291120],
// [3, 1518291178],
// [1, 1518291200],
// [1, 1518291200]]
// """
// Interval size
// 2

// Resulting histogram
// [2, 2]

const generateHistogram = (uamLog, interval) => {
    //logs are in minutes
    //the interval determines the size of hour histogram array
    let result = new Array(interval).fill(0);
    let userMap = new Map();
    //Create a Map and populate it as I traverse the array my map key will be the uid and the value can be a struct {isSignInEvent: true, logTime:epoch}
    for(const log of uamLog){
        const uid = log[0];
        const time = log[1];

        if(userMap.has(uid)){
            userLog = userMap.get(uid);
            if(userLog.isSignInEvent){
                //do my time logic
                let activeMinutes = Math.ceil((time - userLog.logTime)/60);
                //because the interval is in minutes
                let intervalIdx = activeMinutes -1;
                if(intervalIdx < result.length)
                    result[intervalIdx] += 1;                 
            }
            else{
                userMap.set(uid,{isSignInEvent: true, logTime: time});
            }
        }
        else{
            userMap.set(uid, { isSignInEvent: true, logTime: time });
        }
    }
    return result;
}

const uam = [
[1, 1518290973],
[2, 1518291032],
[3, 1518291095],
[1, 1518291096],
[4, 1518291120],
[3, 1518291178],
[1, 1518291200],
[1, 1518291200]];

console.log(generateHistogram(uam, 3));