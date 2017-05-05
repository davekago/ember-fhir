import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-data', 'Unit | Model | Consent_Data', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});