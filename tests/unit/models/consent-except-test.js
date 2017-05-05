import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-except', 'Unit | Model | Consent_Except', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period',
    'model:consent-actor-1',
    'model:codeable-concept',
    'model:coding',
    'model:consent-data-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});