//start: "AACCGGTT"
// end: "AAACGGTA"
// bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

//Find the min number of mutations our gene "start" needs to make to reach the mutation "end". Tha bank contains the valid mutations the gene can do

const minMutation = function (start, end, bank) {
    //gene characters are "A","C","G","T"

    //check if end is in the bank
    if (!bank.includes(end)) return -1;

    const visited = new Set();
    let queue = [];
    queue.push(start);
    visited.add(start);

    let result = 1;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {   //AAAACCCA  AAACCCCC
            let currGene = queue.shift(); //AAAACCCA  => AAACCCCA //AAACCCCC => AACCCCCC
            //check if we reached the final mutation
            if (checkIfOneMutation(currGene, end)) return result;
            /////
            for (let mutation of bank) {
                if (!visited.has(mutation) && checkIfOneMutation(currGene, mutation)) {
                    queue.push(mutation);
                    visited.add(mutation);
                }
            }
        }
        result++;
    }
    return -1;
};

const checkIfOneMutation = (gene, validMutation) => {
    let count = 0;
    for (let i = 0; i < gene.length; i++) {
        if (gene[i] !== validMutation[i]) {
            count++;
            if (count > 1) return false;
        }
    }
    return true;
}