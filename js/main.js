var allZodiac = [
	{
		zodiac: "aquarius",
		strengths: "Progressive, original, independent, humanitarian",
		weaknesses: "Runs from emotional expression, temperamental, uncompromising, aloof",
		likes: "Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener",
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
		likes: "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes",
		quality: "Mutable",
		color: "Mauve, Lilac, Purple, Violet, Sea green",
		day: "Thursday",
		ruler: "Neptune, Jupiter",
		compatibility: "Virgo, Taurus",
		luckyNumbers: "3, 9, 12, 15, 18, 24",
		dateRange: "February 19 - March 20"
	},
	{
		zodiac: "aries",
		strengths: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
		weaknesses: "Impatient, moody, short-tempered, impulsive, aggressive",
		likes: "Comfortable clothes, taking on leadership roles, physical challenges, individual sports",
		element: "Fire",
		quality: "Cardinal",
		color: "Red",
		day: "Tuesday",
		ruler: "Mars",
		compatibility: "Libra, Leo",
		luckyNumbers: "1, 8, 17",
		dateRange: "March 21 - April 19"
	},
	{
		zodiac: "taurus",
		strengths: "Reliable, patient, practical, devoted, responsible, stable",
		weaknesses: "Stubborn, possessive, uncompromising",
		likes: "Gardening, cooking, music, romance, high quality clothes, working with hands",
		element: "Earth",
		quality: "Fixed",
		color: "Green, Pink",
		day: "Friday, Monday",
		ruler: "Venus",
		compatibility: "Scorpio, Cancer",
		luckyNumbers: "2, 6, 9, 12, 24",
		dateRange: "April 20 - May 20"
		
	},
	{
		zodiac: "gemini",
		strengths: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
		weaknesses: "Nervous, inconsistent, indecisive",
		likes: "Music, books, magazines, chats with nearly anyone, short trips around the town",
		element: "Air",
		quality: "Mutable",
		color: "Light-Green, Yellow",
		day: "Wednesday",
		ruler: "Mercury",
		compatibility: "Sagittarius, Aquarius",
		luckyNumbers: "5, 7, 14, 23",
		dateRange: "May 21 - June 20",
		
	},
	{
		zodiac: "cancer",
		strengths: "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
		weaknesses: "Moody, pessimistic, suspicious, manipulative, insecure",
		likes: "Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends",
		element: "Water",
		quality: "Cardinal",
		color: "White",
		day: "Monday, Thursday",
		ruler: "Moon",
		compatibility: "Capricorn, Taurus",
		luckyNumbers: "2, 3, 15, 20",
		dateRange: "June 21 - July 22"
	},
	{
		zodiac: "leo",
		strengths: "Creative, passionate, generous, warm-hearted, cheerful, humorous",
		weaknesses: "Arrogant, stubborn, self-centered, lazy, inflexible",
		likes: "Theater, taking holidays, being admired, expensive things, bright colors, fun with friends",
		element: "Fire",
		quality: "Fixed",
		color: "Gold, Yellow, Orange",
		day: "Sunday",
		ruler: "Sun",
		compatibility: "Aquarius, Gemini",
		luckyNumbers: "1, 3, 10, 19",
		dateRange: "July 23 - August 22"
	},
	{
		zodiac: "virgo",
		strengths: "Loyal, analytical, kind, hardworking, practical",
		weaknesses: "Shyness, worry, overly critical of self and others, all work and no play",
		likes: "Animals, healthy food, books, nature, cleanliness",
		element: "Earth",
		quality: "Mutable",
		color: "Grey, Beige, Pale-Yellow",
		day: "Wednesday",
		ruler: "Mercury",
		compatibility: "Pisces, Cancer",
		luckyNumbers: "5, 14, 15, 23, 32",
		dateRange: "August 23 – September 22"
	},
	{
		zodiac: "libra",
		strengths: "Cooperative,diplomatic, gracious, fair-minded, social",
		weaknesses: "Indecisive, avoids confrontations, will carry a grudge, self-pity",
		likes: "Harmony, gentleness, sharing with others, the outdoors",
		element: "Air",
		quality: "Cardinal",
		color: "Pink, Green",
		day: "Friday",
		ruler: "Venus",
		compatibility: "Aries, Sagittarius",
		luckyNumbers: "4, 6, 13, 15, 24",
		dateRange: "September 23 - October 22"
	},
	{
		zodiac: "scorpio",
		strengths: "Resourceful, brave, passionate, stubborn, a true friend",
		weaknesses: "Distrusting, jealous, secretive, violent",
		likes: "Truth, facts, being right, longtime friends, teasing, a grand passion",
		element: "Water",
		quality: "Fixed",
		color: "Scarlet, Red, Rust",
		day: "Tuesday",
		ruler: "Pluto, Mars",
		compatibility: "Taurus, Cancer",
		luckyNumbers: "8, 11, 18, 22",
		dateRange: "October 23 - November 21"
	},
	{
		zodiac: "sagittarius",
		strengths: "Generous, idealistic, great sense of humor",
		weaknesses: "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
		likes: "Freedom, travel, philosophy, being outdoors",
		element: "Fire",
		quality: "Mutable",
		color: "Blue",
		day: "Thursday",
		ruler: "Jupiter",
		compatibility: "Gemini, Aries",
		luckyNumbers: "3, 7, 9, 12, 21",
		dateRange: "November 22 - December 21"
	},
	{
		zodiac: "capricorn",
		strengths: "Responsible, disciplined, self-control, good managers",
		weaknesses: "Know-it-all, unforgiving, condescending, expecting the worst",
		likes: "Family, tradition, music, understated status, quality craftsmanship",
		element: "Earth",
		quality: "Cardinal",
		color: "Brown, Black",
		day: "Saturday",
		ruler: "Saturn",
		compatibility: "Taurus, Cancer",
		luckyNumbers: "4, 8, 13, 22",
		dateRange: "December 22 - January 19"
		
	}
];

function getZodiac() {

	var userInput = document.getElementById("input").value.toLowerCase();

	for (i = 0; i < allZodiac.length; i++) {
		if (userInput == allZodiac[i].zodiac) {
			document.getElementById("zodiac").innerHTML = allZodiac[i].zodiac;
			document.getElementById("dateRange").innerHTML = allZodiac[i].dateRange;
			document.getElementById("strengths").innerHTML = allZodiac[i].strengths;
			document.getElementById("weaknesses").innerHTML = allZodiac[i].weaknesses;
			document.getElementById("likes").innerHTML = allZodiac[i].likes;
			document.getElementById("luckyNumber").innerHTML = allZodiac[i].luckyNumbers;
			document.getElementById("compatibility").innerHTML = allZodiac[i].compatibility;
		} 
	}
};

















