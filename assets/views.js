Westore.Views.ItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'item-wrapper',
	template : template('itemTemplate'), 
	
	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},

	events : {
		'click .item' : 'buy',
		
	},
	buy : function(e){
		var selected = $(e.currentTarget);
		$('.item').removeClass('selected');
		selected.addClass('selected');
		//we have to create a new copy of the item, because Backbone doesnt do that for us...
		// var newModelCopy = $.extend(true, {}, this.model.attributes);
		var thisGuyId = this.model.attributes.id;
		console.log("This is the ID of the object we want to buy: " + thisGuyId);
		
		//Check if it already exists in the collection
		if (myShoppingCart.get(thisGuyId)) {
			//if it does exist, just get() it
			var newBuyedItem = myShoppingCart.get(thisGuyId);
			// console.log('This is the model for myShoppingCart: ' + newBuyedItem.get('quantity'));
		}else {
			//If it does not, copy the original item from the Store Collection
			// console.log(this.model);
			var newBuyedItem = $.extend(true, {}, this.model.attributes);
			// console.log('This is brand new model copy: ' + newBuyedItem.get('quantity'));
		}

		

		//If its a new item, add it to the collection
		if(newBuyedItem.quantity == 0){
			myShoppingCart.add(newBuyedItem);
			newBuyedItem = myShoppingCart.get(thisGuyId);
		}

		//Now get up the quantity
		var oldQuantity = newBuyedItem.get('quantity');
		var newQuantity = oldQuantity + 1;
		newBuyedItem.set('quantity', newQuantity);
		console.log('New Quantity: '+newBuyedItem.get('quantity'));
		
		// console.log(myShoppingCart.get(thisGuyId).attributes.quantity);
		
		
	},
	remove: function(){
		this.$el.remove();
	},
	
	render: function() {
		if(this.model.attributes.actualPrice == undefined){
			var oldPrice = this.model.attributes.defaultPrice;
			var newPrice = convertToShow(oldPrice, currencies);
			// console.log("new price" + newPrice);
			this.model.attributes.actualPrice = newPrice;
			// console.log(this.model.attributes.actualPrice)
		}
		
		this.$el.html( this.template(this.model.toJSON()) );
		// console.log(this.template(this.model.toJSON()));
		return this;
	}
});

Westore.Views.BuyedItemView = Backbone.View.extend({
	tagName : 'li',
	className: 'item-wrapper',
	template : template('itemTemplate2'), 

	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	events : {
		'click .delete-button': 'destroy',
		'click .mas' : 'masQuantity',
		'click .menos' : 'menosQuantity'
	},
	masQuantity : function(e){
		var selected = $(e.currentTarget);
		if(!selected.hasClass('imposiburu')){  // Esto está aquí para cuando tengamos que evitar que compren más!
			var currentQuantity = this.model.attributes.quantity;
			this.model.set('quantity', currentQuantity+1);
			console.log('New Quantity: '+this.model.attributes.quantity);
			// setBuyingList(resetTotalPrice(this.model.attributes.id, this.model.attributes.quantity, this.model.attributes.defaultPrice));
		}
		
	},
	menosQuantity : function(e){
		var selected = $(e.currentTarget);
		if(!selected.hasClass('imposiburu')){ // Esto está aquí para cuando tengamos que evitar que compren más!
			var currentQuantity = this.model.attributes.quantity;
			this.model.set('quantity', currentQuantity-1);
			console.log('New Quantity: '+this.model.attributes.quantity);
			// setBuyingList(resetTotalPrice(this.model.attributes.id, this.model.attributes.quantity, this.model.attributes.defaultPrice));
		}
		if(this.model.attributes.quantity == 0){
			this.model.destroy();
		}
	},
	destroy : function(){
		this.model.set('quantity', 0);
		this.model.destroy();
		this.render();
		// setBuyingList(resetTotalPrice(this.model.attributes.id, this.model.attributes.quantity, this.model.attributes.defaultPrice));
	},
	remove: function(){
		this.$el.remove();
	},
	
	render: function() {
		if(this.model.attributes.actualPrice == undefined){
			var oldPrice = this.model.attributes.defaultPrice;
			var newPrice = convertToShow(oldPrice, currencies);
			// console.log("new price" + newPrice);
			this.model.attributes.actualPrice = newPrice;
			// console.log(this.model.attributes.actualPrice)
		}
		this.$el.html( this.template(this.model.toJSON()) );
		setBuyingList(resetTotalPrice(this.model.attributes.id, this.model.attributes.quantity, this.model.attributes.defaultPrice, this.model.attributes.name));
		return this;
	}

});


Westore.Views.Stock = Backbone.View.extend({
	el: '#template-wrapper',
	firstRenderization : true,
	savedElement : [],
	stockStatus : 'inactive',
	stockViewRoute : function(name){
		if(this.stockStatus == 'inactive'){
			if(this.firstRenderization){
				this.savedElement = $.extend(true, [], this.$el.children('.item-wrapper').children());
				this.firstRenderization = false;
			}
			console.log("Console Log de savedElement : ", this.savedElement);
			var self = this.savedElement;
			console.log(this);
		
			// console.log(this.$el.children('.item-wrapper'));
			//Necesito encontrar una manera de hacer RESTART aquí.... 
			var itemWrapper = this.savedElement;
			console.log("Console Log de ITEM WRAPPER :  ", itemWrapper);
			_.forEach(itemWrapper, function(index, val) {
				 /* iterate through array or object */
				var newIndex = $(itemWrapper[val]);
				if(newIndex.hasClass(name)){
					//NOW RENDER THE FUCKING SHIET:
					console.log("Foreach Class NAME : ", $(itemWrapper[val]).parent());
				}else{
					console.log("Foreach NOT Class NAME : ", $(itemWrapper[val]).parent());
					$(itemWrapper[val]).parent().remove();
				}
			});
			this.stockStatus = 'active';	
		}else{
			
			// window.location.reload();  // Esto trae problemas porque RESETEA la página!!! 
			this.stockStatus = 'inactive';
		}
	},
	querySearchRoute : function(query){
		console.log('another query...');
		console.log(query);
		// $('.item-wrapper > query')
	},
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addItemToStockView);
		this.listenTo(this.collection, 'change', this.addItemToStockView);
		// this.listenTo(this.collection, 'eventito', this.changeViewToName);
	},
	changeViewToName : function(name){
		console.log(name);
		console.log('anything bitch, i want anything!');
	},
	addItemToStockView: function(model, collection){
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



Westore.Views.ShoppingCart = Backbone.View.extend({
	el: '#cart-container',

	initialize: function(){
		this.listenTo(this.collection, 'add', this.addItemToShoppingCart);
		this.listenTo(this.collection, 'change:quantity', this.quantityRender);
	},

	addItemToShoppingCart: function(model, collection){
		console.log('adding item to shopping cart... ');
		var itemView = new Westore.Views.BuyedItemView({model: model});
		this.$el.append(itemView.render().el);
		return itemView.el;
	},

	render: function(){
		console.log('rendering... ');
		var self = this;
		this.collection.each(function(item){
			self.addItemToShoppingCart(item);
		}, this);
		return this;
	},
	quantityRender: function(a, b, c, d){
		//This is just magic. When I finished this, It worked. The second before, it does not. 
		console.log(a, b, c, d);
	}

})









Westore.Views.CreateItem = Backbone.View.extend({
	el: '#create-item-wrapper',
	initialize: function(){

	},
})