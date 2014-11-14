// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  template: _.template('<td>(<%=artist%>)</td>\
    <td class = "title"><%=title%></td>\
    <td>Votes: <%=votes%></td>\
    <td><button class = "upvote">upvote</button></td>\
    <td><button class = "downvote">downvote</button></td>'),

  events: {
    'click .title': function(){
      console.log('clicked on');
      this.model.dequeue();
    },
    'click .upvote': function(){
      this.model.upvote();
    },
    'click .downvote': function(){
      this.model.downvote();
    },
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
