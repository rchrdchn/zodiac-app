var chineseZodiac = [
	{
		zodiac: "rat",
		personality: "You’re constantly on the move, shaking things up. Because of your quick-wittedness you can accomplish more in a few hours than most others can in a few days. Plus, you likely play a mean game of Mousetrap.",
		year: "1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020",
		image: "images/rat.png"
	},
	{
		zodiac: "ox",
		personality: "Incredibly detail oriented the Ox is as methodical as they come. Slow and steady wins their race which could explain why Oxen have a longer than usual life span.",
		year: "1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021",
		image: "images/ox.png"
	},
	{
		zodiac: "tiger",
		personality: "Of the Chinese zodiac animals, the Tiger’s personality traits are among the best known. Across all cultures and throughout their history these big cats are the archetypal symbols for courage and ferocity. They don’t change their stripes once they’ve made up their mind to take a stand. ",
		year: "1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022",
		image: "images/tiger.png"
	},
	{
		zodiac: "rabbit",
		personality: "Rabbits are fantastic company and great helpers. You never know what they’re likely to pull out of their hats. They are often human rights activists who spend their entire lives involved in charity work. Sentimental, compassionate and empathetic in the extreme, it could easily be said you’re nobody ‘til some bunny loves you.",
		year: "1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023",
		image: "images/rabbit.png"
	},
	{
		zodiac: "dragon",
		personality: "You ain’t hidin’ from nobody, Baby! Everything you think, say and do is BIG! You know that size matters. Because of your confidence, fearlessness and massive ambition you’re a natural born leader. People look up to you and will follow your directive which you tend to bellow rather than speak. Be careful Dragon, your proclivity for tyranny could easily lead to a reign of fire.",
		year: "1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, and 2024",
		image: "images/dragon.png"
	},
	{
		zodiac: "snake",
		personality: "You, Snake, will not be ignored and expect nothing less than to be the apple of everyone’s eye. However, you are never a snake in the crass. Your manners are impeccable. You’re the un-extroverted extrovert! You love power and control but from behind the scenes.",
		year: "1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025",
		image: "images/snake.png"
	},
	{
		zodiac: "horse",
		personality: "For those born with the Chinese zodiac sign of the Horse, a prodigious intelligence and tendency to be a workhorse allows them to plow ahead of all the rest in almost every endeavor. They’ll have crossed many a finish line long before the others even make it out of the starting gate.",
		year: "1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026",
		image: "images/horse.png"
	},
	{
		zodiac: "sheep",
		personality: "Of the personalities of the Chinese New Year animals, Sheep make some of the most excellent astrologers or fortune tellers. They are dyed in the wool lovers of all things esoteric and mystical. Their artistic sensitivity makes it easy for them to receive messages from Spirit.",
		year: "1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027",
		image: "images/sheep.png"
	},
	{
		zodiac: "monkey",
		personality: "The life of the party wherever they go the Chinese Zodiac Monkey is cheerful, energetic and more fun than, well, a barrel full of themselves! They’re also so incredibly talented and creative that it’s just bananas!",
		year: "1932, 1944, 1956,  1968, 1980, 1992, 2004, 2016",
		image: "images/monkey.png"
	},
	{
		zodiac: "rooster",
		personality: "Not one to fly the coop, of all the personalities of the 12 Chinese zodiac animals, Roosters are among the most loyal. They will stay by your side long after the others have run away screaming, “The sky is falling! The sky is falling!” Very little makes these chicken run. Take good care of Roosters.",
		year: "1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, and 2029",
		image: "images/rooster.png"
	},
	{
		zodiac: "dog",
		personality: "When others are rolling around, panting and desperately trying to figure out what goes where in their lives, the Doggie has its own inimitable style. Great pleasure can be had if you’ll just back up, take it all in and focus on exactly what you need to reach your personal apex.",
		year: "1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, and 2030",
		image: "images/dog.png"
	},
	{
		zodiac: "pig",
		personality: "Pigs only see the best in people and make the conscious choice to believe that all humanity is intrinsically good. Because of this, humanity is indeed better. Indeed, when a Pig (or any of us) places a greater expectation upon another, that person will, not only, perform up to the standard but more often than not, achieve far greater results.",
		year: "1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031",
		image: "images/pig.png"
	}
]

function chineseZodiac() {
	var userInput = document.getElementbyId("userInput").value.toLowerCase();

	var zodiac = document.getElementById("zodiac").innerHTML = chineseZodiac[i].zodiac;
	var image = document.getElementById("image").src = chineseZodiac[i].image;
	var personality = document.getElementById("text").innerHTML = chineseZodiac[i].text;

	for (i = 0; i < chineseZodiac.length; i++) {
		if (userInput == chineseZodiac.year[i] ) {
			
		}
	}
}

