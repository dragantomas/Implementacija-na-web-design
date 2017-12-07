var names = ['Pero', 'Petko', 'Kristina', 'Kristijan', 'Dimitar', 'Andrej', 'Aleksandar', 'Angelina', 'Mario', 'Bojan', 'Zoran'];

for (var i = 0; i < names.length; i++) {
	if (names[i].length == 5)
		console.log(names[i]);
}

// letters = [""];

// charAt();


function countLetters(letters, character){
	var count = 0;
	for (var i = 0; i < letters.length; i++){
		if(letters.charAt(i) == character){
			count++;
		}
	}
		console.log(count);
		return count;
}

countLetters("SKDJOCIWECKJKASCCASSDJCLKJASDJQOPC", "C");


for (var i = 5; i <= 50; i+=5) {
	console.log(i);
}

for (var i = 100; i >= 0; i-=10) {
	console.log(i);
}


for (var i = 0; i <= 10; i++) {
	console.log(i + " * 9 = " + i*9);
}