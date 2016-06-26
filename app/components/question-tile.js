import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  actions: {
    notesShow: function() {
      this.set('areNotesShowing', true);
    }
  }
});
