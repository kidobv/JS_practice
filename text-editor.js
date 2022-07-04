//Hackerrank text editor practice

// Implement a simple text editor. The editor initially contains an empty string S, . Perform Q  operations of the following 4 types:

// 1.append (W) - Append string W to the end of S.
// 2.delete(k) - Delete the last k characters of S.
// 3.print(k) - Print the kth character of S.
// 4.undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.

const textEditor = function (operations) {

	let prevState = []; //a stack
	let S = ""

	// append (W) - Append string W to the end of S.
	const appendS = (w) => {
		prevState.unshift(S)
		S = S.concat(w)
	}

	// delete(k) - Delete the last k characters of S.
	const deleteS = (k) => {
		prevState.unshift(S)
		S = S.substring(0, S.length - k)
	}

	// print(k) - Print the kth character of S.
	const printS = function(k) {
		console.log(S.charAt(k-1))
	}

	// undo() - Undo the last (not previously undone) operation
	function undoS() {
		S = prevState.shift();
	}

	operationsArr = operations.split(/\r?\n/)

	for(let i=1; i<operationsArr.length; i++){
		let op = operationsArr[i];
		let opArr = op.split(' ');
		let command = Number(opArr[0]);
		switch (command){
			case 1: 
				appendS(opArr[1]);
			break;
				
			case 2:
				deleteS(opArr[1]);
			break;

			case 3:
				printS(opArr[1]);
			break;

			case 4:
				undoS();
			break;

		}
	}
}

const opInput = 
`8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`

const opInput2 = 
`7
1 fg
3 6
2 5
4
3 7
4
3 4`

textEditor(opInput);
//textEditor(opInput2);