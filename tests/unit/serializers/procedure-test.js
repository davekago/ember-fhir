import { moduleForModel, test } from 'ember-qunit';

moduleForModel('procedure', 'Unit | Serializer | Procedure', {
  needs: [
    'serializer:procedure',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:procedure-performer',
    'model:annotation',
    'model:procedure-focal-device',
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