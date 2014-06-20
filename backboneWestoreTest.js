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

	/************************************************************************************
	Item(model) - Stock(collection) - ItemView(Item) - $Views(Stocklike-collection views)
	************************************************************************************/

	//Primero creamos la extensión constructora de Item en general:
	Westore.Models.Item = Backbone.Model.extend({
		urlRoot: '/items',
		defaults: {
			name : "",
			price : undefined,
			quality: undefined,
			quantity: undefined,
			description:"",
			category:""
		},
		validate: function(attributes, options){
			//Definimos en dónde se van a guardar los errores
			var validationErrors = [];
			//Definimos los errores y lo que guardarán
			if (attributes.price === undefined){
				validationErrors.push("Por favor, colócale un precio en enteros a tu item...");
			}
			if (attributes.quality === undefined){
				validationErrors.push("Por favor, colócale una calidad (-100 a 100) en enteros a tu item...");
			}
			if (attributes.quantity === undefined){
				validationErrors.push("Por favor, coloca la cantidad en enteros que quieres de tu item...");
			}
			//Devolvemos los errores si existen
			if (validationErrors.length > 0){
				return validationErrors;
			}
		}
	});
	var template = function(id) {
		return _.template( $('#' + id).html() );
	};

	Westore.Views.ItemView = Backbone.View.extend({
		tagName: 'div class="item-wrapper"',
		template : template('itemTemplate'),
		
		initialize: function() {
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
		},

		events : {
			'click .name': 'showAlert',
			'click .quantity': 'destroy',
		},

		showAlert: function(){
			var newName = prompt('Change the name:', this.model.get('name'));
			this.model.set('name', newName);
		},

		destroy: function(){
			var quantity = this.model.get('quantity');
			if (quantity>0) {
				this.model.set('quantity', quantity-1);
			} else {
				this.model.destroy();
			} 
			
		},
		remove: function(){
			this.$el.remove();
		},
		
		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			// console.log(this.template(this.model.toJSON()));
			return this;
		}
	});

	
	

	//Extendemos la primera colección de items:
	Westore.Collections.Stocks = Backbone.Collection.extend({
		url: '/stocks',
		model: Westore.Models.Item,
		defaults : undefined,
		
	});

	

	// Ahora generamos la extensión constructora de la
	Westore.Views.StockView = Backbone.View.extend({
		el: '#template-wrapper',
		initialize: function(){
			this.listenTo(this.collection, 'add', this.addItemToStock);
		},
		addItemToStock: function(model, collection){
			var itemView = new Westore.Views.ItemView({ model: model });
			// console.log(model, itemView);
			this.$el.append(itemView.render().el);
			return itemView.el;
		},
		render: function() {
			var self = this;
			this.collection.each(function(item) {
				self.addItemToStock(item);
			}, this);

			return this;
		}
	});

	/************************************************************************************
	User(model) - Users(collection) - UserView(User) -$Views(Userslike-collection views)
	************************************************************************************/

	//Primero creamos la extensión constructora de User en general:
	Westore.Models.User = Backbone.Model.extend({
		urlRoot: '/users',
		defaults: {
			name : "",
			money : undefined,
			appraisal: undefined,
			description:"",
			status: undefined,
			party:""
		},
		validate: function(attributes, options){
			//Definimos en dónde se van a guardar los errores
			var validationErrors = [];
			//Definimos los errores y lo que guardarán
			if (attributes.money === undefined){
				validationErrors.push("Por favor, vuelva cuando tenga dinero...");
			}
			if (attributes.appraisal === undefined){
				validationErrors.push("Por favor, colócale una calidad (mayor que -25) en enteros a tu nivel de appraisal...");
			}
			if (attributes.party === undefined){
				validationErrors.push("Por favor, vuelva cuando pertenezca a un party...");
			}
			//Devolvemos los errores si existen
			if (validationErrors.length > 0){
				return validationErrors;
			}
		}
	});






})();