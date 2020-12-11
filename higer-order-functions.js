weather = [
			{date:"monday",temp:60},
			{date:"monday",temp:65},
			{date:"monday",temp:63},
			{date:"monday",temp:68},
			{date:"monday"},
			{date:"tuesday",temp:80},
			{date:"tuesday",temp:85},
			{date:"thursday",temp:55},
			{date:"thursday",temp:59},
			{date:"wednesday",temp:85},
			{date:"friday",temp:70},
			{date:"friday",temp:77}
		];

//Given the array above use filter Map and Reduce functions to find the following:

//1) the avg temperature of the week  -- Tip: use one of the higher order functions to get a straight result/number
//2) the avg temperature on Monday    -- Tip: use a combination of the higher order functions to get a straight result/number



////// ANSWERS /////////////////////////////////

//1)
getWeekAvg = (weatherArray) =>{
	return weatherArray.reduce((accumulator,currentValue,idx) => {
	console.log(`index: ${idx}`);
	console.log(`accumulator: ${accumulator}`);
	console.log(currentValue);  
	return currentValue.temp ? accumulator + currentValue.temp : accumulator;
},0)/weatherArray.length;};

///////////////////

//2)
getMondayAvg = (weatherArray) =>{
  let mondayArrayLength = 0;
	return weatherArray.filter(item => item.date == "monday" && item.temp)
                     .map(item => item.temp)
                     .reduce((accumulator,currentValue,idx, srcArray) => {
                       	console.log(`index: ${idx}`);
                       	console.log(`source Array: ${srcArray}`);
                      	console.log(`accumulator: ${accumulator}`);
                      	console.log(`currentValue: ${currentValue}`);
                      	console.log(``);
                        mondayArrayLength = srcArray.length
                       return accumulator += currentValue;
                     })/mondayArrayLength; 
};

//We can use toFixed() to round to a specific decimal digits amount
console.log(`average week temp: ${getWeekAvg(weather).toFixed(2)}`)
console.log(``)
console.log(`average Monday temp: ${getMondayAvg(weather)}`)