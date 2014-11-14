// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    var self = this;
    this.el.addEventListener("ended",self.ended.bind(self));
  },

  ended: function() {
    console.log("THE SONG ENDED!!");
    this.model.ended();
  },

  setSong: function(song){
    this.model = song;
    if(song && !!song.addCounter){
      song.addCounter();
      song.set('isCurrentSong', true);
      this.render();
    }
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
