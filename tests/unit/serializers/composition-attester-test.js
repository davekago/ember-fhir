import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-attester', 'Unit | Serializer | Composition_Attester', {
  needs: [
    'serializer:composition-attester',
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