// Create a list of objects which contains, 3 properties quote, source, citation which we will than place in an array with the rest of the objects and chose one randomly
var markTwain = {
		quote: "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.",
		source: 'Mark Twain',
		citation: 'Blah'
}

var robertKennedy = {
	quote: "Only those who dare to fail greatly can ever achieve greatly.",
	source: 'Robert F. Kennedy',
	citation: 'blah'
}

var proverbs1728 = {
	quote: "Even fools seem smart when they are quite.",
	source: ' Proverbs 17:28',
	citation: 'blah'
}

var unknown = {
	quote: "The best thing about the future is it comes one day at a time.",
	source: 'unknown',
	citation: 'blah'
}

var janeGoodall = {
	quote: " If you really want something, and really work hard, & take advantage of opportunities, & never give up, you will find a way.",
	source: 'Jane Goodall',
	citation: 'blah'

}
 
 //Create Array named quotes which will hold all our objects
var quotes = [
	markTwain, 
	robertKennedy, 
	proverbs1728, 
	unknown, 
	janeGoodall

	];


//Create a function called getRandomQuote that selects random quote object from the quotes array and returns the random quote object selected
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	var quoteSelected = quotes[randomQuote];
	return quoteSelected;
}

//Create a function called PrintQuote that calls getRandomQuote and stores it in a variable
function printQuote(){
	var selectedQuote = getRandomQuote();
	var message =  "";

			message += '<p class = "quote">' + selectedQuote.quote + '</p>'
			
			message += '<p class = "source">' + selectedQuote.source + '</p>'

			message += '<p class = "source">' + selectedQuote.citation + '</p>'
			
			document.getElementById('quote-box').innerHTML = message;

}


printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote);






























