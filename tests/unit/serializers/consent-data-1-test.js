import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consent-data-1', 'Unit | Serializer | Consent_Data1', {
  needs: [
    'serializer:consent-data-1',
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