import { moduleForModel, test } from 'ember-qunit';

moduleForModel('episode-of-care-status-history', 'Unit | Model | EpisodeOfCare_StatusHistory', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});