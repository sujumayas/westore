(function(){
	window.Westore = {
		Models : {},
		Views : {},
		Collections : {},
		Helpers : {}
	};
	
	window.template = function(id){
		return _.template($('#'+ id).html());
	}


})();