import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-rule', 'Unit | Serializer | Contract_Rule', {
  needs: [
    'serializer:contract-rule',
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