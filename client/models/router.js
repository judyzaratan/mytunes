var MyTunes = Backbone.Router.extend({

  routes: {
    //"help":                 "help",    // #help
    "play/:query":        "play"  // #search/kiwis
    //"search/:query/p:page": "search"   // #search/kiwis/p7
  },

  play: function(query, page) {
    console.log(query);
  }

});
