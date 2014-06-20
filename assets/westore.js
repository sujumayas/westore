
	
	//TODA LA INFO SOBRE LO QUE INTENTO HACER CON ESTA LIBRERÍA ESTÁ EN EL README. 

	//ISSUES: 

	// (1) Faltan un sin fin de métodos. 
	// (2) Falta averiguar cómo hacer para guardar el User en LocalStorage con su inventario.
	// (3) Falta meter (en la función Westore) algunos métodos de manipulación de Dom, o usar underscore.
	// (4) Falta pasar todo a Backbone.js




	//////////////////////
	// WESTORE FUNCTION
	////////////////////// 
	var westore = (function(){
		var title = "Westore";
		var subtitle = "The westerosi alternative to Amazon.com";
		var stock = [];
		

		return {
			setDefaultStock : function(){for(var i=0;i<defaultStock.length; i++){stock.push(defaultStock[i]);};},
			setStock : function(itemObjectList){for(var i=0;i<itemObjectList; i++){stock.push(itemObjectList[i]);};},
			addToStock : function(itemObject){stock.push(itemObject);return stock;},
			
			//Falta implementar:
			removeFromStock : function(itemId){console.log('removingFromStock');}, 
			getStock : function(){return stock;},
			getStockItem : function(itemAttribute){
				for(var i=0; i < stock.length; i++){
					var itemKeys = Object.keys(stock[i]);
					console.log(itemKeys);
					for (var j=0; j < itemKeys.length; j++){
						console.log(itemKeys[j] + " is " + stock[i][j] +"\n");
					}
				}
			},
			getStockItemsByCat : function(itemCategory){console.log('gettingStockItemByCat');},
			getStockItemById : function(){console.log('gettingStockItemById');},
			
			// Los de arriba tendrían una lógica similar a esta. Lo ideal sería tener una sola
			// función que permita varios attributos distintos. Pero poco a poco. 
			getStockItemByName : function(itemName){
				for (var i = 0; i < stock.length; i++) {
					if (stock[i].itemName === itemName) {
						console.log("You found "+ stock[i].itemName + ' in the store.');
						//Return item to further use.
						return stock[i]; 
					}
				}
			},
			// Otros métodos:
			createItem : function(){

			},

			//No voy a implementar esto aún. Pero será necesario: 
			createItemsFromJSON  : function(){console.log('creatingNewItemObjectsFromJSON');},
			
			//No estoy seguro de si esto sirve para algo:
			toString : function(){
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
		
		// Personalmente, me gustan las funciones específicas de abajo, aunque con una así podría
		// realizarse cualquiera de las de abajo. Aun no funciona por las "comillas".
			// getOptions : function(option) {return this.option;},
			// setOptions : function(option, newValue) {return this.option = newValue;},

		//These are specific options methods. Not needed, but lovely methods. 
			
			//Item name methods
			getName : function() {console.log(this);return this.itemName;},
			setName : function(newName) {return this.itemName = newName;},

			//Item price methods
			getDefaultPrice : function() {return this.defaultPrice;},
			setDefaultPrice : function(newPrice) {return this.defaultPrice = newPrice;},

			//Item quality methods
			getQuality : function() {return this.quality;},
			setQuality : function(newQuality) {return this.quality = newQuality;},

			//Item quantity methods
			getQuantity : function() {return this.quantity;},
			setQuantity : function(newQuantity) {return this.quantity = newQuantity;},

			//Item description methods
			getDescription : function() {return this.description;},
			setDescription : function(newDescription) {return this.description = newDescription;},
			
			//Item category methods
			getCategory : function() {return this.category;},
			setCategory : function(newCategory) {return this.category = newCategory;}

			//
	}


	//Creating the User object and the Shopping Cart object
	function User(options){
		this.name = options.name;
		var username = this.name;
		this.money = options.money;
		this.appraisal = options.appraisal;
		this.status = options.status;
		this.shoppingCart = [];
		this.inventory = (function(){
			this.name = username;
			this.items = [];
			return {
				addItem : function(itemObject){return items.push(itemObject);},
				getItems : function(args){return items;},
			};
		})(username);
	};
	


	User.prototype = {
		// Esto es posible?
		
		// Algo así sería necesario, pero no sé si esto funciona. 
		initialize: function(){console.log(arguments)},
		// Estos podrían funcionar. ¿No debería necesitar algún tipo de mixin?
		addItemToCart: function(itemObject) {this.shoppingCart.push(itemObject);return this.shoppingCart;},
		removeItemFromCart: function(itemName) {},
		
		// Esto aún solo guarda un JSON de las características básicas de user. Pero aún no imprime
		// los contenidos de $user.inventory.getItems() :D
		save : function() {
		  if (this.id === undefined) {
		    var key = Date.now();
		  }
		  else {
		    var key = this.id;
		  }

		  this.id = key;
		  var value = JSON.stringify(this);
		  localStorage.setItem(key, value);
		},
	}


	
	
	//Items de prueba para el default stock. 
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

	//Default stock: 
		// var defaultStock = [pan, sword1];
		

	//Creando un user de prueba
		var pepe = new User({
			name : "Pepito",
			money : 10,
			appraisal: 42,
			status: 15,
		}); 

		westore.setDefaultStock();



	