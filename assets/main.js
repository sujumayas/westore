(function(){
	window.Westore = {
		Models : {},
		Views : {},
		Collections : {},
		Helpers : {},
		Router : {}
	};
	
	window.template = function(id){
		return _.template($('#'+ id).html());
	}


})();