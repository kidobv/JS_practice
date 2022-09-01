
const textEditor = function (input) {

	let prevState = []; //a stack
	let S = "";
	let clipboard = "";

	//  INSERT <text> - add <text> to the end of the current text, where <text> consists of at most 20 English letters,
	const insert = (text) => {
		if(text.length <= 20){
			prevState.unshift(S)
			S = S.concat(text)
		}		
	}

	// DELETE - erase the last character of the current text (if the current text is empty, does nothing),
	const deleteS = () => {
		if(S){
			prevState.unshift(S)
			S = S.substring(0, S.length - 1)
		}		
	}

	// COPY <index> - copy the substring of the current text starting from <index> and spanning until the end (if <index> is out of bounds copies an empty string)
	const copy = (k) => {
		if(k < S.length && k >= 0)
			clipboard = S.substring(k)
		else
			clipboard = "";
	}
	// PASTE - add the last copied text to the end of the current text (if the last copied text is empty, does nothing),
	const paste = () => {
		if(clipboard){
			prevState.unshift(S)
			insert(clipboard)
		}						
	}

	// undo the last successful INSERT, DELETE or PASTE operation (if there is nothing to undo, does nothing).
	const undo = () => {
		if(prevState.length > 0)
			S = prevState.shift();
	}

	for(let i=0; i<input.length; i++){
		let op = input[i];
		let opArr = op.split(' ');
		let command = opArr[0];
		switch (command){
			case "INSERT": 
				insert(opArr[1]);
			break;
				
			case "DELETE":
				deleteS(opArr[1]);
			break;

			case "COPY":
				copy(opArr[1]);
			break;

			case "PASTE":
				paste();
			break;

			case "UNDO":
				undo();
			break;

		}
	}
	return S;
}

const opInput = ["INSERT Code", "INSERT Signal", "DELETE", "UNDO"];
const opInput2 = ["INSERT Da", "COPY 0", "UNDO", "PASTE", "PASTE", "COPY 2", "PASTE", "PASTE", "DELETE", "INSERT aaam"];


console.log(textEditor(opInput));
console.log(textEditor(opInput2));