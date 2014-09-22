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
		ss : 0, 	//Silver Stags
		cp : 0, 	//Copper Pennies
		hcp : 0 	//Half Copper Pennies
	};

	while(Math.floor(price/currency.goldendragon) > 0){
		price -= currency.goldendragon;
		newPrice.gd++;
	}
	while(Math.floor(price/currency.stag) > 0){
		price -= currency.stag;
		newPrice.ss++;
	}
	while(Math.floor(price/currency.penny) > 0){
		price -= currency.penny;
		newPrice.cp++;
	}
	while(Math.floor(price/currency.halfpenny) > 0){
		price -= currency.halfpenny;
		newPrice.hcp++;
	}
	return newPrice;
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

var items = {};
var totalPrice = 0;

var resetTotalPrice = function(id, quantity, defaultPrice, name){
	items[id] = {quantity : quantity, defaultPrice : defaultPrice, name : name};
	var allItemsPrice = 0;
	for (idKey in items){
		console.log('Item price: '    + items[idKey].defaultPrice);
		allItemsPrice = allItemsPrice + ((parseInt(items[idKey].quantity) ) * (parseInt(items[idKey].defaultPrice)));
		console.log('Right Now, All Items Price in HCP is: ' + allItemsPrice);
	}
	totalPrice = allItemsPrice;
	coinedCost = convertToShow(totalPrice, currencies);
	console.log("Coined Cost: ");
	console.dir(coinedCost);
	var finalCostAtLast = coinedCost.gd +'GD | '+ coinedCost.ss +'SS | '+coinedCost.cp +'CP | '+coinedCost.hcp+'HCP |';
	console.log(finalCostAtLast);
	$('#cost').text(finalCostAtLast);
	return items;
}


var setBuyingList = function(items){
	$('#buyedItemsList').children().remove();
	$('#buyedItemsList').append('<li><span class="name">Name</span><span class="quantity">N°</span><span class="price">Price per unit</span></li>')
	for(id in items){
		if (items[id].quantity != 0) {
			var howMany = items[id].quantity;
			var name = items[id].name;
			var priice = items[id].defaultPrice;
			var howMuch = convertToShow(priice, currencies);
			console.log('howMany: '+howMany);
			howMuchString = howMuch.gd +'GD | '+ howMuch.ss +'SS | '+howMuch.cp +'CP | '+howMuch.hcp+'HCP' 
			console.log('howMuch: '+howMuchString);
			$('#buyedItemsList').append('<li><span class="name">' +name+ '</span><span class="quantity">'+howMany+'</span><span class="price">'+howMuchString+'</span></li>');
		}
		
	}
}



var finalBuy = function(){
	console.log("Buying at last...");
	var finalBuyingList = $('#buyedItemsList').children();
	console.log(finalBuyingList);
}

