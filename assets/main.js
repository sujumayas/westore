(function(){
	window.Westore = {
		Models : {/*[Item, User]*/},
		Views : {/*[StockView, ShoppingCartView, InventoryView]*/},
		Collections : {/*[Stock, ShoppingCart, Inventory]*/},
		Helpers : {/*[Search,]*/}
	};
	
	window.template = function(id){
		return _.template($('#'+ id).html());
	}


})();