drawPyramid = (n) => {
    let py = [];
    let line = '*'.repeat(n*2 - 1)
    let lineNum = n;
    while (lineNum > 0){
        py.unshift(line)
        lineNum--
        line = ' '.repeat(n-lineNum) + line.slice(n-lineNum,line.length-1)        
    }
    return py;
}
console.log(drawPyramid(10))

//Print out with For

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);