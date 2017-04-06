var allZodiac = [
	{
		zodiac: "aquarius",
		strengths: "Progressive, original, independent, humanitarian",
		weaknesses: "Runs from emotional expression, temperamental, uncompromising, aloof",
		aquariusLikes: "Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener",
		element: "Air",
		quality: "Fixed",
		color: "Light-Blue, Silver",
		day: "Saturday",
		ruler: "Uranus, Saturn",
		compatibility: "Leo, Sagittarius",
		luckyNumbers: "4, 7, 11, 22, 29",
		dateRange: "January 20 - February 18"
	},
	{
		zodiac: "pisces",
		element: "Water",
		strengths: "Compassionate, artistic, intuitive, gentle, wise, musical",
		weaknesses: "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
		piscesLikes: "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes",
		quality: "Mutable",
		color: "Mauve, Lilac, Purple, Violet, Sea green",
		day: "Thursday",
		ruler: "Neptune, Jupiter",
		compatibility: "Virgo, Taurus",
		luckyNumbers: "3, 9, 12, 15, 18, 24",
		dateRange: "February 19 - March 20"
	}
];

function getZodiac() {

	var userInput = document.getElementById("input").value.toLowerCase();
	
	for (i = 0; i < allZodiac.length; i++) {
		if (userInput == allZodiac[i].zodiac) {
			document.getElementById("showText").innerHTML = allZodiac[i].element;
		} else if () {

		}
	}
};