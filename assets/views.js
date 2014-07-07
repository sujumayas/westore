Westore.Views.ItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'item-wrapper',
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




Westore.Views.Stock = Backbone.View.extend({
		el: '#template-wrapper',
		
		initialize: function(){
			this.listenTo(this.collection, 'add', this.addItemToStockView);
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



Westore.Views.CreateItem = Backbone.View.extend({
	el: '#create-item-wrapper',
	initialize: function(){

	},
})