

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

//Agregar DEFAULTS: 
defaultStock1 = [{"id":1,"name":"Bread","defaultPrice":9460,"quality":55,"quantity":0,"category":"marketeer","description":"Nunc purus. Phasellus in felis. Donec semper sapien a libero.","color":"#05e8ed"},
	{"id":0,"name":"Rum","defaultPrice":1640,"quality":-29,"quantity":0,"category":"marketeer","description":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","color":"#9b8ea2"},
	{"id":3,"name":"Lembas","defaultPrice":2867,"quality":42,"quantity":0,"category":"marketeer","description":"Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.","color":"#57e465"},
	{"id":4,"name":"Helmet","defaultPrice":7810,"quality":-52,"quantity":0,"category":"blacksmith","description":"Aenean fermentum.","color":"#cede0d"},
	{"id":5,"name":"Wine","defaultPrice":5046,"quality":95,"quantity":0,"category":"weaponsmith","description":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.","color":"#911297"},
	{"id":6,"name":"Beer","defaultPrice":8381,"quality":36,"quantity":0,"category":"weaponsmith","description":"Pellentesque ultrices mattis odio.","color":"#9645a3"},
	{"id":7,"name":"Pork","defaultPrice":1163,"quality":-71,"quantity":0,"category":"herbalist","description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.","color":"#b18da1"},
	{"id":8,"name":"Duck","defaultPrice":4343,"quality":0,"quantity":0,"category":"marketeer","description":"Phasellus in felis. Donec semper sapien a libero. Nam dui.","color":"#72a396"},
	{"id":9,"name":"Brazier","defaultPrice":7487,"quality":22,"quantity":0,"category":"blacksmith","description":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.","color":"#c0dff4"},
	{"id":10,"name":"Milk of the poppy","defaultPrice":8385,"quality":-87,"quantity":0,"category":"herbalist","description":"Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","color":"#65aa95"}]


// console.log(defaultStock);
	for(var i=0;i<defaultStock1.length;i++){
		store.add(defaultStock1[i]);
		// console.log(myShoppingCart);
	}







	





	






					