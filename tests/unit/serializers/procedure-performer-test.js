import { moduleForModel, test } from 'ember-qunit';

moduleForModel('procedure-performer', 'Unit | Serializer | Procedure_Performer', {
  needs: [
    'serializer:procedure-performer',
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