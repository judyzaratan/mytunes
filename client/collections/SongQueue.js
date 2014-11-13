// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  localStorage: new Backbone.LocalStorage("SongQueue"),
  comparator: function(song){
    //if the song is the current song, then leave it on top
    if(song.get('isCurrentSong')){
      //set the current song to top as long as we have less than 239048 songs
      return -239048;
    }
    return -song.get('votes');
  }
});
