
Westore.Router = Backbone.Router.extend({
    routes: {
        // "*any" : "default",
        ":name": "stockView",
        ":query": "querySearch"
    },
    default: function( ){
        console.log('loading shopping cart...');
        // myShoppingCart.load();   NOT WORKING!!
    },
    stockView : function(name){
        //Aquí solo deberíamos llamar a la vista filtrada por cada "name"
        storeView.stockViewRoute(name);
    },
    querySearch : function(query){
         console.log('querying...');
         storeView.querySearchRoute(query);
       
    }
});





// Initiate the router
var route = new Westore.Router;

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();