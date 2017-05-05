import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-designation', 'Unit | Serializer | CodeSystem_Designation', {
  needs: [
    'serializer:code-system-designation',
    'model:coding',
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