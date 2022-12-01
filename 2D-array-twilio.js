// You have given records in 2D array format, where each record represents borrower,
// lender and amount (given to borrower by lender). 
// Return the number of people who have maximum debt (negative balance termed as debt. 
// For e.g. -10 is more debt than -1) 
// If no people have maximum debt return empty array.

// Input:
// [borrower, lender, amount]
// [
// 	["Alex", "Bob", "5"], Alex -5 
// 	["Alex", "Ceasy", "12"], Alex -12
// 	["Ceasy", "Bob", "9"], Ceasy -9
// 	["David", "Alex" "8",] David -8
	
// ]
// Output:

// ["Alex", "Ceasy"]


let records = [
	["Alex", "Bob", "5"],
	["Alex", "Ceasy", "12"], 
	["Ceasy", "Bob", "9"],  
	["David", "Alex", "8",]  	//Alex -17+8 = -9, Bob 5+9= 14, Ceasy 12-9 =3, David -8
]								//Alex 17-8 = 9, Bob -5-9= -14, Ceasy -12+9 =-3, David 8

function getMaxDebt(records){
	const balances = new Map();
	for (let record of records){
		let debt = parseInt(record[2]);
		let borrower = record[0];
		let lender = record[1];
		if(balances.get(borrower)){
			balances.set(borrower, balances.get(borrower) - debt);
		} 
		else{
			balances.set(borrower, 0 - debt);
		}
		if(balances.get(lender)){
			balances.set(lender, balances.get(lender) + debt);
		} 
		else{
			balances.set(lender, debt);
		}
	}
	const sortedMap = new Map([...balances.entries()].sort((a,b) => b-a))
	return sortedMap
}

console.log(getMaxDebt(records))