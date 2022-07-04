package practice;

import java.util.HashMap;
import java.util.TreeSet;
import java.util.ArrayList;
import java.util.List;

// Given 2 methods and an enum,

// public void recordTweet(String tweetName, long time);

// public long[] getTweetCountsPerFrequency(Frequency freq, String tweetName, long startTime, long endTime);

// enum Frequency {
//     MINUTE,
//     HOUR,
//     DAY
// }
// recordTweet("tweet1", 3498264982(time in millis)) method is called multiple times for different tweetNames and times that records the time at which the tweet occurred.

// For example if the tweetName tweet1 occurs five times in last 2 hours from current time { consider current time is 3 pm } (for e.g. 3 times in first hour { 1 pm to 2 pm } and 2 times in second hour { 2 pm to 3 pm }).then the result should be following:

// getTweetCountsPerFrequency(HOUR, "tweet1", < 2 pm >, < 3 pm >); // should return [2]
// getTweetCountsPerFrequency(HOUR, "tweet1", < 1 pm >, < 3 pm >); // should return [3, 2]
// getTweetCountsPerFrequency(HOUR, "tweet1", < 1 pm >, < 2 pm >); // should return [3]
// getTweetCountsPerFrequency(DAY, "tweet1", < 3 pm yesterday >, < 3 pm today >); // should return [5]


// 1 h = 3600000 ms
//24 h = 86400000 ms

class TweetCounts {
    HashMap <String, TreeSet<Long>> map;

    enum Frequency {
        MINUTE,
        HOUR,
        DAY
    }

    public TweetCounts(){
        map = new HashMap<>();
    }

    public void recordTweet(String tweetName, long time){
        if(map.containsKey(tweetName)){
            TreeSet<Long> set = map.get(tweetName);
            set.add(time);
            map.put(tweetName, set);
        }
        else{
            TreeSet<Long> set = new TreeSet<>();
            set.add(time);
            map.put(tweetName, set);
        }
    }

    public List<Integer> getTweetCountsPerFrequency(Frequency freq, String tweetName, long startTime, long endTime){
        //pass the time denomination value to solve
        if(freq.equals(Frequency.MINUTE)){
            return this.solve(60*1000, tweetName, startTime, endTime);
        }
        else if(freq.equals(Frequency.HOUR)){
            return this.solve(3600 * 1000, tweetName, startTime, endTime);
        }
        else if (freq.equals(Frequency.DAY)) {
            return this.solve(86400 * 1000, tweetName, startTime, endTime);
        }
        return null;
    }

    public List<Integer> solve(long interval, String tweetName, long startTime, long endTime){
        List<Integer> res = new ArrayList<Integer>();
        if(!map.containsKey(tweetName)){
            for (long i = startTime; i <= endTime; i += interval) {
                res.add(0);
            }
            return res;
        }
        TreeSet<Long> set = map.get(tweetName);
        for (long i = startTime; i <= endTime; i += interval) {
            res.add(set.subSet((long) i, (long) Math.min(i + interval, endTime + 1)).size());
        }
        return res;
    }
}