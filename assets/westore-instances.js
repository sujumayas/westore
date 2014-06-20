	// //PRUEBAS
	// var pan = new Westore.Models.Item ({
	// 	name : 'Pan',
	// 	price : 4,
	// 	description: "This is the most beautiful pan"
	// });

	// //Instanciamos un panView, que mostrará solo el item: pan. 
	// var panView = new Westore.Views.ItemView ({ model: pan});
	var pan = new Westore.Models.Item({
		name: 'Pan',
		price: 4,
		description: 'This is the most beautiful pan'
	});

	//Instanciamos un Stock
	var store = new Westore.Collections.Stocks();
	

	// Y creamos la instancia de la vista
	var store = new Westore.Views.StockView({
		collection: store,
		template: _.template( $('#template-wrapper').html() ),
	});

	//Imprimimos....
	var fileInput = document.getElementById('file_input'),
			container = document.getElementById('container');

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
				//window.Westore.Collections.stock1.add(defaultStock[i]);
				var newItem = new Westore.Models.Item(defaultStock[i]);
				// console.log(newItem.attributes['category']);
				console.log(store);
				store.addItemToStock(newItem);
			}
		});

		reader.readAsText(file);

	});
					