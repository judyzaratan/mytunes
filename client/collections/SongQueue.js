// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  comparator: function(song){
    return -song.get('votes');
  }
});
