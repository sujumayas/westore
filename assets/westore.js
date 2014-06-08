
//////////////////////
// WESTORE FUNCTION
////////////////////// 
// This is the main Function of Westore.
// It should let you: 
// - getItem 		--> returns name and price of id specific item 
// - addItem 		--> if you are a GM, it lets you create a new item
// - toString 		--> prints the name of the store, a new line, and the subtitle
	
	var westore = (function(){
		var title = "Westore";
		var subtitle = "The westerosi alternative to Amazon.com";
		var stock = [];

		return {
			setDefaultStock : function(){console.log('settingDefaultStock');},
			setStock : function(){console.log('settingStock');},
			addToStock : function(itemObject){stock.push(itemObject);return stock;},
			removeFromStock : function(){console.log('removingFromStock');},
			getStock : function(){console.log('gettingFullStock');},
			getStockItem : function(){console.log('gettingStockItemByOptions');},
			getStockItemsByCat : function(){console.log('gettingStockItemByCat');},
			getStockItemByName : function(){
				console.log('gettingStockItemByName');
				for (var i = 0; i < stock.length; i++) {
					console.log(stock[i]);
					if (stock[i].itemName === itemName) {
						console.log("You found "+ stock[i].itemName + ' in the store.');
						//Return item to further use. 
					}
				}
			},
			getStockItemById : function(){console.log('gettingStockItemById');},
			createItem : function(){console.log('creatingNewItemObject');},
			createItemsFromJSON  : function(){console.log('creatingNewItemObjectsFromJSON');},
			toString : function(){
				console.log('Printing westore:');
				// Prints the name of the store, a new line, and the subtitle
				return console.log(title + '\n' + subtitle);
			},
		};
	})();


	//Item object with atributtes:
	function Item(options) {
		this.id = Date.now().toString() + Math.ceil(Math.random()*10);
		this.itemName = options.itemName;
		this.description = options.description;
		this.defaultPrice = options.defaultPrice;
		this.category = options.category;
		this.quality = options.quality;
		this.quantity = options.quantity;
		
		
	};

	//Item.prototye extended modules
	Item.prototype = {
		//Pueden ser funciones que requieran parametros, o específicas. 
		//Personalmente, me gustan más las específicas de abajo (getName, etc.)
		getOptions : function(option) {return this.option},
		setOptions : function(option, newValue) {return this.option = newValue},

		//Todas estas podrían ser las versiones rápidas(directas) de las dos anteriores.
		//Item name methods
		getName : function() {return this.name},
		setName : function(newName) {return this.name = newName},

		//Item price methods
		getDefaultPrice : function() {return this.defaultPrice},
		setDefaultPrice : function(newPrice) {return this.defaultPrice = newPrice},

		//Item quality methods
		getQuality : function() {return this.quality},
		setQuality : function(newQuality) {return this.quality = newQuality},

		//Item quantity methods
		getQuantity : function() {return this.quantity},
		setQuantity : function(newQuantity) {return this.quantity = newQuantity},

		//Item description methods
		getDescription : function() {return this.description},
		setDescription : function(newDescription) {return this.description = newDescription},
		
		//Item category methods
		getCategory : function() {return this.category},
		setCategory : function(newCategory) {return this.category = newCategory},

		//
	}

	

	



	//Creating the User object and the Shopping Cart object
	function User(options){
		this.name = options.name;
		this.money = options.money;
		this.appraisal = options.appraisal;
		this.status = options.status;
		};
	


	User.prototype = {
		//Esto es posible?
		
		//algo así sería necesario, pero no sé si esto funciona. 
		initialize: function(){console.log(arguments)},
		//Estos podrían funcionar. ¿No debería necesitar algún tipo de mixin?
		addItemToCart: function(item) {},
		removeItemFromCart: function(first_argument) {},

	}






	//Ejemplo 1
	var pan = new Item({
		itemName: 'Pan',
		defaultPrice: 10,
		quality: 7,
		quantity: 15,
		description: 'Sabe mejor con un poco de agua y sal.',
		category: 'comida',
	});

	//Ejemplo 2
	var sword1 = new Item({
		itemName: 'Pincho de Rata',
		defaultPrice: 150,
		quality: 10,
		quantity: 2,
		description: 'Un simple pincho de rata.',
		category: 'armas',
	})


	//Adding our two first Item objects to our Store object. 
	westore.addToStock(sword1);
	westore.addToStock(pan);


