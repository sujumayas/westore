
Westore.Collections.Stock = Backbone.Collection.extend({
	url: '/stocks',
	model: Westore.Models.Item,
	defaults : undefined,
	save: function(){
		this.models.forEach(function(model){
			model.sync('create', model);
		})
	},
	delete: function(){
		this.models.forEach(function(model){
			model.sync('delete', model);
		})
	},
	update: function(){
		this.models.forEach(function(model){
			model.sync('update', model);
		})
	},

});