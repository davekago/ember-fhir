import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-data', 'Unit | Serializer | Consent_Data', {
  needs: [
    'serializer:consent-data',
    'model:reference',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});