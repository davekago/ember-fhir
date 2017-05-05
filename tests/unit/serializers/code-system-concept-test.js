import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-concept', 'Unit | Serializer | CodeSystem_Concept', {
  needs: [
    'serializer:code-system-concept',
    'model:code-system-designation',
    'model:code-system-property-1',
    'model:code-system-concept',
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