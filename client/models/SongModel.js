// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('counter', 0);
    this.set('votes', 0);
    this.set('isCurrentSong', false);
  },

  addCounter: function() {
    this.set('counter', this.get('counter')+1);
  },

  upvote: function() {
    this.set('votes', this.get('votes')+1);
    this.trigger('orderChangeEvent', this);
  },

  downvote: function() {
    this.set('votes', this.get('votes')-1);
    this.trigger('orderChangeEvent', this);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('playEvent', this);
  },

  enqueue: function(){
    this.trigger('enqueueEvent', this);
  },

  dequeue: function() {
    this.trigger('dequeueEvent', this);
  },

  ended: function(){
    this.trigger('endedEvent', this);
  }

});

