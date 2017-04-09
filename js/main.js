// Creating an array of objects for all Zodiac signs with text, date range, and image.

var allZodiac = [
	{
		zodiac: "aquarius",
		text: "Things get adventurous this week. You know how you always want to order that other dish at Thai but then you’re like “what if I don’t like it and then I’ve wasted all this money when I could have just ordered Pad Thai which I already know that I like”? Well this week Aquarius, you take the plunge. Also, get a more interesting life. That is grim.",
		compatibility: "Leo, Sagittarius",
		dateRange: "January 20 - February 18",
		image: "images/aquarius.png"
	},
	{
		zodiac: "pisces",
		text: "You will encounter frustration this week when you come across a Capricorn trying to research an animal that I made up. Just remember: snitches get stitches.",
		compatibility: "Virgo, Taurus",
		dateRange: "February 19 - March 20",
		image: "images/pisces.png"
	},
	{
		zodiac: "aries",
		text: "The rising moon on the tipped axis of Uranus says you were once born, and at some point in the next few days or weeks you will meet someone else who was once born. You will exchange words that may or may not be interesting. Also – Uranus. Ha.",
		compatibility: "Libra, Leo",
		dateRange: "March 21 - April 19",
		image: "images/aries.png"
	},
	{
		zodiac: "taurus",
		text: "You will find your soulmate this week. Look to your left. You will be passionately kissing that person by the end of the year. If there’s nobody sitting there…Well, sucks to be you I guess. #sadface",
		compatibility: "Scorpio, Cancer",
		dateRange: "April 20 - May 20",
		image: "images/taurus.png"
	},
	{
		zodiac: "gemini",
		text: "Geminis are known for their incredible wit, astounding intelligence and breathtaking beauty. Just keep being awesome, Hot Stuff.",
		compatibility: "Sagittarius, Aquarius",
		dateRange: "May 21 - June 20",
		image: "images/gemini.png"
	},
	{
		zodiac: "cancer",
		text: "You are very astute. You figured out that I’m a Gemini. Unfortunately, those detective skills will fail you this week when – actually, you figure it out Sherlock. Stop being so cocky.",
		compatibility: "Capricorn, Taurus",
		dateRange: "June 21 - July 22",
		image: "images/cancer.png"
	},
	{
		zodiac: "leo",
		text: "Remember how that movie Inception ended really ambiguously and the director was all “I want you to decide if the thingy stops spinning” and we were all “um no you’re the director it’s your job to make a decision”? I totally get why Christopher Nolan did that now. It takes away heaps of the work and makes you seem really insightful. Watch, I’m going to do it now to Virgo…",
		compatibility: "Aquarius, Gemini",
		dateRange: "July 23 - August 22",
		image: "images/leo.png"
	},
	{
		zodiac: "virgo",
		text: "Your week will be determined by how you interpret this spinning top. There’s no right or wrong answer. Don’t get it wrong.",
		compatibility: "Pisces, Cancer",
		dateRange: "August 23 – September 22",
		image: "images/virgo.png"
	},
	{
		zodiac: "libra",
		text: "This week, the stars indicate that you need to stop being so jealous all the time. Don’t deny it – I know you’re peeved about that inside joke me and Leo just had about Virgo. Oh and by the way, I forgot to give Leo a prediction. Just tell them that they’ll have to make a big decision this week or some crap. Thanks man.",
		compatibility: "Aries, Sagittarius",
		dateRange: "September 23 - October 22",
		image: "images/libra.png"
	},
	{
		zodiac: "scorpio",
		text: "The equilibrium of Saturn’s seventh moon alignment with Pluto puts the sun in your water axis this week. That could go either way, so try not to do too much speaking or walking or living.",
		compatibility: "Taurus, Cancer",
		dateRange: "October 23 - November 21",
		image: "images/scorpio.png"
	},
	{
		zodiac: "sagittarius",
		text: "This week, everything will become just as clear as it is unclear. Because when a blind man holds the key to life’s acorn tree, purple monkey dishwasher.",
		compatibility: "Gemini, Aries",
		dateRange: "November 22 - December 21",
		image: "images/sagittarius.png"
	},
	{
		zodiac: "capricorn",
		text: "It’s imperative that you spend the next 7 days learning everything there is to know about the migration habits of the North African YellowStone Frog. It has to do with you winning a lot of money, so just do it.",
		compatibility: "Taurus, Cancer",
		dateRange: "December 22 - January 19",
		image: "images/capricorn.png"
	}
];

// this function is the logic for what shows up in the screen when user type and submit zodiac sign

function getZodiac() {

	// gets user input value in input box
	var userInput = document.getElementById("input").value.toLowerCase(); 

	// the for loop will iterate through each zodiac sign from the array object until it finds the correct one
	for (i = 0; i < allZodiac.length; i++) {
		if (userInput == allZodiac[i].zodiac) {
			document.getElementById("zodiac").innerHTML = allZodiac[i].zodiac;
			document.getElementById("dateRange").innerHTML = allZodiac[i].dateRange;
			document.getElementById("image").src = allZodiac[i].image;
			document.getElementById("text").innerHTML = allZodiac[i].text;
			document.getElementsByTagName("html").innerHTML
			
			// document.getElementById("yes").innerHTML = "<button>Yes</button>"
			// document.getElementById("no").innerHTML = "<button>No</button>";
			
			// var yes = document.getElementById("yes").value;
			
			// if (userInput == yes) {
			// 	document.getElementById("compatibilityAnswer").innerHTML = allZodiac[i].compatibility;
			// } else {
			// 	document.getElementById("compatibilityAnswer").innerHTML = "Good luck!";
			// }
			return
		} else {
			// if user submits a zodiac sign that is not in the array object this will show up as a result
			document.getElementById("zodiac").innerHTML = "Undefined";
			document.getElementById("image").innerHTML = "";
			document.getElementById("dateRange").innerHTML = "";
			document.getElementById("text").innerHTML = "Are you sure you're from this planet?";
		}
	}
};










