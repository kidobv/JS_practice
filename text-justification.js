
// Important things to know
// there's two types of justification
// left justification for the last line or when only one word fits in the line
// when middle justified you prioritize the left spaces first 

let lineMaxWidth = 15;
words =["What", "must", "be", "acknowledgment", "shall", "be"]

let fullJustify = (lineMaxWidth, words) => {
	// we need two pointers to point at a word and the following word
	let i = 0;
	let result = [];
	let n = words.length;

	while (i < n){
		let j = i + 1;
		let lineLength = words[i].length;

		while (j < n && (lineLength + words[j].length + (j-i-1) < lineMaxWidth) ){
			lineLength += words[j].length;
			j++;
		}
		let remainingSpaces = lineMaxWidth - lineLength;
		let numberOfWords = j-i;
		if(numberOfWords == 1 || j >= n)
			result.push(leftJustify(words, remainingSpaces, i, j));
		else 
			result.push(middleJustify(words, remainingSpaces, i, j));
		//move to the next line and recet i to the un justified words 
		i = j;
	}
	return result;
}

const middleJustify = (words, remainingSpaces, i, j) => {
	const minSpaces = j - i -1;
	const spacesBetweenWords = remainingSpaces/minSpaces;
	let extraSpaces = remainingSpaces%minSpaces;
	let result = words[i]
	for (let k = i+1; k < j; k++){
		let spacesToApply = spacesBetweenWords + (extraSpaces-- > 0 ? 1:0)
		result += " ".repeat(spacesToApply)+words[k]; 
	}
	return result;
}

const leftJustify = (words, remainingSpaces, i, j) => {
	const spacesBetweenWords = j - i -1;
	const spacesOnRight = remainingSpaces - spacesBetweenWords;
	let result = words[i]
	for (let k = i+1; k < j; k++){
		result += ` ${words[k]}`;
	}
	result += " ".repeat(spacesOnRight);
	return result;
}

console.log(fullJustify(lineMaxWidth, words))