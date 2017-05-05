import { moduleForModel, test } from 'ember-qunit';

moduleForModel('procedure-focal-device', 'Unit | Serializer | Procedure_FocalDevice', {
  needs: [
    'serializer:procedure-focal-device',
    'model:codeable-concept',
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