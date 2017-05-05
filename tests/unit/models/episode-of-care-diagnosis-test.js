import { moduleForModel, test } from 'ember-qunit';

moduleForModel('episode-of-care-diagnosis', 'Unit | Model | EpisodeOfCare_Diagnosis', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});