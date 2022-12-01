
// endpoint = https://jsonmock.hackerrank.com/api/countries?name=Uganda

async function fetchCapital (country){
 const url = new URL("https://jsonmock.hackerrank.com/api/countries")
 //url.searchParams.set("name", country)
 let page = 1;
 let totalPages = 1; 

while(page <= totalPages){
 url.searchParams.set("page", page)
 const response = await fetch(url);
 const result = await response.json()
 totalPages = result.total_pages;
 const countries = result.data;
	for (let country of countries){
	 	if (country.name === "Puerto Rico"){
	 		console.log(page-1)
	 		return country.capital;
	 	}
 	}
 	page+=1;
}
console.log(page-1)
 return -1;
}

//fetchCapital("Puerto Rico").then(data => console.log(data))


// Given a treshold value the goal is to use the API to get the list of most active authors. 
// Specifically, the list of usernames of users with 
// submission count strictly greater than the given treshold. 
// The list of usernames must be returned in the order users appear in the results
// endpoint: https://jsonmock.hackerrank.com/api/article_users

async function fetchAuthors (treshold){
 const url = new URL("https://jsonmock.hackerrank.com/api/article_users/search")
 let page = 1;
 let totalPages = 1; 
 let res = [];

while(page <= totalPages){
 url.searchParams.set("page", page)
 const response = await fetch(url);
 const result = await response.json()
 totalPages = result.total_pages;
 const authors = result.data;
	for (let author of authors){
	 	if (author.submission_count > treshold){
	 		res.push(author.username);
	 	}
 	}
 	page+=1;
}
 return res;
}

fetchAuthors(250).then(data => console.log(data))