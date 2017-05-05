import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-actor-1', 'Unit | Model | Consent_Actor1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});