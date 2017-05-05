import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-resource', 'Unit | Serializer | ImplementationGuide_Resource', {
  needs: [
    'serializer:implementation-guide-resource',
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