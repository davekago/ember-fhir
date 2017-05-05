import { moduleForModel, test } from 'ember-qunit';

moduleForModel('adverse-event-suspect-entity', 'Unit | Serializer | AdverseEvent_SuspectEntity', {
  needs: [
    'serializer:adverse-event-suspect-entity',
    'model:reference',
    'model:codeable-concept',
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