
///// Exercise #1
//Given a Date with format “January 10, 2007” output the date in the format “01-10” (for all possible dates)

var dateString = "December 9, 2007";
//not very reliable to Date.Parse() dateString because the interpretation depends on the Browser
//const dateNum1 = new Date("January 10, 2007");  // it's better to use arguments or timestamp
dateString = dateString.replace(",","");
console.log(dateString); //month day year
let dateArray = dateString.split(" ");
console.log(dateArray); //[month,day,year]
const months = {  // Map to get the month index
  'January' : 0,
  'February' : 1,
  'March' : 2,
  'April' : 3,
  'May' : 4,
  'June' : 5,
  'July' : 6,
  'August' : 7,
  'September' : 8,
  'October' : 9,
  'November' : 10,
  'December' : 11
}
let monthIndex = months[dateArray[0]];
let year = dateArray[2]; //string datatype
let dayIndex = dateArray[1]; //string datatype
//now we can create our Date using arguments YYYY, M (0-11), D (1-31)
const dateNum1 = new Date (year, monthIndex, dayIndex)
console.log(dateNum1);
//Convert to format MM-DD
function convertDate1(date){
  let month = dateNum1.getMonth()+1;
  if(month <= 9){
    month = `0${month}`
  }
  let day = dateNum1.getDate();
  if(day <= 9){
    day = `0${day}`
  }
  return `${month}-${day}`;
}
console.log(convertDate1(dateNum1));

///// Exercise #2

//Convert a date in the form of (1-1-19) to a string (Jan 1st, 2019)

// From MM-DD-YY to MMM, Dnth, YYYY
const dateString2 = "1-1-19"
const dateNum2 = new Date(dateString2) // remember is better to use arguments than dateString...
console.log(dateNum2);

function parseDate2(date){  
  const monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let d = date.getDate();
  //now we add the nth term
  let nthDate = d+getNth(d);
  return `${monthname[date.getMonth()]} ${nthDate}, ${date.getFullYear()}`;
}
console.log(parseDate2(dateNum2))

//d is the date number from 1-31
function getNth(d){   
  if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
}