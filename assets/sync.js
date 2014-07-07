Backbone.sync = function(method, model, options){
	switch(method){
		case 'create':
			var id = model.get('id');
			model.set('id', model.get('category').slice(0, 2).toUpperCase()+id);

			localStorage.setItem(model.get('id'), JSON.stringify(model.toJSON()));
		break;
		case 'update':
			localStorage.setItem(model.get('id'), JSON.stringify(model.toJSON()));
		break;
		case 'delete':
			localStorage.removeItem(model.get('id'));
			return model;
		default:
			console.log(method, model, options);
		break;
			
	}
}