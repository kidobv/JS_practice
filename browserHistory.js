/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.homepage = homepage;
    this.history = {index:0, list:[homepage]};
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.index++
    this.history.list.splice(this.history.index)
    this.history.list.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if(this.history.index == 0){
        return this.homepage;
    }
    const backSteps = steps > 100 ? 100 : steps;
    const index =  this.history.index;
    if(backSteps >= index){
        this.history.index = 0;
        return this.homepage;
    }
    else{
        this.history.index = index-backSteps;
        return this.history.list[index-backSteps];
    }    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {  
    const forwardSteps = steps > 100 ? 100 : steps;
    const historyLength =  this.history.list.length; //4
    const index =  this.history.index; // 3
    
    if(index == historyLength - 1){
       return this.history.list[index];
    }    

    if(forwardSteps >= historyLength - index){
        this.history.index = historyLength-1;
        return this.history.list[historyLength-1];
    }
    else{
        this.history.index = index + forwardSteps;
        return this.history.list[index + forwardSteps];
    } 

};

// With stack *****************

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
   this.homepage = homepage;
   this.stack = [homepage];
   this.index = 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    for(let i=this.stack.length-1; i > this.index; i--){
        this.stack.pop()
    }
    this.stack.push(url);
    this.index++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if(steps > this.index) 
        steps = this.index;
    this.index = this.index-steps;
    return this.stack[this.index]      
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {  
    if(steps > this.stack.length-1 - this.index){
        steps = this.stack.length-1 - this.index;
    }
    this.index = this.index+steps;
    return this.stack[this.index]
};
    



/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */