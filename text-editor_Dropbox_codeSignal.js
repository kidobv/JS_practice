// Dropbox text editor CodeSignal
// https://leetcode.com/discuss/interview-question/1596350/drop-box-oa-text-editor

const textEditor = function (input) {

	let undoStack = []; //a stack
	let redoStack = [];
	
	let opMap = new Map();
	let cursor = 0;
	let result = [];

	const getStateResult = () =>{
		if(result[result.length-1]){
			return result[result.length-1];
		}
		return "";
	}

	const getState = () =>{
		return {
			"opMap": new Map(opMap),
			"cursor": cursor		
		}
	}

	const saveState = (stack) => {
		s = {
			"opMap": new Map(opMap),
			"cursor": cursor,
			"result": getStateResult() 			
		}
		console.log("save state",s)
		stack.unshift(s)
	}

// Shallow copies
	// const restoreState = (state) => {
	// 	opMap = new Map(state["opMap"]);
	// 	cursor = state.cursor;
	// 	result = [...state["result"]];
	// }

//Same object reference
	const restoreState = (state) => {
		console.log("restore", state)
		opMap = state["opMap"];
		cursor = state.cursor;
		result.push(state["result"]);
	}

	//Level 1

	//MOVE should move the cursor to the specified position. The cursor should be positioned between document characters, and are enumerated sequentially starting from 0. If the specified position is out of bounds, then move the cursor to the nearest available position.
	const move = (n) => {
		console.log("move")
		let state = getStateResult();
		//bound protection
		if(n > state.length){
			cursor = state.length;
		}
		else if(n < 0){
			cursor = 0;
		}
		else{
			cursor = n;
		}			
		// clear select
		opMap.set("selected", undefined)
		result.push(state);	
		console.log("result",result)
	}

	//  APPEND should append the inputted string text to the document starting from the current position of the cursor. After the operation, the cursor should be at the end of the added string.
	const append = (text) => {
		console.log("append")
		saveState(undoStack);

		if(result.length == 0){	
			result.push(text);
			cursor = text.length;
		}		
		else {
			let state = getStateResult();
			//check for selected text
			if(opMap.get("selected")){
				let bounds = opMap.get("selected");
				let l = bounds[0];
				let r = bounds[1];
				let tail = state.slice(0, l);
				let head = state.slice(r);
				state = tail + text + head;				
				cursor = `${tail}${text}`.length;
				// clear select
				opMap.set("selected", undefined)
			}
			else{
				console.log("cursor",cursor)
				let tail = state.slice(0, cursor);
				let head = state.slice(cursor);
				state = tail + text + head;				
				cursor = `${tail}${text}`.length;
			}
			result.push(state);					
		}
		console.log("result",result)	
	}

	// DELETE should remove the character right after the cursor, if any.
	const deleteS = () => {
		console.log("delete")
		saveState(undoStack);
		let state = getStateResult();		
			//check for selected text Hello
			if(opMap.get("selected")){
				let bounds = opMap.get("selected");
				l = bounds[0];
				r = bounds[1];
				let tail = state.slice(0, l);
				let head = state.slice(r);
				state = tail+head;
				// clear select
				opMap.set("selected", undefined)
				//update cursor
				cursor = l;
			}
			else if(cursor < state.length){	
				let tail = state.slice(0, cursor);
				let head = state.slice(cursor+1);
				state = tail+head;
				//abc				 
				cursor = tail.length;
			}
		result.push(state);	
		console.log("result",result)
	}
	//Level 2

	// SELECT should select the text between the left and right cursor positions. Selection borders should be returned to the bounds of the document. 
	// If the selection is empty, it becomes a cursor position. Any modification operation replace the selected text and places the cursor at the end of the modified segment.
	const select = (l,r) => {
		console.log("select")
		let state = getStateResult();
		if (l < 0 ) l = 0;
		if (r > state.length) r = state.length;		
		opMap.set("selected", [l,r])
		result.push(state);	
		console.log("result",result)
	}

	// COPY should copy the selected text to the clipboard, if there is an active non-empty selection. The current selected text (if any) remains selected after the operation.
	const copy = () => {
		let state = getStateResult();
		if(opMap.get("selected")){
			let bounds = opMap.get("selected");
			let toClipboard = state.substring(bounds[0], bounds[1])
			opMap.set("clipboard", toClipboard);
		}
		result.push(state);
	}

	// PASTE should append the text from the clipboard. The current selected text (if any) remains selected after the operation.
	const paste = () => {
		let state = getStateResult();
		if(opMap.get("clipboard")){
			append(opMap.get("clipboard"))
		}	
		else{
			result.push(state);
		}				
	}

	//Level 3

	// UNDO should restore the document to the state before the previous modification or REDO operation. The selection and cursor position should be also restored.
	const undo = () => {	
		let state = getStateResult();
		if(undoStack.length > 0){
			let stateObj = undoStack.shift();
			//save into redo stack
			saveState(redoStack)
			restoreState(stateObj);
		}	
		else{
			result.push(state);
		}		
	}

	// REDO can only be performed if the document has not been modified since the last UNDO operation. 
	// REDO should restore the state before the previous UNDO operation, including the selection and cursor position. Multiple UNDO and REDO operations can be performed in a row.
	const redo = () => {
		let state = getStateResult();
		if(redoStack.length > 0){
			let stateObj = redoStack.shift();
			restoreState(stateObj);
		}
		else{
			result.push(state);
		}			
	}

	//Level 4

	// CREATE <name> should create a blank text document name. If such a file already exists, ignore the operation and return empty string. Modification history is stored individually for each document.
	const create = (name) => {
		if(redoStack.length > 0){
			let stateObj = redoStack.shift();
			restoreState(stateObj);
		}			
	}


	// Main

	for(let i=0; i<input.length; i++){
		let op = input[i];
		let command = op[0];
		switch (command){
			case "APPEND": 
				append(op[1]);
			break;

			case "MOVE":
				move(Number(op[1]));
			break;
				
			case "DELETE":
				deleteS();
			break;			

			case "SELECT":
				select(Number(op[1]), Number(op[2]));
			break;

			case "COPY":
				copy();
			break;

			case "PASTE":
				paste();
			break;

			case "UNDO":
				undo();
			break;

			case "REDO":
				redo();
			break;

		}
	}
	return result;
}

appendTest = [
    ["APPEND", "Hey"],
    ["APPEND", " there"],
    ["APPEND", "!"]           
]

moveTest = [
    ["APPEND", "Hey you"],           
    ["MOVE", "3"],                   
    ["APPEND", ","]                  
]

deleteTest = [
    ["APPEND", "Hello! world!"],   
    ["MOVE", "5"],                  
    ["DELETE"],                      
    ["APPEND", ","]                 
]

deleteTest2 = [
    ["APPEND", "!"],                 
    ["DELETE"],                       
    ["MOVE", "0"],                   
    ["DELETE"],                       
    ["DELETE"]                       
]

selectTest = [
    ["APPEND", "Hello cruel world!"],  
    ["SELECT", "5", "11"],             
    ["APPEND", ","]                    
]

selectTest2 = [
    ["APPEND", "Hello"],                     
    ["SELECT", "2", "5"],              
    ["APPEND", "y there"]          
]

selectTest3 = [
    ["APPEND", "Hello"],                     
    ["SELECT", "2", "5"],              
    ["DELETE"]          
]

copyPasteTest = [
    ["APPEND", "Hello, world!"],       
    ["SELECT", "5", "12"],             
    ["COPY"],                           
    ["MOVE", "12"],                    
    ["PASTE"],                         
    ["PASTE"]                          
]

undoTest = [
    ["APPEND", "Hello, world!"],       
    ["SELECT", "7", "12"],             
    ["DELETE"],                        
    ["UNDO"],                          
    ["APPEND", "you"]                  
]

redoTest = [
    ["APPEND", "Hello, world!"],       
    ["SELECT", "7", "12"],             
    ["DELETE"],                        
    ["MOVE", "6"],                    
    ["UNDO"],                          
    ["UNDO"],                          
    ["REDO"],                          
    ["REDO"]                           
]

console.log(textEditor(redoTest));