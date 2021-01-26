sortStack = (s) => {
    // If stack is not empty
    if (s.length > 0) {
        // Remove the top item
        let x = s.pop();

        // Sort remaining stack
        sortStack(s);
        
        // Push the top item back in sorted stack
        sortedInsert(s, x);
    }
    return s;
}

// Recursive Method to insert an item x in sorted way
sortedInsert = (s, x) => {
    // Base case: Either stack is empty or newly
    if (!s.length > 0 || x > s[s.length-1]) {
        s.push(x);
        return;
    }
    // If top is greater, remove the top item and recur
    let temp = s.pop();
    sortedInsert(s, x);

    // Put back the top item removed earlier
    s.push(temp);
}


console.log(sortStack([2,3,8,6,4]));