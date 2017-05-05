import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-data-1', 'Unit | Model | Consent_Data1', {
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