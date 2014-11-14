// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("songskidfhksdf"),
  model: SongModel,
  saveModels: function() {
    for(var i= 0; i < this.models.length; i++){
      this.localStorage.create(this.models[i]);
    }
  }
});
