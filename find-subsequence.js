function isValidSubsequence(array, sequence) {
    //compare each value of the array with the items 
    //in the sequence and move along the sequence as you find a match
    let seqP = 0;
    for (const value of array) {
        if (seqP === sequence.length) break;
        if (sequence[seqP] === value) {
            seqP++;
        }
    }
    return seqP === sequence.length;
}

