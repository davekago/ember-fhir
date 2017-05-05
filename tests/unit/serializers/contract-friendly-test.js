import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-friendly', 'Unit | Serializer | Contract_Friendly', {
  needs: [
    'serializer:contract-friendly',
    'model:attachment',
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