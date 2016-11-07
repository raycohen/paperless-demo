import Ember from 'ember';

export default Ember.Component.extend({
  showingVersion: false,
  version: function() {
    let metaTag = document.querySelector('meta[name=version]');
    if (!metaTag) {
      return 'unknown';
    }

    return metaTag.getAttribute('content');
  },
  actions: {
    showVersion() {
      this.set('showingVersion', true);
    }
  }
});

