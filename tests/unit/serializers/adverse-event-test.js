import { moduleForModel, test } from 'ember-qunit';

moduleForModel('adverse-event', 'Unit | Serializer | AdverseEvent', {
  needs: [
    'serializer:adverse-event',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:adverse-event-suspect-entity',
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