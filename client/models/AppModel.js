// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
//  localStorage: new Backbone.LocalStorage("slifhsiskdfhugh"),
  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', params.songQueue);
    var self = this;

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    params.library.on('playEvent', function(song){
      this.get('songQueue').add(song);
      this.get('songQueue').localStorage.create(song);
      if(!this.get('currentSong') || !this.get('currentSong').get('url')){
        this.set('currentSong', song);
      }
    }, this);

    params.library.on('dequeueEvent', function(song) {
      this.get('songQueue').remove(song);
      this.get('songQueue').localStorage.destroy(song);
      if(this.get('currentSong') === song){
        this.set('currentSong', this.get('songQueue').at(0) || '');
      }
    }, this);

    params.library.on('endedEvent', function(song) {
      this.get('songQueue').remove(song);
      this.get('songQueue').localStorage.destroy(song);
      this.set('currentSong', this.get('songQueue').at(0) || '');
    }, this);

    params.library.on('orderChangeEvent', function(song){
      this.get('songQueue').sort();
    }, this);

  }

});
