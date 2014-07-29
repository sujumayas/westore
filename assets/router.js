

Westore.Router = Backbone.Router.extend({
    routes: {
        ":name": "stockViewRoute",
        "/search/:query": "queryViewRoute"
    },
    stockViewRoute : function(name){
        //Aquí solo deberíamos llamar a la vista filtrada por cada "name"
        console.log('not yet implemented');
    },
    queryViewRoute : function(query){
        $('.item-wrapper > query')
    }
});





// Initiate the router
var route = new Westore.Router;

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();