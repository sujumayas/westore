

	//Instanciamos un Stock
	var store = new Westore.Collections.Stock();
	var myShoppingCart = new Westore.Collections.ShoppingCart();

	// Y creamos la instancia de la vista
	var storeView = new Westore.Views.Stock({
		collection: store,
		template: _.template( $('#template-wrapper').html() ),
	});

	//Iniciamos la vista del ShoppingCart
	var ShoppingCartView = new Westore.Views.ShoppingCart({
		collection: myShoppingCart,
		template: _.template( $('#cart-container').html() ),
	});

	//Chekeamos por file input
	var fileInput = document.getElementById('file_input'),
			container = document.getElementById('container');


	//File input listener
	fileInput.addEventListener('change', function(e) {
		var file = e.target.files[0];
		var reader = new FileReader();

		reader.addEventListener('load', function(e2) {
			// console.log(e2.target.result);
			var json = $.parseJSON(e2.target.result); 
			window.defaultStock = [];
			for(var i=0;i<json.length;i++){
					defaultStock.push(json[i]);

			}
			// console.log(defaultStock);
			for(var i=0;i<defaultStock.length;i++){
				store.add(defaultStock[i]);
				// console.log(myShoppingCart);
			}
		});

		reader.readAsText(file);

	});

	//Create the logic of buying bitch
		
		









	





	






					