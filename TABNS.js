

function name_search()
{ 
  
// Getting our variables

// Do we need to mute anybody from this search?
var mute = document.querySelector(".mute").value  

// Do we need to add keywords to weigh our search a certain direction?
var keywords = document.querySelector(".keywrds").value  

// Split up those keywords 
var keyArray = keywords.split(" ")

// Assemble them into an OR string
var optWords = keyArray.join(" | ")

// Properly format that optional keyword string into something Google-able
var optString = " "+"("+""+optWords+""+")"+" "
optString = encodeURI(optString)

// Get the first and last name variables
var firstName = document.querySelector(".firstName").value
var lastName = document.querySelector(".lastName").value

// Exclude is the part that you can edit - you can edit everything between the quote marks. Notice that everything in the string is excluded. 
// Note that some things are excluded by domain (Linkedin.com) and some things are excluded by a string in the URL (-inurl:amazon)
// The -inurl exclusion works to exclude big companies that have several different domains (like Amazon or eBay, which have different domains for different regions.)
// Remember that Google has a query limit of 32 words, so think strategically when you add to this line.

//SUPER IMPORTANT: there needs to be a SPACE between the quote and the first hyphen of this string. 
// If there isn't your search results will look REALLY weird.

var exclude= " -inurl:amazon -site:abebooks.com -inurl:ebay -inurl:pinterest -site:linkedin.com -site:facebook.com -inurl:overstock -inurl:walmart -inurl:flipkart -site:movieposters.com"

// Formatting for the URL 
exclude = encodeURI(exclude)

  
// setting up URL components
var baseGS = "https://www.google.com/search?q=";

// Putting the query string together
var g2Query = "-"+"\""+firstName+" "+lastName+"\""+" "+"\""+lastName+" "+firstName+"\""

// Formatting the query string 
g2Query = encodeURI(g2Query)

  
// Putting it all together into a query 
var Google2Search= baseGS+g2Query+exclude


// Did we specify any keywords? If so, add them to the query. 
if(keywords){
  
  Google2Search = Google2Search+optString
}
  

// Did we specify anyone to mute? If so, add them to the query. 
if(mute){
  
  mute = " "+"-"+"\""+mute+" "+lastName+"\""
  mute = encodeURI(mute)
  console.log(mute)
  Google2Search = Google2Search+mute
  
  
}  
  
  // Open a new tab with the completed search URL 
  window.open(Google2Search)

 
  
}
