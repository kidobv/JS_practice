/**
 * Part 1 
 * Implement SET, GET, DELETE
 * SET
 * when setting a record the query will have 3 parameters key the identifier, field, value
 * e.g. ["SET", "employee", "name", "Joe"]
 * return empty string
 * 
 * GET
 * return the value of the requested field
 * e.g. ["GET", "employee", "name"]
 * 
 * DELETE
 * delete a field
 * e.g ["DELETE", "employee", "name"]
 * should return "true" if the field was deleted or "false" if unable to delete
 */

/**
 * NOTE: the solution should be a list of the result of all the queries
 * e.g
 * queries[ 
 *          ["SET", "employee", "name", "Joe"],
 *          ["GET", "employee", "name"]
 *        ]
 * result = ["","Joe"]
 */

/**
 * Part 2
 * 
 * Add SCAN
 * Returns all fields that match a prefix as a string in the format "field(value)", if the prefix is empty string return all fields
 * e.g  ["SCAN", "employee", "na"]
 * return "name(Joe)"
 * return empty string if the key is not found
 */

/**
 * Part 3
 * 
 * Add timestamp and ttl

 * Support SET_AT, GET_AT, DELETE_AT, SCAN_AT and also all the previous functions
 * the _AT functions will provide a timestamp and ttl (in case of SET_AT)
 * GET_AT if the timestamp provided is pass the TTL for the record then the record can't be returned, instead return ""
 * SET_AT if the record already exist update the timestamp and TTL
 * SCAN_AT only return the records that have not expired given a timestamp
 * DELETE_AT delete the field if it hasn't expired
 */


const { time } = require("console");

function solution(queries) {
    const store = {};
    const result = [];
    
    queries.forEach(query => {
        const [cmd, key, field, value, timestamp, ttl] = query;
        switch(cmd){
            case "SET":                
                result.push(setRecord(store, key, field, value));
            break;
            case "GET":
                result.push(getRecord(store, key, field));
            break;
            case "DELETE":
                result.push(deleteRecord(store, key, field));
            break;
            case "SCAN":
                result.push(scan(store, key, field));
            case "SET_AT":                
                result.push(setRecord(store, key, field, value, timestamp, ttl));
            break;
            case "GET_AT":
                result.push(getRecord(store, key, field, timestamp));
            break;
            case "DELETE_AT":
                result.push(deleteRecord(store, key, field, timestamp));
            break;
            case "SCAN_AT":
                result.push(scan(store, key, field, timestamp));
            default:
            break;
        }
    })
    
    return result;
    
}

function setRecord(store, key, field, value, timestamp = 0, ttl = 0){ 
    let record = store[key];
    if(timestamp == 0 && ttl == 0){
        console.log(timestamp, ttl)
        if(!record)
            store[key] = {[field]: value};
        else {
            record[field] = value;
        }
    }  
    else {
        console.log(timestamp, ttl)
        if(!record)
        store[key] = {
            [field]: value,
            "timestamp": timestamp,
            "ttl": ttl
        };
        else {
            record[field] = value;
            record["timestamp"] = timestamp;
            record["ttl"] = ttl;
        }
    }  
    return "";    
}

function getRecord(store, key, field, timestamp = null){ 
    let record = store[key];   
    if(!timestamp) {        
        if(record && record[field])
            return record[field];
        else
            return "";
    }
    else {
        if(record && record[field]){
            const isExpired = record["ttl"] > timestamp - record["timestamp"];
            if(record["ttl"] == 0 || !isExpired)
                return record[field];   
        }         
        else
            return "";
    }
}

function deleteRecord(store, key, field, timestamp = null){    
    let record = store[key];
    if(record && record[field]){
        delete record[field];
        return "true";
    }
    return "false";
}

function scan(store, key, prefix, timestamp = null) {
    let record = store[key];
    if(record){
        console.log(store)
        const resultList = [];       
        for(const [field, value] of Object.entries(record)){
            if(prefix == "" || field.startsWith(prefix))
            resultList.push(`${field}(${value})`);
        }        
        const result = resultList.sort().join(", ");
        return result;
    }
    return "";
}