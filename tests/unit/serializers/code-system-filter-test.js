import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-filter', 'Unit | Serializer | CodeSystem_Filter', {
  needs: [
    'serializer:code-system-filter',
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