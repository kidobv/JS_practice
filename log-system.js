class LogSystem {
    constructor(){
        this.records = new Map();
    }    

    put (id, timestamp){
        this.records.set(id, new LogTime(timestamp))
    }

    retrieve ( start, end, granularity) {
        const startDate = new LogTime(start);
        const endDate = new LogTime(end);
        const result = [];       

        for(const [key, value] of this.records.entries()){
            if (granularity === 'Year') {
                    const startTime = new Date(startDate.getYear()).getTime();
                    const endTime = new Date(endDate.getYear()).getTime();
                    const logTime = new Date(value.getYear()).getTime();
                    if(logTime >= startTime && logTime <= endTime){
                        result.push(key);
                    }
                }
            else if (granularity === 'Month'){
                const startTimeFormat = `${startDate.getYear()}-${startDate.getMonth()}`;
                const endTimeFormat = `${endDate.getYear()}-${endDate.getMonth()}`;
                const valueTimeFormat = `${value.getYear()}-${value.getMonth()}`;
                const startTime = new Date(startTimeFormat).getTime();
                const endTime = new Date(endTimeFormat).getTime();
                const logTime = new Date(valueTimeFormat).getTime();
                if (logTime >= startTime && logTime <= endTime) {
                    result.push(key);
                }
            }
            else if (granularity === 'Day'){
                const startTimeFormat = `${startDate.getYear()}-${startDate.getMonth()}-${startDate.getDay()}`;
                const endTimeFormat = `${endDate.getYear()}-${endDate.getMonth()}-${endDate.getDay()}`;
                const valueTimeFormat = `${value.getYear()}-${value.getMonth()}-${value.getDay()}`;
                const startTime = new Date(startTimeFormat).getTime();
                const endTime = new Date(endTimeFormat).getTime();
                const logTime = new Date(valueTimeFormat).getTime();
                if (logTime >= startTime && logTime <= endTime) {
                    result.push(key);
                }
            }
            //ISO Date-Time format YYYY-MM-DDTHH:MM:SSZ
            else if (granularity === 'Hour'){
                const startTimeFormat = `${startDate.getYear()}-${startDate.getMonth()}-${startDate.getDay()}T${startDate.getHour()}:00:00`;
                const endTimeFormat = `${endDate.getYear()}-${endDate.getMonth()}-${endDate.getDay()}T${endDate.getHour()}:00:00`;
                const valueTimeFormat = `${value.getYear()}-${value.getMonth()}-${value.getDay()}T${value.getHour()}:00:00`;                
                const startTime = new Date(startTimeFormat).getTime();
                const endTime = new Date(endTimeFormat).getTime();
                const logTime = new Date(valueTimeFormat).getTime();
                if (logTime >= startTime && logTime <= endTime) {
                    result.push(key);
                }
            }
            else if (granularity === 'Minute') {
                const startTimeFormat = `${startDate.getYear()}-${startDate.getMonth()}-${startDate.getDay()}T${startDate.getHour()}:${startDate.getMinute()}:00`;
                const endTimeFormat = `${endDate.getYear()}-${endDate.getMonth()}-${endDate.getDay()}T${endDate.getHour()}:${endDate.getMinute()}:00`;
                const valueTimeFormat = `${value.getYear()}-${value.getMonth()}-${value.getDay()}T${value.getHour()}:${value.getMinute()}:00`;
                const startTime = new Date(startTimeFormat).getTime();
                const endTime = new Date(endTimeFormat).getTime();
                const logTime = new Date(valueTimeFormat).getTime();
                if (logTime >= startTime && logTime <= endTime) {
                    result.push(key);
                }
            }
            else if (granularity === 'Second') {
                const startTimeFormat = `${startDate.getYear()}-${startDate.getMonth()}-${startDate.getDay()}T${startDate.getHour()}:${startDate.getMinute()}:${startDate.getSecond()}`;
                const endTimeFormat = `${endDate.getYear()}-${endDate.getMonth()}-${endDate.getDay()}T${endDate.getHour()}:${endDate.getMinute()}:${endDate.getSecond()}`;
                const valueTimeFormat = `${value.getYear()}-${value.getMonth()}-${value.getDay()}T${value.getHour()}:${value.getMinute()}:${value.getSecond()}`;
                const startTime = new Date(startTimeFormat).getTime();
                const endTime = new Date(endTimeFormat).getTime();
                const logTime = new Date(valueTimeFormat).getTime();
                if (logTime >= startTime && logTime <= endTime) {
                    result.push(key);
                }
            }            
        }
        return result;
    }    
}

class LogTime {
    constructor (timestamp) {
        this.timestamp = timestamp;
        this.granularityArr = timestamp.split(':');
    }

    getYear(){
        return this.granularityArr[0];
    }
    getMonth() {
        return this.granularityArr[1];
    }
    getDay() {
        return this.granularityArr[2];
    }
    getHour() {
        return this.granularityArr[3];
    }
    getMinute() {
        return this.granularityArr[4];
    }
    getSecond() {
        return this.gragranularityArrnularity[5];
    }
}

//More efficient
class LogSystem2 {
    constructor(){
        this.granIdx = ["Year", "Month", "Day", "Hour","Minute", "Second"];
        this.records = new Map();
    }
    //O(1)
    put(id, timestamp){
        this.records.set(id, timestamp);
    }
    //O(n*k) n is the number of logs in records and k is the size of granularity
    retrieve (start, end, granularity){
        if(!this.granIdx.includes(granularity)) return -1;
        const results = [];
        //use the index from gradIdx to splice the logTime's granularityArr and calculate milliseconds
        //calculate start time
        const startTime = new Date(...this.getGranularDateArray(start, granularity)).getTime();
        //calculate end time
        const endTime = new Date(...this.getGranularDateArray(end, granularity)).getTime();
        //gather logs in range
        for(const [id, log] of this.records.entries()){
            const logTime = new Date(...this.getGranularDateArray(log, granularity)).getTime();
            if((startTime <= logTime) && (logTime <= endTime)){
                results.push(id);
            }
        }
        return results;
    }
    //O(k + 2m) m is the length of the timestamp
    getGranularDateArray(timestamp, granularity){
        const idx = this.granIdx.indexOf(granularity);
        return timestamp.split(':').slice(0, idx + 1);;
    }
}
//Test 1
// logSystem = new LogSystem2();
// logSystem.put(1, "2017:01:01:23:59:59");
// logSystem.put(2, "2017:01:01:22:59:59");
// logSystem.put(3, "2016:01:01:00:00:00");
// console.log(logSystem.retrieve("2016:01:01:01:01:01", "2017:01:01:23:00:00", "Year"));
// console.log(logSystem.retrieve("2016:01:01:01:01:01", "2017:01:01:23:00:00", "Hour"));
// expect: [1,2,3] , [1,2]

//Test 2
// logSystem = new LogSystem2();
// logSystem.put(1, "2017:01:01:23:59:59");
// logSystem.put(2, "2017:01:02:23:59:59");
// console.log(logSystem.retrieve("2017:01:01:23:59:59", "2017:01:02:23:59:59", "Month"));
// expect: [1,2]

//Test 3
logSystem = new LogSystem2();
logSystem.put(1, "2017:01:01:23:59:59");
logSystem.put(2, "2017:01:02:23:59:59");
console.log(logSystem.retrieve("2017:01:01:23:59:58", "2017:01:02:23:59:58", "Second"));
// expect: [1]