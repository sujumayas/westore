var currencies = {
		halfpenny : 1, 
		penny : 2, 
		halfgroat : 4, 
		groat : 8, 
		star : 16, 
		stag : 112, 
		moon : 784, 
		goldendragon : 23520
	};

var convertToShow = function(price, currency){
	// var price = parseInt(prompt('Please enter a price for your item in halfpennys: '));
	var newPrice = {
		gd : 0, 	//Golden Dragons
		sm : 0, 	//Silver Moons  		- QUITAR
		ss : 0, 	//Silver Stags
		cs : 0, 	//Copper Stars  		- QUITAR
		cg : 0, 	//Copper Groats 		- QUITAR
		hcg : 0, 	//Half Copper Groats 	- QUITAR
		cp : 0, 	//Copper Pennies
		hcp : 0 	//Half Copper Pennies
	};

	while(Math.floor(price/currency.goldendragon) > 0){
		price -= currency.goldendragon;
		newPrice.gd++;
	}
	// while(Math.floor(price/currency.moon) > 0){
	// 	price -= currency.moon;
	// 	newPrice.sm++;
	// }
	while(Math.floor(price/currency.stag) > 0){
		price -= currency.stag;
		newPrice.ss++;
	}
	// while(Math.floor(price/currency.star) > 0){
	// 	price -= currency.star;
	// 	newPrice.cs++;
	// }
	// while(Math.floor(price/currency.groat) > 0){
	// 	price -= currency.groat;
	// 	newPrice.cg++;
	// }
	// while(Math.floor(price/currency.halfgroat) > 0){
	// 	price -= currency.halfgroat;
	// 	newPrice.hcg++;
	// }
	while(Math.floor(price/currency.penny) > 0){
		price -= currency.penny;
		newPrice.cp++;
	}
	while(Math.floor(price/currency.halfpenny) > 0){
		price -= currency.halfpenny;
		newPrice.hcp++;
	}
	// console.log('Your new price is: ' + newPrice.gd +'gd, ' + newPrice.sm
	// 	+ 'moons, '+ newPrice.ss+'stags, '+newPrice.cs+'stars, '+newPrice.cg
	// 	+'grounts, '+newPrice.hcg+'halfgrounts, '+newPrice.cp
	// 	+'pennys, '+ newPrice.hcp+ 'halfpennys.');
	result = {};
	
	for (key in newPrice) {
		if(newPrice[key] != 0){
			result[key] = newPrice[key];
		}
	};
	return result;
}

var convertBack = function(newPrice, currency){
	var priceBack = 0;
	priceBack += newPrice.gd * currency.goldendragon;
	priceBack += newPrice.sm * currency.moon;
	priceBack += newPrice.ss * currency.stag;
	priceBack += newPrice.cs * currency.star;
	priceBack += newPrice.cg * currency.groat;
	priceBack += newPrice.hcg * currency.halfgroat;
	priceBack += newPrice.cp * currency.penny;
	priceBack += newPrice.hcp * currency.halfpenny;
	console.log(priceBack);
	return priceBack;
}

// convertBack(convertToShow(23531, currencies), currencies);