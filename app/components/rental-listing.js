import Ember from 'ember';

export default Ember.Component.extend({
  wide: false,
  actions: {
    enlargeImage() {
      this.toggleProperty('wide');
    }
  }
});
