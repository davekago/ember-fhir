import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent', 'Unit | Model | Consent', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:consent-actor',
    'model:attachment',
    'model:consent-policy',
    'model:coding',
    'model:consent-data',
    'model:consent-except',
    'model:consent-datum'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});