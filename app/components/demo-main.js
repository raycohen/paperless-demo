import Ember from 'ember';

export default Ember.Component.extend({
  showingVersion: false,
  demoData: Ember.computed(function() {
    let metaTag = document.querySelector('meta[name=demo-data]');
    if (!metaTag) {
      return {version: 'unknown'};
    }

    return JSON.parse(metaTag.getAttribute('content'));
  }),
  actions: {
    showVersion() {
      this.set('showingVersion', true);
    }
  }
});

