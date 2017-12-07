function sporedba(broj1, broj2) {
if(broj1 > broj2) {
	console.log("Izbranite broevi se "+broj1+" i "+broj2+". Pogolem broj e " + broj1);
}else if(broj1 < broj2){
	console.log("Izbranite broevi se "+broj1+" i "+broj2+". Pogolem broj e " + broj2);
}else{
	console.log("Broevite se ednakvi");
}
		
} 


sporedba (3, 5);

function calculateDogYear(age) {

	console.log("Kuceto ima: " + age * 7 + " godini");
}

calculateDogYear (10);



function c2f (c) {
	console.log (c * 1.8 + 32)+ ' ' + 'Fahrenheit';
}

function f2c (f) {
	console.log ((f - 32) * .5556 + ' ' + 'Celsius');
}

function temp(num,type){
	if(type=="c2f"){
		console.log(num + " C = "+ ((num * 1.8) + 32) + " Fahrenheit");
	}
	else if(type=="f2c"){
		console.log(num + " F = " + (num - 32) * .5556 + ' Celsius');
	}
}


temp(102,'c2f');



function evenOdd(num){
	if(num % 2 == 0){
		console.log("Brojot e paren");
	}
		else if(typeof num != "number"){
		console.log("Ova ne e broj")		
	}
	else{
		console.log("Brojot e neparen");	
	}
}

evenOdd ("tigar");
