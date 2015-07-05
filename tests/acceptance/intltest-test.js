import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'test-ember-int/tests/helpers/start-app';

var application;

module('Acceptance | intltest', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /intltest', function(assert) {
  visit('/emberintl');

  andThen(function() {
    assert.equal(currentURL(), '/emberintl');
  });
});
