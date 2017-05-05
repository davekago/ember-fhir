import { moduleForModel, test } from 'ember-qunit';

moduleForModel('parameter-definition', 'Unit | Serializer | ParameterDefinition', {
  needs: [
    'serializer:parameter-definition',
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