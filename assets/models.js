Westore.Models.Item = Backbone.Model.extend({
	urlRoot: '/items',
	defaults: {
		name : "",
		defaultPrice : undefined,
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
	},



});


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