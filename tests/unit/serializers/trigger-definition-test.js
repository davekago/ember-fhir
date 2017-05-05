import { moduleForModel, test } from 'ember-qunit';

moduleForModel('trigger-definition', 'Unit | Serializer | TriggerDefinition', {
  needs: [
    'serializer:trigger-definition',
    'model:timing',
    'model:reference',
    'model:data-requirement',
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