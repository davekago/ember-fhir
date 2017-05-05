import { moduleForModel, test } from 'ember-qunit';

moduleForModel('episode-of-care', 'Unit | Model | EpisodeOfCare', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:episode-of-care-status-history',
    'model:codeable-concept',
    'model:episode-of-care-diagnosis',
    'model:reference',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});